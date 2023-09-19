import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const fireloss = $root.fireloss = (() => {

    /**
     * Namespace fireloss.
     * @exports fireloss
     * @namespace
     */
    const fireloss = {};

    fireloss.FireGrowthCategoryRequest = (function() {

        /**
         * Properties of a FireGrowthCategoryRequest.
         * @memberof fireloss
         * @interface IFireGrowthCategoryRequest
         */

        /**
         * Constructs a new FireGrowthCategoryRequest.
         * @memberof fireloss
         * @classdesc Represents a FireGrowthCategoryRequest.
         * @implements IFireGrowthCategoryRequest
         * @constructor
         * @param {fireloss.IFireGrowthCategoryRequest=} [properties] Properties to set
         */
        function FireGrowthCategoryRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a FireGrowthCategoryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.FireGrowthCategoryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.FireGrowthCategoryRequest} FireGrowthCategoryRequest
         */
        FireGrowthCategoryRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.FireGrowthCategoryRequest)
                return object;
            return new $root.fireloss.FireGrowthCategoryRequest();
        };

        /**
         * Creates a plain object from a FireGrowthCategoryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.FireGrowthCategoryRequest
         * @static
         * @param {fireloss.FireGrowthCategoryRequest} message FireGrowthCategoryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireGrowthCategoryRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FireGrowthCategoryRequest to JSON.
         * @function toJSON
         * @memberof fireloss.FireGrowthCategoryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireGrowthCategoryRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireGrowthCategoryRequest;
    })();

    fireloss.Level = (function() {

        /**
         * Properties of a Level.
         * @memberof fireloss
         * @interface ILevel
         * @property {string|null} [name] Level name
         * @property {string|null} [code] Level code
         */

        /**
         * Constructs a new Level.
         * @memberof fireloss
         * @classdesc Represents a Level.
         * @implements ILevel
         * @constructor
         * @param {fireloss.ILevel=} [properties] Properties to set
         */
        function Level(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Level name.
         * @member {string} name
         * @memberof fireloss.Level
         * @instance
         */
        Level.prototype.name = "";

        /**
         * Level code.
         * @member {string} code
         * @memberof fireloss.Level
         * @instance
         */
        Level.prototype.code = "";

        /**
         * Creates a Level message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.Level
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.Level} Level
         */
        Level.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.Level)
                return object;
            let message = new $root.fireloss.Level();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Level message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.Level
         * @static
         * @param {fireloss.Level} message Level
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Level.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.code = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this Level to JSON.
         * @function toJSON
         * @memberof fireloss.Level
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Level.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Level;
    })();

    fireloss.Category = (function() {

        /**
         * Properties of a Category.
         * @memberof fireloss
         * @interface ICategory
         * @property {string|null} [name] Category name
         * @property {string|null} [code] Category code
         * @property {Array.<fireloss.ILevel>|null} [children] Category children
         */

        /**
         * Constructs a new Category.
         * @memberof fireloss
         * @classdesc Represents a Category.
         * @implements ICategory
         * @constructor
         * @param {fireloss.ICategory=} [properties] Properties to set
         */
        function Category(properties) {
            this.children = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Category name.
         * @member {string} name
         * @memberof fireloss.Category
         * @instance
         */
        Category.prototype.name = "";

        /**
         * Category code.
         * @member {string} code
         * @memberof fireloss.Category
         * @instance
         */
        Category.prototype.code = "";

        /**
         * Category children.
         * @member {Array.<fireloss.ILevel>} children
         * @memberof fireloss.Category
         * @instance
         */
        Category.prototype.children = $util.emptyArray;

        /**
         * Creates a Category message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.Category
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.Category} Category
         */
        Category.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.Category)
                return object;
            let message = new $root.fireloss.Category();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".fireloss.Category.children: array expected");
                message.children = [];
                for (let i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".fireloss.Category.children: object expected");
                    message.children[i] = $root.fireloss.Level.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Category message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.Category
         * @static
         * @param {fireloss.Category} message Category
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Category.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults) {
                object.name = "";
                object.code = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.children && message.children.length) {
                object.children = [];
                for (let j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.fireloss.Level.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this Category to JSON.
         * @function toJSON
         * @memberof fireloss.Category
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Category.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Category;
    })();

    fireloss.FireGrowthCategoryResponse = (function() {

        /**
         * Properties of a FireGrowthCategoryResponse.
         * @memberof fireloss
         * @interface IFireGrowthCategoryResponse
         * @property {Array.<fireloss.ICategory>|null} [categories] FireGrowthCategoryResponse categories
         */

        /**
         * Constructs a new FireGrowthCategoryResponse.
         * @memberof fireloss
         * @classdesc Represents a FireGrowthCategoryResponse.
         * @implements IFireGrowthCategoryResponse
         * @constructor
         * @param {fireloss.IFireGrowthCategoryResponse=} [properties] Properties to set
         */
        function FireGrowthCategoryResponse(properties) {
            this.categories = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireGrowthCategoryResponse categories.
         * @member {Array.<fireloss.ICategory>} categories
         * @memberof fireloss.FireGrowthCategoryResponse
         * @instance
         */
        FireGrowthCategoryResponse.prototype.categories = $util.emptyArray;

        /**
         * Creates a FireGrowthCategoryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.FireGrowthCategoryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.FireGrowthCategoryResponse} FireGrowthCategoryResponse
         */
        FireGrowthCategoryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.FireGrowthCategoryResponse)
                return object;
            let message = new $root.fireloss.FireGrowthCategoryResponse();
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".fireloss.FireGrowthCategoryResponse.categories: array expected");
                message.categories = [];
                for (let i = 0; i < object.categories.length; ++i) {
                    if (typeof object.categories[i] !== "object")
                        throw TypeError(".fireloss.FireGrowthCategoryResponse.categories: object expected");
                    message.categories[i] = $root.fireloss.Category.fromObject(object.categories[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FireGrowthCategoryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.FireGrowthCategoryResponse
         * @static
         * @param {fireloss.FireGrowthCategoryResponse} message FireGrowthCategoryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireGrowthCategoryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.categories = [];
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (let j = 0; j < message.categories.length; ++j)
                    object.categories[j] = $root.fireloss.Category.toObject(message.categories[j], options);
            }
            return object;
        };

        /**
         * Converts this FireGrowthCategoryResponse to JSON.
         * @function toJSON
         * @memberof fireloss.FireGrowthCategoryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireGrowthCategoryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireGrowthCategoryResponse;
    })();

    fireloss.FireGrowthCoefficientRequest = (function() {

        /**
         * Properties of a FireGrowthCoefficientRequest.
         * @memberof fireloss
         * @interface IFireGrowthCoefficientRequest
         * @property {number|null} [Mv] FireGrowthCoefficientRequest Mv
         * @property {number|null} [Hc] FireGrowthCoefficientRequest Hc
         * @property {number|null} [At] FireGrowthCoefficientRequest At
         * @property {number|null} [v] FireGrowthCoefficientRequest v
         * @property {number|null} [t] FireGrowthCoefficientRequest t
         * @property {number|null} [t0] FireGrowthCoefficientRequest t0
         * @property {string|null} [places] FireGrowthCoefficientRequest places
         * @property {string|null} [level] FireGrowthCoefficientRequest level
         */

        /**
         * Constructs a new FireGrowthCoefficientRequest.
         * @memberof fireloss
         * @classdesc Represents a FireGrowthCoefficientRequest.
         * @implements IFireGrowthCoefficientRequest
         * @constructor
         * @param {fireloss.IFireGrowthCoefficientRequest=} [properties] Properties to set
         */
        function FireGrowthCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireGrowthCoefficientRequest Mv.
         * @member {number} Mv
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.Mv = 0;

        /**
         * FireGrowthCoefficientRequest Hc.
         * @member {number} Hc
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.Hc = 0;

        /**
         * FireGrowthCoefficientRequest At.
         * @member {number} At
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.At = 0;

        /**
         * FireGrowthCoefficientRequest v.
         * @member {number} v
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.v = 0;

        /**
         * FireGrowthCoefficientRequest t.
         * @member {number} t
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.t = 0;

        /**
         * FireGrowthCoefficientRequest t0.
         * @member {number} t0
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.t0 = 0;

        /**
         * FireGrowthCoefficientRequest places.
         * @member {string} places
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.places = "";

        /**
         * FireGrowthCoefficientRequest level.
         * @member {string} level
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         */
        FireGrowthCoefficientRequest.prototype.level = "";

        /**
         * Creates a FireGrowthCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.FireGrowthCoefficientRequest} FireGrowthCoefficientRequest
         */
        FireGrowthCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.FireGrowthCoefficientRequest)
                return object;
            let message = new $root.fireloss.FireGrowthCoefficientRequest();
            if (object.Mv != null)
                message.Mv = Number(object.Mv);
            if (object.Hc != null)
                message.Hc = Number(object.Hc);
            if (object.At != null)
                message.At = Number(object.At);
            if (object.v != null)
                message.v = Number(object.v);
            if (object.t != null)
                message.t = Number(object.t);
            if (object.t0 != null)
                message.t0 = Number(object.t0);
            if (object.places != null)
                message.places = String(object.places);
            if (object.level != null)
                message.level = String(object.level);
            return message;
        };

        /**
         * Creates a plain object from a FireGrowthCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @static
         * @param {fireloss.FireGrowthCoefficientRequest} message FireGrowthCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireGrowthCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Mv = 0;
                object.Hc = 0;
                object.At = 0;
                object.v = 0;
                object.t = 0;
                object.t0 = 0;
                object.places = "";
                object.level = "";
            }
            if (message.Mv != null && message.hasOwnProperty("Mv"))
                object.Mv = options.json && !isFinite(message.Mv) ? String(message.Mv) : message.Mv;
            if (message.Hc != null && message.hasOwnProperty("Hc"))
                object.Hc = options.json && !isFinite(message.Hc) ? String(message.Hc) : message.Hc;
            if (message.At != null && message.hasOwnProperty("At"))
                object.At = options.json && !isFinite(message.At) ? String(message.At) : message.At;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = options.json && !isFinite(message.t) ? String(message.t) : message.t;
            if (message.t0 != null && message.hasOwnProperty("t0"))
                object.t0 = options.json && !isFinite(message.t0) ? String(message.t0) : message.t0;
            if (message.places != null && message.hasOwnProperty("places"))
                object.places = message.places;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this FireGrowthCoefficientRequest to JSON.
         * @function toJSON
         * @memberof fireloss.FireGrowthCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireGrowthCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireGrowthCoefficientRequest;
    })();

    fireloss.FireGrowthCoefficientResponse = (function() {

        /**
         * Properties of a FireGrowthCoefficientResponse.
         * @memberof fireloss
         * @interface IFireGrowthCoefficientResponse
         * @property {number|null} [fireDensityQ] FireGrowthCoefficientResponse fireDensityQ
         * @property {number|null} [a] FireGrowthCoefficientResponse a
         * @property {number|null} [fireReleaseRateQ] FireGrowthCoefficientResponse fireReleaseRateQ
         */

        /**
         * Constructs a new FireGrowthCoefficientResponse.
         * @memberof fireloss
         * @classdesc Represents a FireGrowthCoefficientResponse.
         * @implements IFireGrowthCoefficientResponse
         * @constructor
         * @param {fireloss.IFireGrowthCoefficientResponse=} [properties] Properties to set
         */
        function FireGrowthCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireGrowthCoefficientResponse fireDensityQ.
         * @member {number} fireDensityQ
         * @memberof fireloss.FireGrowthCoefficientResponse
         * @instance
         */
        FireGrowthCoefficientResponse.prototype.fireDensityQ = 0;

        /**
         * FireGrowthCoefficientResponse a.
         * @member {number} a
         * @memberof fireloss.FireGrowthCoefficientResponse
         * @instance
         */
        FireGrowthCoefficientResponse.prototype.a = 0;

        /**
         * FireGrowthCoefficientResponse fireReleaseRateQ.
         * @member {number} fireReleaseRateQ
         * @memberof fireloss.FireGrowthCoefficientResponse
         * @instance
         */
        FireGrowthCoefficientResponse.prototype.fireReleaseRateQ = 0;

        /**
         * Creates a FireGrowthCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.FireGrowthCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.FireGrowthCoefficientResponse} FireGrowthCoefficientResponse
         */
        FireGrowthCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.FireGrowthCoefficientResponse)
                return object;
            let message = new $root.fireloss.FireGrowthCoefficientResponse();
            if (object.fireDensityQ != null)
                message.fireDensityQ = Number(object.fireDensityQ);
            if (object.a != null)
                message.a = Number(object.a);
            if (object.fireReleaseRateQ != null)
                message.fireReleaseRateQ = Number(object.fireReleaseRateQ);
            return message;
        };

        /**
         * Creates a plain object from a FireGrowthCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.FireGrowthCoefficientResponse
         * @static
         * @param {fireloss.FireGrowthCoefficientResponse} message FireGrowthCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireGrowthCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fireDensityQ = 0;
                object.a = 0;
                object.fireReleaseRateQ = 0;
            }
            if (message.fireDensityQ != null && message.hasOwnProperty("fireDensityQ"))
                object.fireDensityQ = options.json && !isFinite(message.fireDensityQ) ? String(message.fireDensityQ) : message.fireDensityQ;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.fireReleaseRateQ != null && message.hasOwnProperty("fireReleaseRateQ"))
                object.fireReleaseRateQ = options.json && !isFinite(message.fireReleaseRateQ) ? String(message.fireReleaseRateQ) : message.fireReleaseRateQ;
            return object;
        };

        /**
         * Converts this FireGrowthCoefficientResponse to JSON.
         * @function toJSON
         * @memberof fireloss.FireGrowthCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireGrowthCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireGrowthCoefficientResponse;
    })();

    fireloss.StageOneRequest = (function() {

        /**
         * Properties of a StageOneRequest.
         * @memberof fireloss
         * @interface IStageOneRequest
         * @property {number|null} [pA1] StageOneRequest pA1
         * @property {number|null} [pA2] StageOneRequest pA2
         * @property {number|null} [pA3] StageOneRequest pA3
         * @property {number|null} [a] StageOneRequest a
         * @property {number|null} [v] StageOneRequest v
         */

        /**
         * Constructs a new StageOneRequest.
         * @memberof fireloss
         * @classdesc Represents a StageOneRequest.
         * @implements IStageOneRequest
         * @constructor
         * @param {fireloss.IStageOneRequest=} [properties] Properties to set
         */
        function StageOneRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageOneRequest pA1.
         * @member {number} pA1
         * @memberof fireloss.StageOneRequest
         * @instance
         */
        StageOneRequest.prototype.pA1 = 0;

        /**
         * StageOneRequest pA2.
         * @member {number} pA2
         * @memberof fireloss.StageOneRequest
         * @instance
         */
        StageOneRequest.prototype.pA2 = 0;

        /**
         * StageOneRequest pA3.
         * @member {number} pA3
         * @memberof fireloss.StageOneRequest
         * @instance
         */
        StageOneRequest.prototype.pA3 = 0;

        /**
         * StageOneRequest a.
         * @member {number} a
         * @memberof fireloss.StageOneRequest
         * @instance
         */
        StageOneRequest.prototype.a = 0;

        /**
         * StageOneRequest v.
         * @member {number} v
         * @memberof fireloss.StageOneRequest
         * @instance
         */
        StageOneRequest.prototype.v = 0;

        /**
         * Creates a StageOneRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageOneRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageOneRequest} StageOneRequest
         */
        StageOneRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageOneRequest)
                return object;
            let message = new $root.fireloss.StageOneRequest();
            if (object.pA1 != null)
                message.pA1 = Number(object.pA1);
            if (object.pA2 != null)
                message.pA2 = Number(object.pA2);
            if (object.pA3 != null)
                message.pA3 = Number(object.pA3);
            if (object.a != null)
                message.a = Number(object.a);
            if (object.v != null)
                message.v = Number(object.v);
            return message;
        };

        /**
         * Creates a plain object from a StageOneRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageOneRequest
         * @static
         * @param {fireloss.StageOneRequest} message StageOneRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageOneRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pA1 = 0;
                object.pA2 = 0;
                object.pA3 = 0;
                object.a = 0;
                object.v = 0;
            }
            if (message.pA1 != null && message.hasOwnProperty("pA1"))
                object.pA1 = options.json && !isFinite(message.pA1) ? String(message.pA1) : message.pA1;
            if (message.pA2 != null && message.hasOwnProperty("pA2"))
                object.pA2 = options.json && !isFinite(message.pA2) ? String(message.pA2) : message.pA2;
            if (message.pA3 != null && message.hasOwnProperty("pA3"))
                object.pA3 = options.json && !isFinite(message.pA3) ? String(message.pA3) : message.pA3;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            return object;
        };

        /**
         * Converts this StageOneRequest to JSON.
         * @function toJSON
         * @memberof fireloss.StageOneRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageOneRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageOneRequest;
    })();

    fireloss.StageOneResponse = (function() {

        /**
         * Properties of a StageOneResponse.
         * @memberof fireloss
         * @interface IStageOneResponse
         * @property {number|null} [pFph1] StageOneResponse pFph1
         * @property {number|null} [tFpdh1] StageOneResponse tFpdh1
         * @property {number|null} [A1] StageOneResponse A1
         */

        /**
         * Constructs a new StageOneResponse.
         * @memberof fireloss
         * @classdesc Represents a StageOneResponse.
         * @implements IStageOneResponse
         * @constructor
         * @param {fireloss.IStageOneResponse=} [properties] Properties to set
         */
        function StageOneResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageOneResponse pFph1.
         * @member {number} pFph1
         * @memberof fireloss.StageOneResponse
         * @instance
         */
        StageOneResponse.prototype.pFph1 = 0;

        /**
         * StageOneResponse tFpdh1.
         * @member {number} tFpdh1
         * @memberof fireloss.StageOneResponse
         * @instance
         */
        StageOneResponse.prototype.tFpdh1 = 0;

        /**
         * StageOneResponse A1.
         * @member {number} A1
         * @memberof fireloss.StageOneResponse
         * @instance
         */
        StageOneResponse.prototype.A1 = 0;

        /**
         * Creates a StageOneResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageOneResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageOneResponse} StageOneResponse
         */
        StageOneResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageOneResponse)
                return object;
            let message = new $root.fireloss.StageOneResponse();
            if (object.pFph1 != null)
                message.pFph1 = Number(object.pFph1);
            if (object.tFpdh1 != null)
                message.tFpdh1 = Number(object.tFpdh1);
            if (object.A1 != null)
                message.A1 = Number(object.A1);
            return message;
        };

        /**
         * Creates a plain object from a StageOneResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageOneResponse
         * @static
         * @param {fireloss.StageOneResponse} message StageOneResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageOneResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pFph1 = 0;
                object.tFpdh1 = 0;
                object.A1 = 0;
            }
            if (message.pFph1 != null && message.hasOwnProperty("pFph1"))
                object.pFph1 = options.json && !isFinite(message.pFph1) ? String(message.pFph1) : message.pFph1;
            if (message.tFpdh1 != null && message.hasOwnProperty("tFpdh1"))
                object.tFpdh1 = options.json && !isFinite(message.tFpdh1) ? String(message.tFpdh1) : message.tFpdh1;
            if (message.A1 != null && message.hasOwnProperty("A1"))
                object.A1 = options.json && !isFinite(message.A1) ? String(message.A1) : message.A1;
            return object;
        };

        /**
         * Converts this StageOneResponse to JSON.
         * @function toJSON
         * @memberof fireloss.StageOneResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageOneResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageOneResponse;
    })();

    fireloss.StageTwoRequest = (function() {

        /**
         * Properties of a StageTwoRequest.
         * @memberof fireloss
         * @interface IStageTwoRequest
         * @property {number|null} [pB1] StageTwoRequest pB1
         * @property {number|null} [pB2] StageTwoRequest pB2
         * @property {number|null} [pFph1] StageTwoRequest pFph1
         * @property {number|null} [h] StageTwoRequest h
         * @property {number|null} [v] StageTwoRequest v
         */

        /**
         * Constructs a new StageTwoRequest.
         * @memberof fireloss
         * @classdesc Represents a StageTwoRequest.
         * @implements IStageTwoRequest
         * @constructor
         * @param {fireloss.IStageTwoRequest=} [properties] Properties to set
         */
        function StageTwoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageTwoRequest pB1.
         * @member {number} pB1
         * @memberof fireloss.StageTwoRequest
         * @instance
         */
        StageTwoRequest.prototype.pB1 = 0;

        /**
         * StageTwoRequest pB2.
         * @member {number} pB2
         * @memberof fireloss.StageTwoRequest
         * @instance
         */
        StageTwoRequest.prototype.pB2 = 0;

        /**
         * StageTwoRequest pFph1.
         * @member {number} pFph1
         * @memberof fireloss.StageTwoRequest
         * @instance
         */
        StageTwoRequest.prototype.pFph1 = 0;

        /**
         * StageTwoRequest h.
         * @member {number} h
         * @memberof fireloss.StageTwoRequest
         * @instance
         */
        StageTwoRequest.prototype.h = 0;

        /**
         * StageTwoRequest v.
         * @member {number} v
         * @memberof fireloss.StageTwoRequest
         * @instance
         */
        StageTwoRequest.prototype.v = 0;

        /**
         * Creates a StageTwoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageTwoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageTwoRequest} StageTwoRequest
         */
        StageTwoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageTwoRequest)
                return object;
            let message = new $root.fireloss.StageTwoRequest();
            if (object.pB1 != null)
                message.pB1 = Number(object.pB1);
            if (object.pB2 != null)
                message.pB2 = Number(object.pB2);
            if (object.pFph1 != null)
                message.pFph1 = Number(object.pFph1);
            if (object.h != null)
                message.h = Number(object.h);
            if (object.v != null)
                message.v = Number(object.v);
            return message;
        };

        /**
         * Creates a plain object from a StageTwoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageTwoRequest
         * @static
         * @param {fireloss.StageTwoRequest} message StageTwoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageTwoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pB1 = 0;
                object.pB2 = 0;
                object.pFph1 = 0;
                object.h = 0;
                object.v = 0;
            }
            if (message.pB1 != null && message.hasOwnProperty("pB1"))
                object.pB1 = options.json && !isFinite(message.pB1) ? String(message.pB1) : message.pB1;
            if (message.pB2 != null && message.hasOwnProperty("pB2"))
                object.pB2 = options.json && !isFinite(message.pB2) ? String(message.pB2) : message.pB2;
            if (message.pFph1 != null && message.hasOwnProperty("pFph1"))
                object.pFph1 = options.json && !isFinite(message.pFph1) ? String(message.pFph1) : message.pFph1;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            return object;
        };

        /**
         * Converts this StageTwoRequest to JSON.
         * @function toJSON
         * @memberof fireloss.StageTwoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageTwoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageTwoRequest;
    })();

    fireloss.StageTwoResponse = (function() {

        /**
         * Properties of a StageTwoResponse.
         * @memberof fireloss
         * @interface IStageTwoResponse
         * @property {number|null} [pFph2] StageTwoResponse pFph2
         * @property {number|null} [tFpdh2] StageTwoResponse tFpdh2
         * @property {number|null} [A2] StageTwoResponse A2
         */

        /**
         * Constructs a new StageTwoResponse.
         * @memberof fireloss
         * @classdesc Represents a StageTwoResponse.
         * @implements IStageTwoResponse
         * @constructor
         * @param {fireloss.IStageTwoResponse=} [properties] Properties to set
         */
        function StageTwoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageTwoResponse pFph2.
         * @member {number} pFph2
         * @memberof fireloss.StageTwoResponse
         * @instance
         */
        StageTwoResponse.prototype.pFph2 = 0;

        /**
         * StageTwoResponse tFpdh2.
         * @member {number} tFpdh2
         * @memberof fireloss.StageTwoResponse
         * @instance
         */
        StageTwoResponse.prototype.tFpdh2 = 0;

        /**
         * StageTwoResponse A2.
         * @member {number} A2
         * @memberof fireloss.StageTwoResponse
         * @instance
         */
        StageTwoResponse.prototype.A2 = 0;

        /**
         * Creates a StageTwoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageTwoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageTwoResponse} StageTwoResponse
         */
        StageTwoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageTwoResponse)
                return object;
            let message = new $root.fireloss.StageTwoResponse();
            if (object.pFph2 != null)
                message.pFph2 = Number(object.pFph2);
            if (object.tFpdh2 != null)
                message.tFpdh2 = Number(object.tFpdh2);
            if (object.A2 != null)
                message.A2 = Number(object.A2);
            return message;
        };

        /**
         * Creates a plain object from a StageTwoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageTwoResponse
         * @static
         * @param {fireloss.StageTwoResponse} message StageTwoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageTwoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pFph2 = 0;
                object.tFpdh2 = 0;
                object.A2 = 0;
            }
            if (message.pFph2 != null && message.hasOwnProperty("pFph2"))
                object.pFph2 = options.json && !isFinite(message.pFph2) ? String(message.pFph2) : message.pFph2;
            if (message.tFpdh2 != null && message.hasOwnProperty("tFpdh2"))
                object.tFpdh2 = options.json && !isFinite(message.tFpdh2) ? String(message.tFpdh2) : message.tFpdh2;
            if (message.A2 != null && message.hasOwnProperty("A2"))
                object.A2 = options.json && !isFinite(message.A2) ? String(message.A2) : message.A2;
            return object;
        };

        /**
         * Converts this StageTwoResponse to JSON.
         * @function toJSON
         * @memberof fireloss.StageTwoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageTwoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageTwoResponse;
    })();

    fireloss.StageThreeRequest = (function() {

        /**
         * Properties of a StageThreeRequest.
         * @memberof fireloss
         * @interface IStageThreeRequest
         * @property {number|null} [pF] StageThreeRequest pF
         * @property {number|null} [tHt] StageThreeRequest tHt
         * @property {number|null} [Q] StageThreeRequest Q
         * @property {number|null} [A] StageThreeRequest A
         * @property {number|null} [H] StageThreeRequest H
         * @property {number|null} [aT] StageThreeRequest aT
         * @property {number|null} [tInf] StageThreeRequest tInf
         * @property {number|null} [t0] StageThreeRequest t0
         * @property {number|null} [k] StageThreeRequest k
         * @property {number|null} [rho] StageThreeRequest rho
         * @property {number|null} [C] StageThreeRequest C
         * @property {number|null} [t] StageThreeRequest t
         * @property {number|null} [pFph2] StageThreeRequest pFph2
         */

        /**
         * Constructs a new StageThreeRequest.
         * @memberof fireloss
         * @classdesc Represents a StageThreeRequest.
         * @implements IStageThreeRequest
         * @constructor
         * @param {fireloss.IStageThreeRequest=} [properties] Properties to set
         */
        function StageThreeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageThreeRequest pF.
         * @member {number} pF
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.pF = 0;

        /**
         * StageThreeRequest tHt.
         * @member {number} tHt
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.tHt = 0;

        /**
         * StageThreeRequest Q.
         * @member {number} Q
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.Q = 0;

        /**
         * StageThreeRequest A.
         * @member {number} A
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.A = 0;

        /**
         * StageThreeRequest H.
         * @member {number} H
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.H = 0;

        /**
         * StageThreeRequest aT.
         * @member {number} aT
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.aT = 0;

        /**
         * StageThreeRequest tInf.
         * @member {number} tInf
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.tInf = 0;

        /**
         * StageThreeRequest t0.
         * @member {number} t0
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.t0 = 0;

        /**
         * StageThreeRequest k.
         * @member {number} k
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.k = 0;

        /**
         * StageThreeRequest rho.
         * @member {number} rho
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.rho = 0;

        /**
         * StageThreeRequest C.
         * @member {number} C
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.C = 0;

        /**
         * StageThreeRequest t.
         * @member {number} t
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.t = 0;

        /**
         * StageThreeRequest pFph2.
         * @member {number} pFph2
         * @memberof fireloss.StageThreeRequest
         * @instance
         */
        StageThreeRequest.prototype.pFph2 = 0;

        /**
         * Creates a StageThreeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageThreeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageThreeRequest} StageThreeRequest
         */
        StageThreeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageThreeRequest)
                return object;
            let message = new $root.fireloss.StageThreeRequest();
            if (object.pF != null)
                message.pF = Number(object.pF);
            if (object.tHt != null)
                message.tHt = Number(object.tHt);
            if (object.Q != null)
                message.Q = Number(object.Q);
            if (object.A != null)
                message.A = Number(object.A);
            if (object.H != null)
                message.H = Number(object.H);
            if (object.aT != null)
                message.aT = Number(object.aT);
            if (object.tInf != null)
                message.tInf = Number(object.tInf);
            if (object.t0 != null)
                message.t0 = Number(object.t0);
            if (object.k != null)
                message.k = Number(object.k);
            if (object.rho != null)
                message.rho = Number(object.rho);
            if (object.C != null)
                message.C = Number(object.C);
            if (object.t != null)
                message.t = Number(object.t);
            if (object.pFph2 != null)
                message.pFph2 = Number(object.pFph2);
            return message;
        };

        /**
         * Creates a plain object from a StageThreeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageThreeRequest
         * @static
         * @param {fireloss.StageThreeRequest} message StageThreeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageThreeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pF = 0;
                object.tHt = 0;
                object.Q = 0;
                object.A = 0;
                object.H = 0;
                object.aT = 0;
                object.tInf = 0;
                object.t0 = 0;
                object.k = 0;
                object.rho = 0;
                object.C = 0;
                object.t = 0;
                object.pFph2 = 0;
            }
            if (message.pF != null && message.hasOwnProperty("pF"))
                object.pF = options.json && !isFinite(message.pF) ? String(message.pF) : message.pF;
            if (message.tHt != null && message.hasOwnProperty("tHt"))
                object.tHt = options.json && !isFinite(message.tHt) ? String(message.tHt) : message.tHt;
            if (message.Q != null && message.hasOwnProperty("Q"))
                object.Q = options.json && !isFinite(message.Q) ? String(message.Q) : message.Q;
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.json && !isFinite(message.A) ? String(message.A) : message.A;
            if (message.H != null && message.hasOwnProperty("H"))
                object.H = options.json && !isFinite(message.H) ? String(message.H) : message.H;
            if (message.aT != null && message.hasOwnProperty("aT"))
                object.aT = options.json && !isFinite(message.aT) ? String(message.aT) : message.aT;
            if (message.tInf != null && message.hasOwnProperty("tInf"))
                object.tInf = options.json && !isFinite(message.tInf) ? String(message.tInf) : message.tInf;
            if (message.t0 != null && message.hasOwnProperty("t0"))
                object.t0 = options.json && !isFinite(message.t0) ? String(message.t0) : message.t0;
            if (message.k != null && message.hasOwnProperty("k"))
                object.k = options.json && !isFinite(message.k) ? String(message.k) : message.k;
            if (message.rho != null && message.hasOwnProperty("rho"))
                object.rho = options.json && !isFinite(message.rho) ? String(message.rho) : message.rho;
            if (message.C != null && message.hasOwnProperty("C"))
                object.C = options.json && !isFinite(message.C) ? String(message.C) : message.C;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = options.json && !isFinite(message.t) ? String(message.t) : message.t;
            if (message.pFph2 != null && message.hasOwnProperty("pFph2"))
                object.pFph2 = options.json && !isFinite(message.pFph2) ? String(message.pFph2) : message.pFph2;
            return object;
        };

        /**
         * Converts this StageThreeRequest to JSON.
         * @function toJSON
         * @memberof fireloss.StageThreeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageThreeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageThreeRequest;
    })();

    fireloss.StageThreeResponse = (function() {

        /**
         * Properties of a StageThreeResponse.
         * @memberof fireloss
         * @interface IStageThreeResponse
         * @property {number|null} [pFph3] StageThreeResponse pFph3
         * @property {number|null} [tFph3] StageThreeResponse tFph3
         * @property {number|null} [A3] StageThreeResponse A3
         */

        /**
         * Constructs a new StageThreeResponse.
         * @memberof fireloss
         * @classdesc Represents a StageThreeResponse.
         * @implements IStageThreeResponse
         * @constructor
         * @param {fireloss.IStageThreeResponse=} [properties] Properties to set
         */
        function StageThreeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageThreeResponse pFph3.
         * @member {number} pFph3
         * @memberof fireloss.StageThreeResponse
         * @instance
         */
        StageThreeResponse.prototype.pFph3 = 0;

        /**
         * StageThreeResponse tFph3.
         * @member {number} tFph3
         * @memberof fireloss.StageThreeResponse
         * @instance
         */
        StageThreeResponse.prototype.tFph3 = 0;

        /**
         * StageThreeResponse A3.
         * @member {number} A3
         * @memberof fireloss.StageThreeResponse
         * @instance
         */
        StageThreeResponse.prototype.A3 = 0;

        /**
         * Creates a StageThreeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageThreeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageThreeResponse} StageThreeResponse
         */
        StageThreeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageThreeResponse)
                return object;
            let message = new $root.fireloss.StageThreeResponse();
            if (object.pFph3 != null)
                message.pFph3 = Number(object.pFph3);
            if (object.tFph3 != null)
                message.tFph3 = Number(object.tFph3);
            if (object.A3 != null)
                message.A3 = Number(object.A3);
            return message;
        };

        /**
         * Creates a plain object from a StageThreeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageThreeResponse
         * @static
         * @param {fireloss.StageThreeResponse} message StageThreeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageThreeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pFph3 = 0;
                object.tFph3 = 0;
                object.A3 = 0;
            }
            if (message.pFph3 != null && message.hasOwnProperty("pFph3"))
                object.pFph3 = options.json && !isFinite(message.pFph3) ? String(message.pFph3) : message.pFph3;
            if (message.tFph3 != null && message.hasOwnProperty("tFph3"))
                object.tFph3 = options.json && !isFinite(message.tFph3) ? String(message.tFph3) : message.tFph3;
            if (message.A3 != null && message.hasOwnProperty("A3"))
                object.A3 = options.json && !isFinite(message.A3) ? String(message.A3) : message.A3;
            return object;
        };

        /**
         * Converts this StageThreeResponse to JSON.
         * @function toJSON
         * @memberof fireloss.StageThreeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageThreeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageThreeResponse;
    })();

    fireloss.StageFourRequest = (function() {

        /**
         * Properties of a StageFourRequest.
         * @memberof fireloss
         * @interface IStageFourRequest
         * @property {number|null} [pC1] StageFourRequest pC1
         * @property {number|null} [pF] StageFourRequest pF
         * @property {number|null} [pFph3] StageFourRequest pFph3
         * @property {number|null} [v] StageFourRequest v
         */

        /**
         * Constructs a new StageFourRequest.
         * @memberof fireloss
         * @classdesc Represents a StageFourRequest.
         * @implements IStageFourRequest
         * @constructor
         * @param {fireloss.IStageFourRequest=} [properties] Properties to set
         */
        function StageFourRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageFourRequest pC1.
         * @member {number} pC1
         * @memberof fireloss.StageFourRequest
         * @instance
         */
        StageFourRequest.prototype.pC1 = 0;

        /**
         * StageFourRequest pF.
         * @member {number} pF
         * @memberof fireloss.StageFourRequest
         * @instance
         */
        StageFourRequest.prototype.pF = 0;

        /**
         * StageFourRequest pFph3.
         * @member {number} pFph3
         * @memberof fireloss.StageFourRequest
         * @instance
         */
        StageFourRequest.prototype.pFph3 = 0;

        /**
         * StageFourRequest v.
         * @member {number} v
         * @memberof fireloss.StageFourRequest
         * @instance
         */
        StageFourRequest.prototype.v = 0;

        /**
         * Creates a StageFourRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageFourRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageFourRequest} StageFourRequest
         */
        StageFourRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageFourRequest)
                return object;
            let message = new $root.fireloss.StageFourRequest();
            if (object.pC1 != null)
                message.pC1 = Number(object.pC1);
            if (object.pF != null)
                message.pF = Number(object.pF);
            if (object.pFph3 != null)
                message.pFph3 = Number(object.pFph3);
            if (object.v != null)
                message.v = Number(object.v);
            return message;
        };

        /**
         * Creates a plain object from a StageFourRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageFourRequest
         * @static
         * @param {fireloss.StageFourRequest} message StageFourRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageFourRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pC1 = 0;
                object.pF = 0;
                object.pFph3 = 0;
                object.v = 0;
            }
            if (message.pC1 != null && message.hasOwnProperty("pC1"))
                object.pC1 = options.json && !isFinite(message.pC1) ? String(message.pC1) : message.pC1;
            if (message.pF != null && message.hasOwnProperty("pF"))
                object.pF = options.json && !isFinite(message.pF) ? String(message.pF) : message.pF;
            if (message.pFph3 != null && message.hasOwnProperty("pFph3"))
                object.pFph3 = options.json && !isFinite(message.pFph3) ? String(message.pFph3) : message.pFph3;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            return object;
        };

        /**
         * Converts this StageFourRequest to JSON.
         * @function toJSON
         * @memberof fireloss.StageFourRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageFourRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageFourRequest;
    })();

    fireloss.StageFourResponse = (function() {

        /**
         * Properties of a StageFourResponse.
         * @memberof fireloss
         * @interface IStageFourResponse
         * @property {number|null} [pFph4] StageFourResponse pFph4
         * @property {number|null} [A4] StageFourResponse A4
         */

        /**
         * Constructs a new StageFourResponse.
         * @memberof fireloss
         * @classdesc Represents a StageFourResponse.
         * @implements IStageFourResponse
         * @constructor
         * @param {fireloss.IStageFourResponse=} [properties] Properties to set
         */
        function StageFourResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageFourResponse pFph4.
         * @member {number} pFph4
         * @memberof fireloss.StageFourResponse
         * @instance
         */
        StageFourResponse.prototype.pFph4 = 0;

        /**
         * StageFourResponse A4.
         * @member {number} A4
         * @memberof fireloss.StageFourResponse
         * @instance
         */
        StageFourResponse.prototype.A4 = 0;

        /**
         * Creates a StageFourResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.StageFourResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.StageFourResponse} StageFourResponse
         */
        StageFourResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.StageFourResponse)
                return object;
            let message = new $root.fireloss.StageFourResponse();
            if (object.pFph4 != null)
                message.pFph4 = Number(object.pFph4);
            if (object.A4 != null)
                message.A4 = Number(object.A4);
            return message;
        };

        /**
         * Creates a plain object from a StageFourResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.StageFourResponse
         * @static
         * @param {fireloss.StageFourResponse} message StageFourResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StageFourResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pFph4 = 0;
                object.A4 = 0;
            }
            if (message.pFph4 != null && message.hasOwnProperty("pFph4"))
                object.pFph4 = options.json && !isFinite(message.pFph4) ? String(message.pFph4) : message.pFph4;
            if (message.A4 != null && message.hasOwnProperty("A4"))
                object.A4 = options.json && !isFinite(message.A4) ? String(message.A4) : message.A4;
            return object;
        };

        /**
         * Converts this StageFourResponse to JSON.
         * @function toJSON
         * @memberof fireloss.StageFourResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StageFourResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StageFourResponse;
    })();

    fireloss.BurntAreaRequest = (function() {

        /**
         * Properties of a BurntAreaRequest.
         * @memberof fireloss
         * @interface IBurntAreaRequest
         * @property {number|null} [yL] BurntAreaRequest yL
         * @property {number|null} [S] BurntAreaRequest S
         * @property {number|null} [pFire] BurntAreaRequest pFire
         * @property {number|null} [pFph1] BurntAreaRequest pFph1
         * @property {number|null} [pFph2] BurntAreaRequest pFph2
         * @property {number|null} [pFph3] BurntAreaRequest pFph3
         * @property {number|null} [pFph4] BurntAreaRequest pFph4
         * @property {number|null} [A1] BurntAreaRequest A1
         * @property {number|null} [A2] BurntAreaRequest A2
         * @property {number|null} [A3] BurntAreaRequest A3
         * @property {number|null} [A4] BurntAreaRequest A4
         * @property {number|null} [wE] BurntAreaRequest wE
         */

        /**
         * Constructs a new BurntAreaRequest.
         * @memberof fireloss
         * @classdesc Represents a BurntAreaRequest.
         * @implements IBurntAreaRequest
         * @constructor
         * @param {fireloss.IBurntAreaRequest=} [properties] Properties to set
         */
        function BurntAreaRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BurntAreaRequest yL.
         * @member {number} yL
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.yL = 0;

        /**
         * BurntAreaRequest S.
         * @member {number} S
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.S = 0;

        /**
         * BurntAreaRequest pFire.
         * @member {number} pFire
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.pFire = 0;

        /**
         * BurntAreaRequest pFph1.
         * @member {number} pFph1
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.pFph1 = 0;

        /**
         * BurntAreaRequest pFph2.
         * @member {number} pFph2
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.pFph2 = 0;

        /**
         * BurntAreaRequest pFph3.
         * @member {number} pFph3
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.pFph3 = 0;

        /**
         * BurntAreaRequest pFph4.
         * @member {number} pFph4
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.pFph4 = 0;

        /**
         * BurntAreaRequest A1.
         * @member {number} A1
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.A1 = 0;

        /**
         * BurntAreaRequest A2.
         * @member {number} A2
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.A2 = 0;

        /**
         * BurntAreaRequest A3.
         * @member {number} A3
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.A3 = 0;

        /**
         * BurntAreaRequest A4.
         * @member {number} A4
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.A4 = 0;

        /**
         * BurntAreaRequest wE.
         * @member {number} wE
         * @memberof fireloss.BurntAreaRequest
         * @instance
         */
        BurntAreaRequest.prototype.wE = 0;

        /**
         * Creates a BurntAreaRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.BurntAreaRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.BurntAreaRequest} BurntAreaRequest
         */
        BurntAreaRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.BurntAreaRequest)
                return object;
            let message = new $root.fireloss.BurntAreaRequest();
            if (object.yL != null)
                message.yL = Number(object.yL);
            if (object.S != null)
                message.S = Number(object.S);
            if (object.pFire != null)
                message.pFire = Number(object.pFire);
            if (object.pFph1 != null)
                message.pFph1 = Number(object.pFph1);
            if (object.pFph2 != null)
                message.pFph2 = Number(object.pFph2);
            if (object.pFph3 != null)
                message.pFph3 = Number(object.pFph3);
            if (object.pFph4 != null)
                message.pFph4 = Number(object.pFph4);
            if (object.A1 != null)
                message.A1 = Number(object.A1);
            if (object.A2 != null)
                message.A2 = Number(object.A2);
            if (object.A3 != null)
                message.A3 = Number(object.A3);
            if (object.A4 != null)
                message.A4 = Number(object.A4);
            if (object.wE != null)
                message.wE = Number(object.wE);
            return message;
        };

        /**
         * Creates a plain object from a BurntAreaRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.BurntAreaRequest
         * @static
         * @param {fireloss.BurntAreaRequest} message BurntAreaRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BurntAreaRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.yL = 0;
                object.S = 0;
                object.pFire = 0;
                object.pFph1 = 0;
                object.pFph2 = 0;
                object.pFph3 = 0;
                object.pFph4 = 0;
                object.A1 = 0;
                object.A2 = 0;
                object.A3 = 0;
                object.A4 = 0;
                object.wE = 0;
            }
            if (message.yL != null && message.hasOwnProperty("yL"))
                object.yL = options.json && !isFinite(message.yL) ? String(message.yL) : message.yL;
            if (message.S != null && message.hasOwnProperty("S"))
                object.S = options.json && !isFinite(message.S) ? String(message.S) : message.S;
            if (message.pFire != null && message.hasOwnProperty("pFire"))
                object.pFire = options.json && !isFinite(message.pFire) ? String(message.pFire) : message.pFire;
            if (message.pFph1 != null && message.hasOwnProperty("pFph1"))
                object.pFph1 = options.json && !isFinite(message.pFph1) ? String(message.pFph1) : message.pFph1;
            if (message.pFph2 != null && message.hasOwnProperty("pFph2"))
                object.pFph2 = options.json && !isFinite(message.pFph2) ? String(message.pFph2) : message.pFph2;
            if (message.pFph3 != null && message.hasOwnProperty("pFph3"))
                object.pFph3 = options.json && !isFinite(message.pFph3) ? String(message.pFph3) : message.pFph3;
            if (message.pFph4 != null && message.hasOwnProperty("pFph4"))
                object.pFph4 = options.json && !isFinite(message.pFph4) ? String(message.pFph4) : message.pFph4;
            if (message.A1 != null && message.hasOwnProperty("A1"))
                object.A1 = options.json && !isFinite(message.A1) ? String(message.A1) : message.A1;
            if (message.A2 != null && message.hasOwnProperty("A2"))
                object.A2 = options.json && !isFinite(message.A2) ? String(message.A2) : message.A2;
            if (message.A3 != null && message.hasOwnProperty("A3"))
                object.A3 = options.json && !isFinite(message.A3) ? String(message.A3) : message.A3;
            if (message.A4 != null && message.hasOwnProperty("A4"))
                object.A4 = options.json && !isFinite(message.A4) ? String(message.A4) : message.A4;
            if (message.wE != null && message.hasOwnProperty("wE"))
                object.wE = options.json && !isFinite(message.wE) ? String(message.wE) : message.wE;
            return object;
        };

        /**
         * Converts this BurntAreaRequest to JSON.
         * @function toJSON
         * @memberof fireloss.BurntAreaRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BurntAreaRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BurntAreaRequest;
    })();

    fireloss.BurntAreaResponse = (function() {

        /**
         * Properties of a BurntAreaResponse.
         * @memberof fireloss
         * @interface IBurntAreaResponse
         * @property {number|null} [aFz] BurntAreaResponse aFz
         * @property {number|null} [aF] BurntAreaResponse aF
         * @property {number|null} [eFire] BurntAreaResponse eFire
         */

        /**
         * Constructs a new BurntAreaResponse.
         * @memberof fireloss
         * @classdesc Represents a BurntAreaResponse.
         * @implements IBurntAreaResponse
         * @constructor
         * @param {fireloss.IBurntAreaResponse=} [properties] Properties to set
         */
        function BurntAreaResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BurntAreaResponse aFz.
         * @member {number} aFz
         * @memberof fireloss.BurntAreaResponse
         * @instance
         */
        BurntAreaResponse.prototype.aFz = 0;

        /**
         * BurntAreaResponse aF.
         * @member {number} aF
         * @memberof fireloss.BurntAreaResponse
         * @instance
         */
        BurntAreaResponse.prototype.aF = 0;

        /**
         * BurntAreaResponse eFire.
         * @member {number} eFire
         * @memberof fireloss.BurntAreaResponse
         * @instance
         */
        BurntAreaResponse.prototype.eFire = 0;

        /**
         * Creates a BurntAreaResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fireloss.BurntAreaResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fireloss.BurntAreaResponse} BurntAreaResponse
         */
        BurntAreaResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.fireloss.BurntAreaResponse)
                return object;
            let message = new $root.fireloss.BurntAreaResponse();
            if (object.aFz != null)
                message.aFz = Number(object.aFz);
            if (object.aF != null)
                message.aF = Number(object.aF);
            if (object.eFire != null)
                message.eFire = Number(object.eFire);
            return message;
        };

        /**
         * Creates a plain object from a BurntAreaResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fireloss.BurntAreaResponse
         * @static
         * @param {fireloss.BurntAreaResponse} message BurntAreaResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BurntAreaResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.aFz = 0;
                object.aF = 0;
                object.eFire = 0;
            }
            if (message.aFz != null && message.hasOwnProperty("aFz"))
                object.aFz = options.json && !isFinite(message.aFz) ? String(message.aFz) : message.aFz;
            if (message.aF != null && message.hasOwnProperty("aF"))
                object.aF = options.json && !isFinite(message.aF) ? String(message.aF) : message.aF;
            if (message.eFire != null && message.hasOwnProperty("eFire"))
                object.eFire = options.json && !isFinite(message.eFire) ? String(message.eFire) : message.eFire;
            return object;
        };

        /**
         * Converts this BurntAreaResponse to JSON.
         * @function toJSON
         * @memberof fireloss.BurntAreaResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BurntAreaResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BurntAreaResponse;
    })();

    fireloss.FireLossService = (function() {

        /**
         * Constructs a new FireLossService service.
         * @memberof fireloss
         * @classdesc Represents a FireLossService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function FireLossService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (FireLossService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FireLossService;

        /**
         * Callback as used by {@link fireloss.FireLossService#fireGrowthCoefficient}.
         * @memberof fireloss.FireLossService
         * @typedef FireGrowthCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.FireGrowthCoefficientResponse} [response] FireGrowthCoefficientResponse
         */

        /**
         * Calls FireGrowthCoefficient.
         * @function fireGrowthCoefficient
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IFireGrowthCoefficientRequest} request FireGrowthCoefficientRequest message or plain object
         * @param {fireloss.FireLossService.FireGrowthCoefficientCallback} callback Node-style callback called with the error, if any, and FireGrowthCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.fireGrowthCoefficient = function fireGrowthCoefficient(request, callback) {
            return this.rpcCall(fireGrowthCoefficient, $root.fireloss.FireGrowthCoefficientRequest, $root.fireloss.FireGrowthCoefficientResponse, request, callback);
        }, "name", { value: "FireGrowthCoefficient" });

        /**
         * Calls FireGrowthCoefficient.
         * @function fireGrowthCoefficient
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IFireGrowthCoefficientRequest} request FireGrowthCoefficientRequest message or plain object
         * @returns {Promise<fireloss.FireGrowthCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link fireloss.FireLossService#fireGrowthCategory}.
         * @memberof fireloss.FireLossService
         * @typedef FireGrowthCategoryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.FireGrowthCategoryResponse} [response] FireGrowthCategoryResponse
         */

        /**
         * Calls FireGrowthCategory.
         * @function fireGrowthCategory
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IFireGrowthCategoryRequest} request FireGrowthCategoryRequest message or plain object
         * @param {fireloss.FireLossService.FireGrowthCategoryCallback} callback Node-style callback called with the error, if any, and FireGrowthCategoryResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.fireGrowthCategory = function fireGrowthCategory(request, callback) {
            return this.rpcCall(fireGrowthCategory, $root.fireloss.FireGrowthCategoryRequest, $root.fireloss.FireGrowthCategoryResponse, request, callback);
        }, "name", { value: "FireGrowthCategory" });

        /**
         * Calls FireGrowthCategory.
         * @function fireGrowthCategory
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IFireGrowthCategoryRequest} request FireGrowthCategoryRequest message or plain object
         * @returns {Promise<fireloss.FireGrowthCategoryResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link fireloss.FireLossService#stageOne}.
         * @memberof fireloss.FireLossService
         * @typedef StageOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.StageOneResponse} [response] StageOneResponse
         */

        /**
         * Calls StageOne.
         * @function stageOne
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageOneRequest} request StageOneRequest message or plain object
         * @param {fireloss.FireLossService.StageOneCallback} callback Node-style callback called with the error, if any, and StageOneResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.stageOne = function stageOne(request, callback) {
            return this.rpcCall(stageOne, $root.fireloss.StageOneRequest, $root.fireloss.StageOneResponse, request, callback);
        }, "name", { value: "StageOne" });

        /**
         * Calls StageOne.
         * @function stageOne
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageOneRequest} request StageOneRequest message or plain object
         * @returns {Promise<fireloss.StageOneResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link fireloss.FireLossService#stageTwo}.
         * @memberof fireloss.FireLossService
         * @typedef StageTwoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.StageTwoResponse} [response] StageTwoResponse
         */

        /**
         * Calls StageTwo.
         * @function stageTwo
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageTwoRequest} request StageTwoRequest message or plain object
         * @param {fireloss.FireLossService.StageTwoCallback} callback Node-style callback called with the error, if any, and StageTwoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.stageTwo = function stageTwo(request, callback) {
            return this.rpcCall(stageTwo, $root.fireloss.StageTwoRequest, $root.fireloss.StageTwoResponse, request, callback);
        }, "name", { value: "StageTwo" });

        /**
         * Calls StageTwo.
         * @function stageTwo
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageTwoRequest} request StageTwoRequest message or plain object
         * @returns {Promise<fireloss.StageTwoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link fireloss.FireLossService#stageThree}.
         * @memberof fireloss.FireLossService
         * @typedef StageThreeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.StageThreeResponse} [response] StageThreeResponse
         */

        /**
         * Calls StageThree.
         * @function stageThree
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageThreeRequest} request StageThreeRequest message or plain object
         * @param {fireloss.FireLossService.StageThreeCallback} callback Node-style callback called with the error, if any, and StageThreeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.stageThree = function stageThree(request, callback) {
            return this.rpcCall(stageThree, $root.fireloss.StageThreeRequest, $root.fireloss.StageThreeResponse, request, callback);
        }, "name", { value: "StageThree" });

        /**
         * Calls StageThree.
         * @function stageThree
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageThreeRequest} request StageThreeRequest message or plain object
         * @returns {Promise<fireloss.StageThreeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link fireloss.FireLossService#stageFour}.
         * @memberof fireloss.FireLossService
         * @typedef StageFourCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.StageFourResponse} [response] StageFourResponse
         */

        /**
         * Calls StageFour.
         * @function stageFour
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageFourRequest} request StageFourRequest message or plain object
         * @param {fireloss.FireLossService.StageFourCallback} callback Node-style callback called with the error, if any, and StageFourResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.stageFour = function stageFour(request, callback) {
            return this.rpcCall(stageFour, $root.fireloss.StageFourRequest, $root.fireloss.StageFourResponse, request, callback);
        }, "name", { value: "StageFour" });

        /**
         * Calls StageFour.
         * @function stageFour
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IStageFourRequest} request StageFourRequest message or plain object
         * @returns {Promise<fireloss.StageFourResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link fireloss.FireLossService#burntArea}.
         * @memberof fireloss.FireLossService
         * @typedef BurntAreaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {fireloss.BurntAreaResponse} [response] BurntAreaResponse
         */

        /**
         * Calls BurntArea.
         * @function burntArea
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IBurntAreaRequest} request BurntAreaRequest message or plain object
         * @param {fireloss.FireLossService.BurntAreaCallback} callback Node-style callback called with the error, if any, and BurntAreaResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FireLossService.prototype.burntArea = function burntArea(request, callback) {
            return this.rpcCall(burntArea, $root.fireloss.BurntAreaRequest, $root.fireloss.BurntAreaResponse, request, callback);
        }, "name", { value: "BurntArea" });

        /**
         * Calls BurntArea.
         * @function burntArea
         * @memberof fireloss.FireLossService
         * @instance
         * @param {fireloss.IBurntAreaRequest} request BurntAreaRequest message or plain object
         * @returns {Promise<fireloss.BurntAreaResponse>} Promise
         * @variation 2
         */

        return FireLossService;
    })();

    return fireloss;
})();