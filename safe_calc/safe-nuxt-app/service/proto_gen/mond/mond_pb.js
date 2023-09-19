import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const mond = $root.mond = (() => {

    /**
     * Namespace mond.
     * @exports mond
     * @namespace
     */
    const mond = {};

    mond.MaterialCoefficientSaveUnknownMaterialRequest = (function() {

        /**
         * Properties of a MaterialCoefficientSaveUnknownMaterialRequest.
         * @memberof mond
         * @interface IMaterialCoefficientSaveUnknownMaterialRequest
         * @property {string|null} [name] MaterialCoefficientSaveUnknownMaterialRequest name
         * @property {number|null} [heat] MaterialCoefficientSaveUnknownMaterialRequest heat
         * @property {number|null} [coefficient] MaterialCoefficientSaveUnknownMaterialRequest coefficient
         */

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialRequest.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientSaveUnknownMaterialRequest.
         * @implements IMaterialCoefficientSaveUnknownMaterialRequest
         * @constructor
         * @param {mond.IMaterialCoefficientSaveUnknownMaterialRequest=} [properties] Properties to set
         */
        function MaterialCoefficientSaveUnknownMaterialRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientSaveUnknownMaterialRequest name.
         * @member {string} name
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.name = "";

        /**
         * MaterialCoefficientSaveUnknownMaterialRequest heat.
         * @member {number} heat
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.heat = 0;

        /**
         * MaterialCoefficientSaveUnknownMaterialRequest coefficient.
         * @member {number} coefficient
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.coefficient = 0;

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientSaveUnknownMaterialRequest} MaterialCoefficientSaveUnknownMaterialRequest
         */
        MaterialCoefficientSaveUnknownMaterialRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientSaveUnknownMaterialRequest)
                return object;
            let message = new $root.mond.MaterialCoefficientSaveUnknownMaterialRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.heat != null)
                message.heat = Number(object.heat);
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialRequest
         * @static
         * @param {mond.MaterialCoefficientSaveUnknownMaterialRequest} message MaterialCoefficientSaveUnknownMaterialRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientSaveUnknownMaterialRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.heat = 0;
                object.coefficient = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.heat != null && message.hasOwnProperty("heat"))
                object.heat = options.json && !isFinite(message.heat) ? String(message.heat) : message.heat;
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            return object;
        };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientSaveUnknownMaterialRequest;
    })();

    mond.MaterialCoefficientSaveUnknownMaterialResponse = (function() {

        /**
         * Properties of a MaterialCoefficientSaveUnknownMaterialResponse.
         * @memberof mond
         * @interface IMaterialCoefficientSaveUnknownMaterialResponse
         */

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialResponse.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientSaveUnknownMaterialResponse.
         * @implements IMaterialCoefficientSaveUnknownMaterialResponse
         * @constructor
         * @param {mond.IMaterialCoefficientSaveUnknownMaterialResponse=} [properties] Properties to set
         */
        function MaterialCoefficientSaveUnknownMaterialResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientSaveUnknownMaterialResponse} MaterialCoefficientSaveUnknownMaterialResponse
         */
        MaterialCoefficientSaveUnknownMaterialResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientSaveUnknownMaterialResponse)
                return object;
            return new $root.mond.MaterialCoefficientSaveUnknownMaterialResponse();
        };

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialResponse
         * @static
         * @param {mond.MaterialCoefficientSaveUnknownMaterialResponse} message MaterialCoefficientSaveUnknownMaterialResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientSaveUnknownMaterialResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientSaveUnknownMaterialResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientSaveUnknownMaterialResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientSaveUnknownMaterialResponse;
    })();

    mond.MaterialCoefficientGetKnownCoefficientRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownCoefficientRequest.
         * @memberof mond
         * @interface IMaterialCoefficientGetKnownCoefficientRequest
         * @property {string|null} [name] MaterialCoefficientGetKnownCoefficientRequest name
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientGetKnownCoefficientRequest.
         * @implements IMaterialCoefficientGetKnownCoefficientRequest
         * @constructor
         * @param {mond.IMaterialCoefficientGetKnownCoefficientRequest=} [properties] Properties to set
         */
        function MaterialCoefficientGetKnownCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetKnownCoefficientRequest name.
         * @member {string} name
         * @memberof mond.MaterialCoefficientGetKnownCoefficientRequest
         * @instance
         */
        MaterialCoefficientGetKnownCoefficientRequest.prototype.name = "";

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientGetKnownCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientGetKnownCoefficientRequest} MaterialCoefficientGetKnownCoefficientRequest
         */
        MaterialCoefficientGetKnownCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientGetKnownCoefficientRequest)
                return object;
            let message = new $root.mond.MaterialCoefficientGetKnownCoefficientRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientGetKnownCoefficientRequest
         * @static
         * @param {mond.MaterialCoefficientGetKnownCoefficientRequest} message MaterialCoefficientGetKnownCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetKnownCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientGetKnownCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownCoefficientRequest;
    })();

    mond.MaterialCoefficientGetKnownCoefficientResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownCoefficientResponse.
         * @memberof mond
         * @interface IMaterialCoefficientGetKnownCoefficientResponse
         * @property {number|null} [coefficient] MaterialCoefficientGetKnownCoefficientResponse coefficient
         * @property {number|null} [heat] MaterialCoefficientGetKnownCoefficientResponse heat
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientGetKnownCoefficientResponse.
         * @implements IMaterialCoefficientGetKnownCoefficientResponse
         * @constructor
         * @param {mond.IMaterialCoefficientGetKnownCoefficientResponse=} [properties] Properties to set
         */
        function MaterialCoefficientGetKnownCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetKnownCoefficientResponse coefficient.
         * @member {number} coefficient
         * @memberof mond.MaterialCoefficientGetKnownCoefficientResponse
         * @instance
         */
        MaterialCoefficientGetKnownCoefficientResponse.prototype.coefficient = 0;

        /**
         * MaterialCoefficientGetKnownCoefficientResponse heat.
         * @member {number} heat
         * @memberof mond.MaterialCoefficientGetKnownCoefficientResponse
         * @instance
         */
        MaterialCoefficientGetKnownCoefficientResponse.prototype.heat = 0;

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientGetKnownCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientGetKnownCoefficientResponse} MaterialCoefficientGetKnownCoefficientResponse
         */
        MaterialCoefficientGetKnownCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientGetKnownCoefficientResponse)
                return object;
            let message = new $root.mond.MaterialCoefficientGetKnownCoefficientResponse();
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            if (object.heat != null)
                message.heat = Number(object.heat);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientGetKnownCoefficientResponse
         * @static
         * @param {mond.MaterialCoefficientGetKnownCoefficientResponse} message MaterialCoefficientGetKnownCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetKnownCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.coefficient = 0;
                object.heat = 0;
            }
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            if (message.heat != null && message.hasOwnProperty("heat"))
                object.heat = options.json && !isFinite(message.heat) ? String(message.heat) : message.heat;
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientGetKnownCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownCoefficientResponse;
    })();

    mond.MaterialCoefficientGetKnownNamesRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownNamesRequest.
         * @memberof mond
         * @interface IMaterialCoefficientGetKnownNamesRequest
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesRequest.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientGetKnownNamesRequest.
         * @implements IMaterialCoefficientGetKnownNamesRequest
         * @constructor
         * @param {mond.IMaterialCoefficientGetKnownNamesRequest=} [properties] Properties to set
         */
        function MaterialCoefficientGetKnownNamesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialCoefficientGetKnownNamesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientGetKnownNamesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientGetKnownNamesRequest} MaterialCoefficientGetKnownNamesRequest
         */
        MaterialCoefficientGetKnownNamesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientGetKnownNamesRequest)
                return object;
            return new $root.mond.MaterialCoefficientGetKnownNamesRequest();
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientGetKnownNamesRequest
         * @static
         * @param {mond.MaterialCoefficientGetKnownNamesRequest} message MaterialCoefficientGetKnownNamesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetKnownNamesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialCoefficientGetKnownNamesRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientGetKnownNamesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownNamesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownNamesRequest;
    })();

    mond.Name = (function() {

        /**
         * Properties of a Name.
         * @memberof mond
         * @interface IName
         * @property {string|null} [name] Name name
         * @property {string|null} [code] Name code
         */

        /**
         * Constructs a new Name.
         * @memberof mond
         * @classdesc Represents a Name.
         * @implements IName
         * @constructor
         * @param {mond.IName=} [properties] Properties to set
         */
        function Name(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Name name.
         * @member {string} name
         * @memberof mond.Name
         * @instance
         */
        Name.prototype.name = "";

        /**
         * Name code.
         * @member {string} code
         * @memberof mond.Name
         * @instance
         */
        Name.prototype.code = "";

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.Name
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.Name} Name
         */
        Name.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.Name)
                return object;
            let message = new $root.mond.Name();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.Name
         * @static
         * @param {mond.Name} message Name
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Name.toObject = function toObject(message, options) {
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
         * Converts this Name to JSON.
         * @function toJSON
         * @memberof mond.Name
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Name.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Name;
    })();

    mond.MaterialCoefficientGetKnownNamesResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownNamesResponse.
         * @memberof mond
         * @interface IMaterialCoefficientGetKnownNamesResponse
         * @property {Array.<mond.IName>|null} [names] MaterialCoefficientGetKnownNamesResponse names
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesResponse.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientGetKnownNamesResponse.
         * @implements IMaterialCoefficientGetKnownNamesResponse
         * @constructor
         * @param {mond.IMaterialCoefficientGetKnownNamesResponse=} [properties] Properties to set
         */
        function MaterialCoefficientGetKnownNamesResponse(properties) {
            this.names = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetKnownNamesResponse names.
         * @member {Array.<mond.IName>} names
         * @memberof mond.MaterialCoefficientGetKnownNamesResponse
         * @instance
         */
        MaterialCoefficientGetKnownNamesResponse.prototype.names = $util.emptyArray;

        /**
         * Creates a MaterialCoefficientGetKnownNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientGetKnownNamesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientGetKnownNamesResponse} MaterialCoefficientGetKnownNamesResponse
         */
        MaterialCoefficientGetKnownNamesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientGetKnownNamesResponse)
                return object;
            let message = new $root.mond.MaterialCoefficientGetKnownNamesResponse();
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".mond.MaterialCoefficientGetKnownNamesResponse.names: array expected");
                message.names = [];
                for (let i = 0; i < object.names.length; ++i) {
                    if (typeof object.names[i] !== "object")
                        throw TypeError(".mond.MaterialCoefficientGetKnownNamesResponse.names: object expected");
                    message.names[i] = $root.mond.Name.fromObject(object.names[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientGetKnownNamesResponse
         * @static
         * @param {mond.MaterialCoefficientGetKnownNamesResponse} message MaterialCoefficientGetKnownNamesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetKnownNamesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.names = [];
            if (message.names && message.names.length) {
                object.names = [];
                for (let j = 0; j < message.names.length; ++j)
                    object.names[j] = $root.mond.Name.toObject(message.names[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetKnownNamesResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientGetKnownNamesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownNamesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownNamesResponse;
    })();

    mond.SpecialMaterialHazardRequest = (function() {

        /**
         * Properties of a SpecialMaterialHazardRequest.
         * @memberof mond
         * @interface ISpecialMaterialHazardRequest
         * @property {number|null} [a] SpecialMaterialHazardRequest a
         * @property {number|null} [b] SpecialMaterialHazardRequest b
         * @property {number|null} [c] SpecialMaterialHazardRequest c
         * @property {number|null} [d] SpecialMaterialHazardRequest d
         * @property {number|null} [e] SpecialMaterialHazardRequest e
         * @property {number|null} [f] SpecialMaterialHazardRequest f
         * @property {number|null} [g] SpecialMaterialHazardRequest g
         * @property {number|null} [h] SpecialMaterialHazardRequest h
         * @property {number|null} [i] SpecialMaterialHazardRequest i
         * @property {number|null} [j] SpecialMaterialHazardRequest j
         */

        /**
         * Constructs a new SpecialMaterialHazardRequest.
         * @memberof mond
         * @classdesc Represents a SpecialMaterialHazardRequest.
         * @implements ISpecialMaterialHazardRequest
         * @constructor
         * @param {mond.ISpecialMaterialHazardRequest=} [properties] Properties to set
         */
        function SpecialMaterialHazardRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialMaterialHazardRequest a.
         * @member {number} a
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.a = 0;

        /**
         * SpecialMaterialHazardRequest b.
         * @member {number} b
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.b = 0;

        /**
         * SpecialMaterialHazardRequest c.
         * @member {number} c
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.c = 0;

        /**
         * SpecialMaterialHazardRequest d.
         * @member {number} d
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.d = 0;

        /**
         * SpecialMaterialHazardRequest e.
         * @member {number} e
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.e = 0;

        /**
         * SpecialMaterialHazardRequest f.
         * @member {number} f
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.f = 0;

        /**
         * SpecialMaterialHazardRequest g.
         * @member {number} g
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.g = 0;

        /**
         * SpecialMaterialHazardRequest h.
         * @member {number} h
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.h = 0;

        /**
         * SpecialMaterialHazardRequest i.
         * @member {number} i
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.i = 0;

        /**
         * SpecialMaterialHazardRequest j.
         * @member {number} j
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         */
        SpecialMaterialHazardRequest.prototype.j = 0;

        /**
         * Creates a SpecialMaterialHazardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.SpecialMaterialHazardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.SpecialMaterialHazardRequest} SpecialMaterialHazardRequest
         */
        SpecialMaterialHazardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.SpecialMaterialHazardRequest)
                return object;
            let message = new $root.mond.SpecialMaterialHazardRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.f != null)
                message.f = Number(object.f);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.h != null)
                message.h = Number(object.h);
            if (object.i != null)
                message.i = Number(object.i);
            if (object.j != null)
                message.j = Number(object.j);
            return message;
        };

        /**
         * Creates a plain object from a SpecialMaterialHazardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.SpecialMaterialHazardRequest
         * @static
         * @param {mond.SpecialMaterialHazardRequest} message SpecialMaterialHazardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialMaterialHazardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
                object.f = 0;
                object.g = 0;
                object.h = 0;
                object.i = 0;
                object.j = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            if (message.i != null && message.hasOwnProperty("i"))
                object.i = options.json && !isFinite(message.i) ? String(message.i) : message.i;
            if (message.j != null && message.hasOwnProperty("j"))
                object.j = options.json && !isFinite(message.j) ? String(message.j) : message.j;
            return object;
        };

        /**
         * Converts this SpecialMaterialHazardRequest to JSON.
         * @function toJSON
         * @memberof mond.SpecialMaterialHazardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialMaterialHazardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialMaterialHazardRequest;
    })();

    mond.SpecialMaterialHazardResponse = (function() {

        /**
         * Properties of a SpecialMaterialHazardResponse.
         * @memberof mond
         * @interface ISpecialMaterialHazardResponse
         * @property {number|null} [M] SpecialMaterialHazardResponse M
         */

        /**
         * Constructs a new SpecialMaterialHazardResponse.
         * @memberof mond
         * @classdesc Represents a SpecialMaterialHazardResponse.
         * @implements ISpecialMaterialHazardResponse
         * @constructor
         * @param {mond.ISpecialMaterialHazardResponse=} [properties] Properties to set
         */
        function SpecialMaterialHazardResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialMaterialHazardResponse M.
         * @member {number} M
         * @memberof mond.SpecialMaterialHazardResponse
         * @instance
         */
        SpecialMaterialHazardResponse.prototype.M = 0;

        /**
         * Creates a SpecialMaterialHazardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.SpecialMaterialHazardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.SpecialMaterialHazardResponse} SpecialMaterialHazardResponse
         */
        SpecialMaterialHazardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.SpecialMaterialHazardResponse)
                return object;
            let message = new $root.mond.SpecialMaterialHazardResponse();
            if (object.M != null)
                message.M = Number(object.M);
            return message;
        };

        /**
         * Creates a plain object from a SpecialMaterialHazardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.SpecialMaterialHazardResponse
         * @static
         * @param {mond.SpecialMaterialHazardResponse} message SpecialMaterialHazardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialMaterialHazardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.M = 0;
            if (message.M != null && message.hasOwnProperty("M"))
                object.M = options.json && !isFinite(message.M) ? String(message.M) : message.M;
            return object;
        };

        /**
         * Converts this SpecialMaterialHazardResponse to JSON.
         * @function toJSON
         * @memberof mond.SpecialMaterialHazardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialMaterialHazardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialMaterialHazardResponse;
    })();

    mond.GeneralProcessHazardRequest = (function() {

        /**
         * Properties of a GeneralProcessHazardRequest.
         * @memberof mond
         * @interface IGeneralProcessHazardRequest
         * @property {number|null} [a] GeneralProcessHazardRequest a
         * @property {number|null} [b] GeneralProcessHazardRequest b
         * @property {number|null} [c] GeneralProcessHazardRequest c
         * @property {number|null} [d] GeneralProcessHazardRequest d
         * @property {number|null} [e] GeneralProcessHazardRequest e
         * @property {number|null} [f] GeneralProcessHazardRequest f
         */

        /**
         * Constructs a new GeneralProcessHazardRequest.
         * @memberof mond
         * @classdesc Represents a GeneralProcessHazardRequest.
         * @implements IGeneralProcessHazardRequest
         * @constructor
         * @param {mond.IGeneralProcessHazardRequest=} [properties] Properties to set
         */
        function GeneralProcessHazardRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneralProcessHazardRequest a.
         * @member {number} a
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         */
        GeneralProcessHazardRequest.prototype.a = 0;

        /**
         * GeneralProcessHazardRequest b.
         * @member {number} b
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         */
        GeneralProcessHazardRequest.prototype.b = 0;

        /**
         * GeneralProcessHazardRequest c.
         * @member {number} c
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         */
        GeneralProcessHazardRequest.prototype.c = 0;

        /**
         * GeneralProcessHazardRequest d.
         * @member {number} d
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         */
        GeneralProcessHazardRequest.prototype.d = 0;

        /**
         * GeneralProcessHazardRequest e.
         * @member {number} e
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         */
        GeneralProcessHazardRequest.prototype.e = 0;

        /**
         * GeneralProcessHazardRequest f.
         * @member {number} f
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         */
        GeneralProcessHazardRequest.prototype.f = 0;

        /**
         * Creates a GeneralProcessHazardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.GeneralProcessHazardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.GeneralProcessHazardRequest} GeneralProcessHazardRequest
         */
        GeneralProcessHazardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.GeneralProcessHazardRequest)
                return object;
            let message = new $root.mond.GeneralProcessHazardRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.f != null)
                message.f = Number(object.f);
            return message;
        };

        /**
         * Creates a plain object from a GeneralProcessHazardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.GeneralProcessHazardRequest
         * @static
         * @param {mond.GeneralProcessHazardRequest} message GeneralProcessHazardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneralProcessHazardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
                object.f = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            return object;
        };

        /**
         * Converts this GeneralProcessHazardRequest to JSON.
         * @function toJSON
         * @memberof mond.GeneralProcessHazardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneralProcessHazardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneralProcessHazardRequest;
    })();

    mond.GeneralProcessHazardResponse = (function() {

        /**
         * Properties of a GeneralProcessHazardResponse.
         * @memberof mond
         * @interface IGeneralProcessHazardResponse
         * @property {number|null} [P] GeneralProcessHazardResponse P
         */

        /**
         * Constructs a new GeneralProcessHazardResponse.
         * @memberof mond
         * @classdesc Represents a GeneralProcessHazardResponse.
         * @implements IGeneralProcessHazardResponse
         * @constructor
         * @param {mond.IGeneralProcessHazardResponse=} [properties] Properties to set
         */
        function GeneralProcessHazardResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneralProcessHazardResponse P.
         * @member {number} P
         * @memberof mond.GeneralProcessHazardResponse
         * @instance
         */
        GeneralProcessHazardResponse.prototype.P = 0;

        /**
         * Creates a GeneralProcessHazardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.GeneralProcessHazardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.GeneralProcessHazardResponse} GeneralProcessHazardResponse
         */
        GeneralProcessHazardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.GeneralProcessHazardResponse)
                return object;
            let message = new $root.mond.GeneralProcessHazardResponse();
            if (object.P != null)
                message.P = Number(object.P);
            return message;
        };

        /**
         * Creates a plain object from a GeneralProcessHazardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.GeneralProcessHazardResponse
         * @static
         * @param {mond.GeneralProcessHazardResponse} message GeneralProcessHazardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneralProcessHazardResponse.toObject = function toObject(message, options) {
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
         * Converts this GeneralProcessHazardResponse to JSON.
         * @function toJSON
         * @memberof mond.GeneralProcessHazardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneralProcessHazardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneralProcessHazardResponse;
    })();

    mond.SpecialProcessHazardRequest = (function() {

        /**
         * Properties of a SpecialProcessHazardRequest.
         * @memberof mond
         * @interface ISpecialProcessHazardRequest
         * @property {number|null} [a] SpecialProcessHazardRequest a
         * @property {number|null} [b] SpecialProcessHazardRequest b
         * @property {number|null} [c] SpecialProcessHazardRequest c
         * @property {number|null} [d] SpecialProcessHazardRequest d
         * @property {number|null} [e] SpecialProcessHazardRequest e
         * @property {number|null} [f] SpecialProcessHazardRequest f
         * @property {number|null} [g] SpecialProcessHazardRequest g
         * @property {number|null} [h] SpecialProcessHazardRequest h
         * @property {number|null} [i] SpecialProcessHazardRequest i
         * @property {number|null} [j] SpecialProcessHazardRequest j
         * @property {number|null} [k] SpecialProcessHazardRequest k
         * @property {number|null} [l] SpecialProcessHazardRequest l
         * @property {number|null} [m] SpecialProcessHazardRequest m
         * @property {number|null} [n] SpecialProcessHazardRequest n
         */

        /**
         * Constructs a new SpecialProcessHazardRequest.
         * @memberof mond
         * @classdesc Represents a SpecialProcessHazardRequest.
         * @implements ISpecialProcessHazardRequest
         * @constructor
         * @param {mond.ISpecialProcessHazardRequest=} [properties] Properties to set
         */
        function SpecialProcessHazardRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialProcessHazardRequest a.
         * @member {number} a
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.a = 0;

        /**
         * SpecialProcessHazardRequest b.
         * @member {number} b
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.b = 0;

        /**
         * SpecialProcessHazardRequest c.
         * @member {number} c
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.c = 0;

        /**
         * SpecialProcessHazardRequest d.
         * @member {number} d
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.d = 0;

        /**
         * SpecialProcessHazardRequest e.
         * @member {number} e
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.e = 0;

        /**
         * SpecialProcessHazardRequest f.
         * @member {number} f
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.f = 0;

        /**
         * SpecialProcessHazardRequest g.
         * @member {number} g
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.g = 0;

        /**
         * SpecialProcessHazardRequest h.
         * @member {number} h
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.h = 0;

        /**
         * SpecialProcessHazardRequest i.
         * @member {number} i
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.i = 0;

        /**
         * SpecialProcessHazardRequest j.
         * @member {number} j
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.j = 0;

        /**
         * SpecialProcessHazardRequest k.
         * @member {number} k
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.k = 0;

        /**
         * SpecialProcessHazardRequest l.
         * @member {number} l
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.l = 0;

        /**
         * SpecialProcessHazardRequest m.
         * @member {number} m
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.m = 0;

        /**
         * SpecialProcessHazardRequest n.
         * @member {number} n
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         */
        SpecialProcessHazardRequest.prototype.n = 0;

        /**
         * Creates a SpecialProcessHazardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.SpecialProcessHazardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.SpecialProcessHazardRequest} SpecialProcessHazardRequest
         */
        SpecialProcessHazardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.SpecialProcessHazardRequest)
                return object;
            let message = new $root.mond.SpecialProcessHazardRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.f != null)
                message.f = Number(object.f);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.h != null)
                message.h = Number(object.h);
            if (object.i != null)
                message.i = Number(object.i);
            if (object.j != null)
                message.j = Number(object.j);
            if (object.k != null)
                message.k = Number(object.k);
            if (object.l != null)
                message.l = Number(object.l);
            if (object.m != null)
                message.m = Number(object.m);
            if (object.n != null)
                message.n = Number(object.n);
            return message;
        };

        /**
         * Creates a plain object from a SpecialProcessHazardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.SpecialProcessHazardRequest
         * @static
         * @param {mond.SpecialProcessHazardRequest} message SpecialProcessHazardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialProcessHazardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
                object.f = 0;
                object.g = 0;
                object.h = 0;
                object.i = 0;
                object.j = 0;
                object.k = 0;
                object.l = 0;
                object.m = 0;
                object.n = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            if (message.i != null && message.hasOwnProperty("i"))
                object.i = options.json && !isFinite(message.i) ? String(message.i) : message.i;
            if (message.j != null && message.hasOwnProperty("j"))
                object.j = options.json && !isFinite(message.j) ? String(message.j) : message.j;
            if (message.k != null && message.hasOwnProperty("k"))
                object.k = options.json && !isFinite(message.k) ? String(message.k) : message.k;
            if (message.l != null && message.hasOwnProperty("l"))
                object.l = options.json && !isFinite(message.l) ? String(message.l) : message.l;
            if (message.m != null && message.hasOwnProperty("m"))
                object.m = options.json && !isFinite(message.m) ? String(message.m) : message.m;
            if (message.n != null && message.hasOwnProperty("n"))
                object.n = options.json && !isFinite(message.n) ? String(message.n) : message.n;
            return object;
        };

        /**
         * Converts this SpecialProcessHazardRequest to JSON.
         * @function toJSON
         * @memberof mond.SpecialProcessHazardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialProcessHazardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialProcessHazardRequest;
    })();

    mond.SpecialProcessHazardResponse = (function() {

        /**
         * Properties of a SpecialProcessHazardResponse.
         * @memberof mond
         * @interface ISpecialProcessHazardResponse
         * @property {number|null} [S] SpecialProcessHazardResponse S
         */

        /**
         * Constructs a new SpecialProcessHazardResponse.
         * @memberof mond
         * @classdesc Represents a SpecialProcessHazardResponse.
         * @implements ISpecialProcessHazardResponse
         * @constructor
         * @param {mond.ISpecialProcessHazardResponse=} [properties] Properties to set
         */
        function SpecialProcessHazardResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialProcessHazardResponse S.
         * @member {number} S
         * @memberof mond.SpecialProcessHazardResponse
         * @instance
         */
        SpecialProcessHazardResponse.prototype.S = 0;

        /**
         * Creates a SpecialProcessHazardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.SpecialProcessHazardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.SpecialProcessHazardResponse} SpecialProcessHazardResponse
         */
        SpecialProcessHazardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.SpecialProcessHazardResponse)
                return object;
            let message = new $root.mond.SpecialProcessHazardResponse();
            if (object.S != null)
                message.S = Number(object.S);
            return message;
        };

        /**
         * Creates a plain object from a SpecialProcessHazardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.SpecialProcessHazardResponse
         * @static
         * @param {mond.SpecialProcessHazardResponse} message SpecialProcessHazardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialProcessHazardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.S = 0;
            if (message.S != null && message.hasOwnProperty("S"))
                object.S = options.json && !isFinite(message.S) ? String(message.S) : message.S;
            return object;
        };

        /**
         * Converts this SpecialProcessHazardResponse to JSON.
         * @function toJSON
         * @memberof mond.SpecialProcessHazardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialProcessHazardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialProcessHazardResponse;
    })();

    mond.MaterialCoefficientRequest = (function() {

        /**
         * Properties of a MaterialCoefficientRequest.
         * @memberof mond
         * @interface IMaterialCoefficientRequest
         * @property {number|null} [Hc] MaterialCoefficientRequest Hc
         */

        /**
         * Constructs a new MaterialCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientRequest.
         * @implements IMaterialCoefficientRequest
         * @constructor
         * @param {mond.IMaterialCoefficientRequest=} [properties] Properties to set
         */
        function MaterialCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientRequest Hc.
         * @member {number} Hc
         * @memberof mond.MaterialCoefficientRequest
         * @instance
         */
        MaterialCoefficientRequest.prototype.Hc = 0;

        /**
         * Creates a MaterialCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientRequest} MaterialCoefficientRequest
         */
        MaterialCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientRequest)
                return object;
            let message = new $root.mond.MaterialCoefficientRequest();
            if (object.Hc != null)
                message.Hc = Number(object.Hc);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientRequest
         * @static
         * @param {mond.MaterialCoefficientRequest} message MaterialCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.Hc = 0;
            if (message.Hc != null && message.hasOwnProperty("Hc"))
                object.Hc = options.json && !isFinite(message.Hc) ? String(message.Hc) : message.Hc;
            return object;
        };

        /**
         * Converts this MaterialCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientRequest;
    })();

    mond.MaterialCoefficientResponse = (function() {

        /**
         * Properties of a MaterialCoefficientResponse.
         * @memberof mond
         * @interface IMaterialCoefficientResponse
         * @property {number|null} [B] MaterialCoefficientResponse B
         */

        /**
         * Constructs a new MaterialCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a MaterialCoefficientResponse.
         * @implements IMaterialCoefficientResponse
         * @constructor
         * @param {mond.IMaterialCoefficientResponse=} [properties] Properties to set
         */
        function MaterialCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientResponse B.
         * @member {number} B
         * @memberof mond.MaterialCoefficientResponse
         * @instance
         */
        MaterialCoefficientResponse.prototype.B = 0;

        /**
         * Creates a MaterialCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialCoefficientResponse} MaterialCoefficientResponse
         */
        MaterialCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialCoefficientResponse)
                return object;
            let message = new $root.mond.MaterialCoefficientResponse();
            if (object.B != null)
                message.B = Number(object.B);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialCoefficientResponse
         * @static
         * @param {mond.MaterialCoefficientResponse} message MaterialCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.B = 0;
            if (message.B != null && message.hasOwnProperty("B"))
                object.B = options.json && !isFinite(message.B) ? String(message.B) : message.B;
            return object;
        };

        /**
         * Converts this MaterialCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientResponse;
    })();

    mond.ArrangementHazardCoefficientRequest = (function() {

        /**
         * Properties of an ArrangementHazardCoefficientRequest.
         * @memberof mond
         * @interface IArrangementHazardCoefficientRequest
         * @property {number|null} [a] ArrangementHazardCoefficientRequest a
         * @property {number|null} [b] ArrangementHazardCoefficientRequest b
         * @property {number|null} [c] ArrangementHazardCoefficientRequest c
         * @property {number|null} [d] ArrangementHazardCoefficientRequest d
         * @property {number|null} [e] ArrangementHazardCoefficientRequest e
         */

        /**
         * Constructs a new ArrangementHazardCoefficientRequest.
         * @memberof mond
         * @classdesc Represents an ArrangementHazardCoefficientRequest.
         * @implements IArrangementHazardCoefficientRequest
         * @constructor
         * @param {mond.IArrangementHazardCoefficientRequest=} [properties] Properties to set
         */
        function ArrangementHazardCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArrangementHazardCoefficientRequest a.
         * @member {number} a
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @instance
         */
        ArrangementHazardCoefficientRequest.prototype.a = 0;

        /**
         * ArrangementHazardCoefficientRequest b.
         * @member {number} b
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @instance
         */
        ArrangementHazardCoefficientRequest.prototype.b = 0;

        /**
         * ArrangementHazardCoefficientRequest c.
         * @member {number} c
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @instance
         */
        ArrangementHazardCoefficientRequest.prototype.c = 0;

        /**
         * ArrangementHazardCoefficientRequest d.
         * @member {number} d
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @instance
         */
        ArrangementHazardCoefficientRequest.prototype.d = 0;

        /**
         * ArrangementHazardCoefficientRequest e.
         * @member {number} e
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @instance
         */
        ArrangementHazardCoefficientRequest.prototype.e = 0;

        /**
         * Creates an ArrangementHazardCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.ArrangementHazardCoefficientRequest} ArrangementHazardCoefficientRequest
         */
        ArrangementHazardCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.ArrangementHazardCoefficientRequest)
                return object;
            let message = new $root.mond.ArrangementHazardCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            return message;
        };

        /**
         * Creates a plain object from an ArrangementHazardCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @static
         * @param {mond.ArrangementHazardCoefficientRequest} message ArrangementHazardCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArrangementHazardCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            return object;
        };

        /**
         * Converts this ArrangementHazardCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.ArrangementHazardCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArrangementHazardCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArrangementHazardCoefficientRequest;
    })();

    mond.ArrangementHazardCoefficientResponse = (function() {

        /**
         * Properties of an ArrangementHazardCoefficientResponse.
         * @memberof mond
         * @interface IArrangementHazardCoefficientResponse
         * @property {number|null} [L] ArrangementHazardCoefficientResponse L
         */

        /**
         * Constructs a new ArrangementHazardCoefficientResponse.
         * @memberof mond
         * @classdesc Represents an ArrangementHazardCoefficientResponse.
         * @implements IArrangementHazardCoefficientResponse
         * @constructor
         * @param {mond.IArrangementHazardCoefficientResponse=} [properties] Properties to set
         */
        function ArrangementHazardCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArrangementHazardCoefficientResponse L.
         * @member {number} L
         * @memberof mond.ArrangementHazardCoefficientResponse
         * @instance
         */
        ArrangementHazardCoefficientResponse.prototype.L = 0;

        /**
         * Creates an ArrangementHazardCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.ArrangementHazardCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.ArrangementHazardCoefficientResponse} ArrangementHazardCoefficientResponse
         */
        ArrangementHazardCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.ArrangementHazardCoefficientResponse)
                return object;
            let message = new $root.mond.ArrangementHazardCoefficientResponse();
            if (object.L != null)
                message.L = Number(object.L);
            return message;
        };

        /**
         * Creates a plain object from an ArrangementHazardCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.ArrangementHazardCoefficientResponse
         * @static
         * @param {mond.ArrangementHazardCoefficientResponse} message ArrangementHazardCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArrangementHazardCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.L = 0;
            if (message.L != null && message.hasOwnProperty("L"))
                object.L = options.json && !isFinite(message.L) ? String(message.L) : message.L;
            return object;
        };

        /**
         * Converts this ArrangementHazardCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.ArrangementHazardCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArrangementHazardCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArrangementHazardCoefficientResponse;
    })();

    mond.PoisonHazardCoefficientRequest = (function() {

        /**
         * Properties of a PoisonHazardCoefficientRequest.
         * @memberof mond
         * @interface IPoisonHazardCoefficientRequest
         * @property {number|null} [a] PoisonHazardCoefficientRequest a
         * @property {number|null} [b] PoisonHazardCoefficientRequest b
         * @property {number|null} [c] PoisonHazardCoefficientRequest c
         * @property {number|null} [d] PoisonHazardCoefficientRequest d
         * @property {number|null} [e] PoisonHazardCoefficientRequest e
         */

        /**
         * Constructs a new PoisonHazardCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a PoisonHazardCoefficientRequest.
         * @implements IPoisonHazardCoefficientRequest
         * @constructor
         * @param {mond.IPoisonHazardCoefficientRequest=} [properties] Properties to set
         */
        function PoisonHazardCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoisonHazardCoefficientRequest a.
         * @member {number} a
         * @memberof mond.PoisonHazardCoefficientRequest
         * @instance
         */
        PoisonHazardCoefficientRequest.prototype.a = 0;

        /**
         * PoisonHazardCoefficientRequest b.
         * @member {number} b
         * @memberof mond.PoisonHazardCoefficientRequest
         * @instance
         */
        PoisonHazardCoefficientRequest.prototype.b = 0;

        /**
         * PoisonHazardCoefficientRequest c.
         * @member {number} c
         * @memberof mond.PoisonHazardCoefficientRequest
         * @instance
         */
        PoisonHazardCoefficientRequest.prototype.c = 0;

        /**
         * PoisonHazardCoefficientRequest d.
         * @member {number} d
         * @memberof mond.PoisonHazardCoefficientRequest
         * @instance
         */
        PoisonHazardCoefficientRequest.prototype.d = 0;

        /**
         * PoisonHazardCoefficientRequest e.
         * @member {number} e
         * @memberof mond.PoisonHazardCoefficientRequest
         * @instance
         */
        PoisonHazardCoefficientRequest.prototype.e = 0;

        /**
         * Creates a PoisonHazardCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.PoisonHazardCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.PoisonHazardCoefficientRequest} PoisonHazardCoefficientRequest
         */
        PoisonHazardCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.PoisonHazardCoefficientRequest)
                return object;
            let message = new $root.mond.PoisonHazardCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            return message;
        };

        /**
         * Creates a plain object from a PoisonHazardCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.PoisonHazardCoefficientRequest
         * @static
         * @param {mond.PoisonHazardCoefficientRequest} message PoisonHazardCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoisonHazardCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            return object;
        };

        /**
         * Converts this PoisonHazardCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.PoisonHazardCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoisonHazardCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoisonHazardCoefficientRequest;
    })();

    mond.PoisonHazardCoefficientResponse = (function() {

        /**
         * Properties of a PoisonHazardCoefficientResponse.
         * @memberof mond
         * @interface IPoisonHazardCoefficientResponse
         * @property {number|null} [T] PoisonHazardCoefficientResponse T
         */

        /**
         * Constructs a new PoisonHazardCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a PoisonHazardCoefficientResponse.
         * @implements IPoisonHazardCoefficientResponse
         * @constructor
         * @param {mond.IPoisonHazardCoefficientResponse=} [properties] Properties to set
         */
        function PoisonHazardCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoisonHazardCoefficientResponse T.
         * @member {number} T
         * @memberof mond.PoisonHazardCoefficientResponse
         * @instance
         */
        PoisonHazardCoefficientResponse.prototype.T = 0;

        /**
         * Creates a PoisonHazardCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.PoisonHazardCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.PoisonHazardCoefficientResponse} PoisonHazardCoefficientResponse
         */
        PoisonHazardCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.PoisonHazardCoefficientResponse)
                return object;
            let message = new $root.mond.PoisonHazardCoefficientResponse();
            if (object.T != null)
                message.T = Number(object.T);
            return message;
        };

        /**
         * Creates a plain object from a PoisonHazardCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.PoisonHazardCoefficientResponse
         * @static
         * @param {mond.PoisonHazardCoefficientResponse} message PoisonHazardCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoisonHazardCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.T = 0;
            if (message.T != null && message.hasOwnProperty("T"))
                object.T = options.json && !isFinite(message.T) ? String(message.T) : message.T;
            return object;
        };

        /**
         * Converts this PoisonHazardCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.PoisonHazardCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoisonHazardCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoisonHazardCoefficientResponse;
    })();

    mond.PoisonHazardCoefficientGetTLVTypeExposureRequest = (function() {

        /**
         * Properties of a PoisonHazardCoefficientGetTLVTypeExposureRequest.
         * @memberof mond
         * @interface IPoisonHazardCoefficientGetTLVTypeExposureRequest
         */

        /**
         * Constructs a new PoisonHazardCoefficientGetTLVTypeExposureRequest.
         * @memberof mond
         * @classdesc Represents a PoisonHazardCoefficientGetTLVTypeExposureRequest.
         * @implements IPoisonHazardCoefficientGetTLVTypeExposureRequest
         * @constructor
         * @param {mond.IPoisonHazardCoefficientGetTLVTypeExposureRequest=} [properties] Properties to set
         */
        function PoisonHazardCoefficientGetTLVTypeExposureRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a PoisonHazardCoefficientGetTLVTypeExposureRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.PoisonHazardCoefficientGetTLVTypeExposureRequest} PoisonHazardCoefficientGetTLVTypeExposureRequest
         */
        PoisonHazardCoefficientGetTLVTypeExposureRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.PoisonHazardCoefficientGetTLVTypeExposureRequest)
                return object;
            return new $root.mond.PoisonHazardCoefficientGetTLVTypeExposureRequest();
        };

        /**
         * Creates a plain object from a PoisonHazardCoefficientGetTLVTypeExposureRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureRequest
         * @static
         * @param {mond.PoisonHazardCoefficientGetTLVTypeExposureRequest} message PoisonHazardCoefficientGetTLVTypeExposureRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoisonHazardCoefficientGetTLVTypeExposureRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PoisonHazardCoefficientGetTLVTypeExposureRequest to JSON.
         * @function toJSON
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoisonHazardCoefficientGetTLVTypeExposureRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoisonHazardCoefficientGetTLVTypeExposureRequest;
    })();

    mond.PoisonHazardCoefficientParam = (function() {

        /**
         * Properties of a PoisonHazardCoefficientParam.
         * @memberof mond
         * @interface IPoisonHazardCoefficientParam
         * @property {string|null} [name] PoisonHazardCoefficientParam name
         * @property {number|null} [code] PoisonHazardCoefficientParam code
         */

        /**
         * Constructs a new PoisonHazardCoefficientParam.
         * @memberof mond
         * @classdesc Represents a PoisonHazardCoefficientParam.
         * @implements IPoisonHazardCoefficientParam
         * @constructor
         * @param {mond.IPoisonHazardCoefficientParam=} [properties] Properties to set
         */
        function PoisonHazardCoefficientParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoisonHazardCoefficientParam name.
         * @member {string} name
         * @memberof mond.PoisonHazardCoefficientParam
         * @instance
         */
        PoisonHazardCoefficientParam.prototype.name = "";

        /**
         * PoisonHazardCoefficientParam code.
         * @member {number} code
         * @memberof mond.PoisonHazardCoefficientParam
         * @instance
         */
        PoisonHazardCoefficientParam.prototype.code = 0;

        /**
         * Creates a PoisonHazardCoefficientParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.PoisonHazardCoefficientParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.PoisonHazardCoefficientParam} PoisonHazardCoefficientParam
         */
        PoisonHazardCoefficientParam.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.PoisonHazardCoefficientParam)
                return object;
            let message = new $root.mond.PoisonHazardCoefficientParam();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = Number(object.code);
            return message;
        };

        /**
         * Creates a plain object from a PoisonHazardCoefficientParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.PoisonHazardCoefficientParam
         * @static
         * @param {mond.PoisonHazardCoefficientParam} message PoisonHazardCoefficientParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoisonHazardCoefficientParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.code = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.json && !isFinite(message.code) ? String(message.code) : message.code;
            return object;
        };

        /**
         * Converts this PoisonHazardCoefficientParam to JSON.
         * @function toJSON
         * @memberof mond.PoisonHazardCoefficientParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoisonHazardCoefficientParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoisonHazardCoefficientParam;
    })();

    mond.PoisonHazardCoefficientGetTLVTypeExposureResponse = (function() {

        /**
         * Properties of a PoisonHazardCoefficientGetTLVTypeExposureResponse.
         * @memberof mond
         * @interface IPoisonHazardCoefficientGetTLVTypeExposureResponse
         * @property {Array.<mond.IPoisonHazardCoefficientParam>|null} [tlv] PoisonHazardCoefficientGetTLVTypeExposureResponse tlv
         * @property {Array.<mond.IPoisonHazardCoefficientParam>|null} [type] PoisonHazardCoefficientGetTLVTypeExposureResponse type
         * @property {Array.<mond.IPoisonHazardCoefficientParam>|null} [exposure] PoisonHazardCoefficientGetTLVTypeExposureResponse exposure
         */

        /**
         * Constructs a new PoisonHazardCoefficientGetTLVTypeExposureResponse.
         * @memberof mond
         * @classdesc Represents a PoisonHazardCoefficientGetTLVTypeExposureResponse.
         * @implements IPoisonHazardCoefficientGetTLVTypeExposureResponse
         * @constructor
         * @param {mond.IPoisonHazardCoefficientGetTLVTypeExposureResponse=} [properties] Properties to set
         */
        function PoisonHazardCoefficientGetTLVTypeExposureResponse(properties) {
            this.tlv = [];
            this.type = [];
            this.exposure = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoisonHazardCoefficientGetTLVTypeExposureResponse tlv.
         * @member {Array.<mond.IPoisonHazardCoefficientParam>} tlv
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @instance
         */
        PoisonHazardCoefficientGetTLVTypeExposureResponse.prototype.tlv = $util.emptyArray;

        /**
         * PoisonHazardCoefficientGetTLVTypeExposureResponse type.
         * @member {Array.<mond.IPoisonHazardCoefficientParam>} type
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @instance
         */
        PoisonHazardCoefficientGetTLVTypeExposureResponse.prototype.type = $util.emptyArray;

        /**
         * PoisonHazardCoefficientGetTLVTypeExposureResponse exposure.
         * @member {Array.<mond.IPoisonHazardCoefficientParam>} exposure
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @instance
         */
        PoisonHazardCoefficientGetTLVTypeExposureResponse.prototype.exposure = $util.emptyArray;

        /**
         * Creates a PoisonHazardCoefficientGetTLVTypeExposureResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.PoisonHazardCoefficientGetTLVTypeExposureResponse} PoisonHazardCoefficientGetTLVTypeExposureResponse
         */
        PoisonHazardCoefficientGetTLVTypeExposureResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.PoisonHazardCoefficientGetTLVTypeExposureResponse)
                return object;
            let message = new $root.mond.PoisonHazardCoefficientGetTLVTypeExposureResponse();
            if (object.tlv) {
                if (!Array.isArray(object.tlv))
                    throw TypeError(".mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.tlv: array expected");
                message.tlv = [];
                for (let i = 0; i < object.tlv.length; ++i) {
                    if (typeof object.tlv[i] !== "object")
                        throw TypeError(".mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.tlv: object expected");
                    message.tlv[i] = $root.mond.PoisonHazardCoefficientParam.fromObject(object.tlv[i]);
                }
            }
            if (object.type) {
                if (!Array.isArray(object.type))
                    throw TypeError(".mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.type: array expected");
                message.type = [];
                for (let i = 0; i < object.type.length; ++i) {
                    if (typeof object.type[i] !== "object")
                        throw TypeError(".mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.type: object expected");
                    message.type[i] = $root.mond.PoisonHazardCoefficientParam.fromObject(object.type[i]);
                }
            }
            if (object.exposure) {
                if (!Array.isArray(object.exposure))
                    throw TypeError(".mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.exposure: array expected");
                message.exposure = [];
                for (let i = 0; i < object.exposure.length; ++i) {
                    if (typeof object.exposure[i] !== "object")
                        throw TypeError(".mond.PoisonHazardCoefficientGetTLVTypeExposureResponse.exposure: object expected");
                    message.exposure[i] = $root.mond.PoisonHazardCoefficientParam.fromObject(object.exposure[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PoisonHazardCoefficientGetTLVTypeExposureResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @static
         * @param {mond.PoisonHazardCoefficientGetTLVTypeExposureResponse} message PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoisonHazardCoefficientGetTLVTypeExposureResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.tlv = [];
                object.type = [];
                object.exposure = [];
            }
            if (message.tlv && message.tlv.length) {
                object.tlv = [];
                for (let j = 0; j < message.tlv.length; ++j)
                    object.tlv[j] = $root.mond.PoisonHazardCoefficientParam.toObject(message.tlv[j], options);
            }
            if (message.type && message.type.length) {
                object.type = [];
                for (let j = 0; j < message.type.length; ++j)
                    object.type[j] = $root.mond.PoisonHazardCoefficientParam.toObject(message.type[j], options);
            }
            if (message.exposure && message.exposure.length) {
                object.exposure = [];
                for (let j = 0; j < message.exposure.length; ++j)
                    object.exposure[j] = $root.mond.PoisonHazardCoefficientParam.toObject(message.exposure[j], options);
            }
            return object;
        };

        /**
         * Converts this PoisonHazardCoefficientGetTLVTypeExposureResponse to JSON.
         * @function toJSON
         * @memberof mond.PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoisonHazardCoefficientGetTLVTypeExposureResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoisonHazardCoefficientGetTLVTypeExposureResponse;
    })();

    mond.ContainerSystemCoefficientRequest = (function() {

        /**
         * Properties of a ContainerSystemCoefficientRequest.
         * @memberof mond
         * @interface IContainerSystemCoefficientRequest
         * @property {number|null} [a] ContainerSystemCoefficientRequest a
         * @property {number|null} [b] ContainerSystemCoefficientRequest b
         * @property {number|null} [c] ContainerSystemCoefficientRequest c
         * @property {number|null} [d] ContainerSystemCoefficientRequest d
         * @property {number|null} [e] ContainerSystemCoefficientRequest e
         * @property {number|null} [f] ContainerSystemCoefficientRequest f
         */

        /**
         * Constructs a new ContainerSystemCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a ContainerSystemCoefficientRequest.
         * @implements IContainerSystemCoefficientRequest
         * @constructor
         * @param {mond.IContainerSystemCoefficientRequest=} [properties] Properties to set
         */
        function ContainerSystemCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContainerSystemCoefficientRequest a.
         * @member {number} a
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         */
        ContainerSystemCoefficientRequest.prototype.a = 0;

        /**
         * ContainerSystemCoefficientRequest b.
         * @member {number} b
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         */
        ContainerSystemCoefficientRequest.prototype.b = 0;

        /**
         * ContainerSystemCoefficientRequest c.
         * @member {number} c
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         */
        ContainerSystemCoefficientRequest.prototype.c = 0;

        /**
         * ContainerSystemCoefficientRequest d.
         * @member {number} d
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         */
        ContainerSystemCoefficientRequest.prototype.d = 0;

        /**
         * ContainerSystemCoefficientRequest e.
         * @member {number} e
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         */
        ContainerSystemCoefficientRequest.prototype.e = 0;

        /**
         * ContainerSystemCoefficientRequest f.
         * @member {number} f
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         */
        ContainerSystemCoefficientRequest.prototype.f = 0;

        /**
         * Creates a ContainerSystemCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.ContainerSystemCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.ContainerSystemCoefficientRequest} ContainerSystemCoefficientRequest
         */
        ContainerSystemCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.ContainerSystemCoefficientRequest)
                return object;
            let message = new $root.mond.ContainerSystemCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.f != null)
                message.f = Number(object.f);
            return message;
        };

        /**
         * Creates a plain object from a ContainerSystemCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.ContainerSystemCoefficientRequest
         * @static
         * @param {mond.ContainerSystemCoefficientRequest} message ContainerSystemCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContainerSystemCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
                object.f = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            return object;
        };

        /**
         * Converts this ContainerSystemCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.ContainerSystemCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContainerSystemCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContainerSystemCoefficientRequest;
    })();

    mond.ContainerSystemCoefficientResponse = (function() {

        /**
         * Properties of a ContainerSystemCoefficientResponse.
         * @memberof mond
         * @interface IContainerSystemCoefficientResponse
         * @property {number|null} [k1] ContainerSystemCoefficientResponse k1
         */

        /**
         * Constructs a new ContainerSystemCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a ContainerSystemCoefficientResponse.
         * @implements IContainerSystemCoefficientResponse
         * @constructor
         * @param {mond.IContainerSystemCoefficientResponse=} [properties] Properties to set
         */
        function ContainerSystemCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContainerSystemCoefficientResponse k1.
         * @member {number} k1
         * @memberof mond.ContainerSystemCoefficientResponse
         * @instance
         */
        ContainerSystemCoefficientResponse.prototype.k1 = 0;

        /**
         * Creates a ContainerSystemCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.ContainerSystemCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.ContainerSystemCoefficientResponse} ContainerSystemCoefficientResponse
         */
        ContainerSystemCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.ContainerSystemCoefficientResponse)
                return object;
            let message = new $root.mond.ContainerSystemCoefficientResponse();
            if (object.k1 != null)
                message.k1 = Number(object.k1);
            return message;
        };

        /**
         * Creates a plain object from a ContainerSystemCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.ContainerSystemCoefficientResponse
         * @static
         * @param {mond.ContainerSystemCoefficientResponse} message ContainerSystemCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContainerSystemCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.k1 = 0;
            if (message.k1 != null && message.hasOwnProperty("k1"))
                object.k1 = options.json && !isFinite(message.k1) ? String(message.k1) : message.k1;
            return object;
        };

        /**
         * Converts this ContainerSystemCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.ContainerSystemCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContainerSystemCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContainerSystemCoefficientResponse;
    })();

    mond.ProcessManagementCoefficientRequest = (function() {

        /**
         * Properties of a ProcessManagementCoefficientRequest.
         * @memberof mond
         * @interface IProcessManagementCoefficientRequest
         * @property {number|null} [a] ProcessManagementCoefficientRequest a
         * @property {number|null} [b] ProcessManagementCoefficientRequest b
         * @property {number|null} [c] ProcessManagementCoefficientRequest c
         * @property {number|null} [d] ProcessManagementCoefficientRequest d
         * @property {number|null} [e] ProcessManagementCoefficientRequest e
         * @property {number|null} [f] ProcessManagementCoefficientRequest f
         * @property {number|null} [g] ProcessManagementCoefficientRequest g
         * @property {number|null} [h] ProcessManagementCoefficientRequest h
         * @property {number|null} [i] ProcessManagementCoefficientRequest i
         * @property {number|null} [j] ProcessManagementCoefficientRequest j
         */

        /**
         * Constructs a new ProcessManagementCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a ProcessManagementCoefficientRequest.
         * @implements IProcessManagementCoefficientRequest
         * @constructor
         * @param {mond.IProcessManagementCoefficientRequest=} [properties] Properties to set
         */
        function ProcessManagementCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessManagementCoefficientRequest a.
         * @member {number} a
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.a = 0;

        /**
         * ProcessManagementCoefficientRequest b.
         * @member {number} b
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.b = 0;

        /**
         * ProcessManagementCoefficientRequest c.
         * @member {number} c
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.c = 0;

        /**
         * ProcessManagementCoefficientRequest d.
         * @member {number} d
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.d = 0;

        /**
         * ProcessManagementCoefficientRequest e.
         * @member {number} e
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.e = 0;

        /**
         * ProcessManagementCoefficientRequest f.
         * @member {number} f
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.f = 0;

        /**
         * ProcessManagementCoefficientRequest g.
         * @member {number} g
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.g = 0;

        /**
         * ProcessManagementCoefficientRequest h.
         * @member {number} h
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.h = 0;

        /**
         * ProcessManagementCoefficientRequest i.
         * @member {number} i
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.i = 0;

        /**
         * ProcessManagementCoefficientRequest j.
         * @member {number} j
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         */
        ProcessManagementCoefficientRequest.prototype.j = 0;

        /**
         * Creates a ProcessManagementCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.ProcessManagementCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.ProcessManagementCoefficientRequest} ProcessManagementCoefficientRequest
         */
        ProcessManagementCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.ProcessManagementCoefficientRequest)
                return object;
            let message = new $root.mond.ProcessManagementCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.f != null)
                message.f = Number(object.f);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.h != null)
                message.h = Number(object.h);
            if (object.i != null)
                message.i = Number(object.i);
            if (object.j != null)
                message.j = Number(object.j);
            return message;
        };

        /**
         * Creates a plain object from a ProcessManagementCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.ProcessManagementCoefficientRequest
         * @static
         * @param {mond.ProcessManagementCoefficientRequest} message ProcessManagementCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessManagementCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
                object.f = 0;
                object.g = 0;
                object.h = 0;
                object.i = 0;
                object.j = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            if (message.i != null && message.hasOwnProperty("i"))
                object.i = options.json && !isFinite(message.i) ? String(message.i) : message.i;
            if (message.j != null && message.hasOwnProperty("j"))
                object.j = options.json && !isFinite(message.j) ? String(message.j) : message.j;
            return object;
        };

        /**
         * Converts this ProcessManagementCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.ProcessManagementCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessManagementCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessManagementCoefficientRequest;
    })();

    mond.ProcessManagementCoefficientResponse = (function() {

        /**
         * Properties of a ProcessManagementCoefficientResponse.
         * @memberof mond
         * @interface IProcessManagementCoefficientResponse
         * @property {number|null} [k2] ProcessManagementCoefficientResponse k2
         */

        /**
         * Constructs a new ProcessManagementCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a ProcessManagementCoefficientResponse.
         * @implements IProcessManagementCoefficientResponse
         * @constructor
         * @param {mond.IProcessManagementCoefficientResponse=} [properties] Properties to set
         */
        function ProcessManagementCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessManagementCoefficientResponse k2.
         * @member {number} k2
         * @memberof mond.ProcessManagementCoefficientResponse
         * @instance
         */
        ProcessManagementCoefficientResponse.prototype.k2 = 0;

        /**
         * Creates a ProcessManagementCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.ProcessManagementCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.ProcessManagementCoefficientResponse} ProcessManagementCoefficientResponse
         */
        ProcessManagementCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.ProcessManagementCoefficientResponse)
                return object;
            let message = new $root.mond.ProcessManagementCoefficientResponse();
            if (object.k2 != null)
                message.k2 = Number(object.k2);
            return message;
        };

        /**
         * Creates a plain object from a ProcessManagementCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.ProcessManagementCoefficientResponse
         * @static
         * @param {mond.ProcessManagementCoefficientResponse} message ProcessManagementCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessManagementCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.k2 = 0;
            if (message.k2 != null && message.hasOwnProperty("k2"))
                object.k2 = options.json && !isFinite(message.k2) ? String(message.k2) : message.k2;
            return object;
        };

        /**
         * Converts this ProcessManagementCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.ProcessManagementCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessManagementCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessManagementCoefficientResponse;
    })();

    mond.MaterialIsolationCoefficientRequest = (function() {

        /**
         * Properties of a MaterialIsolationCoefficientRequest.
         * @memberof mond
         * @interface IMaterialIsolationCoefficientRequest
         * @property {number|null} [a] MaterialIsolationCoefficientRequest a
         * @property {number|null} [b] MaterialIsolationCoefficientRequest b
         */

        /**
         * Constructs a new MaterialIsolationCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a MaterialIsolationCoefficientRequest.
         * @implements IMaterialIsolationCoefficientRequest
         * @constructor
         * @param {mond.IMaterialIsolationCoefficientRequest=} [properties] Properties to set
         */
        function MaterialIsolationCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialIsolationCoefficientRequest a.
         * @member {number} a
         * @memberof mond.MaterialIsolationCoefficientRequest
         * @instance
         */
        MaterialIsolationCoefficientRequest.prototype.a = 0;

        /**
         * MaterialIsolationCoefficientRequest b.
         * @member {number} b
         * @memberof mond.MaterialIsolationCoefficientRequest
         * @instance
         */
        MaterialIsolationCoefficientRequest.prototype.b = 0;

        /**
         * Creates a MaterialIsolationCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialIsolationCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialIsolationCoefficientRequest} MaterialIsolationCoefficientRequest
         */
        MaterialIsolationCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialIsolationCoefficientRequest)
                return object;
            let message = new $root.mond.MaterialIsolationCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            return message;
        };

        /**
         * Creates a plain object from a MaterialIsolationCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialIsolationCoefficientRequest
         * @static
         * @param {mond.MaterialIsolationCoefficientRequest} message MaterialIsolationCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialIsolationCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            return object;
        };

        /**
         * Converts this MaterialIsolationCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialIsolationCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialIsolationCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialIsolationCoefficientRequest;
    })();

    mond.MaterialIsolationCoefficientResponse = (function() {

        /**
         * Properties of a MaterialIsolationCoefficientResponse.
         * @memberof mond
         * @interface IMaterialIsolationCoefficientResponse
         * @property {number|null} [k5] MaterialIsolationCoefficientResponse k5
         */

        /**
         * Constructs a new MaterialIsolationCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a MaterialIsolationCoefficientResponse.
         * @implements IMaterialIsolationCoefficientResponse
         * @constructor
         * @param {mond.IMaterialIsolationCoefficientResponse=} [properties] Properties to set
         */
        function MaterialIsolationCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialIsolationCoefficientResponse k5.
         * @member {number} k5
         * @memberof mond.MaterialIsolationCoefficientResponse
         * @instance
         */
        MaterialIsolationCoefficientResponse.prototype.k5 = 0;

        /**
         * Creates a MaterialIsolationCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialIsolationCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialIsolationCoefficientResponse} MaterialIsolationCoefficientResponse
         */
        MaterialIsolationCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialIsolationCoefficientResponse)
                return object;
            let message = new $root.mond.MaterialIsolationCoefficientResponse();
            if (object.k5 != null)
                message.k5 = Number(object.k5);
            return message;
        };

        /**
         * Creates a plain object from a MaterialIsolationCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialIsolationCoefficientResponse
         * @static
         * @param {mond.MaterialIsolationCoefficientResponse} message MaterialIsolationCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialIsolationCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.k5 = 0;
            if (message.k5 != null && message.hasOwnProperty("k5"))
                object.k5 = options.json && !isFinite(message.k5) ? String(message.k5) : message.k5;
            return object;
        };

        /**
         * Converts this MaterialIsolationCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialIsolationCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialIsolationCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialIsolationCoefficientResponse;
    })();

    mond.SafetyAttitudeCoefficientRequest = (function() {

        /**
         * Properties of a SafetyAttitudeCoefficientRequest.
         * @memberof mond
         * @interface ISafetyAttitudeCoefficientRequest
         * @property {number|null} [a] SafetyAttitudeCoefficientRequest a
         * @property {number|null} [b] SafetyAttitudeCoefficientRequest b
         * @property {number|null} [c] SafetyAttitudeCoefficientRequest c
         */

        /**
         * Constructs a new SafetyAttitudeCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a SafetyAttitudeCoefficientRequest.
         * @implements ISafetyAttitudeCoefficientRequest
         * @constructor
         * @param {mond.ISafetyAttitudeCoefficientRequest=} [properties] Properties to set
         */
        function SafetyAttitudeCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SafetyAttitudeCoefficientRequest a.
         * @member {number} a
         * @memberof mond.SafetyAttitudeCoefficientRequest
         * @instance
         */
        SafetyAttitudeCoefficientRequest.prototype.a = 0;

        /**
         * SafetyAttitudeCoefficientRequest b.
         * @member {number} b
         * @memberof mond.SafetyAttitudeCoefficientRequest
         * @instance
         */
        SafetyAttitudeCoefficientRequest.prototype.b = 0;

        /**
         * SafetyAttitudeCoefficientRequest c.
         * @member {number} c
         * @memberof mond.SafetyAttitudeCoefficientRequest
         * @instance
         */
        SafetyAttitudeCoefficientRequest.prototype.c = 0;

        /**
         * Creates a SafetyAttitudeCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.SafetyAttitudeCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.SafetyAttitudeCoefficientRequest} SafetyAttitudeCoefficientRequest
         */
        SafetyAttitudeCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.SafetyAttitudeCoefficientRequest)
                return object;
            let message = new $root.mond.SafetyAttitudeCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            return message;
        };

        /**
         * Creates a plain object from a SafetyAttitudeCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.SafetyAttitudeCoefficientRequest
         * @static
         * @param {mond.SafetyAttitudeCoefficientRequest} message SafetyAttitudeCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SafetyAttitudeCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            return object;
        };

        /**
         * Converts this SafetyAttitudeCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.SafetyAttitudeCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SafetyAttitudeCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SafetyAttitudeCoefficientRequest;
    })();

    mond.SafetyAttitudeCoefficientResponse = (function() {

        /**
         * Properties of a SafetyAttitudeCoefficientResponse.
         * @memberof mond
         * @interface ISafetyAttitudeCoefficientResponse
         * @property {number|null} [k3] SafetyAttitudeCoefficientResponse k3
         */

        /**
         * Constructs a new SafetyAttitudeCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a SafetyAttitudeCoefficientResponse.
         * @implements ISafetyAttitudeCoefficientResponse
         * @constructor
         * @param {mond.ISafetyAttitudeCoefficientResponse=} [properties] Properties to set
         */
        function SafetyAttitudeCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SafetyAttitudeCoefficientResponse k3.
         * @member {number} k3
         * @memberof mond.SafetyAttitudeCoefficientResponse
         * @instance
         */
        SafetyAttitudeCoefficientResponse.prototype.k3 = 0;

        /**
         * Creates a SafetyAttitudeCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.SafetyAttitudeCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.SafetyAttitudeCoefficientResponse} SafetyAttitudeCoefficientResponse
         */
        SafetyAttitudeCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.SafetyAttitudeCoefficientResponse)
                return object;
            let message = new $root.mond.SafetyAttitudeCoefficientResponse();
            if (object.k3 != null)
                message.k3 = Number(object.k3);
            return message;
        };

        /**
         * Creates a plain object from a SafetyAttitudeCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.SafetyAttitudeCoefficientResponse
         * @static
         * @param {mond.SafetyAttitudeCoefficientResponse} message SafetyAttitudeCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SafetyAttitudeCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.k3 = 0;
            if (message.k3 != null && message.hasOwnProperty("k3"))
                object.k3 = options.json && !isFinite(message.k3) ? String(message.k3) : message.k3;
            return object;
        };

        /**
         * Converts this SafetyAttitudeCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.SafetyAttitudeCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SafetyAttitudeCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SafetyAttitudeCoefficientResponse;
    })();

    mond.FirePreventionCoefficientRequest = (function() {

        /**
         * Properties of a FirePreventionCoefficientRequest.
         * @memberof mond
         * @interface IFirePreventionCoefficientRequest
         * @property {number|null} [a] FirePreventionCoefficientRequest a
         * @property {number|null} [b] FirePreventionCoefficientRequest b
         * @property {number|null} [c] FirePreventionCoefficientRequest c
         */

        /**
         * Constructs a new FirePreventionCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a FirePreventionCoefficientRequest.
         * @implements IFirePreventionCoefficientRequest
         * @constructor
         * @param {mond.IFirePreventionCoefficientRequest=} [properties] Properties to set
         */
        function FirePreventionCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirePreventionCoefficientRequest a.
         * @member {number} a
         * @memberof mond.FirePreventionCoefficientRequest
         * @instance
         */
        FirePreventionCoefficientRequest.prototype.a = 0;

        /**
         * FirePreventionCoefficientRequest b.
         * @member {number} b
         * @memberof mond.FirePreventionCoefficientRequest
         * @instance
         */
        FirePreventionCoefficientRequest.prototype.b = 0;

        /**
         * FirePreventionCoefficientRequest c.
         * @member {number} c
         * @memberof mond.FirePreventionCoefficientRequest
         * @instance
         */
        FirePreventionCoefficientRequest.prototype.c = 0;

        /**
         * Creates a FirePreventionCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.FirePreventionCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.FirePreventionCoefficientRequest} FirePreventionCoefficientRequest
         */
        FirePreventionCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.FirePreventionCoefficientRequest)
                return object;
            let message = new $root.mond.FirePreventionCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            return message;
        };

        /**
         * Creates a plain object from a FirePreventionCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.FirePreventionCoefficientRequest
         * @static
         * @param {mond.FirePreventionCoefficientRequest} message FirePreventionCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirePreventionCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            return object;
        };

        /**
         * Converts this FirePreventionCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.FirePreventionCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirePreventionCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FirePreventionCoefficientRequest;
    })();

    mond.FirePreventionCoefficientResponse = (function() {

        /**
         * Properties of a FirePreventionCoefficientResponse.
         * @memberof mond
         * @interface IFirePreventionCoefficientResponse
         * @property {number|null} [k4] FirePreventionCoefficientResponse k4
         */

        /**
         * Constructs a new FirePreventionCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a FirePreventionCoefficientResponse.
         * @implements IFirePreventionCoefficientResponse
         * @constructor
         * @param {mond.IFirePreventionCoefficientResponse=} [properties] Properties to set
         */
        function FirePreventionCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirePreventionCoefficientResponse k4.
         * @member {number} k4
         * @memberof mond.FirePreventionCoefficientResponse
         * @instance
         */
        FirePreventionCoefficientResponse.prototype.k4 = 0;

        /**
         * Creates a FirePreventionCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.FirePreventionCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.FirePreventionCoefficientResponse} FirePreventionCoefficientResponse
         */
        FirePreventionCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.FirePreventionCoefficientResponse)
                return object;
            let message = new $root.mond.FirePreventionCoefficientResponse();
            if (object.k4 != null)
                message.k4 = Number(object.k4);
            return message;
        };

        /**
         * Creates a plain object from a FirePreventionCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.FirePreventionCoefficientResponse
         * @static
         * @param {mond.FirePreventionCoefficientResponse} message FirePreventionCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirePreventionCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.k4 = 0;
            if (message.k4 != null && message.hasOwnProperty("k4"))
                object.k4 = options.json && !isFinite(message.k4) ? String(message.k4) : message.k4;
            return object;
        };

        /**
         * Converts this FirePreventionCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.FirePreventionCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirePreventionCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FirePreventionCoefficientResponse;
    })();

    mond.FireFightingActivityCoefficientRequest = (function() {

        /**
         * Properties of a FireFightingActivityCoefficientRequest.
         * @memberof mond
         * @interface IFireFightingActivityCoefficientRequest
         * @property {number|null} [a] FireFightingActivityCoefficientRequest a
         * @property {number|null} [b] FireFightingActivityCoefficientRequest b
         * @property {number|null} [c] FireFightingActivityCoefficientRequest c
         * @property {number|null} [d] FireFightingActivityCoefficientRequest d
         * @property {number|null} [e] FireFightingActivityCoefficientRequest e
         * @property {number|null} [f] FireFightingActivityCoefficientRequest f
         * @property {number|null} [g] FireFightingActivityCoefficientRequest g
         * @property {number|null} [h] FireFightingActivityCoefficientRequest h
         */

        /**
         * Constructs a new FireFightingActivityCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a FireFightingActivityCoefficientRequest.
         * @implements IFireFightingActivityCoefficientRequest
         * @constructor
         * @param {mond.IFireFightingActivityCoefficientRequest=} [properties] Properties to set
         */
        function FireFightingActivityCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireFightingActivityCoefficientRequest a.
         * @member {number} a
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.a = 0;

        /**
         * FireFightingActivityCoefficientRequest b.
         * @member {number} b
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.b = 0;

        /**
         * FireFightingActivityCoefficientRequest c.
         * @member {number} c
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.c = 0;

        /**
         * FireFightingActivityCoefficientRequest d.
         * @member {number} d
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.d = 0;

        /**
         * FireFightingActivityCoefficientRequest e.
         * @member {number} e
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.e = 0;

        /**
         * FireFightingActivityCoefficientRequest f.
         * @member {number} f
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.f = 0;

        /**
         * FireFightingActivityCoefficientRequest g.
         * @member {number} g
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.g = 0;

        /**
         * FireFightingActivityCoefficientRequest h.
         * @member {number} h
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         */
        FireFightingActivityCoefficientRequest.prototype.h = 0;

        /**
         * Creates a FireFightingActivityCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.FireFightingActivityCoefficientRequest} FireFightingActivityCoefficientRequest
         */
        FireFightingActivityCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.FireFightingActivityCoefficientRequest)
                return object;
            let message = new $root.mond.FireFightingActivityCoefficientRequest();
            if (object.a != null)
                message.a = Number(object.a);
            if (object.b != null)
                message.b = Number(object.b);
            if (object.c != null)
                message.c = Number(object.c);
            if (object.d != null)
                message.d = Number(object.d);
            if (object.e != null)
                message.e = Number(object.e);
            if (object.f != null)
                message.f = Number(object.f);
            if (object.g != null)
                message.g = Number(object.g);
            if (object.h != null)
                message.h = Number(object.h);
            return message;
        };

        /**
         * Creates a plain object from a FireFightingActivityCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @static
         * @param {mond.FireFightingActivityCoefficientRequest} message FireFightingActivityCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireFightingActivityCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = 0;
                object.b = 0;
                object.c = 0;
                object.d = 0;
                object.e = 0;
                object.f = 0;
                object.g = 0;
                object.h = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = options.json && !isFinite(message.c) ? String(message.c) : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = options.json && !isFinite(message.e) ? String(message.e) : message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
            return object;
        };

        /**
         * Converts this FireFightingActivityCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.FireFightingActivityCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireFightingActivityCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireFightingActivityCoefficientRequest;
    })();

    mond.FireFightingActivityCoefficientResponse = (function() {

        /**
         * Properties of a FireFightingActivityCoefficientResponse.
         * @memberof mond
         * @interface IFireFightingActivityCoefficientResponse
         * @property {number|null} [k6] FireFightingActivityCoefficientResponse k6
         */

        /**
         * Constructs a new FireFightingActivityCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a FireFightingActivityCoefficientResponse.
         * @implements IFireFightingActivityCoefficientResponse
         * @constructor
         * @param {mond.IFireFightingActivityCoefficientResponse=} [properties] Properties to set
         */
        function FireFightingActivityCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireFightingActivityCoefficientResponse k6.
         * @member {number} k6
         * @memberof mond.FireFightingActivityCoefficientResponse
         * @instance
         */
        FireFightingActivityCoefficientResponse.prototype.k6 = 0;

        /**
         * Creates a FireFightingActivityCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.FireFightingActivityCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.FireFightingActivityCoefficientResponse} FireFightingActivityCoefficientResponse
         */
        FireFightingActivityCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.FireFightingActivityCoefficientResponse)
                return object;
            let message = new $root.mond.FireFightingActivityCoefficientResponse();
            if (object.k6 != null)
                message.k6 = Number(object.k6);
            return message;
        };

        /**
         * Creates a plain object from a FireFightingActivityCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.FireFightingActivityCoefficientResponse
         * @static
         * @param {mond.FireFightingActivityCoefficientResponse} message FireFightingActivityCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireFightingActivityCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.k6 = 0;
            if (message.k6 != null && message.hasOwnProperty("k6"))
                object.k6 = options.json && !isFinite(message.k6) ? String(message.k6) : message.k6;
            return object;
        };

        /**
         * Converts this FireFightingActivityCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.FireFightingActivityCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireFightingActivityCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireFightingActivityCoefficientResponse;
    })();

    mond.NumHazardCoefficientRequest = (function() {

        /**
         * Properties of a NumHazardCoefficientRequest.
         * @memberof mond
         * @interface INumHazardCoefficientRequest
         * @property {number|null} [materialQuality] NumHazardCoefficientRequest materialQuality
         */

        /**
         * Constructs a new NumHazardCoefficientRequest.
         * @memberof mond
         * @classdesc Represents a NumHazardCoefficientRequest.
         * @implements INumHazardCoefficientRequest
         * @constructor
         * @param {mond.INumHazardCoefficientRequest=} [properties] Properties to set
         */
        function NumHazardCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NumHazardCoefficientRequest materialQuality.
         * @member {number} materialQuality
         * @memberof mond.NumHazardCoefficientRequest
         * @instance
         */
        NumHazardCoefficientRequest.prototype.materialQuality = 0;

        /**
         * Creates a NumHazardCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.NumHazardCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.NumHazardCoefficientRequest} NumHazardCoefficientRequest
         */
        NumHazardCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.NumHazardCoefficientRequest)
                return object;
            let message = new $root.mond.NumHazardCoefficientRequest();
            if (object.materialQuality != null)
                message.materialQuality = Number(object.materialQuality);
            return message;
        };

        /**
         * Creates a plain object from a NumHazardCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.NumHazardCoefficientRequest
         * @static
         * @param {mond.NumHazardCoefficientRequest} message NumHazardCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NumHazardCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.materialQuality = 0;
            if (message.materialQuality != null && message.hasOwnProperty("materialQuality"))
                object.materialQuality = options.json && !isFinite(message.materialQuality) ? String(message.materialQuality) : message.materialQuality;
            return object;
        };

        /**
         * Converts this NumHazardCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.NumHazardCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NumHazardCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NumHazardCoefficientRequest;
    })();

    mond.NumHazardCoefficientResponse = (function() {

        /**
         * Properties of a NumHazardCoefficientResponse.
         * @memberof mond
         * @interface INumHazardCoefficientResponse
         * @property {number|null} [Q] NumHazardCoefficientResponse Q
         */

        /**
         * Constructs a new NumHazardCoefficientResponse.
         * @memberof mond
         * @classdesc Represents a NumHazardCoefficientResponse.
         * @implements INumHazardCoefficientResponse
         * @constructor
         * @param {mond.INumHazardCoefficientResponse=} [properties] Properties to set
         */
        function NumHazardCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NumHazardCoefficientResponse Q.
         * @member {number} Q
         * @memberof mond.NumHazardCoefficientResponse
         * @instance
         */
        NumHazardCoefficientResponse.prototype.Q = 0;

        /**
         * Creates a NumHazardCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.NumHazardCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.NumHazardCoefficientResponse} NumHazardCoefficientResponse
         */
        NumHazardCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.NumHazardCoefficientResponse)
                return object;
            let message = new $root.mond.NumHazardCoefficientResponse();
            if (object.Q != null)
                message.Q = Number(object.Q);
            return message;
        };

        /**
         * Creates a plain object from a NumHazardCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.NumHazardCoefficientResponse
         * @static
         * @param {mond.NumHazardCoefficientResponse} message NumHazardCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NumHazardCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.Q = 0;
            if (message.Q != null && message.hasOwnProperty("Q"))
                object.Q = options.json && !isFinite(message.Q) ? String(message.Q) : message.Q;
            return object;
        };

        /**
         * Converts this NumHazardCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.NumHazardCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NumHazardCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NumHazardCoefficientResponse;
    })();

    mond.InitialCommentIndexFinialCompensationCoefficientRequest = (function() {

        /**
         * Properties of an InitialCommentIndexFinialCompensationCoefficientRequest.
         * @memberof mond
         * @interface IInitialCommentIndexFinialCompensationCoefficientRequest
         * @property {number|null} [materialCoefficientB] InitialCommentIndexFinialCompensationCoefficientRequest materialCoefficientB
         * @property {number|null} [specialMaterialHazardCoefficientM] InitialCommentIndexFinialCompensationCoefficientRequest specialMaterialHazardCoefficientM
         * @property {number|null} [generalProcessHazardCoefficientP] InitialCommentIndexFinialCompensationCoefficientRequest generalProcessHazardCoefficientP
         * @property {number|null} [specialProcessHazardCoefficientS] InitialCommentIndexFinialCompensationCoefficientRequest specialProcessHazardCoefficientS
         * @property {number|null} [numHazardCoefficientQ] InitialCommentIndexFinialCompensationCoefficientRequest numHazardCoefficientQ
         * @property {number|null} [arrangementHazardCoefficientL] InitialCommentIndexFinialCompensationCoefficientRequest arrangementHazardCoefficientL
         * @property {number|null} [poisonHazardCoefficientT] InitialCommentIndexFinialCompensationCoefficientRequest poisonHazardCoefficientT
         * @property {number|null} [combustibleTotalNumK] InitialCommentIndexFinialCompensationCoefficientRequest combustibleTotalNumK
         * @property {number|null} [workingAreaN] InitialCommentIndexFinialCompensationCoefficientRequest workingAreaN
         * @property {number|null} [mixedDiffusionCoefficientM] InitialCommentIndexFinialCompensationCoefficientRequest mixedDiffusionCoefficientM
         * @property {number|null} [unitHeightH] InitialCommentIndexFinialCompensationCoefficientRequest unitHeightH
         * @property {number|null} [k1] InitialCommentIndexFinialCompensationCoefficientRequest k1
         * @property {number|null} [k2] InitialCommentIndexFinialCompensationCoefficientRequest k2
         * @property {number|null} [k3] InitialCommentIndexFinialCompensationCoefficientRequest k3
         * @property {number|null} [k4] InitialCommentIndexFinialCompensationCoefficientRequest k4
         * @property {number|null} [k5] InitialCommentIndexFinialCompensationCoefficientRequest k5
         * @property {number|null} [k6] InitialCommentIndexFinialCompensationCoefficientRequest k6
         */

        /**
         * Constructs a new InitialCommentIndexFinialCompensationCoefficientRequest.
         * @memberof mond
         * @classdesc Represents an InitialCommentIndexFinialCompensationCoefficientRequest.
         * @implements IInitialCommentIndexFinialCompensationCoefficientRequest
         * @constructor
         * @param {mond.IInitialCommentIndexFinialCompensationCoefficientRequest=} [properties] Properties to set
         */
        function InitialCommentIndexFinialCompensationCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest materialCoefficientB.
         * @member {number} materialCoefficientB
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.materialCoefficientB = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest specialMaterialHazardCoefficientM.
         * @member {number} specialMaterialHazardCoefficientM
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.specialMaterialHazardCoefficientM = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest generalProcessHazardCoefficientP.
         * @member {number} generalProcessHazardCoefficientP
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.generalProcessHazardCoefficientP = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest specialProcessHazardCoefficientS.
         * @member {number} specialProcessHazardCoefficientS
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.specialProcessHazardCoefficientS = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest numHazardCoefficientQ.
         * @member {number} numHazardCoefficientQ
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.numHazardCoefficientQ = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest arrangementHazardCoefficientL.
         * @member {number} arrangementHazardCoefficientL
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.arrangementHazardCoefficientL = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest poisonHazardCoefficientT.
         * @member {number} poisonHazardCoefficientT
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.poisonHazardCoefficientT = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest combustibleTotalNumK.
         * @member {number} combustibleTotalNumK
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.combustibleTotalNumK = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest workingAreaN.
         * @member {number} workingAreaN
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.workingAreaN = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest mixedDiffusionCoefficientM.
         * @member {number} mixedDiffusionCoefficientM
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.mixedDiffusionCoefficientM = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest unitHeightH.
         * @member {number} unitHeightH
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.unitHeightH = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest k1.
         * @member {number} k1
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.k1 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest k2.
         * @member {number} k2
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.k2 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest k3.
         * @member {number} k3
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.k3 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest k4.
         * @member {number} k4
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.k4 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest k5.
         * @member {number} k5
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.k5 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientRequest k6.
         * @member {number} k6
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.k6 = 0;

        /**
         * Creates an InitialCommentIndexFinialCompensationCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.InitialCommentIndexFinialCompensationCoefficientRequest} InitialCommentIndexFinialCompensationCoefficientRequest
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.InitialCommentIndexFinialCompensationCoefficientRequest)
                return object;
            let message = new $root.mond.InitialCommentIndexFinialCompensationCoefficientRequest();
            if (object.materialCoefficientB != null)
                message.materialCoefficientB = Number(object.materialCoefficientB);
            if (object.specialMaterialHazardCoefficientM != null)
                message.specialMaterialHazardCoefficientM = Number(object.specialMaterialHazardCoefficientM);
            if (object.generalProcessHazardCoefficientP != null)
                message.generalProcessHazardCoefficientP = Number(object.generalProcessHazardCoefficientP);
            if (object.specialProcessHazardCoefficientS != null)
                message.specialProcessHazardCoefficientS = Number(object.specialProcessHazardCoefficientS);
            if (object.numHazardCoefficientQ != null)
                message.numHazardCoefficientQ = Number(object.numHazardCoefficientQ);
            if (object.arrangementHazardCoefficientL != null)
                message.arrangementHazardCoefficientL = Number(object.arrangementHazardCoefficientL);
            if (object.poisonHazardCoefficientT != null)
                message.poisonHazardCoefficientT = Number(object.poisonHazardCoefficientT);
            if (object.combustibleTotalNumK != null)
                message.combustibleTotalNumK = Number(object.combustibleTotalNumK);
            if (object.workingAreaN != null)
                message.workingAreaN = Number(object.workingAreaN);
            if (object.mixedDiffusionCoefficientM != null)
                message.mixedDiffusionCoefficientM = Number(object.mixedDiffusionCoefficientM);
            if (object.unitHeightH != null)
                message.unitHeightH = Number(object.unitHeightH);
            if (object.k1 != null)
                message.k1 = Number(object.k1);
            if (object.k2 != null)
                message.k2 = Number(object.k2);
            if (object.k3 != null)
                message.k3 = Number(object.k3);
            if (object.k4 != null)
                message.k4 = Number(object.k4);
            if (object.k5 != null)
                message.k5 = Number(object.k5);
            if (object.k6 != null)
                message.k6 = Number(object.k6);
            return message;
        };

        /**
         * Creates a plain object from an InitialCommentIndexFinialCompensationCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @static
         * @param {mond.InitialCommentIndexFinialCompensationCoefficientRequest} message InitialCommentIndexFinialCompensationCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.materialCoefficientB = 0;
                object.specialMaterialHazardCoefficientM = 0;
                object.generalProcessHazardCoefficientP = 0;
                object.specialProcessHazardCoefficientS = 0;
                object.numHazardCoefficientQ = 0;
                object.arrangementHazardCoefficientL = 0;
                object.poisonHazardCoefficientT = 0;
                object.combustibleTotalNumK = 0;
                object.workingAreaN = 0;
                object.mixedDiffusionCoefficientM = 0;
                object.unitHeightH = 0;
                object.k1 = 0;
                object.k2 = 0;
                object.k3 = 0;
                object.k4 = 0;
                object.k5 = 0;
                object.k6 = 0;
            }
            if (message.materialCoefficientB != null && message.hasOwnProperty("materialCoefficientB"))
                object.materialCoefficientB = options.json && !isFinite(message.materialCoefficientB) ? String(message.materialCoefficientB) : message.materialCoefficientB;
            if (message.specialMaterialHazardCoefficientM != null && message.hasOwnProperty("specialMaterialHazardCoefficientM"))
                object.specialMaterialHazardCoefficientM = options.json && !isFinite(message.specialMaterialHazardCoefficientM) ? String(message.specialMaterialHazardCoefficientM) : message.specialMaterialHazardCoefficientM;
            if (message.generalProcessHazardCoefficientP != null && message.hasOwnProperty("generalProcessHazardCoefficientP"))
                object.generalProcessHazardCoefficientP = options.json && !isFinite(message.generalProcessHazardCoefficientP) ? String(message.generalProcessHazardCoefficientP) : message.generalProcessHazardCoefficientP;
            if (message.specialProcessHazardCoefficientS != null && message.hasOwnProperty("specialProcessHazardCoefficientS"))
                object.specialProcessHazardCoefficientS = options.json && !isFinite(message.specialProcessHazardCoefficientS) ? String(message.specialProcessHazardCoefficientS) : message.specialProcessHazardCoefficientS;
            if (message.numHazardCoefficientQ != null && message.hasOwnProperty("numHazardCoefficientQ"))
                object.numHazardCoefficientQ = options.json && !isFinite(message.numHazardCoefficientQ) ? String(message.numHazardCoefficientQ) : message.numHazardCoefficientQ;
            if (message.arrangementHazardCoefficientL != null && message.hasOwnProperty("arrangementHazardCoefficientL"))
                object.arrangementHazardCoefficientL = options.json && !isFinite(message.arrangementHazardCoefficientL) ? String(message.arrangementHazardCoefficientL) : message.arrangementHazardCoefficientL;
            if (message.poisonHazardCoefficientT != null && message.hasOwnProperty("poisonHazardCoefficientT"))
                object.poisonHazardCoefficientT = options.json && !isFinite(message.poisonHazardCoefficientT) ? String(message.poisonHazardCoefficientT) : message.poisonHazardCoefficientT;
            if (message.combustibleTotalNumK != null && message.hasOwnProperty("combustibleTotalNumK"))
                object.combustibleTotalNumK = options.json && !isFinite(message.combustibleTotalNumK) ? String(message.combustibleTotalNumK) : message.combustibleTotalNumK;
            if (message.workingAreaN != null && message.hasOwnProperty("workingAreaN"))
                object.workingAreaN = options.json && !isFinite(message.workingAreaN) ? String(message.workingAreaN) : message.workingAreaN;
            if (message.mixedDiffusionCoefficientM != null && message.hasOwnProperty("mixedDiffusionCoefficientM"))
                object.mixedDiffusionCoefficientM = options.json && !isFinite(message.mixedDiffusionCoefficientM) ? String(message.mixedDiffusionCoefficientM) : message.mixedDiffusionCoefficientM;
            if (message.unitHeightH != null && message.hasOwnProperty("unitHeightH"))
                object.unitHeightH = options.json && !isFinite(message.unitHeightH) ? String(message.unitHeightH) : message.unitHeightH;
            if (message.k1 != null && message.hasOwnProperty("k1"))
                object.k1 = options.json && !isFinite(message.k1) ? String(message.k1) : message.k1;
            if (message.k2 != null && message.hasOwnProperty("k2"))
                object.k2 = options.json && !isFinite(message.k2) ? String(message.k2) : message.k2;
            if (message.k3 != null && message.hasOwnProperty("k3"))
                object.k3 = options.json && !isFinite(message.k3) ? String(message.k3) : message.k3;
            if (message.k4 != null && message.hasOwnProperty("k4"))
                object.k4 = options.json && !isFinite(message.k4) ? String(message.k4) : message.k4;
            if (message.k5 != null && message.hasOwnProperty("k5"))
                object.k5 = options.json && !isFinite(message.k5) ? String(message.k5) : message.k5;
            if (message.k6 != null && message.hasOwnProperty("k6"))
                object.k6 = options.json && !isFinite(message.k6) ? String(message.k6) : message.k6;
            return object;
        };

        /**
         * Converts this InitialCommentIndexFinialCompensationCoefficientRequest to JSON.
         * @function toJSON
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitialCommentIndexFinialCompensationCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitialCommentIndexFinialCompensationCoefficientRequest;
    })();

    mond.InitialCommentIndexFinialCompensationCoefficientResponse = (function() {

        /**
         * Properties of an InitialCommentIndexFinialCompensationCoefficientResponse.
         * @memberof mond
         * @interface IInitialCommentIndexFinialCompensationCoefficientResponse
         * @property {number|null} [D] InitialCommentIndexFinialCompensationCoefficientResponse D
         * @property {number|null} [F] InitialCommentIndexFinialCompensationCoefficientResponse F
         * @property {number|null} [E] InitialCommentIndexFinialCompensationCoefficientResponse E
         * @property {number|null} [A] InitialCommentIndexFinialCompensationCoefficientResponse A
         * @property {number|null} [U] InitialCommentIndexFinialCompensationCoefficientResponse U
         * @property {number|null} [C] InitialCommentIndexFinialCompensationCoefficientResponse C
         * @property {number|null} [R] InitialCommentIndexFinialCompensationCoefficientResponse R
         * @property {number|null} [F1] InitialCommentIndexFinialCompensationCoefficientResponse F1
         * @property {number|null} [E1] InitialCommentIndexFinialCompensationCoefficientResponse E1
         * @property {number|null} [A1] InitialCommentIndexFinialCompensationCoefficientResponse A1
         * @property {number|null} [R1] InitialCommentIndexFinialCompensationCoefficientResponse R1
         * @property {number|null} [R2] InitialCommentIndexFinialCompensationCoefficientResponse R2
         * @property {string|null} [initHazardLevel] InitialCommentIndexFinialCompensationCoefficientResponse initHazardLevel
         * @property {string|null} [finalHazardLevel] InitialCommentIndexFinialCompensationCoefficientResponse finalHazardLevel
         */

        /**
         * Constructs a new InitialCommentIndexFinialCompensationCoefficientResponse.
         * @memberof mond
         * @classdesc Represents an InitialCommentIndexFinialCompensationCoefficientResponse.
         * @implements IInitialCommentIndexFinialCompensationCoefficientResponse
         * @constructor
         * @param {mond.IInitialCommentIndexFinialCompensationCoefficientResponse=} [properties] Properties to set
         */
        function InitialCommentIndexFinialCompensationCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse D.
         * @member {number} D
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.D = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse F.
         * @member {number} F
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.F = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse E.
         * @member {number} E
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.E = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse A.
         * @member {number} A
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.A = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse U.
         * @member {number} U
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.U = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse C.
         * @member {number} C
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.C = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse R.
         * @member {number} R
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.R = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse F1.
         * @member {number} F1
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.F1 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse E1.
         * @member {number} E1
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.E1 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse A1.
         * @member {number} A1
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.A1 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse R1.
         * @member {number} R1
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.R1 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse R2.
         * @member {number} R2
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.R2 = 0;

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse initHazardLevel.
         * @member {string} initHazardLevel
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.initHazardLevel = "";

        /**
         * InitialCommentIndexFinialCompensationCoefficientResponse finalHazardLevel.
         * @member {string} finalHazardLevel
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.finalHazardLevel = "";

        /**
         * Creates an InitialCommentIndexFinialCompensationCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.InitialCommentIndexFinialCompensationCoefficientResponse} InitialCommentIndexFinialCompensationCoefficientResponse
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.InitialCommentIndexFinialCompensationCoefficientResponse)
                return object;
            let message = new $root.mond.InitialCommentIndexFinialCompensationCoefficientResponse();
            if (object.D != null)
                message.D = Number(object.D);
            if (object.F != null)
                message.F = Number(object.F);
            if (object.E != null)
                message.E = Number(object.E);
            if (object.A != null)
                message.A = Number(object.A);
            if (object.U != null)
                message.U = Number(object.U);
            if (object.C != null)
                message.C = Number(object.C);
            if (object.R != null)
                message.R = Number(object.R);
            if (object.F1 != null)
                message.F1 = Number(object.F1);
            if (object.E1 != null)
                message.E1 = Number(object.E1);
            if (object.A1 != null)
                message.A1 = Number(object.A1);
            if (object.R1 != null)
                message.R1 = Number(object.R1);
            if (object.R2 != null)
                message.R2 = Number(object.R2);
            if (object.initHazardLevel != null)
                message.initHazardLevel = String(object.initHazardLevel);
            if (object.finalHazardLevel != null)
                message.finalHazardLevel = String(object.finalHazardLevel);
            return message;
        };

        /**
         * Creates a plain object from an InitialCommentIndexFinialCompensationCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @static
         * @param {mond.InitialCommentIndexFinialCompensationCoefficientResponse} message InitialCommentIndexFinialCompensationCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.D = 0;
                object.F = 0;
                object.E = 0;
                object.A = 0;
                object.U = 0;
                object.C = 0;
                object.R = 0;
                object.F1 = 0;
                object.E1 = 0;
                object.A1 = 0;
                object.R1 = 0;
                object.R2 = 0;
                object.initHazardLevel = "";
                object.finalHazardLevel = "";
            }
            if (message.D != null && message.hasOwnProperty("D"))
                object.D = options.json && !isFinite(message.D) ? String(message.D) : message.D;
            if (message.F != null && message.hasOwnProperty("F"))
                object.F = options.json && !isFinite(message.F) ? String(message.F) : message.F;
            if (message.E != null && message.hasOwnProperty("E"))
                object.E = options.json && !isFinite(message.E) ? String(message.E) : message.E;
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.json && !isFinite(message.A) ? String(message.A) : message.A;
            if (message.U != null && message.hasOwnProperty("U"))
                object.U = options.json && !isFinite(message.U) ? String(message.U) : message.U;
            if (message.C != null && message.hasOwnProperty("C"))
                object.C = options.json && !isFinite(message.C) ? String(message.C) : message.C;
            if (message.R != null && message.hasOwnProperty("R"))
                object.R = options.json && !isFinite(message.R) ? String(message.R) : message.R;
            if (message.F1 != null && message.hasOwnProperty("F1"))
                object.F1 = options.json && !isFinite(message.F1) ? String(message.F1) : message.F1;
            if (message.E1 != null && message.hasOwnProperty("E1"))
                object.E1 = options.json && !isFinite(message.E1) ? String(message.E1) : message.E1;
            if (message.A1 != null && message.hasOwnProperty("A1"))
                object.A1 = options.json && !isFinite(message.A1) ? String(message.A1) : message.A1;
            if (message.R1 != null && message.hasOwnProperty("R1"))
                object.R1 = options.json && !isFinite(message.R1) ? String(message.R1) : message.R1;
            if (message.R2 != null && message.hasOwnProperty("R2"))
                object.R2 = options.json && !isFinite(message.R2) ? String(message.R2) : message.R2;
            if (message.initHazardLevel != null && message.hasOwnProperty("initHazardLevel"))
                object.initHazardLevel = message.initHazardLevel;
            if (message.finalHazardLevel != null && message.hasOwnProperty("finalHazardLevel"))
                object.finalHazardLevel = message.finalHazardLevel;
            return object;
        };

        /**
         * Converts this InitialCommentIndexFinialCompensationCoefficientResponse to JSON.
         * @function toJSON
         * @memberof mond.InitialCommentIndexFinialCompensationCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitialCommentIndexFinialCompensationCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitialCommentIndexFinialCompensationCoefficientResponse;
    })();

    mond.MaterialsGetRequest = (function() {

        /**
         * Properties of a MaterialsGetRequest.
         * @memberof mond
         * @interface IMaterialsGetRequest
         */

        /**
         * Constructs a new MaterialsGetRequest.
         * @memberof mond
         * @classdesc Represents a MaterialsGetRequest.
         * @implements IMaterialsGetRequest
         * @constructor
         * @param {mond.IMaterialsGetRequest=} [properties] Properties to set
         */
        function MaterialsGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialsGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialsGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialsGetRequest} MaterialsGetRequest
         */
        MaterialsGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialsGetRequest)
                return object;
            return new $root.mond.MaterialsGetRequest();
        };

        /**
         * Creates a plain object from a MaterialsGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialsGetRequest
         * @static
         * @param {mond.MaterialsGetRequest} message MaterialsGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialsGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialsGetRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialsGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialsGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialsGetRequest;
    })();

    mond.Material = (function() {

        /**
         * Properties of a Material.
         * @memberof mond
         * @interface IMaterial
         * @property {string|null} [id] Material id
         * @property {string|null} [name] Material name
         * @property {number|null} [heat] Material heat
         * @property {number|null} [coefficient] Material coefficient
         */

        /**
         * Constructs a new Material.
         * @memberof mond
         * @classdesc Represents a Material.
         * @implements IMaterial
         * @constructor
         * @param {mond.IMaterial=} [properties] Properties to set
         */
        function Material(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Material id.
         * @member {string} id
         * @memberof mond.Material
         * @instance
         */
        Material.prototype.id = "";

        /**
         * Material name.
         * @member {string} name
         * @memberof mond.Material
         * @instance
         */
        Material.prototype.name = "";

        /**
         * Material heat.
         * @member {number} heat
         * @memberof mond.Material
         * @instance
         */
        Material.prototype.heat = 0;

        /**
         * Material coefficient.
         * @member {number} coefficient
         * @memberof mond.Material
         * @instance
         */
        Material.prototype.coefficient = 0;

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.Material
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.Material} Material
         */
        Material.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.Material)
                return object;
            let message = new $root.mond.Material();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.heat != null)
                message.heat = Number(object.heat);
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            return message;
        };

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.Material
         * @static
         * @param {mond.Material} message Material
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Material.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.heat = 0;
                object.coefficient = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.heat != null && message.hasOwnProperty("heat"))
                object.heat = options.json && !isFinite(message.heat) ? String(message.heat) : message.heat;
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            return object;
        };

        /**
         * Converts this Material to JSON.
         * @function toJSON
         * @memberof mond.Material
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Material.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Material;
    })();

    mond.MaterialsGetResponse = (function() {

        /**
         * Properties of a MaterialsGetResponse.
         * @memberof mond
         * @interface IMaterialsGetResponse
         * @property {Array.<mond.IMaterial>|null} [materials] MaterialsGetResponse materials
         */

        /**
         * Constructs a new MaterialsGetResponse.
         * @memberof mond
         * @classdesc Represents a MaterialsGetResponse.
         * @implements IMaterialsGetResponse
         * @constructor
         * @param {mond.IMaterialsGetResponse=} [properties] Properties to set
         */
        function MaterialsGetResponse(properties) {
            this.materials = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialsGetResponse materials.
         * @member {Array.<mond.IMaterial>} materials
         * @memberof mond.MaterialsGetResponse
         * @instance
         */
        MaterialsGetResponse.prototype.materials = $util.emptyArray;

        /**
         * Creates a MaterialsGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialsGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialsGetResponse} MaterialsGetResponse
         */
        MaterialsGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialsGetResponse)
                return object;
            let message = new $root.mond.MaterialsGetResponse();
            if (object.materials) {
                if (!Array.isArray(object.materials))
                    throw TypeError(".mond.MaterialsGetResponse.materials: array expected");
                message.materials = [];
                for (let i = 0; i < object.materials.length; ++i) {
                    if (typeof object.materials[i] !== "object")
                        throw TypeError(".mond.MaterialsGetResponse.materials: object expected");
                    message.materials[i] = $root.mond.Material.fromObject(object.materials[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialsGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialsGetResponse
         * @static
         * @param {mond.MaterialsGetResponse} message MaterialsGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialsGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.materials = [];
            if (message.materials && message.materials.length) {
                object.materials = [];
                for (let j = 0; j < message.materials.length; ++j)
                    object.materials[j] = $root.mond.Material.toObject(message.materials[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialsGetResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialsGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialsGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialsGetResponse;
    })();

    mond.MaterialEditRequest = (function() {

        /**
         * Properties of a MaterialEditRequest.
         * @memberof mond
         * @interface IMaterialEditRequest
         * @property {string|null} [id] MaterialEditRequest id
         * @property {string|null} [name] MaterialEditRequest name
         * @property {number|null} [heat] MaterialEditRequest heat
         * @property {number|null} [coefficient] MaterialEditRequest coefficient
         */

        /**
         * Constructs a new MaterialEditRequest.
         * @memberof mond
         * @classdesc Represents a MaterialEditRequest.
         * @implements IMaterialEditRequest
         * @constructor
         * @param {mond.IMaterialEditRequest=} [properties] Properties to set
         */
        function MaterialEditRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialEditRequest id.
         * @member {string} id
         * @memberof mond.MaterialEditRequest
         * @instance
         */
        MaterialEditRequest.prototype.id = "";

        /**
         * MaterialEditRequest name.
         * @member {string} name
         * @memberof mond.MaterialEditRequest
         * @instance
         */
        MaterialEditRequest.prototype.name = "";

        /**
         * MaterialEditRequest heat.
         * @member {number} heat
         * @memberof mond.MaterialEditRequest
         * @instance
         */
        MaterialEditRequest.prototype.heat = 0;

        /**
         * MaterialEditRequest coefficient.
         * @member {number} coefficient
         * @memberof mond.MaterialEditRequest
         * @instance
         */
        MaterialEditRequest.prototype.coefficient = 0;

        /**
         * Creates a MaterialEditRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialEditRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialEditRequest} MaterialEditRequest
         */
        MaterialEditRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialEditRequest)
                return object;
            let message = new $root.mond.MaterialEditRequest();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.heat != null)
                message.heat = Number(object.heat);
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            return message;
        };

        /**
         * Creates a plain object from a MaterialEditRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialEditRequest
         * @static
         * @param {mond.MaterialEditRequest} message MaterialEditRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialEditRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.heat = 0;
                object.coefficient = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.heat != null && message.hasOwnProperty("heat"))
                object.heat = options.json && !isFinite(message.heat) ? String(message.heat) : message.heat;
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            return object;
        };

        /**
         * Converts this MaterialEditRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialEditRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialEditRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialEditRequest;
    })();

    mond.MaterialEditResponse = (function() {

        /**
         * Properties of a MaterialEditResponse.
         * @memberof mond
         * @interface IMaterialEditResponse
         */

        /**
         * Constructs a new MaterialEditResponse.
         * @memberof mond
         * @classdesc Represents a MaterialEditResponse.
         * @implements IMaterialEditResponse
         * @constructor
         * @param {mond.IMaterialEditResponse=} [properties] Properties to set
         */
        function MaterialEditResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialEditResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialEditResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialEditResponse} MaterialEditResponse
         */
        MaterialEditResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialEditResponse)
                return object;
            return new $root.mond.MaterialEditResponse();
        };

        /**
         * Creates a plain object from a MaterialEditResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialEditResponse
         * @static
         * @param {mond.MaterialEditResponse} message MaterialEditResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialEditResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialEditResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialEditResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialEditResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialEditResponse;
    })();

    mond.MaterialDeleteRequest = (function() {

        /**
         * Properties of a MaterialDeleteRequest.
         * @memberof mond
         * @interface IMaterialDeleteRequest
         * @property {string|null} [id] MaterialDeleteRequest id
         */

        /**
         * Constructs a new MaterialDeleteRequest.
         * @memberof mond
         * @classdesc Represents a MaterialDeleteRequest.
         * @implements IMaterialDeleteRequest
         * @constructor
         * @param {mond.IMaterialDeleteRequest=} [properties] Properties to set
         */
        function MaterialDeleteRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialDeleteRequest id.
         * @member {string} id
         * @memberof mond.MaterialDeleteRequest
         * @instance
         */
        MaterialDeleteRequest.prototype.id = "";

        /**
         * Creates a MaterialDeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialDeleteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialDeleteRequest} MaterialDeleteRequest
         */
        MaterialDeleteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialDeleteRequest)
                return object;
            let message = new $root.mond.MaterialDeleteRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a MaterialDeleteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialDeleteRequest
         * @static
         * @param {mond.MaterialDeleteRequest} message MaterialDeleteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialDeleteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this MaterialDeleteRequest to JSON.
         * @function toJSON
         * @memberof mond.MaterialDeleteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialDeleteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialDeleteRequest;
    })();

    mond.MaterialDeleteResponse = (function() {

        /**
         * Properties of a MaterialDeleteResponse.
         * @memberof mond
         * @interface IMaterialDeleteResponse
         */

        /**
         * Constructs a new MaterialDeleteResponse.
         * @memberof mond
         * @classdesc Represents a MaterialDeleteResponse.
         * @implements IMaterialDeleteResponse
         * @constructor
         * @param {mond.IMaterialDeleteResponse=} [properties] Properties to set
         */
        function MaterialDeleteResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialDeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mond.MaterialDeleteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mond.MaterialDeleteResponse} MaterialDeleteResponse
         */
        MaterialDeleteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mond.MaterialDeleteResponse)
                return object;
            return new $root.mond.MaterialDeleteResponse();
        };

        /**
         * Creates a plain object from a MaterialDeleteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mond.MaterialDeleteResponse
         * @static
         * @param {mond.MaterialDeleteResponse} message MaterialDeleteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialDeleteResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialDeleteResponse to JSON.
         * @function toJSON
         * @memberof mond.MaterialDeleteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialDeleteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialDeleteResponse;
    })();

    mond.MondService = (function() {

        /**
         * Constructs a new MondService service.
         * @memberof mond
         * @classdesc Represents a MondService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function MondService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (MondService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MondService;

        /**
         * Callback as used by {@link mond.MondService#materialCoefficientSaveUnknownMaterial}.
         * @memberof mond.MondService
         * @typedef MaterialCoefficientSaveUnknownMaterialCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialCoefficientSaveUnknownMaterialResponse} [response] MaterialCoefficientSaveUnknownMaterialResponse
         */

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @function materialCoefficientSaveUnknownMaterial
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientSaveUnknownMaterialRequest} request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @param {mond.MondService.MaterialCoefficientSaveUnknownMaterialCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientSaveUnknownMaterialResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialCoefficientSaveUnknownMaterial = function materialCoefficientSaveUnknownMaterial(request, callback) {
            return this.rpcCall(materialCoefficientSaveUnknownMaterial, $root.mond.MaterialCoefficientSaveUnknownMaterialRequest, $root.mond.MaterialCoefficientSaveUnknownMaterialResponse, request, callback);
        }, "name", { value: "MaterialCoefficientSaveUnknownMaterial" });

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @function materialCoefficientSaveUnknownMaterial
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientSaveUnknownMaterialRequest} request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @returns {Promise<mond.MaterialCoefficientSaveUnknownMaterialResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialCoefficientGetKnownCoefficient}.
         * @memberof mond.MondService
         * @typedef MaterialCoefficientGetKnownCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialCoefficientGetKnownCoefficientResponse} [response] MaterialCoefficientGetKnownCoefficientResponse
         */

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @function materialCoefficientGetKnownCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientGetKnownCoefficientRequest} request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @param {mond.MondService.MaterialCoefficientGetKnownCoefficientCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialCoefficientGetKnownCoefficient = function materialCoefficientGetKnownCoefficient(request, callback) {
            return this.rpcCall(materialCoefficientGetKnownCoefficient, $root.mond.MaterialCoefficientGetKnownCoefficientRequest, $root.mond.MaterialCoefficientGetKnownCoefficientResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetKnownCoefficient" });

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @function materialCoefficientGetKnownCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientGetKnownCoefficientRequest} request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @returns {Promise<mond.MaterialCoefficientGetKnownCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialCoefficientGetKnownNames}.
         * @memberof mond.MondService
         * @typedef MaterialCoefficientGetKnownNamesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialCoefficientGetKnownNamesResponse} [response] MaterialCoefficientGetKnownNamesResponse
         */

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @function materialCoefficientGetKnownNames
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientGetKnownNamesRequest} request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @param {mond.MondService.MaterialCoefficientGetKnownNamesCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownNamesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialCoefficientGetKnownNames = function materialCoefficientGetKnownNames(request, callback) {
            return this.rpcCall(materialCoefficientGetKnownNames, $root.mond.MaterialCoefficientGetKnownNamesRequest, $root.mond.MaterialCoefficientGetKnownNamesResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetKnownNames" });

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @function materialCoefficientGetKnownNames
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientGetKnownNamesRequest} request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @returns {Promise<mond.MaterialCoefficientGetKnownNamesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialCoefficient}.
         * @memberof mond.MondService
         * @typedef MaterialCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialCoefficientResponse} [response] MaterialCoefficientResponse
         */

        /**
         * Calls MaterialCoefficient.
         * @function materialCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientRequest} request MaterialCoefficientRequest message or plain object
         * @param {mond.MondService.MaterialCoefficientCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialCoefficient = function materialCoefficient(request, callback) {
            return this.rpcCall(materialCoefficient, $root.mond.MaterialCoefficientRequest, $root.mond.MaterialCoefficientResponse, request, callback);
        }, "name", { value: "MaterialCoefficient" });

        /**
         * Calls MaterialCoefficient.
         * @function materialCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialCoefficientRequest} request MaterialCoefficientRequest message or plain object
         * @returns {Promise<mond.MaterialCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#specialMaterialHazard}.
         * @memberof mond.MondService
         * @typedef SpecialMaterialHazardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.SpecialMaterialHazardResponse} [response] SpecialMaterialHazardResponse
         */

        /**
         * Calls SpecialMaterialHazard.
         * @function specialMaterialHazard
         * @memberof mond.MondService
         * @instance
         * @param {mond.ISpecialMaterialHazardRequest} request SpecialMaterialHazardRequest message or plain object
         * @param {mond.MondService.SpecialMaterialHazardCallback} callback Node-style callback called with the error, if any, and SpecialMaterialHazardResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.specialMaterialHazard = function specialMaterialHazard(request, callback) {
            return this.rpcCall(specialMaterialHazard, $root.mond.SpecialMaterialHazardRequest, $root.mond.SpecialMaterialHazardResponse, request, callback);
        }, "name", { value: "SpecialMaterialHazard" });

        /**
         * Calls SpecialMaterialHazard.
         * @function specialMaterialHazard
         * @memberof mond.MondService
         * @instance
         * @param {mond.ISpecialMaterialHazardRequest} request SpecialMaterialHazardRequest message or plain object
         * @returns {Promise<mond.SpecialMaterialHazardResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#generalProcessHazard}.
         * @memberof mond.MondService
         * @typedef GeneralProcessHazardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.GeneralProcessHazardResponse} [response] GeneralProcessHazardResponse
         */

        /**
         * Calls GeneralProcessHazard.
         * @function generalProcessHazard
         * @memberof mond.MondService
         * @instance
         * @param {mond.IGeneralProcessHazardRequest} request GeneralProcessHazardRequest message or plain object
         * @param {mond.MondService.GeneralProcessHazardCallback} callback Node-style callback called with the error, if any, and GeneralProcessHazardResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.generalProcessHazard = function generalProcessHazard(request, callback) {
            return this.rpcCall(generalProcessHazard, $root.mond.GeneralProcessHazardRequest, $root.mond.GeneralProcessHazardResponse, request, callback);
        }, "name", { value: "GeneralProcessHazard" });

        /**
         * Calls GeneralProcessHazard.
         * @function generalProcessHazard
         * @memberof mond.MondService
         * @instance
         * @param {mond.IGeneralProcessHazardRequest} request GeneralProcessHazardRequest message or plain object
         * @returns {Promise<mond.GeneralProcessHazardResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#specialProcessHazard}.
         * @memberof mond.MondService
         * @typedef SpecialProcessHazardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.SpecialProcessHazardResponse} [response] SpecialProcessHazardResponse
         */

        /**
         * Calls SpecialProcessHazard.
         * @function specialProcessHazard
         * @memberof mond.MondService
         * @instance
         * @param {mond.ISpecialProcessHazardRequest} request SpecialProcessHazardRequest message or plain object
         * @param {mond.MondService.SpecialProcessHazardCallback} callback Node-style callback called with the error, if any, and SpecialProcessHazardResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.specialProcessHazard = function specialProcessHazard(request, callback) {
            return this.rpcCall(specialProcessHazard, $root.mond.SpecialProcessHazardRequest, $root.mond.SpecialProcessHazardResponse, request, callback);
        }, "name", { value: "SpecialProcessHazard" });

        /**
         * Calls SpecialProcessHazard.
         * @function specialProcessHazard
         * @memberof mond.MondService
         * @instance
         * @param {mond.ISpecialProcessHazardRequest} request SpecialProcessHazardRequest message or plain object
         * @returns {Promise<mond.SpecialProcessHazardResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#arrangementHazardCoefficient}.
         * @memberof mond.MondService
         * @typedef ArrangementHazardCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.ArrangementHazardCoefficientResponse} [response] ArrangementHazardCoefficientResponse
         */

        /**
         * Calls ArrangementHazardCoefficient.
         * @function arrangementHazardCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IArrangementHazardCoefficientRequest} request ArrangementHazardCoefficientRequest message or plain object
         * @param {mond.MondService.ArrangementHazardCoefficientCallback} callback Node-style callback called with the error, if any, and ArrangementHazardCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.arrangementHazardCoefficient = function arrangementHazardCoefficient(request, callback) {
            return this.rpcCall(arrangementHazardCoefficient, $root.mond.ArrangementHazardCoefficientRequest, $root.mond.ArrangementHazardCoefficientResponse, request, callback);
        }, "name", { value: "ArrangementHazardCoefficient" });

        /**
         * Calls ArrangementHazardCoefficient.
         * @function arrangementHazardCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IArrangementHazardCoefficientRequest} request ArrangementHazardCoefficientRequest message or plain object
         * @returns {Promise<mond.ArrangementHazardCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#numHazardCoefficient}.
         * @memberof mond.MondService
         * @typedef NumHazardCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.NumHazardCoefficientResponse} [response] NumHazardCoefficientResponse
         */

        /**
         * Calls NumHazardCoefficient.
         * @function numHazardCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.INumHazardCoefficientRequest} request NumHazardCoefficientRequest message or plain object
         * @param {mond.MondService.NumHazardCoefficientCallback} callback Node-style callback called with the error, if any, and NumHazardCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.numHazardCoefficient = function numHazardCoefficient(request, callback) {
            return this.rpcCall(numHazardCoefficient, $root.mond.NumHazardCoefficientRequest, $root.mond.NumHazardCoefficientResponse, request, callback);
        }, "name", { value: "NumHazardCoefficient" });

        /**
         * Calls NumHazardCoefficient.
         * @function numHazardCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.INumHazardCoefficientRequest} request NumHazardCoefficientRequest message or plain object
         * @returns {Promise<mond.NumHazardCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#poisonHazardCoefficient}.
         * @memberof mond.MondService
         * @typedef PoisonHazardCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.PoisonHazardCoefficientResponse} [response] PoisonHazardCoefficientResponse
         */

        /**
         * Calls PoisonHazardCoefficient.
         * @function poisonHazardCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IPoisonHazardCoefficientRequest} request PoisonHazardCoefficientRequest message or plain object
         * @param {mond.MondService.PoisonHazardCoefficientCallback} callback Node-style callback called with the error, if any, and PoisonHazardCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.poisonHazardCoefficient = function poisonHazardCoefficient(request, callback) {
            return this.rpcCall(poisonHazardCoefficient, $root.mond.PoisonHazardCoefficientRequest, $root.mond.PoisonHazardCoefficientResponse, request, callback);
        }, "name", { value: "PoisonHazardCoefficient" });

        /**
         * Calls PoisonHazardCoefficient.
         * @function poisonHazardCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IPoisonHazardCoefficientRequest} request PoisonHazardCoefficientRequest message or plain object
         * @returns {Promise<mond.PoisonHazardCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#poisonHazardCoefficientGetTLVTypeExposure}.
         * @memberof mond.MondService
         * @typedef PoisonHazardCoefficientGetTLVTypeExposureCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.PoisonHazardCoefficientGetTLVTypeExposureResponse} [response] PoisonHazardCoefficientGetTLVTypeExposureResponse
         */

        /**
         * Calls PoisonHazardCoefficientGetTLVTypeExposure.
         * @function poisonHazardCoefficientGetTLVTypeExposure
         * @memberof mond.MondService
         * @instance
         * @param {mond.IPoisonHazardCoefficientGetTLVTypeExposureRequest} request PoisonHazardCoefficientGetTLVTypeExposureRequest message or plain object
         * @param {mond.MondService.PoisonHazardCoefficientGetTLVTypeExposureCallback} callback Node-style callback called with the error, if any, and PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.poisonHazardCoefficientGetTLVTypeExposure = function poisonHazardCoefficientGetTLVTypeExposure(request, callback) {
            return this.rpcCall(poisonHazardCoefficientGetTLVTypeExposure, $root.mond.PoisonHazardCoefficientGetTLVTypeExposureRequest, $root.mond.PoisonHazardCoefficientGetTLVTypeExposureResponse, request, callback);
        }, "name", { value: "PoisonHazardCoefficientGetTLVTypeExposure" });

        /**
         * Calls PoisonHazardCoefficientGetTLVTypeExposure.
         * @function poisonHazardCoefficientGetTLVTypeExposure
         * @memberof mond.MondService
         * @instance
         * @param {mond.IPoisonHazardCoefficientGetTLVTypeExposureRequest} request PoisonHazardCoefficientGetTLVTypeExposureRequest message or plain object
         * @returns {Promise<mond.PoisonHazardCoefficientGetTLVTypeExposureResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#containerSystemCoefficient}.
         * @memberof mond.MondService
         * @typedef ContainerSystemCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.ContainerSystemCoefficientResponse} [response] ContainerSystemCoefficientResponse
         */

        /**
         * Calls ContainerSystemCoefficient.
         * @function containerSystemCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IContainerSystemCoefficientRequest} request ContainerSystemCoefficientRequest message or plain object
         * @param {mond.MondService.ContainerSystemCoefficientCallback} callback Node-style callback called with the error, if any, and ContainerSystemCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.containerSystemCoefficient = function containerSystemCoefficient(request, callback) {
            return this.rpcCall(containerSystemCoefficient, $root.mond.ContainerSystemCoefficientRequest, $root.mond.ContainerSystemCoefficientResponse, request, callback);
        }, "name", { value: "ContainerSystemCoefficient" });

        /**
         * Calls ContainerSystemCoefficient.
         * @function containerSystemCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IContainerSystemCoefficientRequest} request ContainerSystemCoefficientRequest message or plain object
         * @returns {Promise<mond.ContainerSystemCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#processManagementCoefficient}.
         * @memberof mond.MondService
         * @typedef ProcessManagementCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.ProcessManagementCoefficientResponse} [response] ProcessManagementCoefficientResponse
         */

        /**
         * Calls ProcessManagementCoefficient.
         * @function processManagementCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IProcessManagementCoefficientRequest} request ProcessManagementCoefficientRequest message or plain object
         * @param {mond.MondService.ProcessManagementCoefficientCallback} callback Node-style callback called with the error, if any, and ProcessManagementCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.processManagementCoefficient = function processManagementCoefficient(request, callback) {
            return this.rpcCall(processManagementCoefficient, $root.mond.ProcessManagementCoefficientRequest, $root.mond.ProcessManagementCoefficientResponse, request, callback);
        }, "name", { value: "ProcessManagementCoefficient" });

        /**
         * Calls ProcessManagementCoefficient.
         * @function processManagementCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IProcessManagementCoefficientRequest} request ProcessManagementCoefficientRequest message or plain object
         * @returns {Promise<mond.ProcessManagementCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialIsolationCoefficient}.
         * @memberof mond.MondService
         * @typedef MaterialIsolationCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialIsolationCoefficientResponse} [response] MaterialIsolationCoefficientResponse
         */

        /**
         * Calls MaterialIsolationCoefficient.
         * @function materialIsolationCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialIsolationCoefficientRequest} request MaterialIsolationCoefficientRequest message or plain object
         * @param {mond.MondService.MaterialIsolationCoefficientCallback} callback Node-style callback called with the error, if any, and MaterialIsolationCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialIsolationCoefficient = function materialIsolationCoefficient(request, callback) {
            return this.rpcCall(materialIsolationCoefficient, $root.mond.MaterialIsolationCoefficientRequest, $root.mond.MaterialIsolationCoefficientResponse, request, callback);
        }, "name", { value: "MaterialIsolationCoefficient" });

        /**
         * Calls MaterialIsolationCoefficient.
         * @function materialIsolationCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialIsolationCoefficientRequest} request MaterialIsolationCoefficientRequest message or plain object
         * @returns {Promise<mond.MaterialIsolationCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#safetyAttitudeCoefficient}.
         * @memberof mond.MondService
         * @typedef SafetyAttitudeCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.SafetyAttitudeCoefficientResponse} [response] SafetyAttitudeCoefficientResponse
         */

        /**
         * Calls SafetyAttitudeCoefficient.
         * @function safetyAttitudeCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.ISafetyAttitudeCoefficientRequest} request SafetyAttitudeCoefficientRequest message or plain object
         * @param {mond.MondService.SafetyAttitudeCoefficientCallback} callback Node-style callback called with the error, if any, and SafetyAttitudeCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.safetyAttitudeCoefficient = function safetyAttitudeCoefficient(request, callback) {
            return this.rpcCall(safetyAttitudeCoefficient, $root.mond.SafetyAttitudeCoefficientRequest, $root.mond.SafetyAttitudeCoefficientResponse, request, callback);
        }, "name", { value: "SafetyAttitudeCoefficient" });

        /**
         * Calls SafetyAttitudeCoefficient.
         * @function safetyAttitudeCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.ISafetyAttitudeCoefficientRequest} request SafetyAttitudeCoefficientRequest message or plain object
         * @returns {Promise<mond.SafetyAttitudeCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#firePreventionCoefficient}.
         * @memberof mond.MondService
         * @typedef FirePreventionCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.FirePreventionCoefficientResponse} [response] FirePreventionCoefficientResponse
         */

        /**
         * Calls FirePreventionCoefficient.
         * @function firePreventionCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IFirePreventionCoefficientRequest} request FirePreventionCoefficientRequest message or plain object
         * @param {mond.MondService.FirePreventionCoefficientCallback} callback Node-style callback called with the error, if any, and FirePreventionCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.firePreventionCoefficient = function firePreventionCoefficient(request, callback) {
            return this.rpcCall(firePreventionCoefficient, $root.mond.FirePreventionCoefficientRequest, $root.mond.FirePreventionCoefficientResponse, request, callback);
        }, "name", { value: "FirePreventionCoefficient" });

        /**
         * Calls FirePreventionCoefficient.
         * @function firePreventionCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IFirePreventionCoefficientRequest} request FirePreventionCoefficientRequest message or plain object
         * @returns {Promise<mond.FirePreventionCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#fireFightingActivityCoefficient}.
         * @memberof mond.MondService
         * @typedef FireFightingActivityCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.FireFightingActivityCoefficientResponse} [response] FireFightingActivityCoefficientResponse
         */

        /**
         * Calls FireFightingActivityCoefficient.
         * @function fireFightingActivityCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IFireFightingActivityCoefficientRequest} request FireFightingActivityCoefficientRequest message or plain object
         * @param {mond.MondService.FireFightingActivityCoefficientCallback} callback Node-style callback called with the error, if any, and FireFightingActivityCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.fireFightingActivityCoefficient = function fireFightingActivityCoefficient(request, callback) {
            return this.rpcCall(fireFightingActivityCoefficient, $root.mond.FireFightingActivityCoefficientRequest, $root.mond.FireFightingActivityCoefficientResponse, request, callback);
        }, "name", { value: "FireFightingActivityCoefficient" });

        /**
         * Calls FireFightingActivityCoefficient.
         * @function fireFightingActivityCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IFireFightingActivityCoefficientRequest} request FireFightingActivityCoefficientRequest message or plain object
         * @returns {Promise<mond.FireFightingActivityCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#initialCommentIndexFinialCompensationCoefficient}.
         * @memberof mond.MondService
         * @typedef InitialCommentIndexFinialCompensationCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.InitialCommentIndexFinialCompensationCoefficientResponse} [response] InitialCommentIndexFinialCompensationCoefficientResponse
         */

        /**
         * Calls InitialCommentIndexFinialCompensationCoefficient.
         * @function initialCommentIndexFinialCompensationCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IInitialCommentIndexFinialCompensationCoefficientRequest} request InitialCommentIndexFinialCompensationCoefficientRequest message or plain object
         * @param {mond.MondService.InitialCommentIndexFinialCompensationCoefficientCallback} callback Node-style callback called with the error, if any, and InitialCommentIndexFinialCompensationCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.initialCommentIndexFinialCompensationCoefficient = function initialCommentIndexFinialCompensationCoefficient(request, callback) {
            return this.rpcCall(initialCommentIndexFinialCompensationCoefficient, $root.mond.InitialCommentIndexFinialCompensationCoefficientRequest, $root.mond.InitialCommentIndexFinialCompensationCoefficientResponse, request, callback);
        }, "name", { value: "InitialCommentIndexFinialCompensationCoefficient" });

        /**
         * Calls InitialCommentIndexFinialCompensationCoefficient.
         * @function initialCommentIndexFinialCompensationCoefficient
         * @memberof mond.MondService
         * @instance
         * @param {mond.IInitialCommentIndexFinialCompensationCoefficientRequest} request InitialCommentIndexFinialCompensationCoefficientRequest message or plain object
         * @returns {Promise<mond.InitialCommentIndexFinialCompensationCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialsGet}.
         * @memberof mond.MondService
         * @typedef MaterialsGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialsGetResponse} [response] MaterialsGetResponse
         */

        /**
         * Calls MaterialsGet.
         * @function materialsGet
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialsGetRequest} request MaterialsGetRequest message or plain object
         * @param {mond.MondService.MaterialsGetCallback} callback Node-style callback called with the error, if any, and MaterialsGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialsGet = function materialsGet(request, callback) {
            return this.rpcCall(materialsGet, $root.mond.MaterialsGetRequest, $root.mond.MaterialsGetResponse, request, callback);
        }, "name", { value: "MaterialsGet" });

        /**
         * Calls MaterialsGet.
         * @function materialsGet
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialsGetRequest} request MaterialsGetRequest message or plain object
         * @returns {Promise<mond.MaterialsGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialEdit}.
         * @memberof mond.MondService
         * @typedef MaterialEditCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialEditResponse} [response] MaterialEditResponse
         */

        /**
         * Calls MaterialEdit.
         * @function materialEdit
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialEditRequest} request MaterialEditRequest message or plain object
         * @param {mond.MondService.MaterialEditCallback} callback Node-style callback called with the error, if any, and MaterialEditResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialEdit = function materialEdit(request, callback) {
            return this.rpcCall(materialEdit, $root.mond.MaterialEditRequest, $root.mond.MaterialEditResponse, request, callback);
        }, "name", { value: "MaterialEdit" });

        /**
         * Calls MaterialEdit.
         * @function materialEdit
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialEditRequest} request MaterialEditRequest message or plain object
         * @returns {Promise<mond.MaterialEditResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mond.MondService#materialDelete}.
         * @memberof mond.MondService
         * @typedef MaterialDeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mond.MaterialDeleteResponse} [response] MaterialDeleteResponse
         */

        /**
         * Calls MaterialDelete.
         * @function materialDelete
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialDeleteRequest} request MaterialDeleteRequest message or plain object
         * @param {mond.MondService.MaterialDeleteCallback} callback Node-style callback called with the error, if any, and MaterialDeleteResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MondService.prototype.materialDelete = function materialDelete(request, callback) {
            return this.rpcCall(materialDelete, $root.mond.MaterialDeleteRequest, $root.mond.MaterialDeleteResponse, request, callback);
        }, "name", { value: "MaterialDelete" });

        /**
         * Calls MaterialDelete.
         * @function materialDelete
         * @memberof mond.MondService
         * @instance
         * @param {mond.IMaterialDeleteRequest} request MaterialDeleteRequest message or plain object
         * @returns {Promise<mond.MaterialDeleteResponse>} Promise
         * @variation 2
         */

        return MondService;
    })();

    return mond;
})();