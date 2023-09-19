import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const gustav = $root.gustav = (() => {

    /**
     * Namespace gustav.
     * @exports gustav
     * @namespace
     */
    const gustav = {};

    gustav.FireBuildingRiskAnalyseRequest = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseRequest.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseRequest
         * @property {string|null} [moveFireType] FireBuildingRiskAnalyseRequest moveFireType
         * @property {number|null} [moveFireQuality] FireBuildingRiskAnalyseRequest moveFireQuality
         * @property {number|null} [accessArea] FireBuildingRiskAnalyseRequest accessArea
         * @property {string|null} [fireResistTop] FireBuildingRiskAnalyseRequest fireResistTop
         * @property {string|null} [fireSourceFeature] FireBuildingRiskAnalyseRequest fireSourceFeature
         * @property {string|null} [fireFightPowerProperty] FireBuildingRiskAnalyseRequest fireFightPowerProperty
         * @property {string|null} [fireControlDis] FireBuildingRiskAnalyseRequest fireControlDis
         * @property {number|null} [Qi] FireBuildingRiskAnalyseRequest Qi
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseRequest.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseRequest.
         * @implements IFireBuildingRiskAnalyseRequest
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseRequest=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireBuildingRiskAnalyseRequest moveFireType.
         * @member {string} moveFireType
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.moveFireType = "";

        /**
         * FireBuildingRiskAnalyseRequest moveFireQuality.
         * @member {number} moveFireQuality
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.moveFireQuality = 0;

        /**
         * FireBuildingRiskAnalyseRequest accessArea.
         * @member {number} accessArea
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.accessArea = 0;

        /**
         * FireBuildingRiskAnalyseRequest fireResistTop.
         * @member {string} fireResistTop
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.fireResistTop = "";

        /**
         * FireBuildingRiskAnalyseRequest fireSourceFeature.
         * @member {string} fireSourceFeature
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.fireSourceFeature = "";

        /**
         * FireBuildingRiskAnalyseRequest fireFightPowerProperty.
         * @member {string} fireFightPowerProperty
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.fireFightPowerProperty = "";

        /**
         * FireBuildingRiskAnalyseRequest fireControlDis.
         * @member {string} fireControlDis
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.fireControlDis = "";

        /**
         * FireBuildingRiskAnalyseRequest Qi.
         * @member {number} Qi
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         */
        FireBuildingRiskAnalyseRequest.prototype.Qi = 0;

        /**
         * Creates a FireBuildingRiskAnalyseRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseRequest} FireBuildingRiskAnalyseRequest
         */
        FireBuildingRiskAnalyseRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseRequest)
                return object;
            let message = new $root.gustav.FireBuildingRiskAnalyseRequest();
            if (object.moveFireType != null)
                message.moveFireType = String(object.moveFireType);
            if (object.moveFireQuality != null)
                message.moveFireQuality = Number(object.moveFireQuality);
            if (object.accessArea != null)
                message.accessArea = Number(object.accessArea);
            if (object.fireResistTop != null)
                message.fireResistTop = String(object.fireResistTop);
            if (object.fireSourceFeature != null)
                message.fireSourceFeature = String(object.fireSourceFeature);
            if (object.fireFightPowerProperty != null)
                message.fireFightPowerProperty = String(object.fireFightPowerProperty);
            if (object.fireControlDis != null)
                message.fireControlDis = String(object.fireControlDis);
            if (object.Qi != null)
                message.Qi = Number(object.Qi);
            return message;
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @static
         * @param {gustav.FireBuildingRiskAnalyseRequest} message FireBuildingRiskAnalyseRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.moveFireType = "";
                object.moveFireQuality = 0;
                object.accessArea = 0;
                object.fireResistTop = "";
                object.fireSourceFeature = "";
                object.fireFightPowerProperty = "";
                object.fireControlDis = "";
                object.Qi = 0;
            }
            if (message.moveFireType != null && message.hasOwnProperty("moveFireType"))
                object.moveFireType = message.moveFireType;
            if (message.moveFireQuality != null && message.hasOwnProperty("moveFireQuality"))
                object.moveFireQuality = options.json && !isFinite(message.moveFireQuality) ? String(message.moveFireQuality) : message.moveFireQuality;
            if (message.accessArea != null && message.hasOwnProperty("accessArea"))
                object.accessArea = options.json && !isFinite(message.accessArea) ? String(message.accessArea) : message.accessArea;
            if (message.fireResistTop != null && message.hasOwnProperty("fireResistTop"))
                object.fireResistTop = message.fireResistTop;
            if (message.fireSourceFeature != null && message.hasOwnProperty("fireSourceFeature"))
                object.fireSourceFeature = message.fireSourceFeature;
            if (message.fireFightPowerProperty != null && message.hasOwnProperty("fireFightPowerProperty"))
                object.fireFightPowerProperty = message.fireFightPowerProperty;
            if (message.fireControlDis != null && message.hasOwnProperty("fireControlDis"))
                object.fireControlDis = message.fireControlDis;
            if (message.Qi != null && message.hasOwnProperty("Qi"))
                object.Qi = options.json && !isFinite(message.Qi) ? String(message.Qi) : message.Qi;
            return object;
        };

        /**
         * Converts this FireBuildingRiskAnalyseRequest to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseRequest;
    })();

    gustav.FireBuildingRiskAnalyseResponse = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseResponse.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseResponse
         * @property {number|null} [moveFireLoadFactorQm] FireBuildingRiskAnalyseResponse moveFireLoadFactorQm
         * @property {number|null} [fireFightDelayFactorL] FireBuildingRiskAnalyseResponse fireFightDelayFactorL
         * @property {number|null} [burningPerformFactorC] FireBuildingRiskAnalyseResponse burningPerformFactorC
         * @property {number|null} [buildingFireResistFactorW] FireBuildingRiskAnalyseResponse buildingFireResistFactorW
         * @property {number|null} [fireAreaPositionFactorB] FireBuildingRiskAnalyseResponse fireAreaPositionFactorB
         * @property {number|null} [riskReduceFactorRi] FireBuildingRiskAnalyseResponse riskReduceFactorRi
         * @property {number|null} [buildingRiskGr] FireBuildingRiskAnalyseResponse buildingRiskGr
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseResponse.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseResponse.
         * @implements IFireBuildingRiskAnalyseResponse
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseResponse=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireBuildingRiskAnalyseResponse moveFireLoadFactorQm.
         * @member {number} moveFireLoadFactorQm
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.moveFireLoadFactorQm = 0;

        /**
         * FireBuildingRiskAnalyseResponse fireFightDelayFactorL.
         * @member {number} fireFightDelayFactorL
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.fireFightDelayFactorL = 0;

        /**
         * FireBuildingRiskAnalyseResponse burningPerformFactorC.
         * @member {number} burningPerformFactorC
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.burningPerformFactorC = 0;

        /**
         * FireBuildingRiskAnalyseResponse buildingFireResistFactorW.
         * @member {number} buildingFireResistFactorW
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.buildingFireResistFactorW = 0;

        /**
         * FireBuildingRiskAnalyseResponse fireAreaPositionFactorB.
         * @member {number} fireAreaPositionFactorB
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.fireAreaPositionFactorB = 0;

        /**
         * FireBuildingRiskAnalyseResponse riskReduceFactorRi.
         * @member {number} riskReduceFactorRi
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.riskReduceFactorRi = 0;

        /**
         * FireBuildingRiskAnalyseResponse buildingRiskGr.
         * @member {number} buildingRiskGr
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         */
        FireBuildingRiskAnalyseResponse.prototype.buildingRiskGr = 0;

        /**
         * Creates a FireBuildingRiskAnalyseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseResponse} FireBuildingRiskAnalyseResponse
         */
        FireBuildingRiskAnalyseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseResponse)
                return object;
            let message = new $root.gustav.FireBuildingRiskAnalyseResponse();
            if (object.moveFireLoadFactorQm != null)
                message.moveFireLoadFactorQm = Number(object.moveFireLoadFactorQm);
            if (object.fireFightDelayFactorL != null)
                message.fireFightDelayFactorL = Number(object.fireFightDelayFactorL);
            if (object.burningPerformFactorC != null)
                message.burningPerformFactorC = Number(object.burningPerformFactorC);
            if (object.buildingFireResistFactorW != null)
                message.buildingFireResistFactorW = Number(object.buildingFireResistFactorW);
            if (object.fireAreaPositionFactorB != null)
                message.fireAreaPositionFactorB = Number(object.fireAreaPositionFactorB);
            if (object.riskReduceFactorRi != null)
                message.riskReduceFactorRi = Number(object.riskReduceFactorRi);
            if (object.buildingRiskGr != null)
                message.buildingRiskGr = Number(object.buildingRiskGr);
            return message;
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @static
         * @param {gustav.FireBuildingRiskAnalyseResponse} message FireBuildingRiskAnalyseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.moveFireLoadFactorQm = 0;
                object.fireFightDelayFactorL = 0;
                object.burningPerformFactorC = 0;
                object.buildingFireResistFactorW = 0;
                object.fireAreaPositionFactorB = 0;
                object.riskReduceFactorRi = 0;
                object.buildingRiskGr = 0;
            }
            if (message.moveFireLoadFactorQm != null && message.hasOwnProperty("moveFireLoadFactorQm"))
                object.moveFireLoadFactorQm = options.json && !isFinite(message.moveFireLoadFactorQm) ? String(message.moveFireLoadFactorQm) : message.moveFireLoadFactorQm;
            if (message.fireFightDelayFactorL != null && message.hasOwnProperty("fireFightDelayFactorL"))
                object.fireFightDelayFactorL = options.json && !isFinite(message.fireFightDelayFactorL) ? String(message.fireFightDelayFactorL) : message.fireFightDelayFactorL;
            if (message.burningPerformFactorC != null && message.hasOwnProperty("burningPerformFactorC"))
                object.burningPerformFactorC = options.json && !isFinite(message.burningPerformFactorC) ? String(message.burningPerformFactorC) : message.burningPerformFactorC;
            if (message.buildingFireResistFactorW != null && message.hasOwnProperty("buildingFireResistFactorW"))
                object.buildingFireResistFactorW = options.json && !isFinite(message.buildingFireResistFactorW) ? String(message.buildingFireResistFactorW) : message.buildingFireResistFactorW;
            if (message.fireAreaPositionFactorB != null && message.hasOwnProperty("fireAreaPositionFactorB"))
                object.fireAreaPositionFactorB = options.json && !isFinite(message.fireAreaPositionFactorB) ? String(message.fireAreaPositionFactorB) : message.fireAreaPositionFactorB;
            if (message.riskReduceFactorRi != null && message.hasOwnProperty("riskReduceFactorRi"))
                object.riskReduceFactorRi = options.json && !isFinite(message.riskReduceFactorRi) ? String(message.riskReduceFactorRi) : message.riskReduceFactorRi;
            if (message.buildingRiskGr != null && message.hasOwnProperty("buildingRiskGr"))
                object.buildingRiskGr = options.json && !isFinite(message.buildingRiskGr) ? String(message.buildingRiskGr) : message.buildingRiskGr;
            return object;
        };

        /**
         * Converts this FireBuildingRiskAnalyseResponse to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseResponse;
    })();

    gustav.Combustible = (function() {

        /**
         * Properties of a Combustible.
         * @memberof gustav
         * @interface ICombustible
         * @property {string|null} [name] Combustible name
         * @property {string|null} [code] Combustible code
         */

        /**
         * Constructs a new Combustible.
         * @memberof gustav
         * @classdesc Represents a Combustible.
         * @implements ICombustible
         * @constructor
         * @param {gustav.ICombustible=} [properties] Properties to set
         */
        function Combustible(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Combustible name.
         * @member {string} name
         * @memberof gustav.Combustible
         * @instance
         */
        Combustible.prototype.name = "";

        /**
         * Combustible code.
         * @member {string} code
         * @memberof gustav.Combustible
         * @instance
         */
        Combustible.prototype.code = "";

        /**
         * Creates a Combustible message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.Combustible
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.Combustible} Combustible
         */
        Combustible.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.Combustible)
                return object;
            let message = new $root.gustav.Combustible();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Combustible message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.Combustible
         * @static
         * @param {gustav.Combustible} message Combustible
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Combustible.toObject = function toObject(message, options) {
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
         * Converts this Combustible to JSON.
         * @function toJSON
         * @memberof gustav.Combustible
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Combustible.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Combustible;
    })();

    gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetCombustibleNamesRequest.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetCombustibleNamesRequest
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetCombustibleNamesRequest.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetCombustibleNamesRequest.
         * @implements IFireBuildingRiskAnalyseGetCombustibleNamesRequest
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetCombustibleNamesRequest=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetCombustibleNamesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a FireBuildingRiskAnalyseGetCombustibleNamesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest} FireBuildingRiskAnalyseGetCombustibleNamesRequest
         */
        FireBuildingRiskAnalyseGetCombustibleNamesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest)
                return object;
            return new $root.gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest();
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetCombustibleNamesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest} message FireBuildingRiskAnalyseGetCombustibleNamesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetCombustibleNamesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetCombustibleNamesRequest to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetCombustibleNamesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetCombustibleNamesRequest;
    })();

    gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetCombustibleNamesResponse.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @property {Array.<gustav.ICombustible>|null} [combustibleNames] FireBuildingRiskAnalyseGetCombustibleNamesResponse combustibleNames
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetCombustibleNamesResponse.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetCombustibleNamesResponse.
         * @implements IFireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetCombustibleNamesResponse=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetCombustibleNamesResponse(properties) {
            this.combustibleNames = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireBuildingRiskAnalyseGetCombustibleNamesResponse combustibleNames.
         * @member {Array.<gustav.ICombustible>} combustibleNames
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @instance
         */
        FireBuildingRiskAnalyseGetCombustibleNamesResponse.prototype.combustibleNames = $util.emptyArray;

        /**
         * Creates a FireBuildingRiskAnalyseGetCombustibleNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse} FireBuildingRiskAnalyseGetCombustibleNamesResponse
         */
        FireBuildingRiskAnalyseGetCombustibleNamesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse)
                return object;
            let message = new $root.gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse();
            if (object.combustibleNames) {
                if (!Array.isArray(object.combustibleNames))
                    throw TypeError(".gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse.combustibleNames: array expected");
                message.combustibleNames = [];
                for (let i = 0; i < object.combustibleNames.length; ++i) {
                    if (typeof object.combustibleNames[i] !== "object")
                        throw TypeError(".gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse.combustibleNames: object expected");
                    message.combustibleNames[i] = $root.gustav.Combustible.fromObject(object.combustibleNames[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetCombustibleNamesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse} message FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetCombustibleNamesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.combustibleNames = [];
            if (message.combustibleNames && message.combustibleNames.length) {
                object.combustibleNames = [];
                for (let j = 0; j < message.combustibleNames.length; ++j)
                    object.combustibleNames[j] = $root.gustav.Combustible.toObject(message.combustibleNames[j], options);
            }
            return object;
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetCombustibleNamesResponse to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetCombustibleNamesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetCombustibleNamesResponse;
    })();

    gustav.FireResist = (function() {

        /**
         * Properties of a FireResist.
         * @memberof gustav
         * @interface IFireResist
         * @property {string|null} [name] FireResist name
         * @property {string|null} [code] FireResist code
         */

        /**
         * Constructs a new FireResist.
         * @memberof gustav
         * @classdesc Represents a FireResist.
         * @implements IFireResist
         * @constructor
         * @param {gustav.IFireResist=} [properties] Properties to set
         */
        function FireResist(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireResist name.
         * @member {string} name
         * @memberof gustav.FireResist
         * @instance
         */
        FireResist.prototype.name = "";

        /**
         * FireResist code.
         * @member {string} code
         * @memberof gustav.FireResist
         * @instance
         */
        FireResist.prototype.code = "";

        /**
         * Creates a FireResist message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireResist
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireResist} FireResist
         */
        FireResist.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireResist)
                return object;
            let message = new $root.gustav.FireResist();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a FireResist message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireResist
         * @static
         * @param {gustav.FireResist} message FireResist
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireResist.toObject = function toObject(message, options) {
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
         * Converts this FireResist to JSON.
         * @function toJSON
         * @memberof gustav.FireResist
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireResist.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireResist;
    })();

    gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetFireResistTopsRequest.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetFireResistTopsRequest
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireResistTopsRequest.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetFireResistTopsRequest.
         * @implements IFireBuildingRiskAnalyseGetFireResistTopsRequest
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetFireResistTopsRequest=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetFireResistTopsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a FireBuildingRiskAnalyseGetFireResistTopsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest} FireBuildingRiskAnalyseGetFireResistTopsRequest
         */
        FireBuildingRiskAnalyseGetFireResistTopsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest)
                return object;
            return new $root.gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest();
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireResistTopsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest} message FireBuildingRiskAnalyseGetFireResistTopsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetFireResistTopsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireResistTopsRequest to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetFireResistTopsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetFireResistTopsRequest;
    })();

    gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetFireResistTopsResponse.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetFireResistTopsResponse
         * @property {Array.<gustav.IFireResist>|null} [fireResistTops] FireBuildingRiskAnalyseGetFireResistTopsResponse fireResistTops
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireResistTopsResponse.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetFireResistTopsResponse.
         * @implements IFireBuildingRiskAnalyseGetFireResistTopsResponse
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetFireResistTopsResponse=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetFireResistTopsResponse(properties) {
            this.fireResistTops = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireBuildingRiskAnalyseGetFireResistTopsResponse fireResistTops.
         * @member {Array.<gustav.IFireResist>} fireResistTops
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @instance
         */
        FireBuildingRiskAnalyseGetFireResistTopsResponse.prototype.fireResistTops = $util.emptyArray;

        /**
         * Creates a FireBuildingRiskAnalyseGetFireResistTopsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse} FireBuildingRiskAnalyseGetFireResistTopsResponse
         */
        FireBuildingRiskAnalyseGetFireResistTopsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse)
                return object;
            let message = new $root.gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse();
            if (object.fireResistTops) {
                if (!Array.isArray(object.fireResistTops))
                    throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse.fireResistTops: array expected");
                message.fireResistTops = [];
                for (let i = 0; i < object.fireResistTops.length; ++i) {
                    if (typeof object.fireResistTops[i] !== "object")
                        throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse.fireResistTops: object expected");
                    message.fireResistTops[i] = $root.gustav.FireResist.fromObject(object.fireResistTops[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireResistTopsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse} message FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetFireResistTopsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fireResistTops = [];
            if (message.fireResistTops && message.fireResistTops.length) {
                object.fireResistTops = [];
                for (let j = 0; j < message.fireResistTops.length; ++j)
                    object.fireResistTops[j] = $root.gustav.FireResist.toObject(message.fireResistTops[j], options);
            }
            return object;
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireResistTopsResponse to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetFireResistTopsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetFireResistTopsResponse;
    })();

    gustav.FireSource = (function() {

        /**
         * Properties of a FireSource.
         * @memberof gustav
         * @interface IFireSource
         * @property {string|null} [name] FireSource name
         * @property {string|null} [code] FireSource code
         */

        /**
         * Constructs a new FireSource.
         * @memberof gustav
         * @classdesc Represents a FireSource.
         * @implements IFireSource
         * @constructor
         * @param {gustav.IFireSource=} [properties] Properties to set
         */
        function FireSource(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireSource name.
         * @member {string} name
         * @memberof gustav.FireSource
         * @instance
         */
        FireSource.prototype.name = "";

        /**
         * FireSource code.
         * @member {string} code
         * @memberof gustav.FireSource
         * @instance
         */
        FireSource.prototype.code = "";

        /**
         * Creates a FireSource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireSource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireSource} FireSource
         */
        FireSource.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireSource)
                return object;
            let message = new $root.gustav.FireSource();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a FireSource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireSource
         * @static
         * @param {gustav.FireSource} message FireSource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireSource.toObject = function toObject(message, options) {
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
         * Converts this FireSource to JSON.
         * @function toJSON
         * @memberof gustav.FireSource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireSource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireSource;
    })();

    gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetFireSourceFeatureRequest.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetFireSourceFeatureRequest
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireSourceFeatureRequest.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetFireSourceFeatureRequest.
         * @implements IFireBuildingRiskAnalyseGetFireSourceFeatureRequest
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureRequest=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetFireSourceFeatureRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a FireBuildingRiskAnalyseGetFireSourceFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest} FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest)
                return object;
            return new $root.gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest();
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireSourceFeatureRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest} message FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireSourceFeatureRequest to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetFireSourceFeatureRequest;
    })();

    gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetFireSourceFeatureResponse.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @property {Array.<gustav.IFireSource>|null} [fireSourceFeatures] FireBuildingRiskAnalyseGetFireSourceFeatureResponse fireSourceFeatures
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireSourceFeatureResponse.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetFireSourceFeatureResponse.
         * @implements IFireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureResponse=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetFireSourceFeatureResponse(properties) {
            this.fireSourceFeatures = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireBuildingRiskAnalyseGetFireSourceFeatureResponse fireSourceFeatures.
         * @member {Array.<gustav.IFireSource>} fireSourceFeatures
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @instance
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureResponse.prototype.fireSourceFeatures = $util.emptyArray;

        /**
         * Creates a FireBuildingRiskAnalyseGetFireSourceFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse} FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse)
                return object;
            let message = new $root.gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse();
            if (object.fireSourceFeatures) {
                if (!Array.isArray(object.fireSourceFeatures))
                    throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse.fireSourceFeatures: array expected");
                message.fireSourceFeatures = [];
                for (let i = 0; i < object.fireSourceFeatures.length; ++i) {
                    if (typeof object.fireSourceFeatures[i] !== "object")
                        throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse.fireSourceFeatures: object expected");
                    message.fireSourceFeatures[i] = $root.gustav.FireSource.fromObject(object.fireSourceFeatures[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireSourceFeatureResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse} message FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fireSourceFeatures = [];
            if (message.fireSourceFeatures && message.fireSourceFeatures.length) {
                object.fireSourceFeatures = [];
                for (let j = 0; j < message.fireSourceFeatures.length; ++j)
                    object.fireSourceFeatures[j] = $root.gustav.FireSource.toObject(message.fireSourceFeatures[j], options);
            }
            return object;
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireSourceFeatureResponse to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetFireSourceFeatureResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetFireSourceFeatureResponse;
    })();

    gustav.FireFightPowerProperty = (function() {

        /**
         * Properties of a FireFightPowerProperty.
         * @memberof gustav
         * @interface IFireFightPowerProperty
         * @property {string|null} [name] FireFightPowerProperty name
         * @property {string|null} [code] FireFightPowerProperty code
         */

        /**
         * Constructs a new FireFightPowerProperty.
         * @memberof gustav
         * @classdesc Represents a FireFightPowerProperty.
         * @implements IFireFightPowerProperty
         * @constructor
         * @param {gustav.IFireFightPowerProperty=} [properties] Properties to set
         */
        function FireFightPowerProperty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireFightPowerProperty name.
         * @member {string} name
         * @memberof gustav.FireFightPowerProperty
         * @instance
         */
        FireFightPowerProperty.prototype.name = "";

        /**
         * FireFightPowerProperty code.
         * @member {string} code
         * @memberof gustav.FireFightPowerProperty
         * @instance
         */
        FireFightPowerProperty.prototype.code = "";

        /**
         * Creates a FireFightPowerProperty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireFightPowerProperty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireFightPowerProperty} FireFightPowerProperty
         */
        FireFightPowerProperty.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireFightPowerProperty)
                return object;
            let message = new $root.gustav.FireFightPowerProperty();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a FireFightPowerProperty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireFightPowerProperty
         * @static
         * @param {gustav.FireFightPowerProperty} message FireFightPowerProperty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireFightPowerProperty.toObject = function toObject(message, options) {
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
         * Converts this FireFightPowerProperty to JSON.
         * @function toJSON
         * @memberof gustav.FireFightPowerProperty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireFightPowerProperty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireFightPowerProperty;
    })();

    gustav.FireFightPowerDis = (function() {

        /**
         * Properties of a FireFightPowerDis.
         * @memberof gustav
         * @interface IFireFightPowerDis
         * @property {string|null} [name] FireFightPowerDis name
         * @property {string|null} [code] FireFightPowerDis code
         */

        /**
         * Constructs a new FireFightPowerDis.
         * @memberof gustav
         * @classdesc Represents a FireFightPowerDis.
         * @implements IFireFightPowerDis
         * @constructor
         * @param {gustav.IFireFightPowerDis=} [properties] Properties to set
         */
        function FireFightPowerDis(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireFightPowerDis name.
         * @member {string} name
         * @memberof gustav.FireFightPowerDis
         * @instance
         */
        FireFightPowerDis.prototype.name = "";

        /**
         * FireFightPowerDis code.
         * @member {string} code
         * @memberof gustav.FireFightPowerDis
         * @instance
         */
        FireFightPowerDis.prototype.code = "";

        /**
         * Creates a FireFightPowerDis message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireFightPowerDis
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireFightPowerDis} FireFightPowerDis
         */
        FireFightPowerDis.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireFightPowerDis)
                return object;
            let message = new $root.gustav.FireFightPowerDis();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a FireFightPowerDis message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireFightPowerDis
         * @static
         * @param {gustav.FireFightPowerDis} message FireFightPowerDis
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireFightPowerDis.toObject = function toObject(message, options) {
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
         * Converts this FireFightPowerDis to JSON.
         * @function toJSON
         * @memberof gustav.FireFightPowerDis
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireFightPowerDis.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireFightPowerDis;
    })();

    gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.
         * @implements IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest} FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest)
                return object;
            return new $root.gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest();
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest} message FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest;
    })();

    gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse = (function() {

        /**
         * Properties of a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.
         * @memberof gustav
         * @interface IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @property {Array.<gustav.IFireFightPowerProperty>|null} [fireFightPowerProperty] FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerProperty
         * @property {Array.<gustav.IFireFightPowerDis>|null} [fireFightPowerDis] FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerDis
         */

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.
         * @memberof gustav
         * @classdesc Represents a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.
         * @implements IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @constructor
         * @param {gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse=} [properties] Properties to set
         */
        function FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse(properties) {
            this.fireFightPowerProperty = [];
            this.fireFightPowerDis = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerProperty.
         * @member {Array.<gustav.IFireFightPowerProperty>} fireFightPowerProperty
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @instance
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.prototype.fireFightPowerProperty = $util.emptyArray;

        /**
         * FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerDis.
         * @member {Array.<gustav.IFireFightPowerDis>} fireFightPowerDis
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @instance
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.prototype.fireFightPowerDis = $util.emptyArray;

        /**
         * Creates a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse} FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse)
                return object;
            let message = new $root.gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse();
            if (object.fireFightPowerProperty) {
                if (!Array.isArray(object.fireFightPowerProperty))
                    throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fireFightPowerProperty: array expected");
                message.fireFightPowerProperty = [];
                for (let i = 0; i < object.fireFightPowerProperty.length; ++i) {
                    if (typeof object.fireFightPowerProperty[i] !== "object")
                        throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fireFightPowerProperty: object expected");
                    message.fireFightPowerProperty[i] = $root.gustav.FireFightPowerProperty.fromObject(object.fireFightPowerProperty[i]);
                }
            }
            if (object.fireFightPowerDis) {
                if (!Array.isArray(object.fireFightPowerDis))
                    throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fireFightPowerDis: array expected");
                message.fireFightPowerDis = [];
                for (let i = 0; i < object.fireFightPowerDis.length; ++i) {
                    if (typeof object.fireFightPowerDis[i] !== "object")
                        throw TypeError(".gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.fireFightPowerDis: object expected");
                    message.fireFightPowerDis[i] = $root.gustav.FireFightPowerDis.fromObject(object.fireFightPowerDis[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @static
         * @param {gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse} message FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.fireFightPowerProperty = [];
                object.fireFightPowerDis = [];
            }
            if (message.fireFightPowerProperty && message.fireFightPowerProperty.length) {
                object.fireFightPowerProperty = [];
                for (let j = 0; j < message.fireFightPowerProperty.length; ++j)
                    object.fireFightPowerProperty[j] = $root.gustav.FireFightPowerProperty.toObject(message.fireFightPowerProperty[j], options);
            }
            if (message.fireFightPowerDis && message.fireFightPowerDis.length) {
                object.fireFightPowerDis = [];
                for (let j = 0; j < message.fireFightPowerDis.length; ++j)
                    object.fireFightPowerDis[j] = $root.gustav.FireFightPowerDis.toObject(message.fireFightPowerDis[j], options);
            }
            return object;
        };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse to JSON.
         * @function toJSON
         * @memberof gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse;
    })();

    gustav.BuildingFireRiskAnalyseRequest = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseRequest
         * @property {string|null} [personFireRiskFeature] BuildingFireRiskAnalyseRequest personFireRiskFeature
         * @property {string|null} [assetsFireRiskFeature] BuildingFireRiskAnalyseRequest assetsFireRiskFeature
         * @property {string|null} [smokeFireRiskFeature] BuildingFireRiskAnalyseRequest smokeFireRiskFeature
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseRequest.
         * @implements IBuildingFireRiskAnalyseRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseRequest=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskAnalyseRequest personFireRiskFeature.
         * @member {string} personFireRiskFeature
         * @memberof gustav.BuildingFireRiskAnalyseRequest
         * @instance
         */
        BuildingFireRiskAnalyseRequest.prototype.personFireRiskFeature = "";

        /**
         * BuildingFireRiskAnalyseRequest assetsFireRiskFeature.
         * @member {string} assetsFireRiskFeature
         * @memberof gustav.BuildingFireRiskAnalyseRequest
         * @instance
         */
        BuildingFireRiskAnalyseRequest.prototype.assetsFireRiskFeature = "";

        /**
         * BuildingFireRiskAnalyseRequest smokeFireRiskFeature.
         * @member {string} smokeFireRiskFeature
         * @memberof gustav.BuildingFireRiskAnalyseRequest
         * @instance
         */
        BuildingFireRiskAnalyseRequest.prototype.smokeFireRiskFeature = "";

        /**
         * Creates a BuildingFireRiskAnalyseRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseRequest} BuildingFireRiskAnalyseRequest
         */
        BuildingFireRiskAnalyseRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseRequest)
                return object;
            let message = new $root.gustav.BuildingFireRiskAnalyseRequest();
            if (object.personFireRiskFeature != null)
                message.personFireRiskFeature = String(object.personFireRiskFeature);
            if (object.assetsFireRiskFeature != null)
                message.assetsFireRiskFeature = String(object.assetsFireRiskFeature);
            if (object.smokeFireRiskFeature != null)
                message.smokeFireRiskFeature = String(object.smokeFireRiskFeature);
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseRequest
         * @static
         * @param {gustav.BuildingFireRiskAnalyseRequest} message BuildingFireRiskAnalyseRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.personFireRiskFeature = "";
                object.assetsFireRiskFeature = "";
                object.smokeFireRiskFeature = "";
            }
            if (message.personFireRiskFeature != null && message.hasOwnProperty("personFireRiskFeature"))
                object.personFireRiskFeature = message.personFireRiskFeature;
            if (message.assetsFireRiskFeature != null && message.hasOwnProperty("assetsFireRiskFeature"))
                object.assetsFireRiskFeature = message.assetsFireRiskFeature;
            if (message.smokeFireRiskFeature != null && message.hasOwnProperty("smokeFireRiskFeature"))
                object.smokeFireRiskFeature = message.smokeFireRiskFeature;
            return object;
        };

        /**
         * Converts this BuildingFireRiskAnalyseRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseRequest;
    })();

    gustav.BuildingFireRiskAnalyseResponse = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseResponse
         * @property {number|null} [personRiskFactorH] BuildingFireRiskAnalyseResponse personRiskFactorH
         * @property {number|null} [assetsRiskFactorD] BuildingFireRiskAnalyseResponse assetsRiskFactorD
         * @property {number|null} [smokeRiskFactorF] BuildingFireRiskAnalyseResponse smokeRiskFactorF
         * @property {number|null} [buildingFireRiskIr] BuildingFireRiskAnalyseResponse buildingFireRiskIr
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseResponse.
         * @implements IBuildingFireRiskAnalyseResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseResponse=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskAnalyseResponse personRiskFactorH.
         * @member {number} personRiskFactorH
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @instance
         */
        BuildingFireRiskAnalyseResponse.prototype.personRiskFactorH = 0;

        /**
         * BuildingFireRiskAnalyseResponse assetsRiskFactorD.
         * @member {number} assetsRiskFactorD
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @instance
         */
        BuildingFireRiskAnalyseResponse.prototype.assetsRiskFactorD = 0;

        /**
         * BuildingFireRiskAnalyseResponse smokeRiskFactorF.
         * @member {number} smokeRiskFactorF
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @instance
         */
        BuildingFireRiskAnalyseResponse.prototype.smokeRiskFactorF = 0;

        /**
         * BuildingFireRiskAnalyseResponse buildingFireRiskIr.
         * @member {number} buildingFireRiskIr
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @instance
         */
        BuildingFireRiskAnalyseResponse.prototype.buildingFireRiskIr = 0;

        /**
         * Creates a BuildingFireRiskAnalyseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseResponse} BuildingFireRiskAnalyseResponse
         */
        BuildingFireRiskAnalyseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseResponse)
                return object;
            let message = new $root.gustav.BuildingFireRiskAnalyseResponse();
            if (object.personRiskFactorH != null)
                message.personRiskFactorH = Number(object.personRiskFactorH);
            if (object.assetsRiskFactorD != null)
                message.assetsRiskFactorD = Number(object.assetsRiskFactorD);
            if (object.smokeRiskFactorF != null)
                message.smokeRiskFactorF = Number(object.smokeRiskFactorF);
            if (object.buildingFireRiskIr != null)
                message.buildingFireRiskIr = Number(object.buildingFireRiskIr);
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @static
         * @param {gustav.BuildingFireRiskAnalyseResponse} message BuildingFireRiskAnalyseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.personRiskFactorH = 0;
                object.assetsRiskFactorD = 0;
                object.smokeRiskFactorF = 0;
                object.buildingFireRiskIr = 0;
            }
            if (message.personRiskFactorH != null && message.hasOwnProperty("personRiskFactorH"))
                object.personRiskFactorH = options.json && !isFinite(message.personRiskFactorH) ? String(message.personRiskFactorH) : message.personRiskFactorH;
            if (message.assetsRiskFactorD != null && message.hasOwnProperty("assetsRiskFactorD"))
                object.assetsRiskFactorD = options.json && !isFinite(message.assetsRiskFactorD) ? String(message.assetsRiskFactorD) : message.assetsRiskFactorD;
            if (message.smokeRiskFactorF != null && message.hasOwnProperty("smokeRiskFactorF"))
                object.smokeRiskFactorF = options.json && !isFinite(message.smokeRiskFactorF) ? String(message.smokeRiskFactorF) : message.smokeRiskFactorF;
            if (message.buildingFireRiskIr != null && message.hasOwnProperty("buildingFireRiskIr"))
                object.buildingFireRiskIr = options.json && !isFinite(message.buildingFireRiskIr) ? String(message.buildingFireRiskIr) : message.buildingFireRiskIr;
            return object;
        };

        /**
         * Converts this BuildingFireRiskAnalyseResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseResponse;
    })();

    gustav.RiskFeature = (function() {

        /**
         * Properties of a RiskFeature.
         * @memberof gustav
         * @interface IRiskFeature
         * @property {string|null} [name] RiskFeature name
         * @property {string|null} [code] RiskFeature code
         */

        /**
         * Constructs a new RiskFeature.
         * @memberof gustav
         * @classdesc Represents a RiskFeature.
         * @implements IRiskFeature
         * @constructor
         * @param {gustav.IRiskFeature=} [properties] Properties to set
         */
        function RiskFeature(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RiskFeature name.
         * @member {string} name
         * @memberof gustav.RiskFeature
         * @instance
         */
        RiskFeature.prototype.name = "";

        /**
         * RiskFeature code.
         * @member {string} code
         * @memberof gustav.RiskFeature
         * @instance
         */
        RiskFeature.prototype.code = "";

        /**
         * Creates a RiskFeature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.RiskFeature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.RiskFeature} RiskFeature
         */
        RiskFeature.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.RiskFeature)
                return object;
            let message = new $root.gustav.RiskFeature();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a RiskFeature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.RiskFeature
         * @static
         * @param {gustav.RiskFeature} message RiskFeature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RiskFeature.toObject = function toObject(message, options) {
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
         * Converts this RiskFeature to JSON.
         * @function toJSON
         * @memberof gustav.RiskFeature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RiskFeature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RiskFeature;
    })();

    gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.
         * @implements IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseGetPersonRiskFeatureRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest} BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest)
                return object;
            return new $root.gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest();
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         * @static
         * @param {gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest} message BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BuildingFireRiskAnalyseGetPersonRiskFeatureRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseGetPersonRiskFeatureRequest;
    })();

    gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @property {Array.<gustav.IRiskFeature>|null} [personRiskFeature] BuildingFireRiskAnalyseGetPersonRiskFeatureResponse personRiskFeature
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.
         * @implements IBuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureResponse=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseGetPersonRiskFeatureResponse(properties) {
            this.personRiskFeature = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskAnalyseGetPersonRiskFeatureResponse personRiskFeature.
         * @member {Array.<gustav.IRiskFeature>} personRiskFeature
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @instance
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.prototype.personRiskFeature = $util.emptyArray;

        /**
         * Creates a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse} BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse)
                return object;
            let message = new $root.gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse();
            if (object.personRiskFeature) {
                if (!Array.isArray(object.personRiskFeature))
                    throw TypeError(".gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.personRiskFeature: array expected");
                message.personRiskFeature = [];
                for (let i = 0; i < object.personRiskFeature.length; ++i) {
                    if (typeof object.personRiskFeature[i] !== "object")
                        throw TypeError(".gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.personRiskFeature: object expected");
                    message.personRiskFeature[i] = $root.gustav.RiskFeature.fromObject(object.personRiskFeature[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @static
         * @param {gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse} message BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.personRiskFeature = [];
            if (message.personRiskFeature && message.personRiskFeature.length) {
                object.personRiskFeature = [];
                for (let j = 0; j < message.personRiskFeature.length; ++j)
                    object.personRiskFeature[j] = $root.gustav.RiskFeature.toObject(message.personRiskFeature[j], options);
            }
            return object;
        };

        /**
         * Converts this BuildingFireRiskAnalyseGetPersonRiskFeatureResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseGetPersonRiskFeatureResponse;
    })();

    gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.
         * @implements IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest} BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest)
                return object;
            return new $root.gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest();
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         * @static
         * @param {gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest} message BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest;
    })();

    gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @property {Array.<gustav.IRiskFeature>|null} [assetsRiskFeature] BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse assetsRiskFeature
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.
         * @implements IBuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureResponse=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse(properties) {
            this.assetsRiskFeature = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse assetsRiskFeature.
         * @member {Array.<gustav.IRiskFeature>} assetsRiskFeature
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @instance
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.prototype.assetsRiskFeature = $util.emptyArray;

        /**
         * Creates a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse} BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse)
                return object;
            let message = new $root.gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse();
            if (object.assetsRiskFeature) {
                if (!Array.isArray(object.assetsRiskFeature))
                    throw TypeError(".gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.assetsRiskFeature: array expected");
                message.assetsRiskFeature = [];
                for (let i = 0; i < object.assetsRiskFeature.length; ++i) {
                    if (typeof object.assetsRiskFeature[i] !== "object")
                        throw TypeError(".gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.assetsRiskFeature: object expected");
                    message.assetsRiskFeature[i] = $root.gustav.RiskFeature.fromObject(object.assetsRiskFeature[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @static
         * @param {gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse} message BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.assetsRiskFeature = [];
            if (message.assetsRiskFeature && message.assetsRiskFeature.length) {
                object.assetsRiskFeature = [];
                for (let j = 0; j < message.assetsRiskFeature.length; ++j)
                    object.assetsRiskFeature[j] = $root.gustav.RiskFeature.toObject(message.assetsRiskFeature[j], options);
            }
            return object;
        };

        /**
         * Converts this BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse;
    })();

    gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.
         * @implements IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest} BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest)
                return object;
            return new $root.gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest();
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         * @static
         * @param {gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest} message BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest;
    })();

    gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse = (function() {

        /**
         * Properties of a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @property {Array.<gustav.IRiskFeature>|null} [smokeRiskFeature] BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse smokeRiskFeature
         */

        /**
         * Constructs a new BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.
         * @implements IBuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureResponse=} [properties] Properties to set
         */
        function BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse(properties) {
            this.smokeRiskFeature = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse smokeRiskFeature.
         * @member {Array.<gustav.IRiskFeature>} smokeRiskFeature
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @instance
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.prototype.smokeRiskFeature = $util.emptyArray;

        /**
         * Creates a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse} BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse)
                return object;
            let message = new $root.gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse();
            if (object.smokeRiskFeature) {
                if (!Array.isArray(object.smokeRiskFeature))
                    throw TypeError(".gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.smokeRiskFeature: array expected");
                message.smokeRiskFeature = [];
                for (let i = 0; i < object.smokeRiskFeature.length; ++i) {
                    if (typeof object.smokeRiskFeature[i] !== "object")
                        throw TypeError(".gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.smokeRiskFeature: object expected");
                    message.smokeRiskFeature[i] = $root.gustav.RiskFeature.fromObject(object.smokeRiskFeature[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @static
         * @param {gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse} message BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.smokeRiskFeature = [];
            if (message.smokeRiskFeature && message.smokeRiskFeature.length) {
                object.smokeRiskFeature = [];
                for (let j = 0; j < message.smokeRiskFeature.length; ++j)
                    object.smokeRiskFeature[j] = $root.gustav.RiskFeature.toObject(message.smokeRiskFeature[j], options);
            }
            return object;
        };

        /**
         * Converts this BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse;
    })();

    gustav.BuildingFireRiskTotalAnalyseRequest = (function() {

        /**
         * Properties of a BuildingFireRiskTotalAnalyseRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskTotalAnalyseRequest
         * @property {string|null} [buildingRisk_GR] BuildingFireRiskTotalAnalyseRequest buildingRisk_GR
         * @property {string|null} [buildingFireRisk_IR] BuildingFireRiskTotalAnalyseRequest buildingFireRisk_IR
         */

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskTotalAnalyseRequest.
         * @implements IBuildingFireRiskTotalAnalyseRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskTotalAnalyseRequest=} [properties] Properties to set
         */
        function BuildingFireRiskTotalAnalyseRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskTotalAnalyseRequest buildingRisk_GR.
         * @member {string} buildingRisk_GR
         * @memberof gustav.BuildingFireRiskTotalAnalyseRequest
         * @instance
         */
        BuildingFireRiskTotalAnalyseRequest.prototype.buildingRisk_GR = "";

        /**
         * BuildingFireRiskTotalAnalyseRequest buildingFireRisk_IR.
         * @member {string} buildingFireRisk_IR
         * @memberof gustav.BuildingFireRiskTotalAnalyseRequest
         * @instance
         */
        BuildingFireRiskTotalAnalyseRequest.prototype.buildingFireRisk_IR = "";

        /**
         * Creates a BuildingFireRiskTotalAnalyseRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskTotalAnalyseRequest} BuildingFireRiskTotalAnalyseRequest
         */
        BuildingFireRiskTotalAnalyseRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskTotalAnalyseRequest)
                return object;
            let message = new $root.gustav.BuildingFireRiskTotalAnalyseRequest();
            if (object.buildingRisk_GR != null)
                message.buildingRisk_GR = String(object.buildingRisk_GR);
            if (object.buildingFireRisk_IR != null)
                message.buildingFireRisk_IR = String(object.buildingFireRisk_IR);
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseRequest
         * @static
         * @param {gustav.BuildingFireRiskTotalAnalyseRequest} message BuildingFireRiskTotalAnalyseRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskTotalAnalyseRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.buildingRisk_GR = "";
                object.buildingFireRisk_IR = "";
            }
            if (message.buildingRisk_GR != null && message.hasOwnProperty("buildingRisk_GR"))
                object.buildingRisk_GR = message.buildingRisk_GR;
            if (message.buildingFireRisk_IR != null && message.hasOwnProperty("buildingFireRisk_IR"))
                object.buildingFireRisk_IR = message.buildingFireRisk_IR;
            return object;
        };

        /**
         * Converts this BuildingFireRiskTotalAnalyseRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskTotalAnalyseRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskTotalAnalyseRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskTotalAnalyseRequest;
    })();

    gustav.BuildingFireRiskTotalAnalyseResponse = (function() {

        /**
         * Properties of a BuildingFireRiskTotalAnalyseResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskTotalAnalyseResponse
         * @property {string|null} [conclusion] BuildingFireRiskTotalAnalyseResponse conclusion
         */

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskTotalAnalyseResponse.
         * @implements IBuildingFireRiskTotalAnalyseResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskTotalAnalyseResponse=} [properties] Properties to set
         */
        function BuildingFireRiskTotalAnalyseResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskTotalAnalyseResponse conclusion.
         * @member {string} conclusion
         * @memberof gustav.BuildingFireRiskTotalAnalyseResponse
         * @instance
         */
        BuildingFireRiskTotalAnalyseResponse.prototype.conclusion = "";

        /**
         * Creates a BuildingFireRiskTotalAnalyseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskTotalAnalyseResponse} BuildingFireRiskTotalAnalyseResponse
         */
        BuildingFireRiskTotalAnalyseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskTotalAnalyseResponse)
                return object;
            let message = new $root.gustav.BuildingFireRiskTotalAnalyseResponse();
            if (object.conclusion != null)
                message.conclusion = String(object.conclusion);
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseResponse
         * @static
         * @param {gustav.BuildingFireRiskTotalAnalyseResponse} message BuildingFireRiskTotalAnalyseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskTotalAnalyseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.conclusion = "";
            if (message.conclusion != null && message.hasOwnProperty("conclusion"))
                object.conclusion = message.conclusion;
            return object;
        };

        /**
         * Converts this BuildingFireRiskTotalAnalyseResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskTotalAnalyseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskTotalAnalyseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskTotalAnalyseResponse;
    })();

    gustav.BuildingFireRiskTotalAnalyseSavePointRequest = (function() {

        /**
         * Properties of a BuildingFireRiskTotalAnalyseSavePointRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskTotalAnalyseSavePointRequest
         * @property {number|null} [x] BuildingFireRiskTotalAnalyseSavePointRequest x
         * @property {number|null} [y] BuildingFireRiskTotalAnalyseSavePointRequest y
         */

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseSavePointRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskTotalAnalyseSavePointRequest.
         * @implements IBuildingFireRiskTotalAnalyseSavePointRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskTotalAnalyseSavePointRequest=} [properties] Properties to set
         */
        function BuildingFireRiskTotalAnalyseSavePointRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskTotalAnalyseSavePointRequest x.
         * @member {number} x
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointRequest
         * @instance
         */
        BuildingFireRiskTotalAnalyseSavePointRequest.prototype.x = 0;

        /**
         * BuildingFireRiskTotalAnalyseSavePointRequest y.
         * @member {number} y
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointRequest
         * @instance
         */
        BuildingFireRiskTotalAnalyseSavePointRequest.prototype.y = 0;

        /**
         * Creates a BuildingFireRiskTotalAnalyseSavePointRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskTotalAnalyseSavePointRequest} BuildingFireRiskTotalAnalyseSavePointRequest
         */
        BuildingFireRiskTotalAnalyseSavePointRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskTotalAnalyseSavePointRequest)
                return object;
            let message = new $root.gustav.BuildingFireRiskTotalAnalyseSavePointRequest();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseSavePointRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointRequest
         * @static
         * @param {gustav.BuildingFireRiskTotalAnalyseSavePointRequest} message BuildingFireRiskTotalAnalyseSavePointRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskTotalAnalyseSavePointRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this BuildingFireRiskTotalAnalyseSavePointRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskTotalAnalyseSavePointRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskTotalAnalyseSavePointRequest;
    })();

    gustav.BuildingFireRiskTotalAnalyseSavePointResponse = (function() {

        /**
         * Properties of a BuildingFireRiskTotalAnalyseSavePointResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskTotalAnalyseSavePointResponse
         */

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseSavePointResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskTotalAnalyseSavePointResponse.
         * @implements IBuildingFireRiskTotalAnalyseSavePointResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskTotalAnalyseSavePointResponse=} [properties] Properties to set
         */
        function BuildingFireRiskTotalAnalyseSavePointResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a BuildingFireRiskTotalAnalyseSavePointResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskTotalAnalyseSavePointResponse} BuildingFireRiskTotalAnalyseSavePointResponse
         */
        BuildingFireRiskTotalAnalyseSavePointResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskTotalAnalyseSavePointResponse)
                return object;
            return new $root.gustav.BuildingFireRiskTotalAnalyseSavePointResponse();
        };

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseSavePointResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointResponse
         * @static
         * @param {gustav.BuildingFireRiskTotalAnalyseSavePointResponse} message BuildingFireRiskTotalAnalyseSavePointResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskTotalAnalyseSavePointResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BuildingFireRiskTotalAnalyseSavePointResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskTotalAnalyseSavePointResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskTotalAnalyseSavePointResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskTotalAnalyseSavePointResponse;
    })();

    gustav.BuildingFireRiskTotalAnalyseGetPointRequest = (function() {

        /**
         * Properties of a BuildingFireRiskTotalAnalyseGetPointRequest.
         * @memberof gustav
         * @interface IBuildingFireRiskTotalAnalyseGetPointRequest
         */

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseGetPointRequest.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskTotalAnalyseGetPointRequest.
         * @implements IBuildingFireRiskTotalAnalyseGetPointRequest
         * @constructor
         * @param {gustav.IBuildingFireRiskTotalAnalyseGetPointRequest=} [properties] Properties to set
         */
        function BuildingFireRiskTotalAnalyseGetPointRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a BuildingFireRiskTotalAnalyseGetPointRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskTotalAnalyseGetPointRequest} BuildingFireRiskTotalAnalyseGetPointRequest
         */
        BuildingFireRiskTotalAnalyseGetPointRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskTotalAnalyseGetPointRequest)
                return object;
            return new $root.gustav.BuildingFireRiskTotalAnalyseGetPointRequest();
        };

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseGetPointRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointRequest
         * @static
         * @param {gustav.BuildingFireRiskTotalAnalyseGetPointRequest} message BuildingFireRiskTotalAnalyseGetPointRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskTotalAnalyseGetPointRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BuildingFireRiskTotalAnalyseGetPointRequest to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskTotalAnalyseGetPointRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskTotalAnalyseGetPointRequest;
    })();

    gustav.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof gustav
         * @interface IPoint
         * @property {number|null} [x] Point x
         * @property {number|null} [y] Point y
         */

        /**
         * Constructs a new Point.
         * @memberof gustav
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {gustav.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number} x
         * @memberof gustav.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof gustav.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.Point)
                return object;
            let message = new $root.gustav.Point();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.Point
         * @static
         * @param {gustav.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof gustav.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    gustav.BuildingFireRiskTotalAnalyseGetPointResponse = (function() {

        /**
         * Properties of a BuildingFireRiskTotalAnalyseGetPointResponse.
         * @memberof gustav
         * @interface IBuildingFireRiskTotalAnalyseGetPointResponse
         * @property {Array.<gustav.IPoint>|null} [points] BuildingFireRiskTotalAnalyseGetPointResponse points
         */

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseGetPointResponse.
         * @memberof gustav
         * @classdesc Represents a BuildingFireRiskTotalAnalyseGetPointResponse.
         * @implements IBuildingFireRiskTotalAnalyseGetPointResponse
         * @constructor
         * @param {gustav.IBuildingFireRiskTotalAnalyseGetPointResponse=} [properties] Properties to set
         */
        function BuildingFireRiskTotalAnalyseGetPointResponse(properties) {
            this.points = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildingFireRiskTotalAnalyseGetPointResponse points.
         * @member {Array.<gustav.IPoint>} points
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointResponse
         * @instance
         */
        BuildingFireRiskTotalAnalyseGetPointResponse.prototype.points = $util.emptyArray;

        /**
         * Creates a BuildingFireRiskTotalAnalyseGetPointResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.BuildingFireRiskTotalAnalyseGetPointResponse} BuildingFireRiskTotalAnalyseGetPointResponse
         */
        BuildingFireRiskTotalAnalyseGetPointResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.BuildingFireRiskTotalAnalyseGetPointResponse)
                return object;
            let message = new $root.gustav.BuildingFireRiskTotalAnalyseGetPointResponse();
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".gustav.BuildingFireRiskTotalAnalyseGetPointResponse.points: array expected");
                message.points = [];
                for (let i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".gustav.BuildingFireRiskTotalAnalyseGetPointResponse.points: object expected");
                    message.points[i] = $root.gustav.Point.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseGetPointResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointResponse
         * @static
         * @param {gustav.BuildingFireRiskTotalAnalyseGetPointResponse} message BuildingFireRiskTotalAnalyseGetPointResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildingFireRiskTotalAnalyseGetPointResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (message.points && message.points.length) {
                object.points = [];
                for (let j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.gustav.Point.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this BuildingFireRiskTotalAnalyseGetPointResponse to JSON.
         * @function toJSON
         * @memberof gustav.BuildingFireRiskTotalAnalyseGetPointResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildingFireRiskTotalAnalyseGetPointResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildingFireRiskTotalAnalyseGetPointResponse;
    })();

    gustav.QiGetRequest = (function() {

        /**
         * Properties of a QiGetRequest.
         * @memberof gustav
         * @interface IQiGetRequest
         */

        /**
         * Constructs a new QiGetRequest.
         * @memberof gustav
         * @classdesc Represents a QiGetRequest.
         * @implements IQiGetRequest
         * @constructor
         * @param {gustav.IQiGetRequest=} [properties] Properties to set
         */
        function QiGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a QiGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.QiGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.QiGetRequest} QiGetRequest
         */
        QiGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.QiGetRequest)
                return object;
            return new $root.gustav.QiGetRequest();
        };

        /**
         * Creates a plain object from a QiGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.QiGetRequest
         * @static
         * @param {gustav.QiGetRequest} message QiGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QiGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this QiGetRequest to JSON.
         * @function toJSON
         * @memberof gustav.QiGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QiGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QiGetRequest;
    })();

    gustav.Qi = (function() {

        /**
         * Properties of a Qi.
         * @memberof gustav
         * @interface IQi
         * @property {string|null} [name] Qi name
         * @property {number|null} [code] Qi code
         */

        /**
         * Constructs a new Qi.
         * @memberof gustav
         * @classdesc Represents a Qi.
         * @implements IQi
         * @constructor
         * @param {gustav.IQi=} [properties] Properties to set
         */
        function Qi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Qi name.
         * @member {string} name
         * @memberof gustav.Qi
         * @instance
         */
        Qi.prototype.name = "";

        /**
         * Qi code.
         * @member {number} code
         * @memberof gustav.Qi
         * @instance
         */
        Qi.prototype.code = 0;

        /**
         * Creates a Qi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.Qi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.Qi} Qi
         */
        Qi.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.Qi)
                return object;
            let message = new $root.gustav.Qi();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = Number(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Qi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.Qi
         * @static
         * @param {gustav.Qi} message Qi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Qi.toObject = function toObject(message, options) {
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
         * Converts this Qi to JSON.
         * @function toJSON
         * @memberof gustav.Qi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Qi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Qi;
    })();

    gustav.QiGetResponse = (function() {

        /**
         * Properties of a QiGetResponse.
         * @memberof gustav
         * @interface IQiGetResponse
         * @property {Array.<gustav.IQi>|null} [qis] QiGetResponse qis
         */

        /**
         * Constructs a new QiGetResponse.
         * @memberof gustav
         * @classdesc Represents a QiGetResponse.
         * @implements IQiGetResponse
         * @constructor
         * @param {gustav.IQiGetResponse=} [properties] Properties to set
         */
        function QiGetResponse(properties) {
            this.qis = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QiGetResponse qis.
         * @member {Array.<gustav.IQi>} qis
         * @memberof gustav.QiGetResponse
         * @instance
         */
        QiGetResponse.prototype.qis = $util.emptyArray;

        /**
         * Creates a QiGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gustav.QiGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gustav.QiGetResponse} QiGetResponse
         */
        QiGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.gustav.QiGetResponse)
                return object;
            let message = new $root.gustav.QiGetResponse();
            if (object.qis) {
                if (!Array.isArray(object.qis))
                    throw TypeError(".gustav.QiGetResponse.qis: array expected");
                message.qis = [];
                for (let i = 0; i < object.qis.length; ++i) {
                    if (typeof object.qis[i] !== "object")
                        throw TypeError(".gustav.QiGetResponse.qis: object expected");
                    message.qis[i] = $root.gustav.Qi.fromObject(object.qis[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QiGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gustav.QiGetResponse
         * @static
         * @param {gustav.QiGetResponse} message QiGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QiGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.qis = [];
            if (message.qis && message.qis.length) {
                object.qis = [];
                for (let j = 0; j < message.qis.length; ++j)
                    object.qis[j] = $root.gustav.Qi.toObject(message.qis[j], options);
            }
            return object;
        };

        /**
         * Converts this QiGetResponse to JSON.
         * @function toJSON
         * @memberof gustav.QiGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QiGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QiGetResponse;
    })();

    gustav.GustavService = (function() {

        /**
         * Constructs a new GustavService service.
         * @memberof gustav
         * @classdesc Represents a GustavService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GustavService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GustavService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GustavService;

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyse}.
         * @memberof gustav.GustavService
         * @typedef FireBuildingRiskAnalyseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.FireBuildingRiskAnalyseResponse} [response] FireBuildingRiskAnalyseResponse
         */

        /**
         * Calls FireBuildingRiskAnalyse.
         * @function fireBuildingRiskAnalyse
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseRequest} request FireBuildingRiskAnalyseRequest message or plain object
         * @param {gustav.GustavService.FireBuildingRiskAnalyseCallback} callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.fireBuildingRiskAnalyse = function fireBuildingRiskAnalyse(request, callback) {
            return this.rpcCall(fireBuildingRiskAnalyse, $root.gustav.FireBuildingRiskAnalyseRequest, $root.gustav.FireBuildingRiskAnalyseResponse, request, callback);
        }, "name", { value: "FireBuildingRiskAnalyse" });

        /**
         * Calls FireBuildingRiskAnalyse.
         * @function fireBuildingRiskAnalyse
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseRequest} request FireBuildingRiskAnalyseRequest message or plain object
         * @returns {Promise<gustav.FireBuildingRiskAnalyseResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetCombustibleNames}.
         * @memberof gustav.GustavService
         * @typedef FireBuildingRiskAnalyseGetCombustibleNamesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse} [response] FireBuildingRiskAnalyseGetCombustibleNamesResponse
         */

        /**
         * Calls FireBuildingRiskAnalyseGetCombustibleNames.
         * @function fireBuildingRiskAnalyseGetCombustibleNames
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetCombustibleNamesRequest} request FireBuildingRiskAnalyseGetCombustibleNamesRequest message or plain object
         * @param {gustav.GustavService.FireBuildingRiskAnalyseGetCombustibleNamesCallback} callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.fireBuildingRiskAnalyseGetCombustibleNames = function fireBuildingRiskAnalyseGetCombustibleNames(request, callback) {
            return this.rpcCall(fireBuildingRiskAnalyseGetCombustibleNames, $root.gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest, $root.gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse, request, callback);
        }, "name", { value: "FireBuildingRiskAnalyseGetCombustibleNames" });

        /**
         * Calls FireBuildingRiskAnalyseGetCombustibleNames.
         * @function fireBuildingRiskAnalyseGetCombustibleNames
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetCombustibleNamesRequest} request FireBuildingRiskAnalyseGetCombustibleNamesRequest message or plain object
         * @returns {Promise<gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetFireResistTops}.
         * @memberof gustav.GustavService
         * @typedef FireBuildingRiskAnalyseGetFireResistTopsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse} [response] FireBuildingRiskAnalyseGetFireResistTopsResponse
         */

        /**
         * Calls FireBuildingRiskAnalyseGetFireResistTops.
         * @function fireBuildingRiskAnalyseGetFireResistTops
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetFireResistTopsRequest} request FireBuildingRiskAnalyseGetFireResistTopsRequest message or plain object
         * @param {gustav.GustavService.FireBuildingRiskAnalyseGetFireResistTopsCallback} callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.fireBuildingRiskAnalyseGetFireResistTops = function fireBuildingRiskAnalyseGetFireResistTops(request, callback) {
            return this.rpcCall(fireBuildingRiskAnalyseGetFireResistTops, $root.gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest, $root.gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse, request, callback);
        }, "name", { value: "FireBuildingRiskAnalyseGetFireResistTops" });

        /**
         * Calls FireBuildingRiskAnalyseGetFireResistTops.
         * @function fireBuildingRiskAnalyseGetFireResistTops
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetFireResistTopsRequest} request FireBuildingRiskAnalyseGetFireResistTopsRequest message or plain object
         * @returns {Promise<gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetFireSourceFeature}.
         * @memberof gustav.GustavService
         * @typedef FireBuildingRiskAnalyseGetFireSourceFeatureCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse} [response] FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         */

        /**
         * Calls FireBuildingRiskAnalyseGetFireSourceFeature.
         * @function fireBuildingRiskAnalyseGetFireSourceFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureRequest} request FireBuildingRiskAnalyseGetFireSourceFeatureRequest message or plain object
         * @param {gustav.GustavService.FireBuildingRiskAnalyseGetFireSourceFeatureCallback} callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.fireBuildingRiskAnalyseGetFireSourceFeature = function fireBuildingRiskAnalyseGetFireSourceFeature(request, callback) {
            return this.rpcCall(fireBuildingRiskAnalyseGetFireSourceFeature, $root.gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest, $root.gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse, request, callback);
        }, "name", { value: "FireBuildingRiskAnalyseGetFireSourceFeature" });

        /**
         * Calls FireBuildingRiskAnalyseGetFireSourceFeature.
         * @function fireBuildingRiskAnalyseGetFireSourceFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureRequest} request FireBuildingRiskAnalyseGetFireSourceFeatureRequest message or plain object
         * @returns {Promise<gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetFireFightPowerPropertyDis}.
         * @memberof gustav.GustavService
         * @typedef FireBuildingRiskAnalyseGetFireFightPowerPropertyDisCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse} [response] FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         */

        /**
         * Calls FireBuildingRiskAnalyseGetFireFightPowerPropertyDis.
         * @function fireBuildingRiskAnalyseGetFireFightPowerPropertyDis
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest} request FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message or plain object
         * @param {gustav.GustavService.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisCallback} callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.fireBuildingRiskAnalyseGetFireFightPowerPropertyDis = function fireBuildingRiskAnalyseGetFireFightPowerPropertyDis(request, callback) {
            return this.rpcCall(fireBuildingRiskAnalyseGetFireFightPowerPropertyDis, $root.gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest, $root.gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse, request, callback);
        }, "name", { value: "FireBuildingRiskAnalyseGetFireFightPowerPropertyDis" });

        /**
         * Calls FireBuildingRiskAnalyseGetFireFightPowerPropertyDis.
         * @function fireBuildingRiskAnalyseGetFireFightPowerPropertyDis
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest} request FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message or plain object
         * @returns {Promise<gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#qiGet}.
         * @memberof gustav.GustavService
         * @typedef QiGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.QiGetResponse} [response] QiGetResponse
         */

        /**
         * Calls QiGet.
         * @function qiGet
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IQiGetRequest} request QiGetRequest message or plain object
         * @param {gustav.GustavService.QiGetCallback} callback Node-style callback called with the error, if any, and QiGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.qiGet = function qiGet(request, callback) {
            return this.rpcCall(qiGet, $root.gustav.QiGetRequest, $root.gustav.QiGetResponse, request, callback);
        }, "name", { value: "QiGet" });

        /**
         * Calls QiGet.
         * @function qiGet
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IQiGetRequest} request QiGetRequest message or plain object
         * @returns {Promise<gustav.QiGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyse}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskAnalyseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskAnalyseResponse} [response] BuildingFireRiskAnalyseResponse
         */

        /**
         * Calls BuildingFireRiskAnalyse.
         * @function buildingFireRiskAnalyse
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseRequest} request BuildingFireRiskAnalyseRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskAnalyseCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskAnalyse = function buildingFireRiskAnalyse(request, callback) {
            return this.rpcCall(buildingFireRiskAnalyse, $root.gustav.BuildingFireRiskAnalyseRequest, $root.gustav.BuildingFireRiskAnalyseResponse, request, callback);
        }, "name", { value: "BuildingFireRiskAnalyse" });

        /**
         * Calls BuildingFireRiskAnalyse.
         * @function buildingFireRiskAnalyse
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseRequest} request BuildingFireRiskAnalyseRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskAnalyseResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyseGetPersonRiskFeature}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskAnalyseGetPersonRiskFeatureCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse} [response] BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         */

        /**
         * Calls BuildingFireRiskAnalyseGetPersonRiskFeature.
         * @function buildingFireRiskAnalyseGetPersonRiskFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest} request BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskAnalyseGetPersonRiskFeatureCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskAnalyseGetPersonRiskFeature = function buildingFireRiskAnalyseGetPersonRiskFeature(request, callback) {
            return this.rpcCall(buildingFireRiskAnalyseGetPersonRiskFeature, $root.gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest, $root.gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse, request, callback);
        }, "name", { value: "BuildingFireRiskAnalyseGetPersonRiskFeature" });

        /**
         * Calls BuildingFireRiskAnalyseGetPersonRiskFeature.
         * @function buildingFireRiskAnalyseGetPersonRiskFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest} request BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyseGetAssetsRiskFeature}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskAnalyseGetAssetsRiskFeatureCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse} [response] BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         */

        /**
         * Calls BuildingFireRiskAnalyseGetAssetsRiskFeature.
         * @function buildingFireRiskAnalyseGetAssetsRiskFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest} request BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskAnalyseGetAssetsRiskFeatureCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskAnalyseGetAssetsRiskFeature = function buildingFireRiskAnalyseGetAssetsRiskFeature(request, callback) {
            return this.rpcCall(buildingFireRiskAnalyseGetAssetsRiskFeature, $root.gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest, $root.gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse, request, callback);
        }, "name", { value: "BuildingFireRiskAnalyseGetAssetsRiskFeature" });

        /**
         * Calls BuildingFireRiskAnalyseGetAssetsRiskFeature.
         * @function buildingFireRiskAnalyseGetAssetsRiskFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest} request BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyseGetSmokeRiskFeature}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskAnalyseGetSmokeRiskFeatureCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse} [response] BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         */

        /**
         * Calls BuildingFireRiskAnalyseGetSmokeRiskFeature.
         * @function buildingFireRiskAnalyseGetSmokeRiskFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest} request BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskAnalyseGetSmokeRiskFeatureCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskAnalyseGetSmokeRiskFeature = function buildingFireRiskAnalyseGetSmokeRiskFeature(request, callback) {
            return this.rpcCall(buildingFireRiskAnalyseGetSmokeRiskFeature, $root.gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest, $root.gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse, request, callback);
        }, "name", { value: "BuildingFireRiskAnalyseGetSmokeRiskFeature" });

        /**
         * Calls BuildingFireRiskAnalyseGetSmokeRiskFeature.
         * @function buildingFireRiskAnalyseGetSmokeRiskFeature
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest} request BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskTotalAnalyse}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskTotalAnalyseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskTotalAnalyseResponse} [response] BuildingFireRiskTotalAnalyseResponse
         */

        /**
         * Calls BuildingFireRiskTotalAnalyse.
         * @function buildingFireRiskTotalAnalyse
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskTotalAnalyseRequest} request BuildingFireRiskTotalAnalyseRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskTotalAnalyseCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskTotalAnalyseResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskTotalAnalyse = function buildingFireRiskTotalAnalyse(request, callback) {
            return this.rpcCall(buildingFireRiskTotalAnalyse, $root.gustav.BuildingFireRiskTotalAnalyseRequest, $root.gustav.BuildingFireRiskTotalAnalyseResponse, request, callback);
        }, "name", { value: "BuildingFireRiskTotalAnalyse" });

        /**
         * Calls BuildingFireRiskTotalAnalyse.
         * @function buildingFireRiskTotalAnalyse
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskTotalAnalyseRequest} request BuildingFireRiskTotalAnalyseRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskTotalAnalyseResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskTotalAnalyseSavePoint}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskTotalAnalyseSavePointCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskTotalAnalyseSavePointResponse} [response] BuildingFireRiskTotalAnalyseSavePointResponse
         */

        /**
         * Calls BuildingFireRiskTotalAnalyseSavePoint.
         * @function buildingFireRiskTotalAnalyseSavePoint
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskTotalAnalyseSavePointRequest} request BuildingFireRiskTotalAnalyseSavePointRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskTotalAnalyseSavePointCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskTotalAnalyseSavePointResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskTotalAnalyseSavePoint = function buildingFireRiskTotalAnalyseSavePoint(request, callback) {
            return this.rpcCall(buildingFireRiskTotalAnalyseSavePoint, $root.gustav.BuildingFireRiskTotalAnalyseSavePointRequest, $root.gustav.BuildingFireRiskTotalAnalyseSavePointResponse, request, callback);
        }, "name", { value: "BuildingFireRiskTotalAnalyseSavePoint" });

        /**
         * Calls BuildingFireRiskTotalAnalyseSavePoint.
         * @function buildingFireRiskTotalAnalyseSavePoint
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskTotalAnalyseSavePointRequest} request BuildingFireRiskTotalAnalyseSavePointRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskTotalAnalyseSavePointResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskTotalAnalyseGetPoint}.
         * @memberof gustav.GustavService
         * @typedef BuildingFireRiskTotalAnalyseGetPointCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gustav.BuildingFireRiskTotalAnalyseGetPointResponse} [response] BuildingFireRiskTotalAnalyseGetPointResponse
         */

        /**
         * Calls BuildingFireRiskTotalAnalyseGetPoint.
         * @function buildingFireRiskTotalAnalyseGetPoint
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskTotalAnalyseGetPointRequest} request BuildingFireRiskTotalAnalyseGetPointRequest message or plain object
         * @param {gustav.GustavService.BuildingFireRiskTotalAnalyseGetPointCallback} callback Node-style callback called with the error, if any, and BuildingFireRiskTotalAnalyseGetPointResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GustavService.prototype.buildingFireRiskTotalAnalyseGetPoint = function buildingFireRiskTotalAnalyseGetPoint(request, callback) {
            return this.rpcCall(buildingFireRiskTotalAnalyseGetPoint, $root.gustav.BuildingFireRiskTotalAnalyseGetPointRequest, $root.gustav.BuildingFireRiskTotalAnalyseGetPointResponse, request, callback);
        }, "name", { value: "BuildingFireRiskTotalAnalyseGetPoint" });

        /**
         * Calls BuildingFireRiskTotalAnalyseGetPoint.
         * @function buildingFireRiskTotalAnalyseGetPoint
         * @memberof gustav.GustavService
         * @instance
         * @param {gustav.IBuildingFireRiskTotalAnalyseGetPointRequest} request BuildingFireRiskTotalAnalyseGetPointRequest message or plain object
         * @returns {Promise<gustav.BuildingFireRiskTotalAnalyseGetPointResponse>} Promise
         * @variation 2
         */

        return GustavService;
    })();

    return gustav;
})();