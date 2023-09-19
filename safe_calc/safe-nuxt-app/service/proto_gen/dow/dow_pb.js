import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const dow = $root.dow = (() => {

    /**
     * Namespace dow.
     * @exports dow
     * @namespace
     */
    const dow = {};

    dow.MaterialCoefficientGetChemicalActivityGradeRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetChemicalActivityGradeRequest.
         * @memberof dow
         * @interface IMaterialCoefficientGetChemicalActivityGradeRequest
         * @property {string|null} [reactionCharacter] MaterialCoefficientGetChemicalActivityGradeRequest reactionCharacter
         */

        /**
         * Constructs a new MaterialCoefficientGetChemicalActivityGradeRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetChemicalActivityGradeRequest.
         * @implements IMaterialCoefficientGetChemicalActivityGradeRequest
         * @constructor
         * @param {dow.IMaterialCoefficientGetChemicalActivityGradeRequest=} [properties] Properties to set
         */
        function MaterialCoefficientGetChemicalActivityGradeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetChemicalActivityGradeRequest reactionCharacter.
         * @member {string} reactionCharacter
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeRequest
         * @instance
         */
        MaterialCoefficientGetChemicalActivityGradeRequest.prototype.reactionCharacter = "";

        /**
         * Creates a MaterialCoefficientGetChemicalActivityGradeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetChemicalActivityGradeRequest} MaterialCoefficientGetChemicalActivityGradeRequest
         */
        MaterialCoefficientGetChemicalActivityGradeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetChemicalActivityGradeRequest)
                return object;
            let message = new $root.dow.MaterialCoefficientGetChemicalActivityGradeRequest();
            if (object.reactionCharacter != null)
                message.reactionCharacter = String(object.reactionCharacter);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetChemicalActivityGradeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeRequest
         * @static
         * @param {dow.MaterialCoefficientGetChemicalActivityGradeRequest} message MaterialCoefficientGetChemicalActivityGradeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetChemicalActivityGradeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reactionCharacter = "";
            if (message.reactionCharacter != null && message.hasOwnProperty("reactionCharacter"))
                object.reactionCharacter = message.reactionCharacter;
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetChemicalActivityGradeRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetChemicalActivityGradeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetChemicalActivityGradeRequest;
    })();

    dow.MaterialCoefficientGetChemicalActivityGradeResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetChemicalActivityGradeResponse.
         * @memberof dow
         * @interface IMaterialCoefficientGetChemicalActivityGradeResponse
         * @property {number|null} [chemicalActivityGrade] MaterialCoefficientGetChemicalActivityGradeResponse chemicalActivityGrade
         */

        /**
         * Constructs a new MaterialCoefficientGetChemicalActivityGradeResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetChemicalActivityGradeResponse.
         * @implements IMaterialCoefficientGetChemicalActivityGradeResponse
         * @constructor
         * @param {dow.IMaterialCoefficientGetChemicalActivityGradeResponse=} [properties] Properties to set
         */
        function MaterialCoefficientGetChemicalActivityGradeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetChemicalActivityGradeResponse chemicalActivityGrade.
         * @member {number} chemicalActivityGrade
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeResponse
         * @instance
         */
        MaterialCoefficientGetChemicalActivityGradeResponse.prototype.chemicalActivityGrade = 0;

        /**
         * Creates a MaterialCoefficientGetChemicalActivityGradeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetChemicalActivityGradeResponse} MaterialCoefficientGetChemicalActivityGradeResponse
         */
        MaterialCoefficientGetChemicalActivityGradeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetChemicalActivityGradeResponse)
                return object;
            let message = new $root.dow.MaterialCoefficientGetChemicalActivityGradeResponse();
            if (object.chemicalActivityGrade != null)
                message.chemicalActivityGrade = object.chemicalActivityGrade | 0;
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetChemicalActivityGradeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeResponse
         * @static
         * @param {dow.MaterialCoefficientGetChemicalActivityGradeResponse} message MaterialCoefficientGetChemicalActivityGradeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetChemicalActivityGradeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.chemicalActivityGrade = 0;
            if (message.chemicalActivityGrade != null && message.hasOwnProperty("chemicalActivityGrade"))
                object.chemicalActivityGrade = message.chemicalActivityGrade;
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetChemicalActivityGradeResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetChemicalActivityGradeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetChemicalActivityGradeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetChemicalActivityGradeResponse;
    })();

    dow.MaterialCoefficientRequest = (function() {

        /**
         * Properties of a MaterialCoefficientRequest.
         * @memberof dow
         * @interface IMaterialCoefficientRequest
         * @property {number|null} [chemicalActivityGrade] MaterialCoefficientRequest chemicalActivityGrade
         * @property {string|null} [type] MaterialCoefficientRequest type
         * @property {string|null} [typeDetail] MaterialCoefficientRequest typeDetail
         */

        /**
         * Constructs a new MaterialCoefficientRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientRequest.
         * @implements IMaterialCoefficientRequest
         * @constructor
         * @param {dow.IMaterialCoefficientRequest=} [properties] Properties to set
         */
        function MaterialCoefficientRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientRequest chemicalActivityGrade.
         * @member {number} chemicalActivityGrade
         * @memberof dow.MaterialCoefficientRequest
         * @instance
         */
        MaterialCoefficientRequest.prototype.chemicalActivityGrade = 0;

        /**
         * MaterialCoefficientRequest type.
         * @member {string} type
         * @memberof dow.MaterialCoefficientRequest
         * @instance
         */
        MaterialCoefficientRequest.prototype.type = "";

        /**
         * MaterialCoefficientRequest typeDetail.
         * @member {string} typeDetail
         * @memberof dow.MaterialCoefficientRequest
         * @instance
         */
        MaterialCoefficientRequest.prototype.typeDetail = "";

        /**
         * Creates a MaterialCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientRequest} MaterialCoefficientRequest
         */
        MaterialCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientRequest)
                return object;
            let message = new $root.dow.MaterialCoefficientRequest();
            if (object.chemicalActivityGrade != null)
                message.chemicalActivityGrade = object.chemicalActivityGrade | 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.typeDetail != null)
                message.typeDetail = String(object.typeDetail);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientRequest
         * @static
         * @param {dow.MaterialCoefficientRequest} message MaterialCoefficientRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.chemicalActivityGrade = 0;
                object.type = "";
                object.typeDetail = "";
            }
            if (message.chemicalActivityGrade != null && message.hasOwnProperty("chemicalActivityGrade"))
                object.chemicalActivityGrade = message.chemicalActivityGrade;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.typeDetail != null && message.hasOwnProperty("typeDetail"))
                object.typeDetail = message.typeDetail;
            return object;
        };

        /**
         * Converts this MaterialCoefficientRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientRequest;
    })();

    dow.MaterialCoefficientResponse = (function() {

        /**
         * Properties of a MaterialCoefficientResponse.
         * @memberof dow
         * @interface IMaterialCoefficientResponse
         * @property {number|null} [coefficient] MaterialCoefficientResponse coefficient
         */

        /**
         * Constructs a new MaterialCoefficientResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientResponse.
         * @implements IMaterialCoefficientResponse
         * @constructor
         * @param {dow.IMaterialCoefficientResponse=} [properties] Properties to set
         */
        function MaterialCoefficientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientResponse coefficient.
         * @member {number} coefficient
         * @memberof dow.MaterialCoefficientResponse
         * @instance
         */
        MaterialCoefficientResponse.prototype.coefficient = 0;

        /**
         * Creates a MaterialCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientResponse} MaterialCoefficientResponse
         */
        MaterialCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientResponse)
                return object;
            let message = new $root.dow.MaterialCoefficientResponse();
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientResponse
         * @static
         * @param {dow.MaterialCoefficientResponse} message MaterialCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.coefficient = 0;
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            return object;
        };

        /**
         * Converts this MaterialCoefficientResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientResponse;
    })();

    dow.MaterialCoefficientSaveUnknownMaterialRequest = (function() {

        /**
         * Properties of a MaterialCoefficientSaveUnknownMaterialRequest.
         * @memberof dow
         * @interface IMaterialCoefficientSaveUnknownMaterialRequest
         * @property {string|null} [name] MaterialCoefficientSaveUnknownMaterialRequest name
         * @property {number|null} [coefficient] MaterialCoefficientSaveUnknownMaterialRequest coefficient
         */

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientSaveUnknownMaterialRequest.
         * @implements IMaterialCoefficientSaveUnknownMaterialRequest
         * @constructor
         * @param {dow.IMaterialCoefficientSaveUnknownMaterialRequest=} [properties] Properties to set
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
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.name = "";

        /**
         * MaterialCoefficientSaveUnknownMaterialRequest coefficient.
         * @member {number} coefficient
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.coefficient = 0;

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientSaveUnknownMaterialRequest} MaterialCoefficientSaveUnknownMaterialRequest
         */
        MaterialCoefficientSaveUnknownMaterialRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientSaveUnknownMaterialRequest)
                return object;
            let message = new $root.dow.MaterialCoefficientSaveUnknownMaterialRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialRequest
         * @static
         * @param {dow.MaterialCoefficientSaveUnknownMaterialRequest} message MaterialCoefficientSaveUnknownMaterialRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientSaveUnknownMaterialRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.coefficient = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            return object;
        };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientSaveUnknownMaterialRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientSaveUnknownMaterialRequest;
    })();

    dow.MaterialCoefficientSaveUnknownMaterialResponse = (function() {

        /**
         * Properties of a MaterialCoefficientSaveUnknownMaterialResponse.
         * @memberof dow
         * @interface IMaterialCoefficientSaveUnknownMaterialResponse
         */

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientSaveUnknownMaterialResponse.
         * @implements IMaterialCoefficientSaveUnknownMaterialResponse
         * @constructor
         * @param {dow.IMaterialCoefficientSaveUnknownMaterialResponse=} [properties] Properties to set
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
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientSaveUnknownMaterialResponse} MaterialCoefficientSaveUnknownMaterialResponse
         */
        MaterialCoefficientSaveUnknownMaterialResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientSaveUnknownMaterialResponse)
                return object;
            return new $root.dow.MaterialCoefficientSaveUnknownMaterialResponse();
        };

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialResponse
         * @static
         * @param {dow.MaterialCoefficientSaveUnknownMaterialResponse} message MaterialCoefficientSaveUnknownMaterialResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientSaveUnknownMaterialResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientSaveUnknownMaterialResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientSaveUnknownMaterialResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientSaveUnknownMaterialResponse;
    })();

    dow.MaterialCoefficientGetKnownCoefficientRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownCoefficientRequest.
         * @memberof dow
         * @interface IMaterialCoefficientGetKnownCoefficientRequest
         * @property {string|null} [name] MaterialCoefficientGetKnownCoefficientRequest name
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetKnownCoefficientRequest.
         * @implements IMaterialCoefficientGetKnownCoefficientRequest
         * @constructor
         * @param {dow.IMaterialCoefficientGetKnownCoefficientRequest=} [properties] Properties to set
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
         * @memberof dow.MaterialCoefficientGetKnownCoefficientRequest
         * @instance
         */
        MaterialCoefficientGetKnownCoefficientRequest.prototype.name = "";

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetKnownCoefficientRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetKnownCoefficientRequest} MaterialCoefficientGetKnownCoefficientRequest
         */
        MaterialCoefficientGetKnownCoefficientRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetKnownCoefficientRequest)
                return object;
            let message = new $root.dow.MaterialCoefficientGetKnownCoefficientRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetKnownCoefficientRequest
         * @static
         * @param {dow.MaterialCoefficientGetKnownCoefficientRequest} message MaterialCoefficientGetKnownCoefficientRequest
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
         * @memberof dow.MaterialCoefficientGetKnownCoefficientRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownCoefficientRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownCoefficientRequest;
    })();

    dow.MaterialCoefficientGetKnownCoefficientResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownCoefficientResponse.
         * @memberof dow
         * @interface IMaterialCoefficientGetKnownCoefficientResponse
         * @property {number|null} [coefficient] MaterialCoefficientGetKnownCoefficientResponse coefficient
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetKnownCoefficientResponse.
         * @implements IMaterialCoefficientGetKnownCoefficientResponse
         * @constructor
         * @param {dow.IMaterialCoefficientGetKnownCoefficientResponse=} [properties] Properties to set
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
         * @memberof dow.MaterialCoefficientGetKnownCoefficientResponse
         * @instance
         */
        MaterialCoefficientGetKnownCoefficientResponse.prototype.coefficient = 0;

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetKnownCoefficientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetKnownCoefficientResponse} MaterialCoefficientGetKnownCoefficientResponse
         */
        MaterialCoefficientGetKnownCoefficientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetKnownCoefficientResponse)
                return object;
            let message = new $root.dow.MaterialCoefficientGetKnownCoefficientResponse();
            if (object.coefficient != null)
                message.coefficient = Number(object.coefficient);
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetKnownCoefficientResponse
         * @static
         * @param {dow.MaterialCoefficientGetKnownCoefficientResponse} message MaterialCoefficientGetKnownCoefficientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetKnownCoefficientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.coefficient = 0;
            if (message.coefficient != null && message.hasOwnProperty("coefficient"))
                object.coefficient = options.json && !isFinite(message.coefficient) ? String(message.coefficient) : message.coefficient;
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetKnownCoefficientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownCoefficientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownCoefficientResponse;
    })();

    dow.MaterialCoefficientGetKnownNamesRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownNamesRequest.
         * @memberof dow
         * @interface IMaterialCoefficientGetKnownNamesRequest
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetKnownNamesRequest.
         * @implements IMaterialCoefficientGetKnownNamesRequest
         * @constructor
         * @param {dow.IMaterialCoefficientGetKnownNamesRequest=} [properties] Properties to set
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
         * @memberof dow.MaterialCoefficientGetKnownNamesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetKnownNamesRequest} MaterialCoefficientGetKnownNamesRequest
         */
        MaterialCoefficientGetKnownNamesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetKnownNamesRequest)
                return object;
            return new $root.dow.MaterialCoefficientGetKnownNamesRequest();
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetKnownNamesRequest
         * @static
         * @param {dow.MaterialCoefficientGetKnownNamesRequest} message MaterialCoefficientGetKnownNamesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetKnownNamesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialCoefficientGetKnownNamesRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetKnownNamesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownNamesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownNamesRequest;
    })();

    dow.Name = (function() {

        /**
         * Properties of a Name.
         * @memberof dow
         * @interface IName
         * @property {string|null} [name] Name name
         * @property {string|null} [code] Name code
         */

        /**
         * Constructs a new Name.
         * @memberof dow
         * @classdesc Represents a Name.
         * @implements IName
         * @constructor
         * @param {dow.IName=} [properties] Properties to set
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
         * @memberof dow.Name
         * @instance
         */
        Name.prototype.name = "";

        /**
         * Name code.
         * @member {string} code
         * @memberof dow.Name
         * @instance
         */
        Name.prototype.code = "";

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.Name
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.Name} Name
         */
        Name.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.Name)
                return object;
            let message = new $root.dow.Name();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.Name
         * @static
         * @param {dow.Name} message Name
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
         * @memberof dow.Name
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Name.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Name;
    })();

    dow.MaterialCoefficientGetKnownNamesResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetKnownNamesResponse.
         * @memberof dow
         * @interface IMaterialCoefficientGetKnownNamesResponse
         * @property {Array.<dow.IName>|null} [names] MaterialCoefficientGetKnownNamesResponse names
         */

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetKnownNamesResponse.
         * @implements IMaterialCoefficientGetKnownNamesResponse
         * @constructor
         * @param {dow.IMaterialCoefficientGetKnownNamesResponse=} [properties] Properties to set
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
         * @member {Array.<dow.IName>} names
         * @memberof dow.MaterialCoefficientGetKnownNamesResponse
         * @instance
         */
        MaterialCoefficientGetKnownNamesResponse.prototype.names = $util.emptyArray;

        /**
         * Creates a MaterialCoefficientGetKnownNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetKnownNamesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetKnownNamesResponse} MaterialCoefficientGetKnownNamesResponse
         */
        MaterialCoefficientGetKnownNamesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetKnownNamesResponse)
                return object;
            let message = new $root.dow.MaterialCoefficientGetKnownNamesResponse();
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".dow.MaterialCoefficientGetKnownNamesResponse.names: array expected");
                message.names = [];
                for (let i = 0; i < object.names.length; ++i) {
                    if (typeof object.names[i] !== "object")
                        throw TypeError(".dow.MaterialCoefficientGetKnownNamesResponse.names: object expected");
                    message.names[i] = $root.dow.Name.fromObject(object.names[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetKnownNamesResponse
         * @static
         * @param {dow.MaterialCoefficientGetKnownNamesResponse} message MaterialCoefficientGetKnownNamesResponse
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
                    object.names[j] = $root.dow.Name.toObject(message.names[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetKnownNamesResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetKnownNamesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetKnownNamesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetKnownNamesResponse;
    })();

    dow.MaterialCoefficientGetReactionCharactersRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetReactionCharactersRequest.
         * @memberof dow
         * @interface IMaterialCoefficientGetReactionCharactersRequest
         */

        /**
         * Constructs a new MaterialCoefficientGetReactionCharactersRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetReactionCharactersRequest.
         * @implements IMaterialCoefficientGetReactionCharactersRequest
         * @constructor
         * @param {dow.IMaterialCoefficientGetReactionCharactersRequest=} [properties] Properties to set
         */
        function MaterialCoefficientGetReactionCharactersRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialCoefficientGetReactionCharactersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetReactionCharactersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetReactionCharactersRequest} MaterialCoefficientGetReactionCharactersRequest
         */
        MaterialCoefficientGetReactionCharactersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetReactionCharactersRequest)
                return object;
            return new $root.dow.MaterialCoefficientGetReactionCharactersRequest();
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetReactionCharactersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetReactionCharactersRequest
         * @static
         * @param {dow.MaterialCoefficientGetReactionCharactersRequest} message MaterialCoefficientGetReactionCharactersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetReactionCharactersRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialCoefficientGetReactionCharactersRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetReactionCharactersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetReactionCharactersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetReactionCharactersRequest;
    })();

    dow.ReactionCharacter = (function() {

        /**
         * Properties of a ReactionCharacter.
         * @memberof dow
         * @interface IReactionCharacter
         * @property {string|null} [name] ReactionCharacter name
         * @property {string|null} [code] ReactionCharacter code
         */

        /**
         * Constructs a new ReactionCharacter.
         * @memberof dow
         * @classdesc Represents a ReactionCharacter.
         * @implements IReactionCharacter
         * @constructor
         * @param {dow.IReactionCharacter=} [properties] Properties to set
         */
        function ReactionCharacter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReactionCharacter name.
         * @member {string} name
         * @memberof dow.ReactionCharacter
         * @instance
         */
        ReactionCharacter.prototype.name = "";

        /**
         * ReactionCharacter code.
         * @member {string} code
         * @memberof dow.ReactionCharacter
         * @instance
         */
        ReactionCharacter.prototype.code = "";

        /**
         * Creates a ReactionCharacter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.ReactionCharacter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.ReactionCharacter} ReactionCharacter
         */
        ReactionCharacter.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.ReactionCharacter)
                return object;
            let message = new $root.dow.ReactionCharacter();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a ReactionCharacter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.ReactionCharacter
         * @static
         * @param {dow.ReactionCharacter} message ReactionCharacter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReactionCharacter.toObject = function toObject(message, options) {
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
         * Converts this ReactionCharacter to JSON.
         * @function toJSON
         * @memberof dow.ReactionCharacter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReactionCharacter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReactionCharacter;
    })();

    dow.MaterialCoefficientGetReactionCharactersResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetReactionCharactersResponse.
         * @memberof dow
         * @interface IMaterialCoefficientGetReactionCharactersResponse
         * @property {Array.<dow.IReactionCharacter>|null} [reactionCharacters] MaterialCoefficientGetReactionCharactersResponse reactionCharacters
         */

        /**
         * Constructs a new MaterialCoefficientGetReactionCharactersResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetReactionCharactersResponse.
         * @implements IMaterialCoefficientGetReactionCharactersResponse
         * @constructor
         * @param {dow.IMaterialCoefficientGetReactionCharactersResponse=} [properties] Properties to set
         */
        function MaterialCoefficientGetReactionCharactersResponse(properties) {
            this.reactionCharacters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetReactionCharactersResponse reactionCharacters.
         * @member {Array.<dow.IReactionCharacter>} reactionCharacters
         * @memberof dow.MaterialCoefficientGetReactionCharactersResponse
         * @instance
         */
        MaterialCoefficientGetReactionCharactersResponse.prototype.reactionCharacters = $util.emptyArray;

        /**
         * Creates a MaterialCoefficientGetReactionCharactersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetReactionCharactersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetReactionCharactersResponse} MaterialCoefficientGetReactionCharactersResponse
         */
        MaterialCoefficientGetReactionCharactersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetReactionCharactersResponse)
                return object;
            let message = new $root.dow.MaterialCoefficientGetReactionCharactersResponse();
            if (object.reactionCharacters) {
                if (!Array.isArray(object.reactionCharacters))
                    throw TypeError(".dow.MaterialCoefficientGetReactionCharactersResponse.reactionCharacters: array expected");
                message.reactionCharacters = [];
                for (let i = 0; i < object.reactionCharacters.length; ++i) {
                    if (typeof object.reactionCharacters[i] !== "object")
                        throw TypeError(".dow.MaterialCoefficientGetReactionCharactersResponse.reactionCharacters: object expected");
                    message.reactionCharacters[i] = $root.dow.ReactionCharacter.fromObject(object.reactionCharacters[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetReactionCharactersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetReactionCharactersResponse
         * @static
         * @param {dow.MaterialCoefficientGetReactionCharactersResponse} message MaterialCoefficientGetReactionCharactersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetReactionCharactersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.reactionCharacters = [];
            if (message.reactionCharacters && message.reactionCharacters.length) {
                object.reactionCharacters = [];
                for (let j = 0; j < message.reactionCharacters.length; ++j)
                    object.reactionCharacters[j] = $root.dow.ReactionCharacter.toObject(message.reactionCharacters[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetReactionCharactersResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetReactionCharactersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetReactionCharactersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetReactionCharactersResponse;
    })();

    dow.MaterialCoefficientGetTypesRequest = (function() {

        /**
         * Properties of a MaterialCoefficientGetTypesRequest.
         * @memberof dow
         * @interface IMaterialCoefficientGetTypesRequest
         */

        /**
         * Constructs a new MaterialCoefficientGetTypesRequest.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetTypesRequest.
         * @implements IMaterialCoefficientGetTypesRequest
         * @constructor
         * @param {dow.IMaterialCoefficientGetTypesRequest=} [properties] Properties to set
         */
        function MaterialCoefficientGetTypesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialCoefficientGetTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetTypesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetTypesRequest} MaterialCoefficientGetTypesRequest
         */
        MaterialCoefficientGetTypesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetTypesRequest)
                return object;
            return new $root.dow.MaterialCoefficientGetTypesRequest();
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetTypesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetTypesRequest
         * @static
         * @param {dow.MaterialCoefficientGetTypesRequest} message MaterialCoefficientGetTypesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetTypesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialCoefficientGetTypesRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetTypesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetTypesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetTypesRequest;
    })();

    dow.Type = (function() {

        /**
         * Properties of a Type.
         * @memberof dow
         * @interface IType
         * @property {string|null} [name] Type name
         * @property {string|null} [code] Type code
         * @property {Array.<dow.IType>|null} [children] Type children
         */

        /**
         * Constructs a new Type.
         * @memberof dow
         * @classdesc Represents a Type.
         * @implements IType
         * @constructor
         * @param {dow.IType=} [properties] Properties to set
         */
        function Type(properties) {
            this.children = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Type name.
         * @member {string} name
         * @memberof dow.Type
         * @instance
         */
        Type.prototype.name = "";

        /**
         * Type code.
         * @member {string} code
         * @memberof dow.Type
         * @instance
         */
        Type.prototype.code = "";

        /**
         * Type children.
         * @member {Array.<dow.IType>} children
         * @memberof dow.Type
         * @instance
         */
        Type.prototype.children = $util.emptyArray;

        /**
         * Creates a Type message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.Type
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.Type} Type
         */
        Type.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.Type)
                return object;
            let message = new $root.dow.Type();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".dow.Type.children: array expected");
                message.children = [];
                for (let i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".dow.Type.children: object expected");
                    message.children[i] = $root.dow.Type.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Type message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.Type
         * @static
         * @param {dow.Type} message Type
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Type.toObject = function toObject(message, options) {
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
                    object.children[j] = $root.dow.Type.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this Type to JSON.
         * @function toJSON
         * @memberof dow.Type
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Type.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Type;
    })();

    dow.MaterialCoefficientGetTypesResponse = (function() {

        /**
         * Properties of a MaterialCoefficientGetTypesResponse.
         * @memberof dow
         * @interface IMaterialCoefficientGetTypesResponse
         * @property {Array.<dow.IType>|null} [types] MaterialCoefficientGetTypesResponse types
         */

        /**
         * Constructs a new MaterialCoefficientGetTypesResponse.
         * @memberof dow
         * @classdesc Represents a MaterialCoefficientGetTypesResponse.
         * @implements IMaterialCoefficientGetTypesResponse
         * @constructor
         * @param {dow.IMaterialCoefficientGetTypesResponse=} [properties] Properties to set
         */
        function MaterialCoefficientGetTypesResponse(properties) {
            this.types = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialCoefficientGetTypesResponse types.
         * @member {Array.<dow.IType>} types
         * @memberof dow.MaterialCoefficientGetTypesResponse
         * @instance
         */
        MaterialCoefficientGetTypesResponse.prototype.types = $util.emptyArray;

        /**
         * Creates a MaterialCoefficientGetTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialCoefficientGetTypesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialCoefficientGetTypesResponse} MaterialCoefficientGetTypesResponse
         */
        MaterialCoefficientGetTypesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialCoefficientGetTypesResponse)
                return object;
            let message = new $root.dow.MaterialCoefficientGetTypesResponse();
            if (object.types) {
                if (!Array.isArray(object.types))
                    throw TypeError(".dow.MaterialCoefficientGetTypesResponse.types: array expected");
                message.types = [];
                for (let i = 0; i < object.types.length; ++i) {
                    if (typeof object.types[i] !== "object")
                        throw TypeError(".dow.MaterialCoefficientGetTypesResponse.types: object expected");
                    message.types[i] = $root.dow.Type.fromObject(object.types[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialCoefficientGetTypesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialCoefficientGetTypesResponse
         * @static
         * @param {dow.MaterialCoefficientGetTypesResponse} message MaterialCoefficientGetTypesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialCoefficientGetTypesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.types = [];
            if (message.types && message.types.length) {
                object.types = [];
                for (let j = 0; j < message.types.length; ++j)
                    object.types[j] = $root.dow.Type.toObject(message.types[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialCoefficientGetTypesResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialCoefficientGetTypesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialCoefficientGetTypesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialCoefficientGetTypesResponse;
    })();

    dow.ProcessHazardCoefficientGetRequest = (function() {

        /**
         * Properties of a ProcessHazardCoefficientGetRequest.
         * @memberof dow
         * @interface IProcessHazardCoefficientGetRequest
         */

        /**
         * Constructs a new ProcessHazardCoefficientGetRequest.
         * @memberof dow
         * @classdesc Represents a ProcessHazardCoefficientGetRequest.
         * @implements IProcessHazardCoefficientGetRequest
         * @constructor
         * @param {dow.IProcessHazardCoefficientGetRequest=} [properties] Properties to set
         */
        function ProcessHazardCoefficientGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a ProcessHazardCoefficientGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.ProcessHazardCoefficientGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.ProcessHazardCoefficientGetRequest} ProcessHazardCoefficientGetRequest
         */
        ProcessHazardCoefficientGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.ProcessHazardCoefficientGetRequest)
                return object;
            return new $root.dow.ProcessHazardCoefficientGetRequest();
        };

        /**
         * Creates a plain object from a ProcessHazardCoefficientGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.ProcessHazardCoefficientGetRequest
         * @static
         * @param {dow.ProcessHazardCoefficientGetRequest} message ProcessHazardCoefficientGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessHazardCoefficientGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ProcessHazardCoefficientGetRequest to JSON.
         * @function toJSON
         * @memberof dow.ProcessHazardCoefficientGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessHazardCoefficientGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessHazardCoefficientGetRequest;
    })();

    dow.Coefficient = (function() {

        /**
         * Properties of a Coefficient.
         * @memberof dow
         * @interface ICoefficient
         * @property {string|null} [name] Coefficient name
         * @property {number|null} [code] Coefficient code
         */

        /**
         * Constructs a new Coefficient.
         * @memberof dow
         * @classdesc Represents a Coefficient.
         * @implements ICoefficient
         * @constructor
         * @param {dow.ICoefficient=} [properties] Properties to set
         */
        function Coefficient(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Coefficient name.
         * @member {string} name
         * @memberof dow.Coefficient
         * @instance
         */
        Coefficient.prototype.name = "";

        /**
         * Coefficient code.
         * @member {number} code
         * @memberof dow.Coefficient
         * @instance
         */
        Coefficient.prototype.code = 0;

        /**
         * Creates a Coefficient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.Coefficient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.Coefficient} Coefficient
         */
        Coefficient.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.Coefficient)
                return object;
            let message = new $root.dow.Coefficient();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = Number(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Coefficient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.Coefficient
         * @static
         * @param {dow.Coefficient} message Coefficient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Coefficient.toObject = function toObject(message, options) {
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
         * Converts this Coefficient to JSON.
         * @function toJSON
         * @memberof dow.Coefficient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Coefficient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Coefficient;
    })();

    dow.ProcessHazardCoefficientGetResponse = (function() {

        /**
         * Properties of a ProcessHazardCoefficientGetResponse.
         * @memberof dow
         * @interface IProcessHazardCoefficientGetResponse
         * @property {Array.<dow.ICoefficient>|null} [A1] ProcessHazardCoefficientGetResponse A1
         * @property {Array.<dow.ICoefficient>|null} [B1] ProcessHazardCoefficientGetResponse B1
         * @property {Array.<dow.ICoefficient>|null} [C1] ProcessHazardCoefficientGetResponse C1
         * @property {Array.<dow.ICoefficient>|null} [D1] ProcessHazardCoefficientGetResponse D1
         * @property {Array.<dow.ICoefficient>|null} [E1] ProcessHazardCoefficientGetResponse E1
         * @property {Array.<dow.ICoefficient>|null} [F1] ProcessHazardCoefficientGetResponse F1
         * @property {Array.<dow.ICoefficient>|null} [A2] ProcessHazardCoefficientGetResponse A2
         * @property {Array.<dow.ICoefficient>|null} [B2] ProcessHazardCoefficientGetResponse B2
         * @property {Array.<dow.ICoefficient>|null} [C2] ProcessHazardCoefficientGetResponse C2
         * @property {Array.<dow.ICoefficient>|null} [D2] ProcessHazardCoefficientGetResponse D2
         * @property {Array.<dow.ICoefficient>|null} [E2] ProcessHazardCoefficientGetResponse E2
         * @property {Array.<dow.ICoefficient>|null} [F2] ProcessHazardCoefficientGetResponse F2
         * @property {Array.<dow.ICoefficient>|null} [G2] ProcessHazardCoefficientGetResponse G2
         * @property {Array.<dow.ICoefficient>|null} [H2] ProcessHazardCoefficientGetResponse H2
         * @property {Array.<dow.ICoefficient>|null} [I2] ProcessHazardCoefficientGetResponse I2
         * @property {Array.<dow.ICoefficient>|null} [J2] ProcessHazardCoefficientGetResponse J2
         * @property {Array.<dow.ICoefficient>|null} [K2] ProcessHazardCoefficientGetResponse K2
         * @property {Array.<dow.ICoefficient>|null} [L2] ProcessHazardCoefficientGetResponse L2
         */

        /**
         * Constructs a new ProcessHazardCoefficientGetResponse.
         * @memberof dow
         * @classdesc Represents a ProcessHazardCoefficientGetResponse.
         * @implements IProcessHazardCoefficientGetResponse
         * @constructor
         * @param {dow.IProcessHazardCoefficientGetResponse=} [properties] Properties to set
         */
        function ProcessHazardCoefficientGetResponse(properties) {
            this.A1 = [];
            this.B1 = [];
            this.C1 = [];
            this.D1 = [];
            this.E1 = [];
            this.F1 = [];
            this.A2 = [];
            this.B2 = [];
            this.C2 = [];
            this.D2 = [];
            this.E2 = [];
            this.F2 = [];
            this.G2 = [];
            this.H2 = [];
            this.I2 = [];
            this.J2 = [];
            this.K2 = [];
            this.L2 = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessHazardCoefficientGetResponse A1.
         * @member {Array.<dow.ICoefficient>} A1
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.A1 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse B1.
         * @member {Array.<dow.ICoefficient>} B1
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.B1 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse C1.
         * @member {Array.<dow.ICoefficient>} C1
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.C1 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse D1.
         * @member {Array.<dow.ICoefficient>} D1
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.D1 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse E1.
         * @member {Array.<dow.ICoefficient>} E1
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.E1 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse F1.
         * @member {Array.<dow.ICoefficient>} F1
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.F1 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse A2.
         * @member {Array.<dow.ICoefficient>} A2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.A2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse B2.
         * @member {Array.<dow.ICoefficient>} B2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.B2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse C2.
         * @member {Array.<dow.ICoefficient>} C2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.C2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse D2.
         * @member {Array.<dow.ICoefficient>} D2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.D2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse E2.
         * @member {Array.<dow.ICoefficient>} E2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.E2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse F2.
         * @member {Array.<dow.ICoefficient>} F2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.F2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse G2.
         * @member {Array.<dow.ICoefficient>} G2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.G2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse H2.
         * @member {Array.<dow.ICoefficient>} H2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.H2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse I2.
         * @member {Array.<dow.ICoefficient>} I2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.I2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse J2.
         * @member {Array.<dow.ICoefficient>} J2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.J2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse K2.
         * @member {Array.<dow.ICoefficient>} K2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.K2 = $util.emptyArray;

        /**
         * ProcessHazardCoefficientGetResponse L2.
         * @member {Array.<dow.ICoefficient>} L2
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         */
        ProcessHazardCoefficientGetResponse.prototype.L2 = $util.emptyArray;

        /**
         * Creates a ProcessHazardCoefficientGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.ProcessHazardCoefficientGetResponse} ProcessHazardCoefficientGetResponse
         */
        ProcessHazardCoefficientGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.ProcessHazardCoefficientGetResponse)
                return object;
            let message = new $root.dow.ProcessHazardCoefficientGetResponse();
            if (object.A1) {
                if (!Array.isArray(object.A1))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.A1: array expected");
                message.A1 = [];
                for (let i = 0; i < object.A1.length; ++i) {
                    if (typeof object.A1[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.A1: object expected");
                    message.A1[i] = $root.dow.Coefficient.fromObject(object.A1[i]);
                }
            }
            if (object.B1) {
                if (!Array.isArray(object.B1))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.B1: array expected");
                message.B1 = [];
                for (let i = 0; i < object.B1.length; ++i) {
                    if (typeof object.B1[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.B1: object expected");
                    message.B1[i] = $root.dow.Coefficient.fromObject(object.B1[i]);
                }
            }
            if (object.C1) {
                if (!Array.isArray(object.C1))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.C1: array expected");
                message.C1 = [];
                for (let i = 0; i < object.C1.length; ++i) {
                    if (typeof object.C1[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.C1: object expected");
                    message.C1[i] = $root.dow.Coefficient.fromObject(object.C1[i]);
                }
            }
            if (object.D1) {
                if (!Array.isArray(object.D1))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.D1: array expected");
                message.D1 = [];
                for (let i = 0; i < object.D1.length; ++i) {
                    if (typeof object.D1[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.D1: object expected");
                    message.D1[i] = $root.dow.Coefficient.fromObject(object.D1[i]);
                }
            }
            if (object.E1) {
                if (!Array.isArray(object.E1))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.E1: array expected");
                message.E1 = [];
                for (let i = 0; i < object.E1.length; ++i) {
                    if (typeof object.E1[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.E1: object expected");
                    message.E1[i] = $root.dow.Coefficient.fromObject(object.E1[i]);
                }
            }
            if (object.F1) {
                if (!Array.isArray(object.F1))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.F1: array expected");
                message.F1 = [];
                for (let i = 0; i < object.F1.length; ++i) {
                    if (typeof object.F1[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.F1: object expected");
                    message.F1[i] = $root.dow.Coefficient.fromObject(object.F1[i]);
                }
            }
            if (object.A2) {
                if (!Array.isArray(object.A2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.A2: array expected");
                message.A2 = [];
                for (let i = 0; i < object.A2.length; ++i) {
                    if (typeof object.A2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.A2: object expected");
                    message.A2[i] = $root.dow.Coefficient.fromObject(object.A2[i]);
                }
            }
            if (object.B2) {
                if (!Array.isArray(object.B2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.B2: array expected");
                message.B2 = [];
                for (let i = 0; i < object.B2.length; ++i) {
                    if (typeof object.B2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.B2: object expected");
                    message.B2[i] = $root.dow.Coefficient.fromObject(object.B2[i]);
                }
            }
            if (object.C2) {
                if (!Array.isArray(object.C2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.C2: array expected");
                message.C2 = [];
                for (let i = 0; i < object.C2.length; ++i) {
                    if (typeof object.C2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.C2: object expected");
                    message.C2[i] = $root.dow.Coefficient.fromObject(object.C2[i]);
                }
            }
            if (object.D2) {
                if (!Array.isArray(object.D2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.D2: array expected");
                message.D2 = [];
                for (let i = 0; i < object.D2.length; ++i) {
                    if (typeof object.D2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.D2: object expected");
                    message.D2[i] = $root.dow.Coefficient.fromObject(object.D2[i]);
                }
            }
            if (object.E2) {
                if (!Array.isArray(object.E2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.E2: array expected");
                message.E2 = [];
                for (let i = 0; i < object.E2.length; ++i) {
                    if (typeof object.E2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.E2: object expected");
                    message.E2[i] = $root.dow.Coefficient.fromObject(object.E2[i]);
                }
            }
            if (object.F2) {
                if (!Array.isArray(object.F2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.F2: array expected");
                message.F2 = [];
                for (let i = 0; i < object.F2.length; ++i) {
                    if (typeof object.F2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.F2: object expected");
                    message.F2[i] = $root.dow.Coefficient.fromObject(object.F2[i]);
                }
            }
            if (object.G2) {
                if (!Array.isArray(object.G2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.G2: array expected");
                message.G2 = [];
                for (let i = 0; i < object.G2.length; ++i) {
                    if (typeof object.G2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.G2: object expected");
                    message.G2[i] = $root.dow.Coefficient.fromObject(object.G2[i]);
                }
            }
            if (object.H2) {
                if (!Array.isArray(object.H2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.H2: array expected");
                message.H2 = [];
                for (let i = 0; i < object.H2.length; ++i) {
                    if (typeof object.H2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.H2: object expected");
                    message.H2[i] = $root.dow.Coefficient.fromObject(object.H2[i]);
                }
            }
            if (object.I2) {
                if (!Array.isArray(object.I2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.I2: array expected");
                message.I2 = [];
                for (let i = 0; i < object.I2.length; ++i) {
                    if (typeof object.I2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.I2: object expected");
                    message.I2[i] = $root.dow.Coefficient.fromObject(object.I2[i]);
                }
            }
            if (object.J2) {
                if (!Array.isArray(object.J2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.J2: array expected");
                message.J2 = [];
                for (let i = 0; i < object.J2.length; ++i) {
                    if (typeof object.J2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.J2: object expected");
                    message.J2[i] = $root.dow.Coefficient.fromObject(object.J2[i]);
                }
            }
            if (object.K2) {
                if (!Array.isArray(object.K2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.K2: array expected");
                message.K2 = [];
                for (let i = 0; i < object.K2.length; ++i) {
                    if (typeof object.K2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.K2: object expected");
                    message.K2[i] = $root.dow.Coefficient.fromObject(object.K2[i]);
                }
            }
            if (object.L2) {
                if (!Array.isArray(object.L2))
                    throw TypeError(".dow.ProcessHazardCoefficientGetResponse.L2: array expected");
                message.L2 = [];
                for (let i = 0; i < object.L2.length; ++i) {
                    if (typeof object.L2[i] !== "object")
                        throw TypeError(".dow.ProcessHazardCoefficientGetResponse.L2: object expected");
                    message.L2[i] = $root.dow.Coefficient.fromObject(object.L2[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProcessHazardCoefficientGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @static
         * @param {dow.ProcessHazardCoefficientGetResponse} message ProcessHazardCoefficientGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessHazardCoefficientGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.A1 = [];
                object.B1 = [];
                object.C1 = [];
                object.D1 = [];
                object.E1 = [];
                object.F1 = [];
                object.A2 = [];
                object.B2 = [];
                object.C2 = [];
                object.D2 = [];
                object.E2 = [];
                object.F2 = [];
                object.G2 = [];
                object.H2 = [];
                object.I2 = [];
                object.J2 = [];
                object.K2 = [];
                object.L2 = [];
            }
            if (message.A1 && message.A1.length) {
                object.A1 = [];
                for (let j = 0; j < message.A1.length; ++j)
                    object.A1[j] = $root.dow.Coefficient.toObject(message.A1[j], options);
            }
            if (message.B1 && message.B1.length) {
                object.B1 = [];
                for (let j = 0; j < message.B1.length; ++j)
                    object.B1[j] = $root.dow.Coefficient.toObject(message.B1[j], options);
            }
            if (message.C1 && message.C1.length) {
                object.C1 = [];
                for (let j = 0; j < message.C1.length; ++j)
                    object.C1[j] = $root.dow.Coefficient.toObject(message.C1[j], options);
            }
            if (message.D1 && message.D1.length) {
                object.D1 = [];
                for (let j = 0; j < message.D1.length; ++j)
                    object.D1[j] = $root.dow.Coefficient.toObject(message.D1[j], options);
            }
            if (message.E1 && message.E1.length) {
                object.E1 = [];
                for (let j = 0; j < message.E1.length; ++j)
                    object.E1[j] = $root.dow.Coefficient.toObject(message.E1[j], options);
            }
            if (message.F1 && message.F1.length) {
                object.F1 = [];
                for (let j = 0; j < message.F1.length; ++j)
                    object.F1[j] = $root.dow.Coefficient.toObject(message.F1[j], options);
            }
            if (message.A2 && message.A2.length) {
                object.A2 = [];
                for (let j = 0; j < message.A2.length; ++j)
                    object.A2[j] = $root.dow.Coefficient.toObject(message.A2[j], options);
            }
            if (message.B2 && message.B2.length) {
                object.B2 = [];
                for (let j = 0; j < message.B2.length; ++j)
                    object.B2[j] = $root.dow.Coefficient.toObject(message.B2[j], options);
            }
            if (message.C2 && message.C2.length) {
                object.C2 = [];
                for (let j = 0; j < message.C2.length; ++j)
                    object.C2[j] = $root.dow.Coefficient.toObject(message.C2[j], options);
            }
            if (message.D2 && message.D2.length) {
                object.D2 = [];
                for (let j = 0; j < message.D2.length; ++j)
                    object.D2[j] = $root.dow.Coefficient.toObject(message.D2[j], options);
            }
            if (message.E2 && message.E2.length) {
                object.E2 = [];
                for (let j = 0; j < message.E2.length; ++j)
                    object.E2[j] = $root.dow.Coefficient.toObject(message.E2[j], options);
            }
            if (message.F2 && message.F2.length) {
                object.F2 = [];
                for (let j = 0; j < message.F2.length; ++j)
                    object.F2[j] = $root.dow.Coefficient.toObject(message.F2[j], options);
            }
            if (message.G2 && message.G2.length) {
                object.G2 = [];
                for (let j = 0; j < message.G2.length; ++j)
                    object.G2[j] = $root.dow.Coefficient.toObject(message.G2[j], options);
            }
            if (message.H2 && message.H2.length) {
                object.H2 = [];
                for (let j = 0; j < message.H2.length; ++j)
                    object.H2[j] = $root.dow.Coefficient.toObject(message.H2[j], options);
            }
            if (message.I2 && message.I2.length) {
                object.I2 = [];
                for (let j = 0; j < message.I2.length; ++j)
                    object.I2[j] = $root.dow.Coefficient.toObject(message.I2[j], options);
            }
            if (message.J2 && message.J2.length) {
                object.J2 = [];
                for (let j = 0; j < message.J2.length; ++j)
                    object.J2[j] = $root.dow.Coefficient.toObject(message.J2[j], options);
            }
            if (message.K2 && message.K2.length) {
                object.K2 = [];
                for (let j = 0; j < message.K2.length; ++j)
                    object.K2[j] = $root.dow.Coefficient.toObject(message.K2[j], options);
            }
            if (message.L2 && message.L2.length) {
                object.L2 = [];
                for (let j = 0; j < message.L2.length; ++j)
                    object.L2[j] = $root.dow.Coefficient.toObject(message.L2[j], options);
            }
            return object;
        };

        /**
         * Converts this ProcessHazardCoefficientGetResponse to JSON.
         * @function toJSON
         * @memberof dow.ProcessHazardCoefficientGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessHazardCoefficientGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessHazardCoefficientGetResponse;
    })();

    dow.CompensationCoefficientGetRequest = (function() {

        /**
         * Properties of a CompensationCoefficientGetRequest.
         * @memberof dow
         * @interface ICompensationCoefficientGetRequest
         */

        /**
         * Constructs a new CompensationCoefficientGetRequest.
         * @memberof dow
         * @classdesc Represents a CompensationCoefficientGetRequest.
         * @implements ICompensationCoefficientGetRequest
         * @constructor
         * @param {dow.ICompensationCoefficientGetRequest=} [properties] Properties to set
         */
        function CompensationCoefficientGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a CompensationCoefficientGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.CompensationCoefficientGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.CompensationCoefficientGetRequest} CompensationCoefficientGetRequest
         */
        CompensationCoefficientGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.CompensationCoefficientGetRequest)
                return object;
            return new $root.dow.CompensationCoefficientGetRequest();
        };

        /**
         * Creates a plain object from a CompensationCoefficientGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.CompensationCoefficientGetRequest
         * @static
         * @param {dow.CompensationCoefficientGetRequest} message CompensationCoefficientGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompensationCoefficientGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CompensationCoefficientGetRequest to JSON.
         * @function toJSON
         * @memberof dow.CompensationCoefficientGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompensationCoefficientGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompensationCoefficientGetRequest;
    })();

    dow.CompensationCoefficientGetResponse = (function() {

        /**
         * Properties of a CompensationCoefficientGetResponse.
         * @memberof dow
         * @interface ICompensationCoefficientGetResponse
         * @property {Array.<dow.ICoefficient>|null} [a1] CompensationCoefficientGetResponse a1
         * @property {Array.<dow.ICoefficient>|null} [b1] CompensationCoefficientGetResponse b1
         * @property {Array.<dow.ICoefficient>|null} [c1] CompensationCoefficientGetResponse c1
         * @property {Array.<dow.ICoefficient>|null} [d1] CompensationCoefficientGetResponse d1
         * @property {Array.<dow.ICoefficient>|null} [e1] CompensationCoefficientGetResponse e1
         * @property {Array.<dow.ICoefficient>|null} [f1] CompensationCoefficientGetResponse f1
         * @property {Array.<dow.ICoefficient>|null} [g1] CompensationCoefficientGetResponse g1
         * @property {Array.<dow.ICoefficient>|null} [h1] CompensationCoefficientGetResponse h1
         * @property {Array.<dow.ICoefficient>|null} [i1] CompensationCoefficientGetResponse i1
         * @property {Array.<dow.ICoefficient>|null} [a2] CompensationCoefficientGetResponse a2
         * @property {Array.<dow.ICoefficient>|null} [b2] CompensationCoefficientGetResponse b2
         * @property {Array.<dow.ICoefficient>|null} [c2] CompensationCoefficientGetResponse c2
         * @property {Array.<dow.ICoefficient>|null} [d2] CompensationCoefficientGetResponse d2
         * @property {Array.<dow.ICoefficient>|null} [a3] CompensationCoefficientGetResponse a3
         * @property {Array.<dow.ICoefficient>|null} [b3] CompensationCoefficientGetResponse b3
         * @property {Array.<dow.ICoefficient>|null} [c3] CompensationCoefficientGetResponse c3
         * @property {Array.<dow.ICoefficient>|null} [d3] CompensationCoefficientGetResponse d3
         * @property {Array.<dow.ICoefficient>|null} [e3] CompensationCoefficientGetResponse e3
         * @property {Array.<dow.ICoefficient>|null} [f3] CompensationCoefficientGetResponse f3
         * @property {Array.<dow.ICoefficient>|null} [g3] CompensationCoefficientGetResponse g3
         * @property {Array.<dow.ICoefficient>|null} [h3] CompensationCoefficientGetResponse h3
         * @property {Array.<dow.ICoefficient>|null} [i3] CompensationCoefficientGetResponse i3
         */

        /**
         * Constructs a new CompensationCoefficientGetResponse.
         * @memberof dow
         * @classdesc Represents a CompensationCoefficientGetResponse.
         * @implements ICompensationCoefficientGetResponse
         * @constructor
         * @param {dow.ICompensationCoefficientGetResponse=} [properties] Properties to set
         */
        function CompensationCoefficientGetResponse(properties) {
            this.a1 = [];
            this.b1 = [];
            this.c1 = [];
            this.d1 = [];
            this.e1 = [];
            this.f1 = [];
            this.g1 = [];
            this.h1 = [];
            this.i1 = [];
            this.a2 = [];
            this.b2 = [];
            this.c2 = [];
            this.d2 = [];
            this.a3 = [];
            this.b3 = [];
            this.c3 = [];
            this.d3 = [];
            this.e3 = [];
            this.f3 = [];
            this.g3 = [];
            this.h3 = [];
            this.i3 = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompensationCoefficientGetResponse a1.
         * @member {Array.<dow.ICoefficient>} a1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.a1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse b1.
         * @member {Array.<dow.ICoefficient>} b1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.b1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse c1.
         * @member {Array.<dow.ICoefficient>} c1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.c1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse d1.
         * @member {Array.<dow.ICoefficient>} d1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.d1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse e1.
         * @member {Array.<dow.ICoefficient>} e1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.e1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse f1.
         * @member {Array.<dow.ICoefficient>} f1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.f1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse g1.
         * @member {Array.<dow.ICoefficient>} g1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.g1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse h1.
         * @member {Array.<dow.ICoefficient>} h1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.h1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse i1.
         * @member {Array.<dow.ICoefficient>} i1
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.i1 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse a2.
         * @member {Array.<dow.ICoefficient>} a2
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.a2 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse b2.
         * @member {Array.<dow.ICoefficient>} b2
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.b2 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse c2.
         * @member {Array.<dow.ICoefficient>} c2
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.c2 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse d2.
         * @member {Array.<dow.ICoefficient>} d2
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.d2 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse a3.
         * @member {Array.<dow.ICoefficient>} a3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.a3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse b3.
         * @member {Array.<dow.ICoefficient>} b3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.b3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse c3.
         * @member {Array.<dow.ICoefficient>} c3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.c3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse d3.
         * @member {Array.<dow.ICoefficient>} d3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.d3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse e3.
         * @member {Array.<dow.ICoefficient>} e3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.e3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse f3.
         * @member {Array.<dow.ICoefficient>} f3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.f3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse g3.
         * @member {Array.<dow.ICoefficient>} g3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.g3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse h3.
         * @member {Array.<dow.ICoefficient>} h3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.h3 = $util.emptyArray;

        /**
         * CompensationCoefficientGetResponse i3.
         * @member {Array.<dow.ICoefficient>} i3
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         */
        CompensationCoefficientGetResponse.prototype.i3 = $util.emptyArray;

        /**
         * Creates a CompensationCoefficientGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.CompensationCoefficientGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.CompensationCoefficientGetResponse} CompensationCoefficientGetResponse
         */
        CompensationCoefficientGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.CompensationCoefficientGetResponse)
                return object;
            let message = new $root.dow.CompensationCoefficientGetResponse();
            if (object.a1) {
                if (!Array.isArray(object.a1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.a1: array expected");
                message.a1 = [];
                for (let i = 0; i < object.a1.length; ++i) {
                    if (typeof object.a1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.a1: object expected");
                    message.a1[i] = $root.dow.Coefficient.fromObject(object.a1[i]);
                }
            }
            if (object.b1) {
                if (!Array.isArray(object.b1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.b1: array expected");
                message.b1 = [];
                for (let i = 0; i < object.b1.length; ++i) {
                    if (typeof object.b1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.b1: object expected");
                    message.b1[i] = $root.dow.Coefficient.fromObject(object.b1[i]);
                }
            }
            if (object.c1) {
                if (!Array.isArray(object.c1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.c1: array expected");
                message.c1 = [];
                for (let i = 0; i < object.c1.length; ++i) {
                    if (typeof object.c1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.c1: object expected");
                    message.c1[i] = $root.dow.Coefficient.fromObject(object.c1[i]);
                }
            }
            if (object.d1) {
                if (!Array.isArray(object.d1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.d1: array expected");
                message.d1 = [];
                for (let i = 0; i < object.d1.length; ++i) {
                    if (typeof object.d1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.d1: object expected");
                    message.d1[i] = $root.dow.Coefficient.fromObject(object.d1[i]);
                }
            }
            if (object.e1) {
                if (!Array.isArray(object.e1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.e1: array expected");
                message.e1 = [];
                for (let i = 0; i < object.e1.length; ++i) {
                    if (typeof object.e1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.e1: object expected");
                    message.e1[i] = $root.dow.Coefficient.fromObject(object.e1[i]);
                }
            }
            if (object.f1) {
                if (!Array.isArray(object.f1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.f1: array expected");
                message.f1 = [];
                for (let i = 0; i < object.f1.length; ++i) {
                    if (typeof object.f1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.f1: object expected");
                    message.f1[i] = $root.dow.Coefficient.fromObject(object.f1[i]);
                }
            }
            if (object.g1) {
                if (!Array.isArray(object.g1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.g1: array expected");
                message.g1 = [];
                for (let i = 0; i < object.g1.length; ++i) {
                    if (typeof object.g1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.g1: object expected");
                    message.g1[i] = $root.dow.Coefficient.fromObject(object.g1[i]);
                }
            }
            if (object.h1) {
                if (!Array.isArray(object.h1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.h1: array expected");
                message.h1 = [];
                for (let i = 0; i < object.h1.length; ++i) {
                    if (typeof object.h1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.h1: object expected");
                    message.h1[i] = $root.dow.Coefficient.fromObject(object.h1[i]);
                }
            }
            if (object.i1) {
                if (!Array.isArray(object.i1))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.i1: array expected");
                message.i1 = [];
                for (let i = 0; i < object.i1.length; ++i) {
                    if (typeof object.i1[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.i1: object expected");
                    message.i1[i] = $root.dow.Coefficient.fromObject(object.i1[i]);
                }
            }
            if (object.a2) {
                if (!Array.isArray(object.a2))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.a2: array expected");
                message.a2 = [];
                for (let i = 0; i < object.a2.length; ++i) {
                    if (typeof object.a2[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.a2: object expected");
                    message.a2[i] = $root.dow.Coefficient.fromObject(object.a2[i]);
                }
            }
            if (object.b2) {
                if (!Array.isArray(object.b2))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.b2: array expected");
                message.b2 = [];
                for (let i = 0; i < object.b2.length; ++i) {
                    if (typeof object.b2[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.b2: object expected");
                    message.b2[i] = $root.dow.Coefficient.fromObject(object.b2[i]);
                }
            }
            if (object.c2) {
                if (!Array.isArray(object.c2))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.c2: array expected");
                message.c2 = [];
                for (let i = 0; i < object.c2.length; ++i) {
                    if (typeof object.c2[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.c2: object expected");
                    message.c2[i] = $root.dow.Coefficient.fromObject(object.c2[i]);
                }
            }
            if (object.d2) {
                if (!Array.isArray(object.d2))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.d2: array expected");
                message.d2 = [];
                for (let i = 0; i < object.d2.length; ++i) {
                    if (typeof object.d2[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.d2: object expected");
                    message.d2[i] = $root.dow.Coefficient.fromObject(object.d2[i]);
                }
            }
            if (object.a3) {
                if (!Array.isArray(object.a3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.a3: array expected");
                message.a3 = [];
                for (let i = 0; i < object.a3.length; ++i) {
                    if (typeof object.a3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.a3: object expected");
                    message.a3[i] = $root.dow.Coefficient.fromObject(object.a3[i]);
                }
            }
            if (object.b3) {
                if (!Array.isArray(object.b3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.b3: array expected");
                message.b3 = [];
                for (let i = 0; i < object.b3.length; ++i) {
                    if (typeof object.b3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.b3: object expected");
                    message.b3[i] = $root.dow.Coefficient.fromObject(object.b3[i]);
                }
            }
            if (object.c3) {
                if (!Array.isArray(object.c3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.c3: array expected");
                message.c3 = [];
                for (let i = 0; i < object.c3.length; ++i) {
                    if (typeof object.c3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.c3: object expected");
                    message.c3[i] = $root.dow.Coefficient.fromObject(object.c3[i]);
                }
            }
            if (object.d3) {
                if (!Array.isArray(object.d3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.d3: array expected");
                message.d3 = [];
                for (let i = 0; i < object.d3.length; ++i) {
                    if (typeof object.d3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.d3: object expected");
                    message.d3[i] = $root.dow.Coefficient.fromObject(object.d3[i]);
                }
            }
            if (object.e3) {
                if (!Array.isArray(object.e3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.e3: array expected");
                message.e3 = [];
                for (let i = 0; i < object.e3.length; ++i) {
                    if (typeof object.e3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.e3: object expected");
                    message.e3[i] = $root.dow.Coefficient.fromObject(object.e3[i]);
                }
            }
            if (object.f3) {
                if (!Array.isArray(object.f3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.f3: array expected");
                message.f3 = [];
                for (let i = 0; i < object.f3.length; ++i) {
                    if (typeof object.f3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.f3: object expected");
                    message.f3[i] = $root.dow.Coefficient.fromObject(object.f3[i]);
                }
            }
            if (object.g3) {
                if (!Array.isArray(object.g3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.g3: array expected");
                message.g3 = [];
                for (let i = 0; i < object.g3.length; ++i) {
                    if (typeof object.g3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.g3: object expected");
                    message.g3[i] = $root.dow.Coefficient.fromObject(object.g3[i]);
                }
            }
            if (object.h3) {
                if (!Array.isArray(object.h3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.h3: array expected");
                message.h3 = [];
                for (let i = 0; i < object.h3.length; ++i) {
                    if (typeof object.h3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.h3: object expected");
                    message.h3[i] = $root.dow.Coefficient.fromObject(object.h3[i]);
                }
            }
            if (object.i3) {
                if (!Array.isArray(object.i3))
                    throw TypeError(".dow.CompensationCoefficientGetResponse.i3: array expected");
                message.i3 = [];
                for (let i = 0; i < object.i3.length; ++i) {
                    if (typeof object.i3[i] !== "object")
                        throw TypeError(".dow.CompensationCoefficientGetResponse.i3: object expected");
                    message.i3[i] = $root.dow.Coefficient.fromObject(object.i3[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CompensationCoefficientGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.CompensationCoefficientGetResponse
         * @static
         * @param {dow.CompensationCoefficientGetResponse} message CompensationCoefficientGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompensationCoefficientGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.a1 = [];
                object.b1 = [];
                object.c1 = [];
                object.d1 = [];
                object.e1 = [];
                object.f1 = [];
                object.g1 = [];
                object.h1 = [];
                object.i1 = [];
                object.a2 = [];
                object.b2 = [];
                object.c2 = [];
                object.d2 = [];
                object.a3 = [];
                object.b3 = [];
                object.c3 = [];
                object.d3 = [];
                object.e3 = [];
                object.f3 = [];
                object.g3 = [];
                object.h3 = [];
                object.i3 = [];
            }
            if (message.a1 && message.a1.length) {
                object.a1 = [];
                for (let j = 0; j < message.a1.length; ++j)
                    object.a1[j] = $root.dow.Coefficient.toObject(message.a1[j], options);
            }
            if (message.b1 && message.b1.length) {
                object.b1 = [];
                for (let j = 0; j < message.b1.length; ++j)
                    object.b1[j] = $root.dow.Coefficient.toObject(message.b1[j], options);
            }
            if (message.c1 && message.c1.length) {
                object.c1 = [];
                for (let j = 0; j < message.c1.length; ++j)
                    object.c1[j] = $root.dow.Coefficient.toObject(message.c1[j], options);
            }
            if (message.d1 && message.d1.length) {
                object.d1 = [];
                for (let j = 0; j < message.d1.length; ++j)
                    object.d1[j] = $root.dow.Coefficient.toObject(message.d1[j], options);
            }
            if (message.e1 && message.e1.length) {
                object.e1 = [];
                for (let j = 0; j < message.e1.length; ++j)
                    object.e1[j] = $root.dow.Coefficient.toObject(message.e1[j], options);
            }
            if (message.f1 && message.f1.length) {
                object.f1 = [];
                for (let j = 0; j < message.f1.length; ++j)
                    object.f1[j] = $root.dow.Coefficient.toObject(message.f1[j], options);
            }
            if (message.g1 && message.g1.length) {
                object.g1 = [];
                for (let j = 0; j < message.g1.length; ++j)
                    object.g1[j] = $root.dow.Coefficient.toObject(message.g1[j], options);
            }
            if (message.h1 && message.h1.length) {
                object.h1 = [];
                for (let j = 0; j < message.h1.length; ++j)
                    object.h1[j] = $root.dow.Coefficient.toObject(message.h1[j], options);
            }
            if (message.i1 && message.i1.length) {
                object.i1 = [];
                for (let j = 0; j < message.i1.length; ++j)
                    object.i1[j] = $root.dow.Coefficient.toObject(message.i1[j], options);
            }
            if (message.a2 && message.a2.length) {
                object.a2 = [];
                for (let j = 0; j < message.a2.length; ++j)
                    object.a2[j] = $root.dow.Coefficient.toObject(message.a2[j], options);
            }
            if (message.b2 && message.b2.length) {
                object.b2 = [];
                for (let j = 0; j < message.b2.length; ++j)
                    object.b2[j] = $root.dow.Coefficient.toObject(message.b2[j], options);
            }
            if (message.c2 && message.c2.length) {
                object.c2 = [];
                for (let j = 0; j < message.c2.length; ++j)
                    object.c2[j] = $root.dow.Coefficient.toObject(message.c2[j], options);
            }
            if (message.d2 && message.d2.length) {
                object.d2 = [];
                for (let j = 0; j < message.d2.length; ++j)
                    object.d2[j] = $root.dow.Coefficient.toObject(message.d2[j], options);
            }
            if (message.a3 && message.a3.length) {
                object.a3 = [];
                for (let j = 0; j < message.a3.length; ++j)
                    object.a3[j] = $root.dow.Coefficient.toObject(message.a3[j], options);
            }
            if (message.b3 && message.b3.length) {
                object.b3 = [];
                for (let j = 0; j < message.b3.length; ++j)
                    object.b3[j] = $root.dow.Coefficient.toObject(message.b3[j], options);
            }
            if (message.c3 && message.c3.length) {
                object.c3 = [];
                for (let j = 0; j < message.c3.length; ++j)
                    object.c3[j] = $root.dow.Coefficient.toObject(message.c3[j], options);
            }
            if (message.d3 && message.d3.length) {
                object.d3 = [];
                for (let j = 0; j < message.d3.length; ++j)
                    object.d3[j] = $root.dow.Coefficient.toObject(message.d3[j], options);
            }
            if (message.e3 && message.e3.length) {
                object.e3 = [];
                for (let j = 0; j < message.e3.length; ++j)
                    object.e3[j] = $root.dow.Coefficient.toObject(message.e3[j], options);
            }
            if (message.f3 && message.f3.length) {
                object.f3 = [];
                for (let j = 0; j < message.f3.length; ++j)
                    object.f3[j] = $root.dow.Coefficient.toObject(message.f3[j], options);
            }
            if (message.g3 && message.g3.length) {
                object.g3 = [];
                for (let j = 0; j < message.g3.length; ++j)
                    object.g3[j] = $root.dow.Coefficient.toObject(message.g3[j], options);
            }
            if (message.h3 && message.h3.length) {
                object.h3 = [];
                for (let j = 0; j < message.h3.length; ++j)
                    object.h3[j] = $root.dow.Coefficient.toObject(message.h3[j], options);
            }
            if (message.i3 && message.i3.length) {
                object.i3 = [];
                for (let j = 0; j < message.i3.length; ++j)
                    object.i3[j] = $root.dow.Coefficient.toObject(message.i3[j], options);
            }
            return object;
        };

        /**
         * Converts this CompensationCoefficientGetResponse to JSON.
         * @function toJSON
         * @memberof dow.CompensationCoefficientGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompensationCoefficientGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompensationCoefficientGetResponse;
    })();

    dow.GeneralProcessHazardCoefficientCalcRequest = (function() {

        /**
         * Properties of a GeneralProcessHazardCoefficientCalcRequest.
         * @memberof dow
         * @interface IGeneralProcessHazardCoefficientCalcRequest
         * @property {number|null} [A1] GeneralProcessHazardCoefficientCalcRequest A1
         * @property {number|null} [B1] GeneralProcessHazardCoefficientCalcRequest B1
         * @property {number|null} [C1] GeneralProcessHazardCoefficientCalcRequest C1
         * @property {number|null} [D1] GeneralProcessHazardCoefficientCalcRequest D1
         * @property {number|null} [E1] GeneralProcessHazardCoefficientCalcRequest E1
         * @property {number|null} [F1] GeneralProcessHazardCoefficientCalcRequest F1
         */

        /**
         * Constructs a new GeneralProcessHazardCoefficientCalcRequest.
         * @memberof dow
         * @classdesc Represents a GeneralProcessHazardCoefficientCalcRequest.
         * @implements IGeneralProcessHazardCoefficientCalcRequest
         * @constructor
         * @param {dow.IGeneralProcessHazardCoefficientCalcRequest=} [properties] Properties to set
         */
        function GeneralProcessHazardCoefficientCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneralProcessHazardCoefficientCalcRequest A1.
         * @member {number} A1
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.A1 = 0;

        /**
         * GeneralProcessHazardCoefficientCalcRequest B1.
         * @member {number} B1
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.B1 = 0;

        /**
         * GeneralProcessHazardCoefficientCalcRequest C1.
         * @member {number} C1
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.C1 = 0;

        /**
         * GeneralProcessHazardCoefficientCalcRequest D1.
         * @member {number} D1
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.D1 = 0;

        /**
         * GeneralProcessHazardCoefficientCalcRequest E1.
         * @member {number} E1
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.E1 = 0;

        /**
         * GeneralProcessHazardCoefficientCalcRequest F1.
         * @member {number} F1
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.F1 = 0;

        /**
         * Creates a GeneralProcessHazardCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.GeneralProcessHazardCoefficientCalcRequest} GeneralProcessHazardCoefficientCalcRequest
         */
        GeneralProcessHazardCoefficientCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.GeneralProcessHazardCoefficientCalcRequest)
                return object;
            let message = new $root.dow.GeneralProcessHazardCoefficientCalcRequest();
            if (object.A1 != null)
                message.A1 = Number(object.A1);
            if (object.B1 != null)
                message.B1 = Number(object.B1);
            if (object.C1 != null)
                message.C1 = Number(object.C1);
            if (object.D1 != null)
                message.D1 = Number(object.D1);
            if (object.E1 != null)
                message.E1 = Number(object.E1);
            if (object.F1 != null)
                message.F1 = Number(object.F1);
            return message;
        };

        /**
         * Creates a plain object from a GeneralProcessHazardCoefficientCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @static
         * @param {dow.GeneralProcessHazardCoefficientCalcRequest} message GeneralProcessHazardCoefficientCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneralProcessHazardCoefficientCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.A1 = 0;
                object.B1 = 0;
                object.C1 = 0;
                object.D1 = 0;
                object.E1 = 0;
                object.F1 = 0;
            }
            if (message.A1 != null && message.hasOwnProperty("A1"))
                object.A1 = options.json && !isFinite(message.A1) ? String(message.A1) : message.A1;
            if (message.B1 != null && message.hasOwnProperty("B1"))
                object.B1 = options.json && !isFinite(message.B1) ? String(message.B1) : message.B1;
            if (message.C1 != null && message.hasOwnProperty("C1"))
                object.C1 = options.json && !isFinite(message.C1) ? String(message.C1) : message.C1;
            if (message.D1 != null && message.hasOwnProperty("D1"))
                object.D1 = options.json && !isFinite(message.D1) ? String(message.D1) : message.D1;
            if (message.E1 != null && message.hasOwnProperty("E1"))
                object.E1 = options.json && !isFinite(message.E1) ? String(message.E1) : message.E1;
            if (message.F1 != null && message.hasOwnProperty("F1"))
                object.F1 = options.json && !isFinite(message.F1) ? String(message.F1) : message.F1;
            return object;
        };

        /**
         * Converts this GeneralProcessHazardCoefficientCalcRequest to JSON.
         * @function toJSON
         * @memberof dow.GeneralProcessHazardCoefficientCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneralProcessHazardCoefficientCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneralProcessHazardCoefficientCalcRequest;
    })();

    dow.GeneralProcessHazardCoefficientCalcResponse = (function() {

        /**
         * Properties of a GeneralProcessHazardCoefficientCalcResponse.
         * @memberof dow
         * @interface IGeneralProcessHazardCoefficientCalcResponse
         * @property {number|null} [F1] GeneralProcessHazardCoefficientCalcResponse F1
         */

        /**
         * Constructs a new GeneralProcessHazardCoefficientCalcResponse.
         * @memberof dow
         * @classdesc Represents a GeneralProcessHazardCoefficientCalcResponse.
         * @implements IGeneralProcessHazardCoefficientCalcResponse
         * @constructor
         * @param {dow.IGeneralProcessHazardCoefficientCalcResponse=} [properties] Properties to set
         */
        function GeneralProcessHazardCoefficientCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneralProcessHazardCoefficientCalcResponse F1.
         * @member {number} F1
         * @memberof dow.GeneralProcessHazardCoefficientCalcResponse
         * @instance
         */
        GeneralProcessHazardCoefficientCalcResponse.prototype.F1 = 0;

        /**
         * Creates a GeneralProcessHazardCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.GeneralProcessHazardCoefficientCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.GeneralProcessHazardCoefficientCalcResponse} GeneralProcessHazardCoefficientCalcResponse
         */
        GeneralProcessHazardCoefficientCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.GeneralProcessHazardCoefficientCalcResponse)
                return object;
            let message = new $root.dow.GeneralProcessHazardCoefficientCalcResponse();
            if (object.F1 != null)
                message.F1 = Number(object.F1);
            return message;
        };

        /**
         * Creates a plain object from a GeneralProcessHazardCoefficientCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.GeneralProcessHazardCoefficientCalcResponse
         * @static
         * @param {dow.GeneralProcessHazardCoefficientCalcResponse} message GeneralProcessHazardCoefficientCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneralProcessHazardCoefficientCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.F1 = 0;
            if (message.F1 != null && message.hasOwnProperty("F1"))
                object.F1 = options.json && !isFinite(message.F1) ? String(message.F1) : message.F1;
            return object;
        };

        /**
         * Converts this GeneralProcessHazardCoefficientCalcResponse to JSON.
         * @function toJSON
         * @memberof dow.GeneralProcessHazardCoefficientCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneralProcessHazardCoefficientCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneralProcessHazardCoefficientCalcResponse;
    })();

    dow.SpecialProcessHazardCoefficientCalcRequest = (function() {

        /**
         * Properties of a SpecialProcessHazardCoefficientCalcRequest.
         * @memberof dow
         * @interface ISpecialProcessHazardCoefficientCalcRequest
         * @property {number|null} [A2] SpecialProcessHazardCoefficientCalcRequest A2
         * @property {number|null} [B2] SpecialProcessHazardCoefficientCalcRequest B2
         * @property {number|null} [C2] SpecialProcessHazardCoefficientCalcRequest C2
         * @property {number|null} [D2] SpecialProcessHazardCoefficientCalcRequest D2
         * @property {number|null} [E2] SpecialProcessHazardCoefficientCalcRequest E2
         * @property {number|null} [F2] SpecialProcessHazardCoefficientCalcRequest F2
         * @property {number|null} [G2] SpecialProcessHazardCoefficientCalcRequest G2
         * @property {number|null} [H2] SpecialProcessHazardCoefficientCalcRequest H2
         * @property {number|null} [I2] SpecialProcessHazardCoefficientCalcRequest I2
         * @property {number|null} [J2] SpecialProcessHazardCoefficientCalcRequest J2
         * @property {number|null} [K2] SpecialProcessHazardCoefficientCalcRequest K2
         * @property {number|null} [L2] SpecialProcessHazardCoefficientCalcRequest L2
         * @property {number|null} [generalProcessHazardCoefficientF1] SpecialProcessHazardCoefficientCalcRequest generalProcessHazardCoefficientF1
         */

        /**
         * Constructs a new SpecialProcessHazardCoefficientCalcRequest.
         * @memberof dow
         * @classdesc Represents a SpecialProcessHazardCoefficientCalcRequest.
         * @implements ISpecialProcessHazardCoefficientCalcRequest
         * @constructor
         * @param {dow.ISpecialProcessHazardCoefficientCalcRequest=} [properties] Properties to set
         */
        function SpecialProcessHazardCoefficientCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialProcessHazardCoefficientCalcRequest A2.
         * @member {number} A2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.A2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest B2.
         * @member {number} B2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.B2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest C2.
         * @member {number} C2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.C2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest D2.
         * @member {number} D2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.D2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest E2.
         * @member {number} E2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.E2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest F2.
         * @member {number} F2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.F2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest G2.
         * @member {number} G2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.G2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest H2.
         * @member {number} H2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.H2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest I2.
         * @member {number} I2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.I2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest J2.
         * @member {number} J2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.J2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest K2.
         * @member {number} K2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.K2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest L2.
         * @member {number} L2
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.L2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcRequest generalProcessHazardCoefficientF1.
         * @member {number} generalProcessHazardCoefficientF1
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.generalProcessHazardCoefficientF1 = 0;

        /**
         * Creates a SpecialProcessHazardCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.SpecialProcessHazardCoefficientCalcRequest} SpecialProcessHazardCoefficientCalcRequest
         */
        SpecialProcessHazardCoefficientCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.SpecialProcessHazardCoefficientCalcRequest)
                return object;
            let message = new $root.dow.SpecialProcessHazardCoefficientCalcRequest();
            if (object.A2 != null)
                message.A2 = Number(object.A2);
            if (object.B2 != null)
                message.B2 = Number(object.B2);
            if (object.C2 != null)
                message.C2 = Number(object.C2);
            if (object.D2 != null)
                message.D2 = Number(object.D2);
            if (object.E2 != null)
                message.E2 = Number(object.E2);
            if (object.F2 != null)
                message.F2 = Number(object.F2);
            if (object.G2 != null)
                message.G2 = Number(object.G2);
            if (object.H2 != null)
                message.H2 = Number(object.H2);
            if (object.I2 != null)
                message.I2 = Number(object.I2);
            if (object.J2 != null)
                message.J2 = Number(object.J2);
            if (object.K2 != null)
                message.K2 = Number(object.K2);
            if (object.L2 != null)
                message.L2 = Number(object.L2);
            if (object.generalProcessHazardCoefficientF1 != null)
                message.generalProcessHazardCoefficientF1 = Number(object.generalProcessHazardCoefficientF1);
            return message;
        };

        /**
         * Creates a plain object from a SpecialProcessHazardCoefficientCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @static
         * @param {dow.SpecialProcessHazardCoefficientCalcRequest} message SpecialProcessHazardCoefficientCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialProcessHazardCoefficientCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.A2 = 0;
                object.B2 = 0;
                object.C2 = 0;
                object.D2 = 0;
                object.E2 = 0;
                object.F2 = 0;
                object.G2 = 0;
                object.H2 = 0;
                object.I2 = 0;
                object.J2 = 0;
                object.K2 = 0;
                object.L2 = 0;
                object.generalProcessHazardCoefficientF1 = 0;
            }
            if (message.A2 != null && message.hasOwnProperty("A2"))
                object.A2 = options.json && !isFinite(message.A2) ? String(message.A2) : message.A2;
            if (message.B2 != null && message.hasOwnProperty("B2"))
                object.B2 = options.json && !isFinite(message.B2) ? String(message.B2) : message.B2;
            if (message.C2 != null && message.hasOwnProperty("C2"))
                object.C2 = options.json && !isFinite(message.C2) ? String(message.C2) : message.C2;
            if (message.D2 != null && message.hasOwnProperty("D2"))
                object.D2 = options.json && !isFinite(message.D2) ? String(message.D2) : message.D2;
            if (message.E2 != null && message.hasOwnProperty("E2"))
                object.E2 = options.json && !isFinite(message.E2) ? String(message.E2) : message.E2;
            if (message.F2 != null && message.hasOwnProperty("F2"))
                object.F2 = options.json && !isFinite(message.F2) ? String(message.F2) : message.F2;
            if (message.G2 != null && message.hasOwnProperty("G2"))
                object.G2 = options.json && !isFinite(message.G2) ? String(message.G2) : message.G2;
            if (message.H2 != null && message.hasOwnProperty("H2"))
                object.H2 = options.json && !isFinite(message.H2) ? String(message.H2) : message.H2;
            if (message.I2 != null && message.hasOwnProperty("I2"))
                object.I2 = options.json && !isFinite(message.I2) ? String(message.I2) : message.I2;
            if (message.J2 != null && message.hasOwnProperty("J2"))
                object.J2 = options.json && !isFinite(message.J2) ? String(message.J2) : message.J2;
            if (message.K2 != null && message.hasOwnProperty("K2"))
                object.K2 = options.json && !isFinite(message.K2) ? String(message.K2) : message.K2;
            if (message.L2 != null && message.hasOwnProperty("L2"))
                object.L2 = options.json && !isFinite(message.L2) ? String(message.L2) : message.L2;
            if (message.generalProcessHazardCoefficientF1 != null && message.hasOwnProperty("generalProcessHazardCoefficientF1"))
                object.generalProcessHazardCoefficientF1 = options.json && !isFinite(message.generalProcessHazardCoefficientF1) ? String(message.generalProcessHazardCoefficientF1) : message.generalProcessHazardCoefficientF1;
            return object;
        };

        /**
         * Converts this SpecialProcessHazardCoefficientCalcRequest to JSON.
         * @function toJSON
         * @memberof dow.SpecialProcessHazardCoefficientCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialProcessHazardCoefficientCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialProcessHazardCoefficientCalcRequest;
    })();

    dow.SpecialProcessHazardCoefficientCalcResponse = (function() {

        /**
         * Properties of a SpecialProcessHazardCoefficientCalcResponse.
         * @memberof dow
         * @interface ISpecialProcessHazardCoefficientCalcResponse
         * @property {number|null} [F2] SpecialProcessHazardCoefficientCalcResponse F2
         * @property {number|null} [F3] SpecialProcessHazardCoefficientCalcResponse F3
         */

        /**
         * Constructs a new SpecialProcessHazardCoefficientCalcResponse.
         * @memberof dow
         * @classdesc Represents a SpecialProcessHazardCoefficientCalcResponse.
         * @implements ISpecialProcessHazardCoefficientCalcResponse
         * @constructor
         * @param {dow.ISpecialProcessHazardCoefficientCalcResponse=} [properties] Properties to set
         */
        function SpecialProcessHazardCoefficientCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialProcessHazardCoefficientCalcResponse F2.
         * @member {number} F2
         * @memberof dow.SpecialProcessHazardCoefficientCalcResponse
         * @instance
         */
        SpecialProcessHazardCoefficientCalcResponse.prototype.F2 = 0;

        /**
         * SpecialProcessHazardCoefficientCalcResponse F3.
         * @member {number} F3
         * @memberof dow.SpecialProcessHazardCoefficientCalcResponse
         * @instance
         */
        SpecialProcessHazardCoefficientCalcResponse.prototype.F3 = 0;

        /**
         * Creates a SpecialProcessHazardCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.SpecialProcessHazardCoefficientCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.SpecialProcessHazardCoefficientCalcResponse} SpecialProcessHazardCoefficientCalcResponse
         */
        SpecialProcessHazardCoefficientCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.SpecialProcessHazardCoefficientCalcResponse)
                return object;
            let message = new $root.dow.SpecialProcessHazardCoefficientCalcResponse();
            if (object.F2 != null)
                message.F2 = Number(object.F2);
            if (object.F3 != null)
                message.F3 = Number(object.F3);
            return message;
        };

        /**
         * Creates a plain object from a SpecialProcessHazardCoefficientCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.SpecialProcessHazardCoefficientCalcResponse
         * @static
         * @param {dow.SpecialProcessHazardCoefficientCalcResponse} message SpecialProcessHazardCoefficientCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialProcessHazardCoefficientCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.F2 = 0;
                object.F3 = 0;
            }
            if (message.F2 != null && message.hasOwnProperty("F2"))
                object.F2 = options.json && !isFinite(message.F2) ? String(message.F2) : message.F2;
            if (message.F3 != null && message.hasOwnProperty("F3"))
                object.F3 = options.json && !isFinite(message.F3) ? String(message.F3) : message.F3;
            return object;
        };

        /**
         * Converts this SpecialProcessHazardCoefficientCalcResponse to JSON.
         * @function toJSON
         * @memberof dow.SpecialProcessHazardCoefficientCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialProcessHazardCoefficientCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpecialProcessHazardCoefficientCalcResponse;
    })();

    dow.ProcessControlCompensationCoefficientCalcRequest = (function() {

        /**
         * Properties of a ProcessControlCompensationCoefficientCalcRequest.
         * @memberof dow
         * @interface IProcessControlCompensationCoefficientCalcRequest
         * @property {number|null} [a1] ProcessControlCompensationCoefficientCalcRequest a1
         * @property {number|null} [b1] ProcessControlCompensationCoefficientCalcRequest b1
         * @property {number|null} [c1] ProcessControlCompensationCoefficientCalcRequest c1
         * @property {number|null} [d1] ProcessControlCompensationCoefficientCalcRequest d1
         * @property {number|null} [e1] ProcessControlCompensationCoefficientCalcRequest e1
         * @property {number|null} [f1] ProcessControlCompensationCoefficientCalcRequest f1
         * @property {number|null} [g1] ProcessControlCompensationCoefficientCalcRequest g1
         * @property {number|null} [h1] ProcessControlCompensationCoefficientCalcRequest h1
         * @property {number|null} [i1] ProcessControlCompensationCoefficientCalcRequest i1
         */

        /**
         * Constructs a new ProcessControlCompensationCoefficientCalcRequest.
         * @memberof dow
         * @classdesc Represents a ProcessControlCompensationCoefficientCalcRequest.
         * @implements IProcessControlCompensationCoefficientCalcRequest
         * @constructor
         * @param {dow.IProcessControlCompensationCoefficientCalcRequest=} [properties] Properties to set
         */
        function ProcessControlCompensationCoefficientCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessControlCompensationCoefficientCalcRequest a1.
         * @member {number} a1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.a1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest b1.
         * @member {number} b1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.b1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest c1.
         * @member {number} c1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.c1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest d1.
         * @member {number} d1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.d1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest e1.
         * @member {number} e1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.e1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest f1.
         * @member {number} f1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.f1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest g1.
         * @member {number} g1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.g1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest h1.
         * @member {number} h1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.h1 = 0;

        /**
         * ProcessControlCompensationCoefficientCalcRequest i1.
         * @member {number} i1
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.i1 = 0;

        /**
         * Creates a ProcessControlCompensationCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.ProcessControlCompensationCoefficientCalcRequest} ProcessControlCompensationCoefficientCalcRequest
         */
        ProcessControlCompensationCoefficientCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.ProcessControlCompensationCoefficientCalcRequest)
                return object;
            let message = new $root.dow.ProcessControlCompensationCoefficientCalcRequest();
            if (object.a1 != null)
                message.a1 = Number(object.a1);
            if (object.b1 != null)
                message.b1 = Number(object.b1);
            if (object.c1 != null)
                message.c1 = Number(object.c1);
            if (object.d1 != null)
                message.d1 = Number(object.d1);
            if (object.e1 != null)
                message.e1 = Number(object.e1);
            if (object.f1 != null)
                message.f1 = Number(object.f1);
            if (object.g1 != null)
                message.g1 = Number(object.g1);
            if (object.h1 != null)
                message.h1 = Number(object.h1);
            if (object.i1 != null)
                message.i1 = Number(object.i1);
            return message;
        };

        /**
         * Creates a plain object from a ProcessControlCompensationCoefficientCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @static
         * @param {dow.ProcessControlCompensationCoefficientCalcRequest} message ProcessControlCompensationCoefficientCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessControlCompensationCoefficientCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a1 = 0;
                object.b1 = 0;
                object.c1 = 0;
                object.d1 = 0;
                object.e1 = 0;
                object.f1 = 0;
                object.g1 = 0;
                object.h1 = 0;
                object.i1 = 0;
            }
            if (message.a1 != null && message.hasOwnProperty("a1"))
                object.a1 = options.json && !isFinite(message.a1) ? String(message.a1) : message.a1;
            if (message.b1 != null && message.hasOwnProperty("b1"))
                object.b1 = options.json && !isFinite(message.b1) ? String(message.b1) : message.b1;
            if (message.c1 != null && message.hasOwnProperty("c1"))
                object.c1 = options.json && !isFinite(message.c1) ? String(message.c1) : message.c1;
            if (message.d1 != null && message.hasOwnProperty("d1"))
                object.d1 = options.json && !isFinite(message.d1) ? String(message.d1) : message.d1;
            if (message.e1 != null && message.hasOwnProperty("e1"))
                object.e1 = options.json && !isFinite(message.e1) ? String(message.e1) : message.e1;
            if (message.f1 != null && message.hasOwnProperty("f1"))
                object.f1 = options.json && !isFinite(message.f1) ? String(message.f1) : message.f1;
            if (message.g1 != null && message.hasOwnProperty("g1"))
                object.g1 = options.json && !isFinite(message.g1) ? String(message.g1) : message.g1;
            if (message.h1 != null && message.hasOwnProperty("h1"))
                object.h1 = options.json && !isFinite(message.h1) ? String(message.h1) : message.h1;
            if (message.i1 != null && message.hasOwnProperty("i1"))
                object.i1 = options.json && !isFinite(message.i1) ? String(message.i1) : message.i1;
            return object;
        };

        /**
         * Converts this ProcessControlCompensationCoefficientCalcRequest to JSON.
         * @function toJSON
         * @memberof dow.ProcessControlCompensationCoefficientCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessControlCompensationCoefficientCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessControlCompensationCoefficientCalcRequest;
    })();

    dow.ProcessControlCompensationCoefficientCalcResponse = (function() {

        /**
         * Properties of a ProcessControlCompensationCoefficientCalcResponse.
         * @memberof dow
         * @interface IProcessControlCompensationCoefficientCalcResponse
         * @property {number|null} [C1] ProcessControlCompensationCoefficientCalcResponse C1
         */

        /**
         * Constructs a new ProcessControlCompensationCoefficientCalcResponse.
         * @memberof dow
         * @classdesc Represents a ProcessControlCompensationCoefficientCalcResponse.
         * @implements IProcessControlCompensationCoefficientCalcResponse
         * @constructor
         * @param {dow.IProcessControlCompensationCoefficientCalcResponse=} [properties] Properties to set
         */
        function ProcessControlCompensationCoefficientCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessControlCompensationCoefficientCalcResponse C1.
         * @member {number} C1
         * @memberof dow.ProcessControlCompensationCoefficientCalcResponse
         * @instance
         */
        ProcessControlCompensationCoefficientCalcResponse.prototype.C1 = 0;

        /**
         * Creates a ProcessControlCompensationCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.ProcessControlCompensationCoefficientCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.ProcessControlCompensationCoefficientCalcResponse} ProcessControlCompensationCoefficientCalcResponse
         */
        ProcessControlCompensationCoefficientCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.ProcessControlCompensationCoefficientCalcResponse)
                return object;
            let message = new $root.dow.ProcessControlCompensationCoefficientCalcResponse();
            if (object.C1 != null)
                message.C1 = Number(object.C1);
            return message;
        };

        /**
         * Creates a plain object from a ProcessControlCompensationCoefficientCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.ProcessControlCompensationCoefficientCalcResponse
         * @static
         * @param {dow.ProcessControlCompensationCoefficientCalcResponse} message ProcessControlCompensationCoefficientCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessControlCompensationCoefficientCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.C1 = 0;
            if (message.C1 != null && message.hasOwnProperty("C1"))
                object.C1 = options.json && !isFinite(message.C1) ? String(message.C1) : message.C1;
            return object;
        };

        /**
         * Converts this ProcessControlCompensationCoefficientCalcResponse to JSON.
         * @function toJSON
         * @memberof dow.ProcessControlCompensationCoefficientCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessControlCompensationCoefficientCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessControlCompensationCoefficientCalcResponse;
    })();

    dow.MaterialIsolationCompensationCoefficientCalcRequest = (function() {

        /**
         * Properties of a MaterialIsolationCompensationCoefficientCalcRequest.
         * @memberof dow
         * @interface IMaterialIsolationCompensationCoefficientCalcRequest
         * @property {number|null} [a2] MaterialIsolationCompensationCoefficientCalcRequest a2
         * @property {number|null} [b2] MaterialIsolationCompensationCoefficientCalcRequest b2
         * @property {number|null} [c2] MaterialIsolationCompensationCoefficientCalcRequest c2
         * @property {number|null} [d2] MaterialIsolationCompensationCoefficientCalcRequest d2
         */

        /**
         * Constructs a new MaterialIsolationCompensationCoefficientCalcRequest.
         * @memberof dow
         * @classdesc Represents a MaterialIsolationCompensationCoefficientCalcRequest.
         * @implements IMaterialIsolationCompensationCoefficientCalcRequest
         * @constructor
         * @param {dow.IMaterialIsolationCompensationCoefficientCalcRequest=} [properties] Properties to set
         */
        function MaterialIsolationCompensationCoefficientCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialIsolationCompensationCoefficientCalcRequest a2.
         * @member {number} a2
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @instance
         */
        MaterialIsolationCompensationCoefficientCalcRequest.prototype.a2 = 0;

        /**
         * MaterialIsolationCompensationCoefficientCalcRequest b2.
         * @member {number} b2
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @instance
         */
        MaterialIsolationCompensationCoefficientCalcRequest.prototype.b2 = 0;

        /**
         * MaterialIsolationCompensationCoefficientCalcRequest c2.
         * @member {number} c2
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @instance
         */
        MaterialIsolationCompensationCoefficientCalcRequest.prototype.c2 = 0;

        /**
         * MaterialIsolationCompensationCoefficientCalcRequest d2.
         * @member {number} d2
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @instance
         */
        MaterialIsolationCompensationCoefficientCalcRequest.prototype.d2 = 0;

        /**
         * Creates a MaterialIsolationCompensationCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialIsolationCompensationCoefficientCalcRequest} MaterialIsolationCompensationCoefficientCalcRequest
         */
        MaterialIsolationCompensationCoefficientCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialIsolationCompensationCoefficientCalcRequest)
                return object;
            let message = new $root.dow.MaterialIsolationCompensationCoefficientCalcRequest();
            if (object.a2 != null)
                message.a2 = Number(object.a2);
            if (object.b2 != null)
                message.b2 = Number(object.b2);
            if (object.c2 != null)
                message.c2 = Number(object.c2);
            if (object.d2 != null)
                message.d2 = Number(object.d2);
            return message;
        };

        /**
         * Creates a plain object from a MaterialIsolationCompensationCoefficientCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @static
         * @param {dow.MaterialIsolationCompensationCoefficientCalcRequest} message MaterialIsolationCompensationCoefficientCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialIsolationCompensationCoefficientCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a2 = 0;
                object.b2 = 0;
                object.c2 = 0;
                object.d2 = 0;
            }
            if (message.a2 != null && message.hasOwnProperty("a2"))
                object.a2 = options.json && !isFinite(message.a2) ? String(message.a2) : message.a2;
            if (message.b2 != null && message.hasOwnProperty("b2"))
                object.b2 = options.json && !isFinite(message.b2) ? String(message.b2) : message.b2;
            if (message.c2 != null && message.hasOwnProperty("c2"))
                object.c2 = options.json && !isFinite(message.c2) ? String(message.c2) : message.c2;
            if (message.d2 != null && message.hasOwnProperty("d2"))
                object.d2 = options.json && !isFinite(message.d2) ? String(message.d2) : message.d2;
            return object;
        };

        /**
         * Converts this MaterialIsolationCompensationCoefficientCalcRequest to JSON.
         * @function toJSON
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialIsolationCompensationCoefficientCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialIsolationCompensationCoefficientCalcRequest;
    })();

    dow.MaterialIsolationCompensationCoefficientCalcResponse = (function() {

        /**
         * Properties of a MaterialIsolationCompensationCoefficientCalcResponse.
         * @memberof dow
         * @interface IMaterialIsolationCompensationCoefficientCalcResponse
         * @property {number|null} [C2] MaterialIsolationCompensationCoefficientCalcResponse C2
         */

        /**
         * Constructs a new MaterialIsolationCompensationCoefficientCalcResponse.
         * @memberof dow
         * @classdesc Represents a MaterialIsolationCompensationCoefficientCalcResponse.
         * @implements IMaterialIsolationCompensationCoefficientCalcResponse
         * @constructor
         * @param {dow.IMaterialIsolationCompensationCoefficientCalcResponse=} [properties] Properties to set
         */
        function MaterialIsolationCompensationCoefficientCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialIsolationCompensationCoefficientCalcResponse C2.
         * @member {number} C2
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcResponse
         * @instance
         */
        MaterialIsolationCompensationCoefficientCalcResponse.prototype.C2 = 0;

        /**
         * Creates a MaterialIsolationCompensationCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.MaterialIsolationCompensationCoefficientCalcResponse} MaterialIsolationCompensationCoefficientCalcResponse
         */
        MaterialIsolationCompensationCoefficientCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.MaterialIsolationCompensationCoefficientCalcResponse)
                return object;
            let message = new $root.dow.MaterialIsolationCompensationCoefficientCalcResponse();
            if (object.C2 != null)
                message.C2 = Number(object.C2);
            return message;
        };

        /**
         * Creates a plain object from a MaterialIsolationCompensationCoefficientCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcResponse
         * @static
         * @param {dow.MaterialIsolationCompensationCoefficientCalcResponse} message MaterialIsolationCompensationCoefficientCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialIsolationCompensationCoefficientCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.C2 = 0;
            if (message.C2 != null && message.hasOwnProperty("C2"))
                object.C2 = options.json && !isFinite(message.C2) ? String(message.C2) : message.C2;
            return object;
        };

        /**
         * Converts this MaterialIsolationCompensationCoefficientCalcResponse to JSON.
         * @function toJSON
         * @memberof dow.MaterialIsolationCompensationCoefficientCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialIsolationCompensationCoefficientCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialIsolationCompensationCoefficientCalcResponse;
    })();

    dow.FirePreventionMeasureCompensationCoefficientCalcRequest = (function() {

        /**
         * Properties of a FirePreventionMeasureCompensationCoefficientCalcRequest.
         * @memberof dow
         * @interface IFirePreventionMeasureCompensationCoefficientCalcRequest
         * @property {number|null} [a3] FirePreventionMeasureCompensationCoefficientCalcRequest a3
         * @property {number|null} [b3] FirePreventionMeasureCompensationCoefficientCalcRequest b3
         * @property {number|null} [c3] FirePreventionMeasureCompensationCoefficientCalcRequest c3
         * @property {number|null} [d3] FirePreventionMeasureCompensationCoefficientCalcRequest d3
         * @property {number|null} [e3] FirePreventionMeasureCompensationCoefficientCalcRequest e3
         * @property {number|null} [f3] FirePreventionMeasureCompensationCoefficientCalcRequest f3
         * @property {number|null} [g3] FirePreventionMeasureCompensationCoefficientCalcRequest g3
         * @property {number|null} [h3] FirePreventionMeasureCompensationCoefficientCalcRequest h3
         * @property {number|null} [i3] FirePreventionMeasureCompensationCoefficientCalcRequest i3
         */

        /**
         * Constructs a new FirePreventionMeasureCompensationCoefficientCalcRequest.
         * @memberof dow
         * @classdesc Represents a FirePreventionMeasureCompensationCoefficientCalcRequest.
         * @implements IFirePreventionMeasureCompensationCoefficientCalcRequest
         * @constructor
         * @param {dow.IFirePreventionMeasureCompensationCoefficientCalcRequest=} [properties] Properties to set
         */
        function FirePreventionMeasureCompensationCoefficientCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest a3.
         * @member {number} a3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.a3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest b3.
         * @member {number} b3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.b3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest c3.
         * @member {number} c3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.c3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest d3.
         * @member {number} d3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.d3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest e3.
         * @member {number} e3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.e3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest f3.
         * @member {number} f3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.f3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest g3.
         * @member {number} g3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.g3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest h3.
         * @member {number} h3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.h3 = 0;

        /**
         * FirePreventionMeasureCompensationCoefficientCalcRequest i3.
         * @member {number} i3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.i3 = 0;

        /**
         * Creates a FirePreventionMeasureCompensationCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.FirePreventionMeasureCompensationCoefficientCalcRequest} FirePreventionMeasureCompensationCoefficientCalcRequest
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.FirePreventionMeasureCompensationCoefficientCalcRequest)
                return object;
            let message = new $root.dow.FirePreventionMeasureCompensationCoefficientCalcRequest();
            if (object.a3 != null)
                message.a3 = Number(object.a3);
            if (object.b3 != null)
                message.b3 = Number(object.b3);
            if (object.c3 != null)
                message.c3 = Number(object.c3);
            if (object.d3 != null)
                message.d3 = Number(object.d3);
            if (object.e3 != null)
                message.e3 = Number(object.e3);
            if (object.f3 != null)
                message.f3 = Number(object.f3);
            if (object.g3 != null)
                message.g3 = Number(object.g3);
            if (object.h3 != null)
                message.h3 = Number(object.h3);
            if (object.i3 != null)
                message.i3 = Number(object.i3);
            return message;
        };

        /**
         * Creates a plain object from a FirePreventionMeasureCompensationCoefficientCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @static
         * @param {dow.FirePreventionMeasureCompensationCoefficientCalcRequest} message FirePreventionMeasureCompensationCoefficientCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a3 = 0;
                object.b3 = 0;
                object.c3 = 0;
                object.d3 = 0;
                object.e3 = 0;
                object.f3 = 0;
                object.g3 = 0;
                object.h3 = 0;
                object.i3 = 0;
            }
            if (message.a3 != null && message.hasOwnProperty("a3"))
                object.a3 = options.json && !isFinite(message.a3) ? String(message.a3) : message.a3;
            if (message.b3 != null && message.hasOwnProperty("b3"))
                object.b3 = options.json && !isFinite(message.b3) ? String(message.b3) : message.b3;
            if (message.c3 != null && message.hasOwnProperty("c3"))
                object.c3 = options.json && !isFinite(message.c3) ? String(message.c3) : message.c3;
            if (message.d3 != null && message.hasOwnProperty("d3"))
                object.d3 = options.json && !isFinite(message.d3) ? String(message.d3) : message.d3;
            if (message.e3 != null && message.hasOwnProperty("e3"))
                object.e3 = options.json && !isFinite(message.e3) ? String(message.e3) : message.e3;
            if (message.f3 != null && message.hasOwnProperty("f3"))
                object.f3 = options.json && !isFinite(message.f3) ? String(message.f3) : message.f3;
            if (message.g3 != null && message.hasOwnProperty("g3"))
                object.g3 = options.json && !isFinite(message.g3) ? String(message.g3) : message.g3;
            if (message.h3 != null && message.hasOwnProperty("h3"))
                object.h3 = options.json && !isFinite(message.h3) ? String(message.h3) : message.h3;
            if (message.i3 != null && message.hasOwnProperty("i3"))
                object.i3 = options.json && !isFinite(message.i3) ? String(message.i3) : message.i3;
            return object;
        };

        /**
         * Converts this FirePreventionMeasureCompensationCoefficientCalcRequest to JSON.
         * @function toJSON
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirePreventionMeasureCompensationCoefficientCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FirePreventionMeasureCompensationCoefficientCalcRequest;
    })();

    dow.FirePreventionMeasureCompensationCoefficientCalcResponse = (function() {

        /**
         * Properties of a FirePreventionMeasureCompensationCoefficientCalcResponse.
         * @memberof dow
         * @interface IFirePreventionMeasureCompensationCoefficientCalcResponse
         * @property {number|null} [C3] FirePreventionMeasureCompensationCoefficientCalcResponse C3
         */

        /**
         * Constructs a new FirePreventionMeasureCompensationCoefficientCalcResponse.
         * @memberof dow
         * @classdesc Represents a FirePreventionMeasureCompensationCoefficientCalcResponse.
         * @implements IFirePreventionMeasureCompensationCoefficientCalcResponse
         * @constructor
         * @param {dow.IFirePreventionMeasureCompensationCoefficientCalcResponse=} [properties] Properties to set
         */
        function FirePreventionMeasureCompensationCoefficientCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirePreventionMeasureCompensationCoefficientCalcResponse C3.
         * @member {number} C3
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcResponse
         * @instance
         */
        FirePreventionMeasureCompensationCoefficientCalcResponse.prototype.C3 = 0;

        /**
         * Creates a FirePreventionMeasureCompensationCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.FirePreventionMeasureCompensationCoefficientCalcResponse} FirePreventionMeasureCompensationCoefficientCalcResponse
         */
        FirePreventionMeasureCompensationCoefficientCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.FirePreventionMeasureCompensationCoefficientCalcResponse)
                return object;
            let message = new $root.dow.FirePreventionMeasureCompensationCoefficientCalcResponse();
            if (object.C3 != null)
                message.C3 = Number(object.C3);
            return message;
        };

        /**
         * Creates a plain object from a FirePreventionMeasureCompensationCoefficientCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcResponse
         * @static
         * @param {dow.FirePreventionMeasureCompensationCoefficientCalcResponse} message FirePreventionMeasureCompensationCoefficientCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirePreventionMeasureCompensationCoefficientCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.C3 = 0;
            if (message.C3 != null && message.hasOwnProperty("C3"))
                object.C3 = options.json && !isFinite(message.C3) ? String(message.C3) : message.C3;
            return object;
        };

        /**
         * Converts this FirePreventionMeasureCompensationCoefficientCalcResponse to JSON.
         * @function toJSON
         * @memberof dow.FirePreventionMeasureCompensationCoefficientCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirePreventionMeasureCompensationCoefficientCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FirePreventionMeasureCompensationCoefficientCalcResponse;
    })();

    dow.EvaluationResultsCalcRequest = (function() {

        /**
         * Properties of an EvaluationResultsCalcRequest.
         * @memberof dow
         * @interface IEvaluationResultsCalcRequest
         * @property {number|null} [C1] EvaluationResultsCalcRequest C1
         * @property {number|null} [C2] EvaluationResultsCalcRequest C2
         * @property {number|null} [C3] EvaluationResultsCalcRequest C3
         * @property {number|null} [materialCoefficientMf] EvaluationResultsCalcRequest materialCoefficientMf
         * @property {number|null} [processHazardCoefficientF3] EvaluationResultsCalcRequest processHazardCoefficientF3
         */

        /**
         * Constructs a new EvaluationResultsCalcRequest.
         * @memberof dow
         * @classdesc Represents an EvaluationResultsCalcRequest.
         * @implements IEvaluationResultsCalcRequest
         * @constructor
         * @param {dow.IEvaluationResultsCalcRequest=} [properties] Properties to set
         */
        function EvaluationResultsCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EvaluationResultsCalcRequest C1.
         * @member {number} C1
         * @memberof dow.EvaluationResultsCalcRequest
         * @instance
         */
        EvaluationResultsCalcRequest.prototype.C1 = 0;

        /**
         * EvaluationResultsCalcRequest C2.
         * @member {number} C2
         * @memberof dow.EvaluationResultsCalcRequest
         * @instance
         */
        EvaluationResultsCalcRequest.prototype.C2 = 0;

        /**
         * EvaluationResultsCalcRequest C3.
         * @member {number} C3
         * @memberof dow.EvaluationResultsCalcRequest
         * @instance
         */
        EvaluationResultsCalcRequest.prototype.C3 = 0;

        /**
         * EvaluationResultsCalcRequest materialCoefficientMf.
         * @member {number} materialCoefficientMf
         * @memberof dow.EvaluationResultsCalcRequest
         * @instance
         */
        EvaluationResultsCalcRequest.prototype.materialCoefficientMf = 0;

        /**
         * EvaluationResultsCalcRequest processHazardCoefficientF3.
         * @member {number} processHazardCoefficientF3
         * @memberof dow.EvaluationResultsCalcRequest
         * @instance
         */
        EvaluationResultsCalcRequest.prototype.processHazardCoefficientF3 = 0;

        /**
         * Creates an EvaluationResultsCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.EvaluationResultsCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.EvaluationResultsCalcRequest} EvaluationResultsCalcRequest
         */
        EvaluationResultsCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.EvaluationResultsCalcRequest)
                return object;
            let message = new $root.dow.EvaluationResultsCalcRequest();
            if (object.C1 != null)
                message.C1 = Number(object.C1);
            if (object.C2 != null)
                message.C2 = Number(object.C2);
            if (object.C3 != null)
                message.C3 = Number(object.C3);
            if (object.materialCoefficientMf != null)
                message.materialCoefficientMf = Number(object.materialCoefficientMf);
            if (object.processHazardCoefficientF3 != null)
                message.processHazardCoefficientF3 = Number(object.processHazardCoefficientF3);
            return message;
        };

        /**
         * Creates a plain object from an EvaluationResultsCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.EvaluationResultsCalcRequest
         * @static
         * @param {dow.EvaluationResultsCalcRequest} message EvaluationResultsCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EvaluationResultsCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.C1 = 0;
                object.C2 = 0;
                object.C3 = 0;
                object.materialCoefficientMf = 0;
                object.processHazardCoefficientF3 = 0;
            }
            if (message.C1 != null && message.hasOwnProperty("C1"))
                object.C1 = options.json && !isFinite(message.C1) ? String(message.C1) : message.C1;
            if (message.C2 != null && message.hasOwnProperty("C2"))
                object.C2 = options.json && !isFinite(message.C2) ? String(message.C2) : message.C2;
            if (message.C3 != null && message.hasOwnProperty("C3"))
                object.C3 = options.json && !isFinite(message.C3) ? String(message.C3) : message.C3;
            if (message.materialCoefficientMf != null && message.hasOwnProperty("materialCoefficientMf"))
                object.materialCoefficientMf = options.json && !isFinite(message.materialCoefficientMf) ? String(message.materialCoefficientMf) : message.materialCoefficientMf;
            if (message.processHazardCoefficientF3 != null && message.hasOwnProperty("processHazardCoefficientF3"))
                object.processHazardCoefficientF3 = options.json && !isFinite(message.processHazardCoefficientF3) ? String(message.processHazardCoefficientF3) : message.processHazardCoefficientF3;
            return object;
        };

        /**
         * Converts this EvaluationResultsCalcRequest to JSON.
         * @function toJSON
         * @memberof dow.EvaluationResultsCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EvaluationResultsCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EvaluationResultsCalcRequest;
    })();

    dow.EvaluationResultsCalcResponse = (function() {

        /**
         * Properties of an EvaluationResultsCalcResponse.
         * @memberof dow
         * @interface IEvaluationResultsCalcResponse
         * @property {number|null} [C] EvaluationResultsCalcResponse C
         * @property {number|null} [initialFEi] EvaluationResultsCalcResponse initialFEi
         * @property {string|null} [initialUnitHazardLevel] EvaluationResultsCalcResponse initialUnitHazardLevel
         * @property {number|null} [initialR] EvaluationResultsCalcResponse initialR
         * @property {number|null} [initialS] EvaluationResultsCalcResponse initialS
         * @property {number|null} [initialUnitHazardCoefficient] EvaluationResultsCalcResponse initialUnitHazardCoefficient
         * @property {number|null} [compensationFEi] EvaluationResultsCalcResponse compensationFEi
         * @property {string|null} [compensationUnitHazardLevel] EvaluationResultsCalcResponse compensationUnitHazardLevel
         * @property {number|null} [compensationR] EvaluationResultsCalcResponse compensationR
         * @property {number|null} [compensationS] EvaluationResultsCalcResponse compensationS
         * @property {number|null} [compensationUnitHazardCoefficient] EvaluationResultsCalcResponse compensationUnitHazardCoefficient
         * @property {string|null} [conclusion] EvaluationResultsCalcResponse conclusion
         */

        /**
         * Constructs a new EvaluationResultsCalcResponse.
         * @memberof dow
         * @classdesc Represents an EvaluationResultsCalcResponse.
         * @implements IEvaluationResultsCalcResponse
         * @constructor
         * @param {dow.IEvaluationResultsCalcResponse=} [properties] Properties to set
         */
        function EvaluationResultsCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EvaluationResultsCalcResponse C.
         * @member {number} C
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.C = 0;

        /**
         * EvaluationResultsCalcResponse initialFEi.
         * @member {number} initialFEi
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.initialFEi = 0;

        /**
         * EvaluationResultsCalcResponse initialUnitHazardLevel.
         * @member {string} initialUnitHazardLevel
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.initialUnitHazardLevel = "";

        /**
         * EvaluationResultsCalcResponse initialR.
         * @member {number} initialR
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.initialR = 0;

        /**
         * EvaluationResultsCalcResponse initialS.
         * @member {number} initialS
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.initialS = 0;

        /**
         * EvaluationResultsCalcResponse initialUnitHazardCoefficient.
         * @member {number} initialUnitHazardCoefficient
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.initialUnitHazardCoefficient = 0;

        /**
         * EvaluationResultsCalcResponse compensationFEi.
         * @member {number} compensationFEi
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.compensationFEi = 0;

        /**
         * EvaluationResultsCalcResponse compensationUnitHazardLevel.
         * @member {string} compensationUnitHazardLevel
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.compensationUnitHazardLevel = "";

        /**
         * EvaluationResultsCalcResponse compensationR.
         * @member {number} compensationR
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.compensationR = 0;

        /**
         * EvaluationResultsCalcResponse compensationS.
         * @member {number} compensationS
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.compensationS = 0;

        /**
         * EvaluationResultsCalcResponse compensationUnitHazardCoefficient.
         * @member {number} compensationUnitHazardCoefficient
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.compensationUnitHazardCoefficient = 0;

        /**
         * EvaluationResultsCalcResponse conclusion.
         * @member {string} conclusion
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         */
        EvaluationResultsCalcResponse.prototype.conclusion = "";

        /**
         * Creates an EvaluationResultsCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dow.EvaluationResultsCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dow.EvaluationResultsCalcResponse} EvaluationResultsCalcResponse
         */
        EvaluationResultsCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dow.EvaluationResultsCalcResponse)
                return object;
            let message = new $root.dow.EvaluationResultsCalcResponse();
            if (object.C != null)
                message.C = Number(object.C);
            if (object.initialFEi != null)
                message.initialFEi = Number(object.initialFEi);
            if (object.initialUnitHazardLevel != null)
                message.initialUnitHazardLevel = String(object.initialUnitHazardLevel);
            if (object.initialR != null)
                message.initialR = Number(object.initialR);
            if (object.initialS != null)
                message.initialS = Number(object.initialS);
            if (object.initialUnitHazardCoefficient != null)
                message.initialUnitHazardCoefficient = Number(object.initialUnitHazardCoefficient);
            if (object.compensationFEi != null)
                message.compensationFEi = Number(object.compensationFEi);
            if (object.compensationUnitHazardLevel != null)
                message.compensationUnitHazardLevel = String(object.compensationUnitHazardLevel);
            if (object.compensationR != null)
                message.compensationR = Number(object.compensationR);
            if (object.compensationS != null)
                message.compensationS = Number(object.compensationS);
            if (object.compensationUnitHazardCoefficient != null)
                message.compensationUnitHazardCoefficient = Number(object.compensationUnitHazardCoefficient);
            if (object.conclusion != null)
                message.conclusion = String(object.conclusion);
            return message;
        };

        /**
         * Creates a plain object from an EvaluationResultsCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dow.EvaluationResultsCalcResponse
         * @static
         * @param {dow.EvaluationResultsCalcResponse} message EvaluationResultsCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EvaluationResultsCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.C = 0;
                object.initialFEi = 0;
                object.initialUnitHazardLevel = "";
                object.initialR = 0;
                object.initialS = 0;
                object.initialUnitHazardCoefficient = 0;
                object.compensationFEi = 0;
                object.compensationUnitHazardLevel = "";
                object.compensationR = 0;
                object.compensationS = 0;
                object.compensationUnitHazardCoefficient = 0;
                object.conclusion = "";
            }
            if (message.C != null && message.hasOwnProperty("C"))
                object.C = options.json && !isFinite(message.C) ? String(message.C) : message.C;
            if (message.initialFEi != null && message.hasOwnProperty("initialFEi"))
                object.initialFEi = options.json && !isFinite(message.initialFEi) ? String(message.initialFEi) : message.initialFEi;
            if (message.initialUnitHazardLevel != null && message.hasOwnProperty("initialUnitHazardLevel"))
                object.initialUnitHazardLevel = message.initialUnitHazardLevel;
            if (message.initialR != null && message.hasOwnProperty("initialR"))
                object.initialR = options.json && !isFinite(message.initialR) ? String(message.initialR) : message.initialR;
            if (message.initialS != null && message.hasOwnProperty("initialS"))
                object.initialS = options.json && !isFinite(message.initialS) ? String(message.initialS) : message.initialS;
            if (message.initialUnitHazardCoefficient != null && message.hasOwnProperty("initialUnitHazardCoefficient"))
                object.initialUnitHazardCoefficient = options.json && !isFinite(message.initialUnitHazardCoefficient) ? String(message.initialUnitHazardCoefficient) : message.initialUnitHazardCoefficient;
            if (message.compensationFEi != null && message.hasOwnProperty("compensationFEi"))
                object.compensationFEi = options.json && !isFinite(message.compensationFEi) ? String(message.compensationFEi) : message.compensationFEi;
            if (message.compensationUnitHazardLevel != null && message.hasOwnProperty("compensationUnitHazardLevel"))
                object.compensationUnitHazardLevel = message.compensationUnitHazardLevel;
            if (message.compensationR != null && message.hasOwnProperty("compensationR"))
                object.compensationR = options.json && !isFinite(message.compensationR) ? String(message.compensationR) : message.compensationR;
            if (message.compensationS != null && message.hasOwnProperty("compensationS"))
                object.compensationS = options.json && !isFinite(message.compensationS) ? String(message.compensationS) : message.compensationS;
            if (message.compensationUnitHazardCoefficient != null && message.hasOwnProperty("compensationUnitHazardCoefficient"))
                object.compensationUnitHazardCoefficient = options.json && !isFinite(message.compensationUnitHazardCoefficient) ? String(message.compensationUnitHazardCoefficient) : message.compensationUnitHazardCoefficient;
            if (message.conclusion != null && message.hasOwnProperty("conclusion"))
                object.conclusion = message.conclusion;
            return object;
        };

        /**
         * Converts this EvaluationResultsCalcResponse to JSON.
         * @function toJSON
         * @memberof dow.EvaluationResultsCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EvaluationResultsCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EvaluationResultsCalcResponse;
    })();

    dow.DowService = (function() {

        /**
         * Constructs a new DowService service.
         * @memberof dow
         * @classdesc Represents a DowService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DowService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DowService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DowService;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetChemicalActivityGrade}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientGetChemicalActivityGradeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientGetChemicalActivityGradeResponse} [response] MaterialCoefficientGetChemicalActivityGradeResponse
         */

        /**
         * Calls MaterialCoefficientGetChemicalActivityGrade.
         * @function materialCoefficientGetChemicalActivityGrade
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetChemicalActivityGradeRequest} request MaterialCoefficientGetChemicalActivityGradeRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientGetChemicalActivityGradeCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetChemicalActivityGradeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficientGetChemicalActivityGrade = function materialCoefficientGetChemicalActivityGrade(request, callback) {
            return this.rpcCall(materialCoefficientGetChemicalActivityGrade, $root.dow.MaterialCoefficientGetChemicalActivityGradeRequest, $root.dow.MaterialCoefficientGetChemicalActivityGradeResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetChemicalActivityGrade" });

        /**
         * Calls MaterialCoefficientGetChemicalActivityGrade.
         * @function materialCoefficientGetChemicalActivityGrade
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetChemicalActivityGradeRequest} request MaterialCoefficientGetChemicalActivityGradeRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientGetChemicalActivityGradeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialCoefficient}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientResponse} [response] MaterialCoefficientResponse
         */

        /**
         * Calls MaterialCoefficient.
         * @function materialCoefficient
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientRequest} request MaterialCoefficientRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficient = function materialCoefficient(request, callback) {
            return this.rpcCall(materialCoefficient, $root.dow.MaterialCoefficientRequest, $root.dow.MaterialCoefficientResponse, request, callback);
        }, "name", { value: "MaterialCoefficient" });

        /**
         * Calls MaterialCoefficient.
         * @function materialCoefficient
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientRequest} request MaterialCoefficientRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientSaveUnknownMaterial}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientSaveUnknownMaterialCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientSaveUnknownMaterialResponse} [response] MaterialCoefficientSaveUnknownMaterialResponse
         */

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @function materialCoefficientSaveUnknownMaterial
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientSaveUnknownMaterialRequest} request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientSaveUnknownMaterialCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientSaveUnknownMaterialResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficientSaveUnknownMaterial = function materialCoefficientSaveUnknownMaterial(request, callback) {
            return this.rpcCall(materialCoefficientSaveUnknownMaterial, $root.dow.MaterialCoefficientSaveUnknownMaterialRequest, $root.dow.MaterialCoefficientSaveUnknownMaterialResponse, request, callback);
        }, "name", { value: "MaterialCoefficientSaveUnknownMaterial" });

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @function materialCoefficientSaveUnknownMaterial
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientSaveUnknownMaterialRequest} request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientSaveUnknownMaterialResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetKnownCoefficient}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientGetKnownCoefficientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientGetKnownCoefficientResponse} [response] MaterialCoefficientGetKnownCoefficientResponse
         */

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @function materialCoefficientGetKnownCoefficient
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetKnownCoefficientRequest} request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientGetKnownCoefficientCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownCoefficientResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficientGetKnownCoefficient = function materialCoefficientGetKnownCoefficient(request, callback) {
            return this.rpcCall(materialCoefficientGetKnownCoefficient, $root.dow.MaterialCoefficientGetKnownCoefficientRequest, $root.dow.MaterialCoefficientGetKnownCoefficientResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetKnownCoefficient" });

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @function materialCoefficientGetKnownCoefficient
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetKnownCoefficientRequest} request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientGetKnownCoefficientResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetKnownNames}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientGetKnownNamesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientGetKnownNamesResponse} [response] MaterialCoefficientGetKnownNamesResponse
         */

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @function materialCoefficientGetKnownNames
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetKnownNamesRequest} request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientGetKnownNamesCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownNamesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficientGetKnownNames = function materialCoefficientGetKnownNames(request, callback) {
            return this.rpcCall(materialCoefficientGetKnownNames, $root.dow.MaterialCoefficientGetKnownNamesRequest, $root.dow.MaterialCoefficientGetKnownNamesResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetKnownNames" });

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @function materialCoefficientGetKnownNames
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetKnownNamesRequest} request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientGetKnownNamesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetReactionCharacters}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientGetReactionCharactersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientGetReactionCharactersResponse} [response] MaterialCoefficientGetReactionCharactersResponse
         */

        /**
         * Calls MaterialCoefficientGetReactionCharacters.
         * @function materialCoefficientGetReactionCharacters
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetReactionCharactersRequest} request MaterialCoefficientGetReactionCharactersRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientGetReactionCharactersCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetReactionCharactersResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficientGetReactionCharacters = function materialCoefficientGetReactionCharacters(request, callback) {
            return this.rpcCall(materialCoefficientGetReactionCharacters, $root.dow.MaterialCoefficientGetReactionCharactersRequest, $root.dow.MaterialCoefficientGetReactionCharactersResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetReactionCharacters" });

        /**
         * Calls MaterialCoefficientGetReactionCharacters.
         * @function materialCoefficientGetReactionCharacters
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetReactionCharactersRequest} request MaterialCoefficientGetReactionCharactersRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientGetReactionCharactersResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetTypes}.
         * @memberof dow.DowService
         * @typedef MaterialCoefficientGetTypesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialCoefficientGetTypesResponse} [response] MaterialCoefficientGetTypesResponse
         */

        /**
         * Calls MaterialCoefficientGetTypes.
         * @function materialCoefficientGetTypes
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetTypesRequest} request MaterialCoefficientGetTypesRequest message or plain object
         * @param {dow.DowService.MaterialCoefficientGetTypesCallback} callback Node-style callback called with the error, if any, and MaterialCoefficientGetTypesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialCoefficientGetTypes = function materialCoefficientGetTypes(request, callback) {
            return this.rpcCall(materialCoefficientGetTypes, $root.dow.MaterialCoefficientGetTypesRequest, $root.dow.MaterialCoefficientGetTypesResponse, request, callback);
        }, "name", { value: "MaterialCoefficientGetTypes" });

        /**
         * Calls MaterialCoefficientGetTypes.
         * @function materialCoefficientGetTypes
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialCoefficientGetTypesRequest} request MaterialCoefficientGetTypesRequest message or plain object
         * @returns {Promise<dow.MaterialCoefficientGetTypesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#processHazardCoefficientGet}.
         * @memberof dow.DowService
         * @typedef ProcessHazardCoefficientGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.ProcessHazardCoefficientGetResponse} [response] ProcessHazardCoefficientGetResponse
         */

        /**
         * Calls ProcessHazardCoefficientGet.
         * @function processHazardCoefficientGet
         * @memberof dow.DowService
         * @instance
         * @param {dow.IProcessHazardCoefficientGetRequest} request ProcessHazardCoefficientGetRequest message or plain object
         * @param {dow.DowService.ProcessHazardCoefficientGetCallback} callback Node-style callback called with the error, if any, and ProcessHazardCoefficientGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.processHazardCoefficientGet = function processHazardCoefficientGet(request, callback) {
            return this.rpcCall(processHazardCoefficientGet, $root.dow.ProcessHazardCoefficientGetRequest, $root.dow.ProcessHazardCoefficientGetResponse, request, callback);
        }, "name", { value: "ProcessHazardCoefficientGet" });

        /**
         * Calls ProcessHazardCoefficientGet.
         * @function processHazardCoefficientGet
         * @memberof dow.DowService
         * @instance
         * @param {dow.IProcessHazardCoefficientGetRequest} request ProcessHazardCoefficientGetRequest message or plain object
         * @returns {Promise<dow.ProcessHazardCoefficientGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#compensationCoefficientGet}.
         * @memberof dow.DowService
         * @typedef CompensationCoefficientGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.CompensationCoefficientGetResponse} [response] CompensationCoefficientGetResponse
         */

        /**
         * Calls CompensationCoefficientGet.
         * @function compensationCoefficientGet
         * @memberof dow.DowService
         * @instance
         * @param {dow.ICompensationCoefficientGetRequest} request CompensationCoefficientGetRequest message or plain object
         * @param {dow.DowService.CompensationCoefficientGetCallback} callback Node-style callback called with the error, if any, and CompensationCoefficientGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.compensationCoefficientGet = function compensationCoefficientGet(request, callback) {
            return this.rpcCall(compensationCoefficientGet, $root.dow.CompensationCoefficientGetRequest, $root.dow.CompensationCoefficientGetResponse, request, callback);
        }, "name", { value: "CompensationCoefficientGet" });

        /**
         * Calls CompensationCoefficientGet.
         * @function compensationCoefficientGet
         * @memberof dow.DowService
         * @instance
         * @param {dow.ICompensationCoefficientGetRequest} request CompensationCoefficientGetRequest message or plain object
         * @returns {Promise<dow.CompensationCoefficientGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#generalProcessHazardCoefficientCalc}.
         * @memberof dow.DowService
         * @typedef GeneralProcessHazardCoefficientCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.GeneralProcessHazardCoefficientCalcResponse} [response] GeneralProcessHazardCoefficientCalcResponse
         */

        /**
         * Calls GeneralProcessHazardCoefficientCalc.
         * @function generalProcessHazardCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IGeneralProcessHazardCoefficientCalcRequest} request GeneralProcessHazardCoefficientCalcRequest message or plain object
         * @param {dow.DowService.GeneralProcessHazardCoefficientCalcCallback} callback Node-style callback called with the error, if any, and GeneralProcessHazardCoefficientCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.generalProcessHazardCoefficientCalc = function generalProcessHazardCoefficientCalc(request, callback) {
            return this.rpcCall(generalProcessHazardCoefficientCalc, $root.dow.GeneralProcessHazardCoefficientCalcRequest, $root.dow.GeneralProcessHazardCoefficientCalcResponse, request, callback);
        }, "name", { value: "GeneralProcessHazardCoefficientCalc" });

        /**
         * Calls GeneralProcessHazardCoefficientCalc.
         * @function generalProcessHazardCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IGeneralProcessHazardCoefficientCalcRequest} request GeneralProcessHazardCoefficientCalcRequest message or plain object
         * @returns {Promise<dow.GeneralProcessHazardCoefficientCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#specialProcessHazardCoefficientCalc}.
         * @memberof dow.DowService
         * @typedef SpecialProcessHazardCoefficientCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.SpecialProcessHazardCoefficientCalcResponse} [response] SpecialProcessHazardCoefficientCalcResponse
         */

        /**
         * Calls SpecialProcessHazardCoefficientCalc.
         * @function specialProcessHazardCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.ISpecialProcessHazardCoefficientCalcRequest} request SpecialProcessHazardCoefficientCalcRequest message or plain object
         * @param {dow.DowService.SpecialProcessHazardCoefficientCalcCallback} callback Node-style callback called with the error, if any, and SpecialProcessHazardCoefficientCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.specialProcessHazardCoefficientCalc = function specialProcessHazardCoefficientCalc(request, callback) {
            return this.rpcCall(specialProcessHazardCoefficientCalc, $root.dow.SpecialProcessHazardCoefficientCalcRequest, $root.dow.SpecialProcessHazardCoefficientCalcResponse, request, callback);
        }, "name", { value: "SpecialProcessHazardCoefficientCalc" });

        /**
         * Calls SpecialProcessHazardCoefficientCalc.
         * @function specialProcessHazardCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.ISpecialProcessHazardCoefficientCalcRequest} request SpecialProcessHazardCoefficientCalcRequest message or plain object
         * @returns {Promise<dow.SpecialProcessHazardCoefficientCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#processControlCompensationCoefficientCalc}.
         * @memberof dow.DowService
         * @typedef ProcessControlCompensationCoefficientCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.ProcessControlCompensationCoefficientCalcResponse} [response] ProcessControlCompensationCoefficientCalcResponse
         */

        /**
         * Calls ProcessControlCompensationCoefficientCalc.
         * @function processControlCompensationCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IProcessControlCompensationCoefficientCalcRequest} request ProcessControlCompensationCoefficientCalcRequest message or plain object
         * @param {dow.DowService.ProcessControlCompensationCoefficientCalcCallback} callback Node-style callback called with the error, if any, and ProcessControlCompensationCoefficientCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.processControlCompensationCoefficientCalc = function processControlCompensationCoefficientCalc(request, callback) {
            return this.rpcCall(processControlCompensationCoefficientCalc, $root.dow.ProcessControlCompensationCoefficientCalcRequest, $root.dow.ProcessControlCompensationCoefficientCalcResponse, request, callback);
        }, "name", { value: "ProcessControlCompensationCoefficientCalc" });

        /**
         * Calls ProcessControlCompensationCoefficientCalc.
         * @function processControlCompensationCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IProcessControlCompensationCoefficientCalcRequest} request ProcessControlCompensationCoefficientCalcRequest message or plain object
         * @returns {Promise<dow.ProcessControlCompensationCoefficientCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#materialIsolationCompensationCoefficientCalc}.
         * @memberof dow.DowService
         * @typedef MaterialIsolationCompensationCoefficientCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.MaterialIsolationCompensationCoefficientCalcResponse} [response] MaterialIsolationCompensationCoefficientCalcResponse
         */

        /**
         * Calls MaterialIsolationCompensationCoefficientCalc.
         * @function materialIsolationCompensationCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialIsolationCompensationCoefficientCalcRequest} request MaterialIsolationCompensationCoefficientCalcRequest message or plain object
         * @param {dow.DowService.MaterialIsolationCompensationCoefficientCalcCallback} callback Node-style callback called with the error, if any, and MaterialIsolationCompensationCoefficientCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.materialIsolationCompensationCoefficientCalc = function materialIsolationCompensationCoefficientCalc(request, callback) {
            return this.rpcCall(materialIsolationCompensationCoefficientCalc, $root.dow.MaterialIsolationCompensationCoefficientCalcRequest, $root.dow.MaterialIsolationCompensationCoefficientCalcResponse, request, callback);
        }, "name", { value: "MaterialIsolationCompensationCoefficientCalc" });

        /**
         * Calls MaterialIsolationCompensationCoefficientCalc.
         * @function materialIsolationCompensationCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IMaterialIsolationCompensationCoefficientCalcRequest} request MaterialIsolationCompensationCoefficientCalcRequest message or plain object
         * @returns {Promise<dow.MaterialIsolationCompensationCoefficientCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#firePreventionMeasureCompensationCoefficientCalc}.
         * @memberof dow.DowService
         * @typedef FirePreventionMeasureCompensationCoefficientCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.FirePreventionMeasureCompensationCoefficientCalcResponse} [response] FirePreventionMeasureCompensationCoefficientCalcResponse
         */

        /**
         * Calls FirePreventionMeasureCompensationCoefficientCalc.
         * @function firePreventionMeasureCompensationCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IFirePreventionMeasureCompensationCoefficientCalcRequest} request FirePreventionMeasureCompensationCoefficientCalcRequest message or plain object
         * @param {dow.DowService.FirePreventionMeasureCompensationCoefficientCalcCallback} callback Node-style callback called with the error, if any, and FirePreventionMeasureCompensationCoefficientCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.firePreventionMeasureCompensationCoefficientCalc = function firePreventionMeasureCompensationCoefficientCalc(request, callback) {
            return this.rpcCall(firePreventionMeasureCompensationCoefficientCalc, $root.dow.FirePreventionMeasureCompensationCoefficientCalcRequest, $root.dow.FirePreventionMeasureCompensationCoefficientCalcResponse, request, callback);
        }, "name", { value: "FirePreventionMeasureCompensationCoefficientCalc" });

        /**
         * Calls FirePreventionMeasureCompensationCoefficientCalc.
         * @function firePreventionMeasureCompensationCoefficientCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IFirePreventionMeasureCompensationCoefficientCalcRequest} request FirePreventionMeasureCompensationCoefficientCalcRequest message or plain object
         * @returns {Promise<dow.FirePreventionMeasureCompensationCoefficientCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dow.DowService#evaluationResultsCalc}.
         * @memberof dow.DowService
         * @typedef EvaluationResultsCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dow.EvaluationResultsCalcResponse} [response] EvaluationResultsCalcResponse
         */

        /**
         * Calls EvaluationResultsCalc.
         * @function evaluationResultsCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IEvaluationResultsCalcRequest} request EvaluationResultsCalcRequest message or plain object
         * @param {dow.DowService.EvaluationResultsCalcCallback} callback Node-style callback called with the error, if any, and EvaluationResultsCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DowService.prototype.evaluationResultsCalc = function evaluationResultsCalc(request, callback) {
            return this.rpcCall(evaluationResultsCalc, $root.dow.EvaluationResultsCalcRequest, $root.dow.EvaluationResultsCalcResponse, request, callback);
        }, "name", { value: "EvaluationResultsCalc" });

        /**
         * Calls EvaluationResultsCalc.
         * @function evaluationResultsCalc
         * @memberof dow.DowService
         * @instance
         * @param {dow.IEvaluationResultsCalcRequest} request EvaluationResultsCalcRequest message or plain object
         * @returns {Promise<dow.EvaluationResultsCalcResponse>} Promise
         * @variation 2
         */

        return DowService;
    })();

    return dow;
})();