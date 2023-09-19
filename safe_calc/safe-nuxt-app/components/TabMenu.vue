<template>
    <div class="p-tabview p-tabview-scrollable" v-bind="ptm('root')">
        <div class="p-tabview-nav-container" v-bind="ptm('navcontainer')">
            <button
                v-if="scrollable && !isPrevButtonDisabled"
                ref="prevBtn"
                v-ripple
                type="button"
                class="p-tabview-nav-prev p-tabview-nav-btn p-link"
                :tabindex="d_activeIndex"
                :aria-label="prevButtonAriaLabel"
                @click="onPrevButtonClick"
            >
                <slot name="previcon">
                    <component :is="prevIcon ? 'span' : 'ChevronLeftIcon'" aria-hidden="true" :class="prevIcon" v-bind="ptm('previcon')" />
                </slot>
            </button>

            <div ref="content" @scroll="onScroll" class="p-tabmenu p-tabmenu-nav" v-bind="ptm('navcontent')">

                <ul ref="nav" class="p-tabmenu-nav" role="tablist" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptm('nav')">
                    <template v-for="(item, i) of focusableItems" :key="label(item) + '_' + i.toString()">
                        <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                            <li v-if="visible(item)" ref="tab" :class="getRouteItemClass(item, isActive, isExactActive)" :style="item.style" role="presentation" v-bind="getPTOptions('menuitem', i)">
                                <template v-if="!$slots.item">

                                   <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
                                        <a
                                            ref="tabLink"
                                            v-ripple
                                            role="menuitem"
                                            :href="href"
                                            class="p-menuitem-link p-tabview-title"
                                            :aria-label="label(item)"
                                            :aria-disabled="disabled(item)"
                                            :tabindex="isExactActive ? '0' : '-1'"
                                            @click="onItemClick($event, item, i, navigate)"
                                            @keydown="onKeydownItem($event, i, navigate)"
                                            v-bind="getPTOptions('action', i)"
                                        >
                                            <span class="p-menuitem-text p-tabview-title" v-bind="getPTOptions('label', i)">{{ label(item) }}</span>
                                        </a>
                                        <Button v-if="i!==0" style="width: 20px;height:20px;margin: 0 5px" @click="closeTab($event, item, i, navigate)" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />
                                    </div>
                                </template>
                                <component v-else :is="$slots.item" :item="item" :index="i"></component>
                            </li>
                        </router-link>
                        <li v-else-if="visible(item)" ref="tab" :class="getItemClass(item, i)" role="presentation" @click="onItemClick($event, item, i)" @keydown="onKeydownItem($event, i)" v-bind="getPTOptions('menuitem', i)">
                            <template v-if="!$slots.item">
                                <a ref="tabLink" v-ripple role="menuitem" :href="item.url" class="p-menuitem-link" :target="item.target" :aria-label="label(item)" :aria-disabled="disabled(item)" :tabindex="setTabIndex(i)" v-bind="getPTOptions('action', i)">
                                    <component v-if="$slots.itemicon" :is="$slots.itemicon" :item="item" :class="getItemIcon(item)" />
                                    <span v-else-if="item.icon" :class="getItemIcon(item)" v-bind="getPTOptions('icon', i)" />
                                    <span class="p-menuitem-text" v-bind="getPTOptions('label', i)">{{ label(item) }}</span>
                                </a>
                            </template>
                            <component v-else :is="$slots.item" :item="item" :index="i"></component>
                        </li>
                    </template>
                    <li ref="inkbar" role="none" class="p-tabmenu-ink-bar" v-bind="ptm('inkbar')"></li>
                </ul>
            </div>

            <button
                v-if="scrollable && !isNextButtonDisabled"
                ref="nextBtn"
                v-ripple
                type="button"
                class="p-tabview-nav-next p-tabview-nav-btn p-link"
                :tabindex="d_activeIndex"
                :aria-label="nextButtonAriaLabel"
                @click="onNextButtonClick"
            >
                <slot name="nexticon">
                    <component :is="nextIcon ? 'span' : 'ChevronRightIcon'" aria-hidden="true" :class="nextIcon" v-bind="ptm('nexticon')" />
                </slot>
            </button>
        </div>
    </div>

</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Ripple from 'primevue/ripple';
import ChevronLeftIcon from 'primevue/icons/chevronleft';
import ChevronRightIcon from 'primevue/icons/chevronright';
import {DomHandler} from 'primevue/utils';
import useRouteCache from "~/service/hooks";

export default {
    name: 'TabMenu',
    extends: BaseComponent,
    emits: ['update:activeIndex', 'tab-change'],
    props: {
        model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        prevIcon: {
            type: String,
            default: undefined
        },
        nextIcon: {
            type: String,
            default: undefined
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    timeout: null,
    data() {
        return {
            d_activeIndex: this.activeIndex,
            cache: useRouteCache(),
            isPrevButtonDisabled: true,
            isNextButtonDisabled: false,
            liLeftCache: {} // key: index, value: left px
        };
    },
    watch: {
        $route() {
            this.timeout = setTimeout(() => this.updateInkBar(), 50);
        },
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
            if (this.liLeftCache[this.d_activeIndex] == null) {
                // 每个tab的左边距
                let leftPx = this.$refs.nav.children[this.d_activeIndex].style.left
                this.liLeftCache[this.d_activeIndex] = parseFloat(leftPx.substring(0, leftPx.length-2))
            }
            // why set timeout ???
            setTimeout(() => {
                // 自动跳转到可视范围
                this.$refs.content.scrollTo({
                    left: this.liLeftCache[this.d_activeIndex],
                    behavior: 'smooth'
                })
            }, 100)
        },
    },
    mounted() {
        this.updateInkBar();
        this.scrollable && this.updateButtonState();
    },
    updated() {
        this.updateInkBar();
    },
    beforeUnmount() {
        clearTimeout(this.timeout);
    },
    methods: {
        closeTab(event, item, index, navigate) {
            // 移除缓存
            this.cache.removeCache(this.model[index].to.split("/")[1])
            // 寻找下一个tab，如果是关闭当前tab：只有左边有，走左边activeIndex-1，两边都有走右边activeIndex不变
            // 若不是当前tab：左边关闭activeIndex-1，右边关闭activeIndex不变
            let lastIndex = this.d_activeIndex
            if (lastIndex === index) {
                if (this.model[index-1] && !this.model[index+1]) {
                    this.d_activeIndex = index -1
                }
            } else if (index < lastIndex) {
                this.d_activeIndex--
            }
            this.model.splice(index, 1)

            this.$router.push(this.model[this.d_activeIndex].to)
        },
        scrollInView({ element, index = -1 }) {
            const currentElement = element || this.$refs.nav.children[index];
            if (currentElement) {
                currentElement.scrollIntoView && currentElement.scrollIntoView({ block: 'nearest' });
            }
        },
        updateButtonState() {
            const content = this.$refs.content;
            const { scrollLeft, scrollWidth } = content;
            const width = DomHandler.getWidth(content);

            this.isPrevButtonDisabled = scrollLeft === 0;
            this.isNextButtonDisabled = parseInt(scrollLeft)+1 >= scrollWidth - width;
        },
        getVisibleButtonWidths() {
            const { prevBtn, nextBtn } = this.$refs;

            return [prevBtn, nextBtn].reduce((acc, el) => (el ? acc + DomHandler.getWidth(el) : acc), 0);
        },
        onScroll(event) {
            this.scrollable && this.updateButtonState();
            event.preventDefault();
        },
        onPrevButtonClick() {
            const content = this.$refs.content;
            const width = DomHandler.getWidth(content);
            const pos = content.scrollLeft - width / 4;

            content.scrollTo({
                left: pos <= 0 ? 0 : pos,
                behavior: 'smooth'
            })
        },
        onNextButtonClick() {
            const content = this.$refs.content;
            const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
            const pos = content.scrollLeft + width / 4;
            const lastPos = content.scrollWidth - width / 4;
            content.scrollTo({
                left: pos >= lastPos ? lastPos : pos,
                behavior: 'smooth'
            })
        },
        getPTOptions(key, index) {
            return this.ptm(key, {
                context: {
                    order: index
                }
            });
        },
        onItemClick(event, item, index, navigate) {
            if (this.disabled(item)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (item.to && navigate) {
                navigate(event);
            }

            if (index !== this.d_activeIndex) {
                this.d_activeIndex = index;
                this.$emit('update:activeIndex', this.d_activeIndex);
            }

            this.$emit('tab-change', {
                originalEvent: event,
                index: index
            });

            // this.scrollInView({ index });
        },
        onKeydownItem(event, index) {
            let i = index;

            let foundElement = {};
            const tabLinkRef = this.$refs.tabLink;

            switch (event.code) {
                case 'ArrowRight': {
                    foundElement = this.findNextItem(this.$refs.tab, i);
                    i = foundElement.i;

                    break;
                }

                case 'ArrowLeft': {
                    foundElement = this.findPrevItem(this.$refs.tab, i);
                    i = foundElement.i;

                    break;
                }

                case 'End': {
                    foundElement = this.findPrevItem(this.$refs.tab, this.model.length);
                    i = foundElement.i;

                    event.preventDefault();
                    break;
                }

                case 'Home': {
                    foundElement = this.findNextItem(this.$refs.tab, -1);
                    i = foundElement.i;

                    event.preventDefault();
                    break;
                }

                case 'Space':

                case 'Enter': {
                    if (event.currentTarget) {
                        event.currentTarget.click();
                    }

                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    this.setDefaultTabIndexes(tabLinkRef);

                    break;
                }

                default:
                    break;
            }

            if (tabLinkRef[i] && tabLinkRef[index]) {
                tabLinkRef[index].tabIndex = '-1';
                tabLinkRef[i].tabIndex = '0';
                tabLinkRef[i].focus();
            }
        },
        findNextItem(items, index) {
            let i = index + 1;

            if (i >= items.length) {
                return { nextItem: items[items.length], i: items.length };
            }

            let nextItem = items[i];

            if (nextItem) return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(items, i) : { nextItem, i };
            else return null;
        },
        findPrevItem(items, index) {
            let i = index - 1;

            if (i < 0) {
                return { nextItem: items[0], i: 0 };
            }

            let prevItem = items[i];

            if (prevItem) return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(items, i) : { prevItem, i };
            else return null;
        },
        getItemClass(item, index) {
            return [
                'p-tabmenuitem',
                item.class,
                {
                    'p-highlight': this.d_activeIndex === index,
                    'p-disabled': this.disabled(item)
                }
            ];
        },
        getRouteItemClass(item, isActive, isExactActive) {
            return [
                'p-tabmenuitem',
                item.class,
                {
                    'p-highlight': this.exact ? isExactActive : isActive,
                    'p-disabled': this.disabled(item)
                }
            ];
        },
        getItemIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        visible(item) {
            return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        },
        label(item) {
            return typeof item.label === 'function' ? item.label() : item.label;
        },
        setDefaultTabIndexes(tabLinkRef) {
            setTimeout(() => {
                tabLinkRef.forEach((item) => {
                    item.tabIndex = DomHandler.hasClass(item.parentElement, 'p-highlight') ? '0' : '-1';
                });
            }, 300);
        },
        setTabIndex(index) {
            return this.d_activeIndex === index ? '0' : '-1';
        },
        updateInkBar() {
            let tabs = this.$refs.nav.children;
            let inkHighlighted = false;

            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];

                if (DomHandler.hasClass(tab, 'p-highlight')) {
                    this.$refs.inkbar.style.width = DomHandler.getWidth(tab) + 'px';
                    this.$refs.inkbar.style.left = DomHandler.getOffset(tab).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
                    inkHighlighted = true;
                }
            }

            if (!inkHighlighted) {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left = '0px';
            }
        }
    },
    computed: {
        focusableItems() {
            return (this.model || []).reduce((result, item) => {
                this.visible(item) && !DomHandler.hasClass(item, 'p-disabled') && result.push(item);

                return result;
            }, []);
        },
        prevButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : undefined;
        },
        nextButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    }
};
</script>

<style>
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}

.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}

.p-tabmenu-nav a:focus {
    z-index: 1;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}

.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}
</style>
