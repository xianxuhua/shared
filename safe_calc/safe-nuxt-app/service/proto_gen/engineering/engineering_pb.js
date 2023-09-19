import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const engineering = $root.engineering = (() => {

    /**
     * Namespace engineering.
     * @exports engineering
     * @namespace
     */
    const engineering = {};

    engineering.FireLoadFactorRequest = (function() {

        /**
         * Properties of a FireLoadFactorRequest.
         * @memberof engineering
         * @interface IFireLoadFactorRequest
         * @property {number|null} [Qi] FireLoadFactorRequest Qi
         * @property {number|null} [Qm] FireLoadFactorRequest Qm
         */

        /**
         * Constructs a new FireLoadFactorRequest.
         * @memberof engineering
         * @classdesc Represents a FireLoadFactorRequest.
         * @implements IFireLoadFactorRequest
         * @constructor
         * @param {engineering.IFireLoadFactorRequest=} [properties] Properties to set
         */
        function FireLoadFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireLoadFactorRequest Qi.
         * @member {number} Qi
         * @memberof engineering.FireLoadFactorRequest
         * @instance
         */
        FireLoadFactorRequest.prototype.Qi = 0;

        /**
         * FireLoadFactorRequest Qm.
         * @member {number} Qm
         * @memberof engineering.FireLoadFactorRequest
         * @instance
         */
        FireLoadFactorRequest.prototype.Qm = 0;

        /**
         * Creates a FireLoadFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FireLoadFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FireLoadFactorRequest} FireLoadFactorRequest
         */
        FireLoadFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FireLoadFactorRequest)
                return object;
            let message = new $root.engineering.FireLoadFactorRequest();
            if (object.Qi != null)
                message.Qi = Number(object.Qi);
            if (object.Qm != null)
                message.Qm = Number(object.Qm);
            return message;
        };

        /**
         * Creates a plain object from a FireLoadFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FireLoadFactorRequest
         * @static
         * @param {engineering.FireLoadFactorRequest} message FireLoadFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireLoadFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Qi = 0;
                object.Qm = 0;
            }
            if (message.Qi != null && message.hasOwnProperty("Qi"))
                object.Qi = options.json && !isFinite(message.Qi) ? String(message.Qi) : message.Qi;
            if (message.Qm != null && message.hasOwnProperty("Qm"))
                object.Qm = options.json && !isFinite(message.Qm) ? String(message.Qm) : message.Qm;
            return object;
        };

        /**
         * Converts this FireLoadFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.FireLoadFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireLoadFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireLoadFactorRequest;
    })();

    engineering.FireLoadFactorResponse = (function() {

        /**
         * Properties of a FireLoadFactorResponse.
         * @memberof engineering
         * @interface IFireLoadFactorResponse
         * @property {number|null} [q] FireLoadFactorResponse q
         */

        /**
         * Constructs a new FireLoadFactorResponse.
         * @memberof engineering
         * @classdesc Represents a FireLoadFactorResponse.
         * @implements IFireLoadFactorResponse
         * @constructor
         * @param {engineering.IFireLoadFactorResponse=} [properties] Properties to set
         */
        function FireLoadFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireLoadFactorResponse q.
         * @member {number} q
         * @memberof engineering.FireLoadFactorResponse
         * @instance
         */
        FireLoadFactorResponse.prototype.q = 0;

        /**
         * Creates a FireLoadFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FireLoadFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FireLoadFactorResponse} FireLoadFactorResponse
         */
        FireLoadFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FireLoadFactorResponse)
                return object;
            let message = new $root.engineering.FireLoadFactorResponse();
            if (object.q != null)
                message.q = Number(object.q);
            return message;
        };

        /**
         * Creates a plain object from a FireLoadFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FireLoadFactorResponse
         * @static
         * @param {engineering.FireLoadFactorResponse} message FireLoadFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireLoadFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.q = 0;
            if (message.q != null && message.hasOwnProperty("q"))
                object.q = options.json && !isFinite(message.q) ? String(message.q) : message.q;
            return object;
        };

        /**
         * Converts this FireLoadFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.FireLoadFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireLoadFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireLoadFactorResponse;
    })();

    engineering.AreaFactorRequest = (function() {

        /**
         * Properties of an AreaFactorRequest.
         * @memberof engineering
         * @interface IAreaFactorRequest
         * @property {number|null} [l] AreaFactorRequest l
         * @property {number|null} [b] AreaFactorRequest b
         */

        /**
         * Constructs a new AreaFactorRequest.
         * @memberof engineering
         * @classdesc Represents an AreaFactorRequest.
         * @implements IAreaFactorRequest
         * @constructor
         * @param {engineering.IAreaFactorRequest=} [properties] Properties to set
         */
        function AreaFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AreaFactorRequest l.
         * @member {number} l
         * @memberof engineering.AreaFactorRequest
         * @instance
         */
        AreaFactorRequest.prototype.l = 0;

        /**
         * AreaFactorRequest b.
         * @member {number} b
         * @memberof engineering.AreaFactorRequest
         * @instance
         */
        AreaFactorRequest.prototype.b = 0;

        /**
         * Creates an AreaFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.AreaFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.AreaFactorRequest} AreaFactorRequest
         */
        AreaFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.AreaFactorRequest)
                return object;
            let message = new $root.engineering.AreaFactorRequest();
            if (object.l != null)
                message.l = Number(object.l);
            if (object.b != null)
                message.b = Number(object.b);
            return message;
        };

        /**
         * Creates a plain object from an AreaFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.AreaFactorRequest
         * @static
         * @param {engineering.AreaFactorRequest} message AreaFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AreaFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.l = 0;
                object.b = 0;
            }
            if (message.l != null && message.hasOwnProperty("l"))
                object.l = options.json && !isFinite(message.l) ? String(message.l) : message.l;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            return object;
        };

        /**
         * Converts this AreaFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.AreaFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AreaFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AreaFactorRequest;
    })();

    engineering.AreaFactorResponse = (function() {

        /**
         * Properties of an AreaFactorResponse.
         * @memberof engineering
         * @interface IAreaFactorResponse
         * @property {number|null} [g] AreaFactorResponse g
         */

        /**
         * Constructs a new AreaFactorResponse.
         * @memberof engineering
         * @classdesc Represents an AreaFactorResponse.
         * @implements IAreaFactorResponse
         * @constructor
         * @param {engineering.IAreaFactorResponse=} [properties] Properties to set
         */
        function AreaFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AreaFactorResponse g.
         * @member {number} g
         * @memberof engineering.AreaFactorResponse
         * @instance
         */
        AreaFactorResponse.prototype.g = 0;

        /**
         * Creates an AreaFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.AreaFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.AreaFactorResponse} AreaFactorResponse
         */
        AreaFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.AreaFactorResponse)
                return object;
            let message = new $root.engineering.AreaFactorResponse();
            if (object.g != null)
                message.g = Number(object.g);
            return message;
        };

        /**
         * Creates a plain object from an AreaFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.AreaFactorResponse
         * @static
         * @param {engineering.AreaFactorResponse} message AreaFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AreaFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.g = 0;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            return object;
        };

        /**
         * Converts this AreaFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.AreaFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AreaFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AreaFactorResponse;
    })();

    engineering.FireSpreadFactorRequest = (function() {

        /**
         * Properties of a FireSpreadFactorRequest.
         * @memberof engineering
         * @interface IFireSpreadFactorRequest
         * @property {number|null} [T] FireSpreadFactorRequest T
         * @property {number|null} [indoorItemsAverageSizeM] FireSpreadFactorRequest indoorItemsAverageSizeM
         * @property {number|null} [flamePropagationLevelM] FireSpreadFactorRequest flamePropagationLevelM
         */

        /**
         * Constructs a new FireSpreadFactorRequest.
         * @memberof engineering
         * @classdesc Represents a FireSpreadFactorRequest.
         * @implements IFireSpreadFactorRequest
         * @constructor
         * @param {engineering.IFireSpreadFactorRequest=} [properties] Properties to set
         */
        function FireSpreadFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireSpreadFactorRequest T.
         * @member {number} T
         * @memberof engineering.FireSpreadFactorRequest
         * @instance
         */
        FireSpreadFactorRequest.prototype.T = 0;

        /**
         * FireSpreadFactorRequest indoorItemsAverageSizeM.
         * @member {number} indoorItemsAverageSizeM
         * @memberof engineering.FireSpreadFactorRequest
         * @instance
         */
        FireSpreadFactorRequest.prototype.indoorItemsAverageSizeM = 0;

        /**
         * FireSpreadFactorRequest flamePropagationLevelM.
         * @member {number} flamePropagationLevelM
         * @memberof engineering.FireSpreadFactorRequest
         * @instance
         */
        FireSpreadFactorRequest.prototype.flamePropagationLevelM = 0;

        /**
         * Creates a FireSpreadFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FireSpreadFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FireSpreadFactorRequest} FireSpreadFactorRequest
         */
        FireSpreadFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FireSpreadFactorRequest)
                return object;
            let message = new $root.engineering.FireSpreadFactorRequest();
            if (object.T != null)
                message.T = Number(object.T);
            if (object.indoorItemsAverageSizeM != null)
                message.indoorItemsAverageSizeM = Number(object.indoorItemsAverageSizeM);
            if (object.flamePropagationLevelM != null)
                message.flamePropagationLevelM = object.flamePropagationLevelM | 0;
            return message;
        };

        /**
         * Creates a plain object from a FireSpreadFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FireSpreadFactorRequest
         * @static
         * @param {engineering.FireSpreadFactorRequest} message FireSpreadFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireSpreadFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.T = 0;
                object.indoorItemsAverageSizeM = 0;
                object.flamePropagationLevelM = 0;
            }
            if (message.T != null && message.hasOwnProperty("T"))
                object.T = options.json && !isFinite(message.T) ? String(message.T) : message.T;
            if (message.indoorItemsAverageSizeM != null && message.hasOwnProperty("indoorItemsAverageSizeM"))
                object.indoorItemsAverageSizeM = options.json && !isFinite(message.indoorItemsAverageSizeM) ? String(message.indoorItemsAverageSizeM) : message.indoorItemsAverageSizeM;
            if (message.flamePropagationLevelM != null && message.hasOwnProperty("flamePropagationLevelM"))
                object.flamePropagationLevelM = message.flamePropagationLevelM;
            return object;
        };

        /**
         * Converts this FireSpreadFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.FireSpreadFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireSpreadFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireSpreadFactorRequest;
    })();

    engineering.FireSpreadFactorResponse = (function() {

        /**
         * Properties of a FireSpreadFactorResponse.
         * @memberof engineering
         * @interface IFireSpreadFactorResponse
         * @property {number|null} [i] FireSpreadFactorResponse i
         */

        /**
         * Constructs a new FireSpreadFactorResponse.
         * @memberof engineering
         * @classdesc Represents a FireSpreadFactorResponse.
         * @implements IFireSpreadFactorResponse
         * @constructor
         * @param {engineering.IFireSpreadFactorResponse=} [properties] Properties to set
         */
        function FireSpreadFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireSpreadFactorResponse i.
         * @member {number} i
         * @memberof engineering.FireSpreadFactorResponse
         * @instance
         */
        FireSpreadFactorResponse.prototype.i = 0;

        /**
         * Creates a FireSpreadFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FireSpreadFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FireSpreadFactorResponse} FireSpreadFactorResponse
         */
        FireSpreadFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FireSpreadFactorResponse)
                return object;
            let message = new $root.engineering.FireSpreadFactorResponse();
            if (object.i != null)
                message.i = Number(object.i);
            return message;
        };

        /**
         * Creates a plain object from a FireSpreadFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FireSpreadFactorResponse
         * @static
         * @param {engineering.FireSpreadFactorResponse} message FireSpreadFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireSpreadFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.i = 0;
            if (message.i != null && message.hasOwnProperty("i"))
                object.i = options.json && !isFinite(message.i) ? String(message.i) : message.i;
            return object;
        };

        /**
         * Converts this FireSpreadFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.FireSpreadFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireSpreadFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireSpreadFactorResponse;
    })();

    engineering.VentilationFactorRequest = (function() {

        /**
         * Properties of a VentilationFactorRequest.
         * @memberof engineering
         * @interface IVentilationFactorRequest
         * @property {number|null} [Qm] VentilationFactorRequest Qm
         * @property {number|null} [k] VentilationFactorRequest k
         * @property {number|null} [h] VentilationFactorRequest h
         */

        /**
         * Constructs a new VentilationFactorRequest.
         * @memberof engineering
         * @classdesc Represents a VentilationFactorRequest.
         * @implements IVentilationFactorRequest
         * @constructor
         * @param {engineering.IVentilationFactorRequest=} [properties] Properties to set
         */
        function VentilationFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VentilationFactorRequest Qm.
         * @member {number} Qm
         * @memberof engineering.VentilationFactorRequest
         * @instance
         */
        VentilationFactorRequest.prototype.Qm = 0;

        /**
         * VentilationFactorRequest k.
         * @member {number} k
         * @memberof engineering.VentilationFactorRequest
         * @instance
         */
        VentilationFactorRequest.prototype.k = 0;

        /**
         * VentilationFactorRequest h.
         * @member {number} h
         * @memberof engineering.VentilationFactorRequest
         * @instance
         */
        VentilationFactorRequest.prototype.h = 0;

        /**
         * Creates a VentilationFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.VentilationFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.VentilationFactorRequest} VentilationFactorRequest
         */
        VentilationFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.VentilationFactorRequest)
                return object;
            let message = new $root.engineering.VentilationFactorRequest();
            if (object.Qm != null)
                message.Qm = Number(object.Qm);
            if (object.k != null)
                message.k = Number(object.k);
            if (object.h != null)
                message.h = Number(object.h);
            return message;
        };

        /**
         * Creates a plain object from a VentilationFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.VentilationFactorRequest
         * @static
         * @param {engineering.VentilationFactorRequest} message VentilationFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VentilationFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Qm = 0;
                object.k = 0;
                object.h = 0;
            }
            if (message.Qm != null && message.hasOwnProperty("Qm"))
                object.Qm = options.json && !isFinite(message.Qm) ? String(message.Qm) : message.Qm;
            if (message.k != null && message.hasOwnProperty("k"))
                object.k = options.json && !isFinite(message.k) ? String(message.k) : message.k;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            return object;
        };

        /**
         * Converts this VentilationFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.VentilationFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VentilationFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VentilationFactorRequest;
    })();

    engineering.VentilationFactorResponse = (function() {

        /**
         * Properties of a VentilationFactorResponse.
         * @memberof engineering
         * @interface IVentilationFactorResponse
         * @property {number|null} [v] VentilationFactorResponse v
         */

        /**
         * Constructs a new VentilationFactorResponse.
         * @memberof engineering
         * @classdesc Represents a VentilationFactorResponse.
         * @implements IVentilationFactorResponse
         * @constructor
         * @param {engineering.IVentilationFactorResponse=} [properties] Properties to set
         */
        function VentilationFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VentilationFactorResponse v.
         * @member {number} v
         * @memberof engineering.VentilationFactorResponse
         * @instance
         */
        VentilationFactorResponse.prototype.v = 0;

        /**
         * Creates a VentilationFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.VentilationFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.VentilationFactorResponse} VentilationFactorResponse
         */
        VentilationFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.VentilationFactorResponse)
                return object;
            let message = new $root.engineering.VentilationFactorResponse();
            if (object.v != null)
                message.v = Number(object.v);
            return message;
        };

        /**
         * Creates a plain object from a VentilationFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.VentilationFactorResponse
         * @static
         * @param {engineering.VentilationFactorResponse} message VentilationFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VentilationFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.v = 0;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            return object;
        };

        /**
         * Converts this VentilationFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.VentilationFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VentilationFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VentilationFactorResponse;
    })();

    engineering.ChannelFactorRequest = (function() {

        /**
         * Properties of a ChannelFactorRequest.
         * @memberof engineering
         * @interface IChannelFactorRequest
         * @property {number|null} [b] ChannelFactorRequest b
         * @property {number|null} [hPlus] ChannelFactorRequest hPlus
         * @property {number|null} [hSub] ChannelFactorRequest hSub
         */

        /**
         * Constructs a new ChannelFactorRequest.
         * @memberof engineering
         * @classdesc Represents a ChannelFactorRequest.
         * @implements IChannelFactorRequest
         * @constructor
         * @param {engineering.IChannelFactorRequest=} [properties] Properties to set
         */
        function ChannelFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChannelFactorRequest b.
         * @member {number} b
         * @memberof engineering.ChannelFactorRequest
         * @instance
         */
        ChannelFactorRequest.prototype.b = 0;

        /**
         * ChannelFactorRequest hPlus.
         * @member {number} hPlus
         * @memberof engineering.ChannelFactorRequest
         * @instance
         */
        ChannelFactorRequest.prototype.hPlus = 0;

        /**
         * ChannelFactorRequest hSub.
         * @member {number} hSub
         * @memberof engineering.ChannelFactorRequest
         * @instance
         */
        ChannelFactorRequest.prototype.hSub = 0;

        /**
         * Creates a ChannelFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.ChannelFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.ChannelFactorRequest} ChannelFactorRequest
         */
        ChannelFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.ChannelFactorRequest)
                return object;
            let message = new $root.engineering.ChannelFactorRequest();
            if (object.b != null)
                message.b = Number(object.b);
            if (object.hPlus != null)
                message.hPlus = Number(object.hPlus);
            if (object.hSub != null)
                message.hSub = Number(object.hSub);
            return message;
        };

        /**
         * Creates a plain object from a ChannelFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.ChannelFactorRequest
         * @static
         * @param {engineering.ChannelFactorRequest} message ChannelFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChannelFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.b = 0;
                object.hPlus = 0;
                object.hSub = 0;
            }
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.hPlus != null && message.hasOwnProperty("hPlus"))
                object.hPlus = options.json && !isFinite(message.hPlus) ? String(message.hPlus) : message.hPlus;
            if (message.hSub != null && message.hasOwnProperty("hSub"))
                object.hSub = options.json && !isFinite(message.hSub) ? String(message.hSub) : message.hSub;
            return object;
        };

        /**
         * Converts this ChannelFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.ChannelFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChannelFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChannelFactorRequest;
    })();

    engineering.ChannelFactorResponse = (function() {

        /**
         * Properties of a ChannelFactorResponse.
         * @memberof engineering
         * @interface IChannelFactorResponse
         * @property {number|null} [z] ChannelFactorResponse z
         */

        /**
         * Constructs a new ChannelFactorResponse.
         * @memberof engineering
         * @classdesc Represents a ChannelFactorResponse.
         * @implements IChannelFactorResponse
         * @constructor
         * @param {engineering.IChannelFactorResponse=} [properties] Properties to set
         */
        function ChannelFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChannelFactorResponse z.
         * @member {number} z
         * @memberof engineering.ChannelFactorResponse
         * @instance
         */
        ChannelFactorResponse.prototype.z = 0;

        /**
         * Creates a ChannelFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.ChannelFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.ChannelFactorResponse} ChannelFactorResponse
         */
        ChannelFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.ChannelFactorResponse)
                return object;
            let message = new $root.engineering.ChannelFactorResponse();
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a ChannelFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.ChannelFactorResponse
         * @static
         * @param {engineering.ChannelFactorResponse} message ChannelFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChannelFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.z = 0;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this ChannelFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.ChannelFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChannelFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChannelFactorResponse;
    })();

    engineering.FloorFactorRequest = (function() {

        /**
         * Properties of a FloorFactorRequest.
         * @memberof engineering
         * @interface IFloorFactorRequest
         * @property {number|null} [E] FloorFactorRequest E
         */

        /**
         * Constructs a new FloorFactorRequest.
         * @memberof engineering
         * @classdesc Represents a FloorFactorRequest.
         * @implements IFloorFactorRequest
         * @constructor
         * @param {engineering.IFloorFactorRequest=} [properties] Properties to set
         */
        function FloorFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FloorFactorRequest E.
         * @member {number} E
         * @memberof engineering.FloorFactorRequest
         * @instance
         */
        FloorFactorRequest.prototype.E = 0;

        /**
         * Creates a FloorFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FloorFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FloorFactorRequest} FloorFactorRequest
         */
        FloorFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FloorFactorRequest)
                return object;
            let message = new $root.engineering.FloorFactorRequest();
            if (object.E != null)
                message.E = Number(object.E);
            return message;
        };

        /**
         * Creates a plain object from a FloorFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FloorFactorRequest
         * @static
         * @param {engineering.FloorFactorRequest} message FloorFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloorFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.E = 0;
            if (message.E != null && message.hasOwnProperty("E"))
                object.E = options.json && !isFinite(message.E) ? String(message.E) : message.E;
            return object;
        };

        /**
         * Converts this FloorFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.FloorFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloorFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FloorFactorRequest;
    })();

    engineering.FloorFactorResponse = (function() {

        /**
         * Properties of a FloorFactorResponse.
         * @memberof engineering
         * @interface IFloorFactorResponse
         * @property {number|null} [e] FloorFactorResponse e
         */

        /**
         * Constructs a new FloorFactorResponse.
         * @memberof engineering
         * @classdesc Represents a FloorFactorResponse.
         * @implements IFloorFactorResponse
         * @constructor
         * @param {engineering.IFloorFactorResponse=} [properties] Properties to set
         */
        function FloorFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FloorFactorResponse e.
         * @member {number} e
         * @memberof engineering.FloorFactorResponse
         * @instance
         */
        FloorFactorResponse.prototype.e = 0;

        /**
         * Creates a FloorFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FloorFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FloorFactorResponse} FloorFactorResponse
         */
        FloorFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FloorFactorResponse)
                return object;
            let message = new $root.engineering.FloorFactorResponse();
            if (object.e != null)
                message.e = Number(object.e);
            return message;
        };

        /**
         * Creates a plain object from a FloorFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FloorFactorResponse
         * @static
         * @param {engineering.FloorFactorResponse} message FloorFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloorFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.e = 0;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            return object;
        };

        /**
         * Converts this FloorFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.FloorFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloorFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FloorFactorResponse;
    })();

    engineering.PotentialRiskRequest = (function() {

        /**
         * Properties of a PotentialRiskRequest.
         * @memberof engineering
         * @interface IPotentialRiskRequest
         * @property {number|null} [q] PotentialRiskRequest q
         * @property {number|null} [i] PotentialRiskRequest i
         * @property {number|null} [g] PotentialRiskRequest g
         * @property {number|null} [e] PotentialRiskRequest e
         * @property {number|null} [v] PotentialRiskRequest v
         * @property {number|null} [z] PotentialRiskRequest z
         */

        /**
         * Constructs a new PotentialRiskRequest.
         * @memberof engineering
         * @classdesc Represents a PotentialRiskRequest.
         * @implements IPotentialRiskRequest
         * @constructor
         * @param {engineering.IPotentialRiskRequest=} [properties] Properties to set
         */
        function PotentialRiskRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PotentialRiskRequest q.
         * @member {number} q
         * @memberof engineering.PotentialRiskRequest
         * @instance
         */
        PotentialRiskRequest.prototype.q = 0;

        /**
         * PotentialRiskRequest i.
         * @member {number} i
         * @memberof engineering.PotentialRiskRequest
         * @instance
         */
        PotentialRiskRequest.prototype.i = 0;

        /**
         * PotentialRiskRequest g.
         * @member {number} g
         * @memberof engineering.PotentialRiskRequest
         * @instance
         */
        PotentialRiskRequest.prototype.g = 0;

        /**
         * PotentialRiskRequest e.
         * @member {number} e
         * @memberof engineering.PotentialRiskRequest
         * @instance
         */
        PotentialRiskRequest.prototype.e = 0;

        /**
         * PotentialRiskRequest v.
         * @member {number} v
         * @memberof engineering.PotentialRiskRequest
         * @instance
         */
        PotentialRiskRequest.prototype.v = 0;

        /**
         * PotentialRiskRequest z.
         * @member {number} z
         * @memberof engineering.PotentialRiskRequest
         * @instance
         */
        PotentialRiskRequest.prototype.z = 0;

        /**
         * Creates a PotentialRiskRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.PotentialRiskRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.PotentialRiskRequest} PotentialRiskRequest
         */
        PotentialRiskRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.PotentialRiskRequest)
                return object;
            let message = new $root.engineering.PotentialRiskRequest();
            if (object.q != null)
                message.q = Number(object.q);
            if (object.i != null)
                message.i = Number(object.i);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.v != null)
                message.v = Number(object.v);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a PotentialRiskRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.PotentialRiskRequest
         * @static
         * @param {engineering.PotentialRiskRequest} message PotentialRiskRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PotentialRiskRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.q = 0;
                object.i = 0;
                object.g = 0;
                object.e = 0;
                object.v = 0;
                object.z = 0;
            }
            if (message.q != null && message.hasOwnProperty("q"))
                object.q = options.json && !isFinite(message.q) ? String(message.q) : message.q;
            if (message.i != null && message.hasOwnProperty("i"))
                object.i = options.json && !isFinite(message.i) ? String(message.i) : message.i;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this PotentialRiskRequest to JSON.
         * @function toJSON
         * @memberof engineering.PotentialRiskRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PotentialRiskRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PotentialRiskRequest;
    })();

    engineering.PotentialRiskResponse = (function() {

        /**
         * Properties of a PotentialRiskResponse.
         * @memberof engineering
         * @interface IPotentialRiskResponse
         * @property {number|null} [P] PotentialRiskResponse P
         */

        /**
         * Constructs a new PotentialRiskResponse.
         * @memberof engineering
         * @classdesc Represents a PotentialRiskResponse.
         * @implements IPotentialRiskResponse
         * @constructor
         * @param {engineering.IPotentialRiskResponse=} [properties] Properties to set
         */
        function PotentialRiskResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PotentialRiskResponse P.
         * @member {number} P
         * @memberof engineering.PotentialRiskResponse
         * @instance
         */
        PotentialRiskResponse.prototype.P = 0;

        /**
         * Creates a PotentialRiskResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.PotentialRiskResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.PotentialRiskResponse} PotentialRiskResponse
         */
        PotentialRiskResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.PotentialRiskResponse)
                return object;
            let message = new $root.engineering.PotentialRiskResponse();
            if (object.P != null)
                message.P = Number(object.P);
            return message;
        };

        /**
         * Creates a plain object from a PotentialRiskResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.PotentialRiskResponse
         * @static
         * @param {engineering.PotentialRiskResponse} message PotentialRiskResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PotentialRiskResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.P = 0;
            if (message.P != null && message.hasOwnProperty("P"))
                object.P = options.json && !isFinite(message.P) ? String(message.P) : message.P;
            return object;
        };

        /**
         * Converts this PotentialRiskResponse to JSON.
         * @function toJSON
         * @memberof engineering.PotentialRiskResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PotentialRiskResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PotentialRiskResponse;
    })();

    engineering.ActivityFactorRequest = (function() {

        /**
         * Properties of an ActivityFactorRequest.
         * @memberof engineering
         * @interface IActivityFactorRequest
         * @property {number|null} [mainActivity] ActivityFactorRequest mainActivity
         * @property {number|null} [secondaryActivity] ActivityFactorRequest secondaryActivity
         * @property {number|null} [indoorHeatingSystem] ActivityFactorRequest indoorHeatingSystem
         * @property {number|null} [electricalEquipment] ActivityFactorRequest electricalEquipment
         * @property {number|null} [combustible] ActivityFactorRequest combustible
         */

        /**
         * Constructs a new ActivityFactorRequest.
         * @memberof engineering
         * @classdesc Represents an ActivityFactorRequest.
         * @implements IActivityFactorRequest
         * @constructor
         * @param {engineering.IActivityFactorRequest=} [properties] Properties to set
         */
        function ActivityFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityFactorRequest mainActivity.
         * @member {number} mainActivity
         * @memberof engineering.ActivityFactorRequest
         * @instance
         */
        ActivityFactorRequest.prototype.mainActivity = 0;

        /**
         * ActivityFactorRequest secondaryActivity.
         * @member {number} secondaryActivity
         * @memberof engineering.ActivityFactorRequest
         * @instance
         */
        ActivityFactorRequest.prototype.secondaryActivity = 0;

        /**
         * ActivityFactorRequest indoorHeatingSystem.
         * @member {number} indoorHeatingSystem
         * @memberof engineering.ActivityFactorRequest
         * @instance
         */
        ActivityFactorRequest.prototype.indoorHeatingSystem = 0;

        /**
         * ActivityFactorRequest electricalEquipment.
         * @member {number} electricalEquipment
         * @memberof engineering.ActivityFactorRequest
         * @instance
         */
        ActivityFactorRequest.prototype.electricalEquipment = 0;

        /**
         * ActivityFactorRequest combustible.
         * @member {number} combustible
         * @memberof engineering.ActivityFactorRequest
         * @instance
         */
        ActivityFactorRequest.prototype.combustible = 0;

        /**
         * Creates an ActivityFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.ActivityFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.ActivityFactorRequest} ActivityFactorRequest
         */
        ActivityFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.ActivityFactorRequest)
                return object;
            let message = new $root.engineering.ActivityFactorRequest();
            if (object.mainActivity != null)
                message.mainActivity = Number(object.mainActivity);
            if (object.secondaryActivity != null)
                message.secondaryActivity = Number(object.secondaryActivity);
            if (object.indoorHeatingSystem != null)
                message.indoorHeatingSystem = Number(object.indoorHeatingSystem);
            if (object.electricalEquipment != null)
                message.electricalEquipment = Number(object.electricalEquipment);
            if (object.combustible != null)
                message.combustible = Number(object.combustible);
            return message;
        };

        /**
         * Creates a plain object from an ActivityFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.ActivityFactorRequest
         * @static
         * @param {engineering.ActivityFactorRequest} message ActivityFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.mainActivity = 0;
                object.secondaryActivity = 0;
                object.indoorHeatingSystem = 0;
                object.electricalEquipment = 0;
                object.combustible = 0;
            }
            if (message.mainActivity != null && message.hasOwnProperty("mainActivity"))
                object.mainActivity = options.json && !isFinite(message.mainActivity) ? String(message.mainActivity) : message.mainActivity;
            if (message.secondaryActivity != null && message.hasOwnProperty("secondaryActivity"))
                object.secondaryActivity = options.json && !isFinite(message.secondaryActivity) ? String(message.secondaryActivity) : message.secondaryActivity;
            if (message.indoorHeatingSystem != null && message.hasOwnProperty("indoorHeatingSystem"))
                object.indoorHeatingSystem = options.json && !isFinite(message.indoorHeatingSystem) ? String(message.indoorHeatingSystem) : message.indoorHeatingSystem;
            if (message.electricalEquipment != null && message.hasOwnProperty("electricalEquipment"))
                object.electricalEquipment = options.json && !isFinite(message.electricalEquipment) ? String(message.electricalEquipment) : message.electricalEquipment;
            if (message.combustible != null && message.hasOwnProperty("combustible"))
                object.combustible = options.json && !isFinite(message.combustible) ? String(message.combustible) : message.combustible;
            return object;
        };

        /**
         * Converts this ActivityFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.ActivityFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityFactorRequest;
    })();

    engineering.ActivityFactorResponse = (function() {

        /**
         * Properties of an ActivityFactorResponse.
         * @memberof engineering
         * @interface IActivityFactorResponse
         * @property {number|null} [a] ActivityFactorResponse a
         */

        /**
         * Constructs a new ActivityFactorResponse.
         * @memberof engineering
         * @classdesc Represents an ActivityFactorResponse.
         * @implements IActivityFactorResponse
         * @constructor
         * @param {engineering.IActivityFactorResponse=} [properties] Properties to set
         */
        function ActivityFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityFactorResponse a.
         * @member {number} a
         * @memberof engineering.ActivityFactorResponse
         * @instance
         */
        ActivityFactorResponse.prototype.a = 0;

        /**
         * Creates an ActivityFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.ActivityFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.ActivityFactorResponse} ActivityFactorResponse
         */
        ActivityFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.ActivityFactorResponse)
                return object;
            let message = new $root.engineering.ActivityFactorResponse();
            if (object.a != null)
                message.a = Number(object.a);
            return message;
        };

        /**
         * Creates a plain object from an ActivityFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.ActivityFactorResponse
         * @static
         * @param {engineering.ActivityFactorResponse} message ActivityFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.a = 0;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            return object;
        };

        /**
         * Converts this ActivityFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.ActivityFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityFactorResponse;
    })();

    engineering.EvacuationTimeFactorRequest = (function() {

        /**
         * Properties of an EvacuationTimeFactorRequest.
         * @memberof engineering
         * @interface IEvacuationTimeFactorRequest
         * @property {number|null} [p] EvacuationTimeFactorRequest p
         * @property {number|null} [xBig] EvacuationTimeFactorRequest xBig
         * @property {number|null} [xSmall] EvacuationTimeFactorRequest xSmall
         * @property {number|null} [b] EvacuationTimeFactorRequest b
         * @property {number|null} [l] EvacuationTimeFactorRequest l
         * @property {number|null} [hPlus] EvacuationTimeFactorRequest hPlus
         * @property {number|null} [hSub] EvacuationTimeFactorRequest hSub
         * @property {number|null} [K] EvacuationTimeFactorRequest K
         * @property {number|null} [e] EvacuationTimeFactorRequest e
         */

        /**
         * Constructs a new EvacuationTimeFactorRequest.
         * @memberof engineering
         * @classdesc Represents an EvacuationTimeFactorRequest.
         * @implements IEvacuationTimeFactorRequest
         * @constructor
         * @param {engineering.IEvacuationTimeFactorRequest=} [properties] Properties to set
         */
        function EvacuationTimeFactorRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EvacuationTimeFactorRequest p.
         * @member {number} p
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.p = 0;

        /**
         * EvacuationTimeFactorRequest xBig.
         * @member {number} xBig
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.xBig = 0;

        /**
         * EvacuationTimeFactorRequest xSmall.
         * @member {number} xSmall
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.xSmall = 0;

        /**
         * EvacuationTimeFactorRequest b.
         * @member {number} b
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.b = 0;

        /**
         * EvacuationTimeFactorRequest l.
         * @member {number} l
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.l = 0;

        /**
         * EvacuationTimeFactorRequest hPlus.
         * @member {number} hPlus
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.hPlus = 0;

        /**
         * EvacuationTimeFactorRequest hSub.
         * @member {number} hSub
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.hSub = 0;

        /**
         * EvacuationTimeFactorRequest K.
         * @member {number} K
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.K = 0;

        /**
         * EvacuationTimeFactorRequest e.
         * @member {number} e
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         */
        EvacuationTimeFactorRequest.prototype.e = 0;

        /**
         * Creates an EvacuationTimeFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.EvacuationTimeFactorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.EvacuationTimeFactorRequest} EvacuationTimeFactorRequest
         */
        EvacuationTimeFactorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.EvacuationTimeFactorRequest)
                return object;
            let message = new $root.engineering.EvacuationTimeFactorRequest();
            if (object.p != null)
                message.p = Number(object.p);
            if (object.xBig != null)
                message.xBig = Number(object.xBig);
            if (object.xSmall != null)
                message.xSmall = Number(object.xSmall);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.l != null)
                message.l = Number(object.l);
            if (object.hPlus != null)
                message.hPlus = Number(object.hPlus);
            if (object.hSub != null)
                message.hSub = Number(object.hSub);
            if (object.K != null)
                message.K = Number(object.K);
            if (object.e != null)
                message.e = Number(object.e);
            return message;
        };

        /**
         * Creates a plain object from an EvacuationTimeFactorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.EvacuationTimeFactorRequest
         * @static
         * @param {engineering.EvacuationTimeFactorRequest} message EvacuationTimeFactorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EvacuationTimeFactorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.p = 0;
                object.xBig = 0;
                object.xSmall = 0;
                object.b = 0;
                object.l = 0;
                object.hPlus = 0;
                object.hSub = 0;
                object.K = 0;
                object.e = 0;
            }
            if (message.p != null && message.hasOwnProperty("p"))
                object.p = options.json && !isFinite(message.p) ? String(message.p) : message.p;
            if (message.xBig != null && message.hasOwnProperty("xBig"))
                object.xBig = options.json && !isFinite(message.xBig) ? String(message.xBig) : message.xBig;
            if (message.xSmall != null && message.hasOwnProperty("xSmall"))
                object.xSmall = options.json && !isFinite(message.xSmall) ? String(message.xSmall) : message.xSmall;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.l != null && message.hasOwnProperty("l"))
                object.l = options.json && !isFinite(message.l) ? String(message.l) : message.l;
            if (message.hPlus != null && message.hasOwnProperty("hPlus"))
                object.hPlus = options.json && !isFinite(message.hPlus) ? String(message.hPlus) : message.hPlus;
            if (message.hSub != null && message.hasOwnProperty("hSub"))
                object.hSub = options.json && !isFinite(message.hSub) ? String(message.hSub) : message.hSub;
            if (message.K != null && message.hasOwnProperty("K"))
                object.K = options.json && !isFinite(message.K) ? String(message.K) : message.K;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            return object;
        };

        /**
         * Converts this EvacuationTimeFactorRequest to JSON.
         * @function toJSON
         * @memberof engineering.EvacuationTimeFactorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EvacuationTimeFactorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EvacuationTimeFactorRequest;
    })();

    engineering.EvacuationTimeFactorResponse = (function() {

        /**
         * Properties of an EvacuationTimeFactorResponse.
         * @memberof engineering
         * @interface IEvacuationTimeFactorResponse
         * @property {number|null} [t] EvacuationTimeFactorResponse t
         */

        /**
         * Constructs a new EvacuationTimeFactorResponse.
         * @memberof engineering
         * @classdesc Represents an EvacuationTimeFactorResponse.
         * @implements IEvacuationTimeFactorResponse
         * @constructor
         * @param {engineering.IEvacuationTimeFactorResponse=} [properties] Properties to set
         */
        function EvacuationTimeFactorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EvacuationTimeFactorResponse t.
         * @member {number} t
         * @memberof engineering.EvacuationTimeFactorResponse
         * @instance
         */
        EvacuationTimeFactorResponse.prototype.t = 0;

        /**
         * Creates an EvacuationTimeFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.EvacuationTimeFactorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.EvacuationTimeFactorResponse} EvacuationTimeFactorResponse
         */
        EvacuationTimeFactorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.EvacuationTimeFactorResponse)
                return object;
            let message = new $root.engineering.EvacuationTimeFactorResponse();
            if (object.t != null)
                message.t = Number(object.t);
            return message;
        };

        /**
         * Creates a plain object from an EvacuationTimeFactorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.EvacuationTimeFactorResponse
         * @static
         * @param {engineering.EvacuationTimeFactorResponse} message EvacuationTimeFactorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EvacuationTimeFactorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.t = 0;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = options.json && !isFinite(message.t) ? String(message.t) : message.t;
            return object;
        };

        /**
         * Converts this EvacuationTimeFactorResponse to JSON.
         * @function toJSON
         * @memberof engineering.EvacuationTimeFactorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EvacuationTimeFactorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EvacuationTimeFactorResponse;
    })();

    engineering.ProtectionLevelRequest = (function() {

        /**
         * Properties of a ProtectionLevelRequest.
         * @memberof engineering
         * @interface IProtectionLevelRequest
         * @property {number|null} [W] ProtectionLevelRequest W
         * @property {number|null} [N] ProtectionLevelRequest N
         * @property {number|null} [S] ProtectionLevelRequest S
         * @property {number|null} [F] ProtectionLevelRequest F
         */

        /**
         * Constructs a new ProtectionLevelRequest.
         * @memberof engineering
         * @classdesc Represents a ProtectionLevelRequest.
         * @implements IProtectionLevelRequest
         * @constructor
         * @param {engineering.IProtectionLevelRequest=} [properties] Properties to set
         */
        function ProtectionLevelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtectionLevelRequest W.
         * @member {number} W
         * @memberof engineering.ProtectionLevelRequest
         * @instance
         */
        ProtectionLevelRequest.prototype.W = 0;

        /**
         * ProtectionLevelRequest N.
         * @member {number} N
         * @memberof engineering.ProtectionLevelRequest
         * @instance
         */
        ProtectionLevelRequest.prototype.N = 0;

        /**
         * ProtectionLevelRequest S.
         * @member {number} S
         * @memberof engineering.ProtectionLevelRequest
         * @instance
         */
        ProtectionLevelRequest.prototype.S = 0;

        /**
         * ProtectionLevelRequest F.
         * @member {number} F
         * @memberof engineering.ProtectionLevelRequest
         * @instance
         */
        ProtectionLevelRequest.prototype.F = 0;

        /**
         * Creates a ProtectionLevelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.ProtectionLevelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.ProtectionLevelRequest} ProtectionLevelRequest
         */
        ProtectionLevelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.ProtectionLevelRequest)
                return object;
            let message = new $root.engineering.ProtectionLevelRequest();
            if (object.W != null)
                message.W = Number(object.W);
            if (object.N != null)
                message.N = Number(object.N);
            if (object.S != null)
                message.S = Number(object.S);
            if (object.F != null)
                message.F = Number(object.F);
            return message;
        };

        /**
         * Creates a plain object from a ProtectionLevelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.ProtectionLevelRequest
         * @static
         * @param {engineering.ProtectionLevelRequest} message ProtectionLevelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtectionLevelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.W = 0;
                object.N = 0;
                object.S = 0;
                object.F = 0;
            }
            if (message.W != null && message.hasOwnProperty("W"))
                object.W = options.json && !isFinite(message.W) ? String(message.W) : message.W;
            if (message.N != null && message.hasOwnProperty("N"))
                object.N = options.json && !isFinite(message.N) ? String(message.N) : message.N;
            if (message.S != null && message.hasOwnProperty("S"))
                object.S = options.json && !isFinite(message.S) ? String(message.S) : message.S;
            if (message.F != null && message.hasOwnProperty("F"))
                object.F = options.json && !isFinite(message.F) ? String(message.F) : message.F;
            return object;
        };

        /**
         * Converts this ProtectionLevelRequest to JSON.
         * @function toJSON
         * @memberof engineering.ProtectionLevelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtectionLevelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProtectionLevelRequest;
    })();

    engineering.ProtectionLevelResponse = (function() {

        /**
         * Properties of a ProtectionLevelResponse.
         * @memberof engineering
         * @interface IProtectionLevelResponse
         * @property {number|null} [D] ProtectionLevelResponse D
         */

        /**
         * Constructs a new ProtectionLevelResponse.
         * @memberof engineering
         * @classdesc Represents a ProtectionLevelResponse.
         * @implements IProtectionLevelResponse
         * @constructor
         * @param {engineering.IProtectionLevelResponse=} [properties] Properties to set
         */
        function ProtectionLevelResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtectionLevelResponse D.
         * @member {number} D
         * @memberof engineering.ProtectionLevelResponse
         * @instance
         */
        ProtectionLevelResponse.prototype.D = 0;

        /**
         * Creates a ProtectionLevelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.ProtectionLevelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.ProtectionLevelResponse} ProtectionLevelResponse
         */
        ProtectionLevelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.ProtectionLevelResponse)
                return object;
            let message = new $root.engineering.ProtectionLevelResponse();
            if (object.D != null)
                message.D = Number(object.D);
            return message;
        };

        /**
         * Creates a plain object from a ProtectionLevelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.ProtectionLevelResponse
         * @static
         * @param {engineering.ProtectionLevelResponse} message ProtectionLevelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtectionLevelResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.D = 0;
            if (message.D != null && message.hasOwnProperty("D"))
                object.D = options.json && !isFinite(message.D) ? String(message.D) : message.D;
            return object;
        };

        /**
         * Converts this ProtectionLevelResponse to JSON.
         * @function toJSON
         * @memberof engineering.ProtectionLevelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtectionLevelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProtectionLevelResponse;
    })();

    engineering.AcceptanceCriteriaRequest = (function() {

        /**
         * Properties of an AcceptanceCriteriaRequest.
         * @memberof engineering
         * @interface IAcceptanceCriteriaRequest
         * @property {number|null} [a] AcceptanceCriteriaRequest a
         * @property {number|null} [t] AcceptanceCriteriaRequest t
         * @property {number|null} [c] AcceptanceCriteriaRequest c
         */

        /**
         * Constructs a new AcceptanceCriteriaRequest.
         * @memberof engineering
         * @classdesc Represents an AcceptanceCriteriaRequest.
         * @implements IAcceptanceCriteriaRequest
         * @constructor
         * @param {engineering.IAcceptanceCriteriaRequest=} [properties] Properties to set
         */
        function AcceptanceCriteriaRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptanceCriteriaRequest a.
         * @member {number} a
         * @memberof engineering.AcceptanceCriteriaRequest
         * @instance
         */
        AcceptanceCriteriaRequest.prototype.a = 0;

        /**
         * AcceptanceCriteriaRequest t.
         * @member {number} t
         * @memberof engineering.AcceptanceCriteriaRequest
         * @instance
         */
        AcceptanceCriteriaRequest.prototype.t = 0;

        /**
         * AcceptanceCriteriaRequest c.
         * @member {number} c
         * @memberof engineering.AcceptanceCriteriaRequest
         * @instance
         */
        AcceptanceCriteriaRequest.prototype.c = 0;

        /**
         * Creates an AcceptanceCriteriaRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.AcceptanceCriteriaRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.AcceptanceCriteriaRequest} AcceptanceCriteriaRequest
         */
        AcceptanceCriteriaRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.AcceptanceCriteriaRequest)
                return object;
            let message = new $root.engineering.AcceptanceCriteriaRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.t != null)
                message.t = Number(object.t);
            if (object.c != null)
                message.c = Number(object.c);
            return message;
        };

        /**
         * Creates a plain object from an AcceptanceCriteriaRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.AcceptanceCriteriaRequest
         * @static
         * @param {engineering.AcceptanceCriteriaRequest} message AcceptanceCriteriaRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptanceCriteriaRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.t = 0;
                object.c = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = options.json && !isFinite(message.t) ? String(message.t) : message.t;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            return object;
        };

        /**
         * Converts this AcceptanceCriteriaRequest to JSON.
         * @function toJSON
         * @memberof engineering.AcceptanceCriteriaRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptanceCriteriaRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcceptanceCriteriaRequest;
    })();

    engineering.AcceptanceCriteriaResponse = (function() {

        /**
         * Properties of an AcceptanceCriteriaResponse.
         * @memberof engineering
         * @interface IAcceptanceCriteriaResponse
         * @property {number|null} [A] AcceptanceCriteriaResponse A
         */

        /**
         * Constructs a new AcceptanceCriteriaResponse.
         * @memberof engineering
         * @classdesc Represents an AcceptanceCriteriaResponse.
         * @implements IAcceptanceCriteriaResponse
         * @constructor
         * @param {engineering.IAcceptanceCriteriaResponse=} [properties] Properties to set
         */
        function AcceptanceCriteriaResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptanceCriteriaResponse A.
         * @member {number} A
         * @memberof engineering.AcceptanceCriteriaResponse
         * @instance
         */
        AcceptanceCriteriaResponse.prototype.A = 0;

        /**
         * Creates an AcceptanceCriteriaResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.AcceptanceCriteriaResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.AcceptanceCriteriaResponse} AcceptanceCriteriaResponse
         */
        AcceptanceCriteriaResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.AcceptanceCriteriaResponse)
                return object;
            let message = new $root.engineering.AcceptanceCriteriaResponse();
            if (object.A != null)
                message.A = Number(object.A);
            return message;
        };

        /**
         * Creates a plain object from an AcceptanceCriteriaResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.AcceptanceCriteriaResponse
         * @static
         * @param {engineering.AcceptanceCriteriaResponse} message AcceptanceCriteriaResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptanceCriteriaResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.A = 0;
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.json && !isFinite(message.A) ? String(message.A) : message.A;
            return object;
        };

        /**
         * Converts this AcceptanceCriteriaResponse to JSON.
         * @function toJSON
         * @memberof engineering.AcceptanceCriteriaResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptanceCriteriaResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcceptanceCriteriaResponse;
    })();

    engineering.FireRiskRequest = (function() {

        /**
         * Properties of a FireRiskRequest.
         * @memberof engineering
         * @interface IFireRiskRequest
         * @property {number|null} [A] FireRiskRequest A
         * @property {number|null} [D] FireRiskRequest D
         * @property {number|null} [P] FireRiskRequest P
         * @property {number|null} [U] FireRiskRequest U
         * @property {number|null} [N] FireRiskRequest N
         * @property {number|null} [aSmall] FireRiskRequest aSmall
         * @property {number|null} [t] FireRiskRequest t
         * @property {number|null} [r] FireRiskRequest r
         * @property {number|null} [dSmall] FireRiskRequest dSmall
         * @property {number|null} [i] FireRiskRequest i
         * @property {number|null} [g] FireRiskRequest g
         * @property {number|null} [e] FireRiskRequest e
         * @property {number|null} [v] FireRiskRequest v
         * @property {number|null} [z] FireRiskRequest z
         */

        /**
         * Constructs a new FireRiskRequest.
         * @memberof engineering
         * @classdesc Represents a FireRiskRequest.
         * @implements IFireRiskRequest
         * @constructor
         * @param {engineering.IFireRiskRequest=} [properties] Properties to set
         */
        function FireRiskRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireRiskRequest A.
         * @member {number} A
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.A = 0;

        /**
         * FireRiskRequest D.
         * @member {number} D
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.D = 0;

        /**
         * FireRiskRequest P.
         * @member {number} P
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.P = 0;

        /**
         * FireRiskRequest U.
         * @member {number} U
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.U = 0;

        /**
         * FireRiskRequest N.
         * @member {number} N
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.N = 0;

        /**
         * FireRiskRequest aSmall.
         * @member {number} aSmall
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.aSmall = 0;

        /**
         * FireRiskRequest t.
         * @member {number} t
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.t = 0;

        /**
         * FireRiskRequest r.
         * @member {number} r
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.r = 0;

        /**
         * FireRiskRequest dSmall.
         * @member {number} dSmall
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.dSmall = 0;

        /**
         * FireRiskRequest i.
         * @member {number} i
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.i = 0;

        /**
         * FireRiskRequest g.
         * @member {number} g
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.g = 0;

        /**
         * FireRiskRequest e.
         * @member {number} e
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.e = 0;

        /**
         * FireRiskRequest v.
         * @member {number} v
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.v = 0;

        /**
         * FireRiskRequest z.
         * @member {number} z
         * @memberof engineering.FireRiskRequest
         * @instance
         */
        FireRiskRequest.prototype.z = 0;

        /**
         * Creates a FireRiskRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FireRiskRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FireRiskRequest} FireRiskRequest
         */
        FireRiskRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FireRiskRequest)
                return object;
            let message = new $root.engineering.FireRiskRequest();
            if (object.A != null)
                message.A = Number(object.A);
            if (object.D != null)
                message.D = Number(object.D);
            if (object.P != null)
                message.P = Number(object.P);
            if (object.U != null)
                message.U = Number(object.U);
            if (object.N != null)
                message.N = Number(object.N);
            if (object.aSmall != null)
                message.aSmall = Number(object.aSmall);
            if (object.t != null)
                message.t = Number(object.t);
            if (object.r != null)
                message.r = Number(object.r);
            if (object.dSmall != null)
                message.dSmall = Number(object.dSmall);
            if (object.i != null)
                message.i = Number(object.i);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.v != null)
                message.v = Number(object.v);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a FireRiskRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FireRiskRequest
         * @static
         * @param {engineering.FireRiskRequest} message FireRiskRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireRiskRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.A = 0;
                object.D = 0;
                object.P = 0;
                object.U = 0;
                object.N = 0;
                object.aSmall = 0;
                object.t = 0;
                object.r = 0;
                object.dSmall = 0;
                object.i = 0;
                object.g = 0;
                object.e = 0;
                object.v = 0;
                object.z = 0;
            }
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.json && !isFinite(message.A) ? String(message.A) : message.A;
            if (message.D != null && message.hasOwnProperty("D"))
                object.D = options.json && !isFinite(message.D) ? String(message.D) : message.D;
            if (message.P != null && message.hasOwnProperty("P"))
                object.P = options.json && !isFinite(message.P) ? String(message.P) : message.P;
            if (message.U != null && message.hasOwnProperty("U"))
                object.U = options.json && !isFinite(message.U) ? String(message.U) : message.U;
            if (message.N != null && message.hasOwnProperty("N"))
                object.N = options.json && !isFinite(message.N) ? String(message.N) : message.N;
            if (message.aSmall != null && message.hasOwnProperty("aSmall"))
                object.aSmall = options.json && !isFinite(message.aSmall) ? String(message.aSmall) : message.aSmall;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = options.json && !isFinite(message.t) ? String(message.t) : message.t;
            if (message.r != null && message.hasOwnProperty("r"))
                object.r = options.json && !isFinite(message.r) ? String(message.r) : message.r;
            if (message.dSmall != null && message.hasOwnProperty("dSmall"))
                object.dSmall = options.json && !isFinite(message.dSmall) ? String(message.dSmall) : message.dSmall;
            if (message.i != null && message.hasOwnProperty("i"))
                object.i = options.json && !isFinite(message.i) ? String(message.i) : message.i;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.json && !isFinite(message.v) ? String(message.v) : message.v;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this FireRiskRequest to JSON.
         * @function toJSON
         * @memberof engineering.FireRiskRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireRiskRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireRiskRequest;
    })();

    engineering.FireRiskResponse = (function() {

        /**
         * Properties of a FireRiskResponse.
         * @memberof engineering
         * @interface IFireRiskResponse
         * @property {number|null} [R] FireRiskResponse R
         * @property {number|null} [P1] FireRiskResponse P1
         * @property {number|null} [D1] FireRiskResponse D1
         * @property {number|null} [R1] FireRiskResponse R1
         * @property {number|null} [A1] FireRiskResponse A1
         * @property {number|null} [A2] FireRiskResponse A2
         * @property {number|null} [P2] FireRiskResponse P2
         * @property {number|null} [R2] FireRiskResponse R2
         * @property {number|null} [D2] FireRiskResponse D2
         */

        /**
         * Constructs a new FireRiskResponse.
         * @memberof engineering
         * @classdesc Represents a FireRiskResponse.
         * @implements IFireRiskResponse
         * @constructor
         * @param {engineering.IFireRiskResponse=} [properties] Properties to set
         */
        function FireRiskResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireRiskResponse R.
         * @member {number} R
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.R = 0;

        /**
         * FireRiskResponse P1.
         * @member {number} P1
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.P1 = 0;

        /**
         * FireRiskResponse D1.
         * @member {number} D1
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.D1 = 0;

        /**
         * FireRiskResponse R1.
         * @member {number} R1
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.R1 = 0;

        /**
         * FireRiskResponse A1.
         * @member {number} A1
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.A1 = 0;

        /**
         * FireRiskResponse A2.
         * @member {number} A2
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.A2 = 0;

        /**
         * FireRiskResponse P2.
         * @member {number} P2
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.P2 = 0;

        /**
         * FireRiskResponse R2.
         * @member {number} R2
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.R2 = 0;

        /**
         * FireRiskResponse D2.
         * @member {number} D2
         * @memberof engineering.FireRiskResponse
         * @instance
         */
        FireRiskResponse.prototype.D2 = 0;

        /**
         * Creates a FireRiskResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof engineering.FireRiskResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {engineering.FireRiskResponse} FireRiskResponse
         */
        FireRiskResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.engineering.FireRiskResponse)
                return object;
            let message = new $root.engineering.FireRiskResponse();
            if (object.R != null)
                message.R = Number(object.R);
            if (object.P1 != null)
                message.P1 = Number(object.P1);
            if (object.D1 != null)
                message.D1 = Number(object.D1);
            if (object.R1 != null)
                message.R1 = Number(object.R1);
            if (object.A1 != null)
                message.A1 = Number(object.A1);
            if (object.A2 != null)
                message.A2 = Number(object.A2);
            if (object.P2 != null)
                message.P2 = Number(object.P2);
            if (object.R2 != null)
                message.R2 = Number(object.R2);
            if (object.D2 != null)
                message.D2 = Number(object.D2);
            return message;
        };

        /**
         * Creates a plain object from a FireRiskResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof engineering.FireRiskResponse
         * @static
         * @param {engineering.FireRiskResponse} message FireRiskResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireRiskResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.R = 0;
                object.P1 = 0;
                object.D1 = 0;
                object.R1 = 0;
                object.A1 = 0;
                object.A2 = 0;
                object.P2 = 0;
                object.R2 = 0;
                object.D2 = 0;
            }
            if (message.R != null && message.hasOwnProperty("R"))
                object.R = options.json && !isFinite(message.R) ? String(message.R) : message.R;
            if (message.P1 != null && message.hasOwnProperty("P1"))
                object.P1 = options.json && !isFinite(message.P1) ? String(message.P1) : message.P1;
            if (message.D1 != null && message.hasOwnProperty("D1"))
                object.D1 = options.json && !isFinite(message.D1) ? String(message.D1) : message.D1;
            if (message.R1 != null && message.hasOwnProperty("R1"))
                object.R1 = options.json && !isFinite(message.R1) ? String(message.R1) : message.R1;
            if (message.A1 != null && message.hasOwnProperty("A1"))
                object.A1 = options.json && !isFinite(message.A1) ? String(message.A1) : message.A1;
            if (message.A2 != null && message.hasOwnProperty("A2"))
                object.A2 = options.json && !isFinite(message.A2) ? String(message.A2) : message.A2;
            if (message.P2 != null && message.hasOwnProperty("P2"))
                object.P2 = options.json && !isFinite(message.P2) ? String(message.P2) : message.P2;
            if (message.R2 != null && message.hasOwnProperty("R2"))
                object.R2 = options.json && !isFinite(message.R2) ? String(message.R2) : message.R2;
            if (message.D2 != null && message.hasOwnProperty("D2"))
                object.D2 = options.json && !isFinite(message.D2) ? String(message.D2) : message.D2;
            return object;
        };

        /**
         * Converts this FireRiskResponse to JSON.
         * @function toJSON
         * @memberof engineering.FireRiskResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireRiskResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireRiskResponse;
    })();

    engineering.EngineeringService = (function() {

        /**
         * Constructs a new EngineeringService service.
         * @memberof engineering
         * @classdesc Represents an EngineeringService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function EngineeringService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (EngineeringService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EngineeringService;

        /**
         * Callback as used by {@link engineering.EngineeringService#fireLoadFactor}.
         * @memberof engineering.EngineeringService
         * @typedef FireLoadFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.FireLoadFactorResponse} [response] FireLoadFactorResponse
         */

        /**
         * Calls FireLoadFactor.
         * @function fireLoadFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFireLoadFactorRequest} request FireLoadFactorRequest message or plain object
         * @param {engineering.EngineeringService.FireLoadFactorCallback} callback Node-style callback called with the error, if any, and FireLoadFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.fireLoadFactor = function fireLoadFactor(request, callback) {
            return this.rpcCall(fireLoadFactor, $root.engineering.FireLoadFactorRequest, $root.engineering.FireLoadFactorResponse, request, callback);
        }, "name", { value: "FireLoadFactor" });

        /**
         * Calls FireLoadFactor.
         * @function fireLoadFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFireLoadFactorRequest} request FireLoadFactorRequest message or plain object
         * @returns {Promise<engineering.FireLoadFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#areaFactor}.
         * @memberof engineering.EngineeringService
         * @typedef AreaFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.AreaFactorResponse} [response] AreaFactorResponse
         */

        /**
         * Calls AreaFactor.
         * @function areaFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IAreaFactorRequest} request AreaFactorRequest message or plain object
         * @param {engineering.EngineeringService.AreaFactorCallback} callback Node-style callback called with the error, if any, and AreaFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.areaFactor = function areaFactor(request, callback) {
            return this.rpcCall(areaFactor, $root.engineering.AreaFactorRequest, $root.engineering.AreaFactorResponse, request, callback);
        }, "name", { value: "AreaFactor" });

        /**
         * Calls AreaFactor.
         * @function areaFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IAreaFactorRequest} request AreaFactorRequest message or plain object
         * @returns {Promise<engineering.AreaFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#fireSpreadFactor}.
         * @memberof engineering.EngineeringService
         * @typedef FireSpreadFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.FireSpreadFactorResponse} [response] FireSpreadFactorResponse
         */

        /**
         * Calls FireSpreadFactor.
         * @function fireSpreadFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFireSpreadFactorRequest} request FireSpreadFactorRequest message or plain object
         * @param {engineering.EngineeringService.FireSpreadFactorCallback} callback Node-style callback called with the error, if any, and FireSpreadFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.fireSpreadFactor = function fireSpreadFactor(request, callback) {
            return this.rpcCall(fireSpreadFactor, $root.engineering.FireSpreadFactorRequest, $root.engineering.FireSpreadFactorResponse, request, callback);
        }, "name", { value: "FireSpreadFactor" });

        /**
         * Calls FireSpreadFactor.
         * @function fireSpreadFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFireSpreadFactorRequest} request FireSpreadFactorRequest message or plain object
         * @returns {Promise<engineering.FireSpreadFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#ventilationFactor}.
         * @memberof engineering.EngineeringService
         * @typedef VentilationFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.VentilationFactorResponse} [response] VentilationFactorResponse
         */

        /**
         * Calls VentilationFactor.
         * @function ventilationFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IVentilationFactorRequest} request VentilationFactorRequest message or plain object
         * @param {engineering.EngineeringService.VentilationFactorCallback} callback Node-style callback called with the error, if any, and VentilationFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.ventilationFactor = function ventilationFactor(request, callback) {
            return this.rpcCall(ventilationFactor, $root.engineering.VentilationFactorRequest, $root.engineering.VentilationFactorResponse, request, callback);
        }, "name", { value: "VentilationFactor" });

        /**
         * Calls VentilationFactor.
         * @function ventilationFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IVentilationFactorRequest} request VentilationFactorRequest message or plain object
         * @returns {Promise<engineering.VentilationFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#channelFactor}.
         * @memberof engineering.EngineeringService
         * @typedef ChannelFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.ChannelFactorResponse} [response] ChannelFactorResponse
         */

        /**
         * Calls ChannelFactor.
         * @function channelFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IChannelFactorRequest} request ChannelFactorRequest message or plain object
         * @param {engineering.EngineeringService.ChannelFactorCallback} callback Node-style callback called with the error, if any, and ChannelFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.channelFactor = function channelFactor(request, callback) {
            return this.rpcCall(channelFactor, $root.engineering.ChannelFactorRequest, $root.engineering.ChannelFactorResponse, request, callback);
        }, "name", { value: "ChannelFactor" });

        /**
         * Calls ChannelFactor.
         * @function channelFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IChannelFactorRequest} request ChannelFactorRequest message or plain object
         * @returns {Promise<engineering.ChannelFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#floorFactor}.
         * @memberof engineering.EngineeringService
         * @typedef FloorFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.FloorFactorResponse} [response] FloorFactorResponse
         */

        /**
         * Calls FloorFactor.
         * @function floorFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFloorFactorRequest} request FloorFactorRequest message or plain object
         * @param {engineering.EngineeringService.FloorFactorCallback} callback Node-style callback called with the error, if any, and FloorFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.floorFactor = function floorFactor(request, callback) {
            return this.rpcCall(floorFactor, $root.engineering.FloorFactorRequest, $root.engineering.FloorFactorResponse, request, callback);
        }, "name", { value: "FloorFactor" });

        /**
         * Calls FloorFactor.
         * @function floorFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFloorFactorRequest} request FloorFactorRequest message or plain object
         * @returns {Promise<engineering.FloorFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#potentialRisk}.
         * @memberof engineering.EngineeringService
         * @typedef PotentialRiskCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.PotentialRiskResponse} [response] PotentialRiskResponse
         */

        /**
         * Calls PotentialRisk.
         * @function potentialRisk
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IPotentialRiskRequest} request PotentialRiskRequest message or plain object
         * @param {engineering.EngineeringService.PotentialRiskCallback} callback Node-style callback called with the error, if any, and PotentialRiskResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.potentialRisk = function potentialRisk(request, callback) {
            return this.rpcCall(potentialRisk, $root.engineering.PotentialRiskRequest, $root.engineering.PotentialRiskResponse, request, callback);
        }, "name", { value: "PotentialRisk" });

        /**
         * Calls PotentialRisk.
         * @function potentialRisk
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IPotentialRiskRequest} request PotentialRiskRequest message or plain object
         * @returns {Promise<engineering.PotentialRiskResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#activityFactor}.
         * @memberof engineering.EngineeringService
         * @typedef ActivityFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.ActivityFactorResponse} [response] ActivityFactorResponse
         */

        /**
         * Calls ActivityFactor.
         * @function activityFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IActivityFactorRequest} request ActivityFactorRequest message or plain object
         * @param {engineering.EngineeringService.ActivityFactorCallback} callback Node-style callback called with the error, if any, and ActivityFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.activityFactor = function activityFactor(request, callback) {
            return this.rpcCall(activityFactor, $root.engineering.ActivityFactorRequest, $root.engineering.ActivityFactorResponse, request, callback);
        }, "name", { value: "ActivityFactor" });

        /**
         * Calls ActivityFactor.
         * @function activityFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IActivityFactorRequest} request ActivityFactorRequest message or plain object
         * @returns {Promise<engineering.ActivityFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#evacuationTimeFactor}.
         * @memberof engineering.EngineeringService
         * @typedef EvacuationTimeFactorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.EvacuationTimeFactorResponse} [response] EvacuationTimeFactorResponse
         */

        /**
         * Calls EvacuationTimeFactor.
         * @function evacuationTimeFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IEvacuationTimeFactorRequest} request EvacuationTimeFactorRequest message or plain object
         * @param {engineering.EngineeringService.EvacuationTimeFactorCallback} callback Node-style callback called with the error, if any, and EvacuationTimeFactorResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.evacuationTimeFactor = function evacuationTimeFactor(request, callback) {
            return this.rpcCall(evacuationTimeFactor, $root.engineering.EvacuationTimeFactorRequest, $root.engineering.EvacuationTimeFactorResponse, request, callback);
        }, "name", { value: "EvacuationTimeFactor" });

        /**
         * Calls EvacuationTimeFactor.
         * @function evacuationTimeFactor
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IEvacuationTimeFactorRequest} request EvacuationTimeFactorRequest message or plain object
         * @returns {Promise<engineering.EvacuationTimeFactorResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#protectionLevel}.
         * @memberof engineering.EngineeringService
         * @typedef ProtectionLevelCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.ProtectionLevelResponse} [response] ProtectionLevelResponse
         */

        /**
         * Calls ProtectionLevel.
         * @function protectionLevel
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IProtectionLevelRequest} request ProtectionLevelRequest message or plain object
         * @param {engineering.EngineeringService.ProtectionLevelCallback} callback Node-style callback called with the error, if any, and ProtectionLevelResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.protectionLevel = function protectionLevel(request, callback) {
            return this.rpcCall(protectionLevel, $root.engineering.ProtectionLevelRequest, $root.engineering.ProtectionLevelResponse, request, callback);
        }, "name", { value: "ProtectionLevel" });

        /**
         * Calls ProtectionLevel.
         * @function protectionLevel
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IProtectionLevelRequest} request ProtectionLevelRequest message or plain object
         * @returns {Promise<engineering.ProtectionLevelResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#acceptanceCriteria}.
         * @memberof engineering.EngineeringService
         * @typedef AcceptanceCriteriaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.AcceptanceCriteriaResponse} [response] AcceptanceCriteriaResponse
         */

        /**
         * Calls AcceptanceCriteria.
         * @function acceptanceCriteria
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IAcceptanceCriteriaRequest} request AcceptanceCriteriaRequest message or plain object
         * @param {engineering.EngineeringService.AcceptanceCriteriaCallback} callback Node-style callback called with the error, if any, and AcceptanceCriteriaResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.acceptanceCriteria = function acceptanceCriteria(request, callback) {
            return this.rpcCall(acceptanceCriteria, $root.engineering.AcceptanceCriteriaRequest, $root.engineering.AcceptanceCriteriaResponse, request, callback);
        }, "name", { value: "AcceptanceCriteria" });

        /**
         * Calls AcceptanceCriteria.
         * @function acceptanceCriteria
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IAcceptanceCriteriaRequest} request AcceptanceCriteriaRequest message or plain object
         * @returns {Promise<engineering.AcceptanceCriteriaResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link engineering.EngineeringService#fireRisk}.
         * @memberof engineering.EngineeringService
         * @typedef FireRiskCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {engineering.FireRiskResponse} [response] FireRiskResponse
         */

        /**
         * Calls FireRisk.
         * @function fireRisk
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFireRiskRequest} request FireRiskRequest message or plain object
         * @param {engineering.EngineeringService.FireRiskCallback} callback Node-style callback called with the error, if any, and FireRiskResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EngineeringService.prototype.fireRisk = function fireRisk(request, callback) {
            return this.rpcCall(fireRisk, $root.engineering.FireRiskRequest, $root.engineering.FireRiskResponse, request, callback);
        }, "name", { value: "FireRisk" });

        /**
         * Calls FireRisk.
         * @function fireRisk
         * @memberof engineering.EngineeringService
         * @instance
         * @param {engineering.IFireRiskRequest} request FireRiskRequest message or plain object
         * @returns {Promise<engineering.FireRiskResponse>} Promise
         * @variation 2
         */

        return EngineeringService;
    })();

    return engineering;
})();