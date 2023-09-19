import * as $protobuf from "protobufjs";
/** Namespace gustav. */
export namespace gustav {

    /** Properties of a FireBuildingRiskAnalyseRequest. */
    interface IFireBuildingRiskAnalyseRequest {

        /** FireBuildingRiskAnalyseRequest moveFireType */
        moveFireType?: (string|null);

        /** FireBuildingRiskAnalyseRequest moveFireQuality */
        moveFireQuality?: (number|null);

        /** FireBuildingRiskAnalyseRequest accessArea */
        accessArea?: (number|null);

        /** FireBuildingRiskAnalyseRequest fireResistTop */
        fireResistTop?: (string|null);

        /** FireBuildingRiskAnalyseRequest fireSourceFeature */
        fireSourceFeature?: (string|null);

        /** FireBuildingRiskAnalyseRequest fireFightPowerProperty */
        fireFightPowerProperty?: (string|null);

        /** FireBuildingRiskAnalyseRequest fireControlDis */
        fireControlDis?: (string|null);

        /** FireBuildingRiskAnalyseRequest Qi */
        Qi?: (number|null);
    }

    /** Represents a FireBuildingRiskAnalyseRequest. */
    class FireBuildingRiskAnalyseRequest implements IFireBuildingRiskAnalyseRequest {

        /**
         * Constructs a new FireBuildingRiskAnalyseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseRequest);

        /** FireBuildingRiskAnalyseRequest moveFireType. */
        public moveFireType: string;

        /** FireBuildingRiskAnalyseRequest moveFireQuality. */
        public moveFireQuality: number;

        /** FireBuildingRiskAnalyseRequest accessArea. */
        public accessArea: number;

        /** FireBuildingRiskAnalyseRequest fireResistTop. */
        public fireResistTop: string;

        /** FireBuildingRiskAnalyseRequest fireSourceFeature. */
        public fireSourceFeature: string;

        /** FireBuildingRiskAnalyseRequest fireFightPowerProperty. */
        public fireFightPowerProperty: string;

        /** FireBuildingRiskAnalyseRequest fireControlDis. */
        public fireControlDis: string;

        /** FireBuildingRiskAnalyseRequest Qi. */
        public Qi: number;

        /**
         * Creates a FireBuildingRiskAnalyseRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseRequest;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseRequest message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseResponse. */
    interface IFireBuildingRiskAnalyseResponse {

        /** FireBuildingRiskAnalyseResponse moveFireLoadFactorQm */
        moveFireLoadFactorQm?: (number|null);

        /** FireBuildingRiskAnalyseResponse fireFightDelayFactorL */
        fireFightDelayFactorL?: (number|null);

        /** FireBuildingRiskAnalyseResponse burningPerformFactorC */
        burningPerformFactorC?: (number|null);

        /** FireBuildingRiskAnalyseResponse buildingFireResistFactorW */
        buildingFireResistFactorW?: (number|null);

        /** FireBuildingRiskAnalyseResponse fireAreaPositionFactorB */
        fireAreaPositionFactorB?: (number|null);

        /** FireBuildingRiskAnalyseResponse riskReduceFactorRi */
        riskReduceFactorRi?: (number|null);

        /** FireBuildingRiskAnalyseResponse buildingRiskGr */
        buildingRiskGr?: (number|null);
    }

    /** Represents a FireBuildingRiskAnalyseResponse. */
    class FireBuildingRiskAnalyseResponse implements IFireBuildingRiskAnalyseResponse {

        /**
         * Constructs a new FireBuildingRiskAnalyseResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseResponse);

        /** FireBuildingRiskAnalyseResponse moveFireLoadFactorQm. */
        public moveFireLoadFactorQm: number;

        /** FireBuildingRiskAnalyseResponse fireFightDelayFactorL. */
        public fireFightDelayFactorL: number;

        /** FireBuildingRiskAnalyseResponse burningPerformFactorC. */
        public burningPerformFactorC: number;

        /** FireBuildingRiskAnalyseResponse buildingFireResistFactorW. */
        public buildingFireResistFactorW: number;

        /** FireBuildingRiskAnalyseResponse fireAreaPositionFactorB. */
        public fireAreaPositionFactorB: number;

        /** FireBuildingRiskAnalyseResponse riskReduceFactorRi. */
        public riskReduceFactorRi: number;

        /** FireBuildingRiskAnalyseResponse buildingRiskGr. */
        public buildingRiskGr: number;

        /**
         * Creates a FireBuildingRiskAnalyseResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseResponse;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseResponse message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Combustible. */
    interface ICombustible {

        /** Combustible name */
        name?: (string|null);

        /** Combustible code */
        code?: (string|null);
    }

    /** Represents a Combustible. */
    class Combustible implements ICombustible {

        /**
         * Constructs a new Combustible.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.ICombustible);

        /** Combustible name. */
        public name: string;

        /** Combustible code. */
        public code: string;

        /**
         * Creates a Combustible message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Combustible
         */
        public static fromObject(object: { [k: string]: any }): gustav.Combustible;

        /**
         * Creates a plain object from a Combustible message. Also converts values to other types if specified.
         * @param message Combustible
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.Combustible, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Combustible to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetCombustibleNamesRequest. */
    interface IFireBuildingRiskAnalyseGetCombustibleNamesRequest {
    }

    /** Represents a FireBuildingRiskAnalyseGetCombustibleNamesRequest. */
    class FireBuildingRiskAnalyseGetCombustibleNamesRequest implements IFireBuildingRiskAnalyseGetCombustibleNamesRequest {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetCombustibleNamesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetCombustibleNamesRequest);

        /**
         * Creates a FireBuildingRiskAnalyseGetCombustibleNamesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetCombustibleNamesRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetCombustibleNamesRequest message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetCombustibleNamesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetCombustibleNamesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetCombustibleNamesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetCombustibleNamesResponse. */
    interface IFireBuildingRiskAnalyseGetCombustibleNamesResponse {

        /** FireBuildingRiskAnalyseGetCombustibleNamesResponse combustibleNames */
        combustibleNames?: (gustav.ICombustible[]|null);
    }

    /** Represents a FireBuildingRiskAnalyseGetCombustibleNamesResponse. */
    class FireBuildingRiskAnalyseGetCombustibleNamesResponse implements IFireBuildingRiskAnalyseGetCombustibleNamesResponse {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetCombustibleNamesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetCombustibleNamesResponse);

        /** FireBuildingRiskAnalyseGetCombustibleNamesResponse combustibleNames. */
        public combustibleNames: gustav.ICombustible[];

        /**
         * Creates a FireBuildingRiskAnalyseGetCombustibleNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetCombustibleNamesResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetCombustibleNamesResponse message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetCombustibleNamesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetCombustibleNamesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireResist. */
    interface IFireResist {

        /** FireResist name */
        name?: (string|null);

        /** FireResist code */
        code?: (string|null);
    }

    /** Represents a FireResist. */
    class FireResist implements IFireResist {

        /**
         * Constructs a new FireResist.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireResist);

        /** FireResist name. */
        public name: string;

        /** FireResist code. */
        public code: string;

        /**
         * Creates a FireResist message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireResist
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireResist;

        /**
         * Creates a plain object from a FireResist message. Also converts values to other types if specified.
         * @param message FireResist
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireResist, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireResist to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetFireResistTopsRequest. */
    interface IFireBuildingRiskAnalyseGetFireResistTopsRequest {
    }

    /** Represents a FireBuildingRiskAnalyseGetFireResistTopsRequest. */
    class FireBuildingRiskAnalyseGetFireResistTopsRequest implements IFireBuildingRiskAnalyseGetFireResistTopsRequest {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireResistTopsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetFireResistTopsRequest);

        /**
         * Creates a FireBuildingRiskAnalyseGetFireResistTopsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetFireResistTopsRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireResistTopsRequest message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetFireResistTopsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetFireResistTopsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireResistTopsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetFireResistTopsResponse. */
    interface IFireBuildingRiskAnalyseGetFireResistTopsResponse {

        /** FireBuildingRiskAnalyseGetFireResistTopsResponse fireResistTops */
        fireResistTops?: (gustav.IFireResist[]|null);
    }

    /** Represents a FireBuildingRiskAnalyseGetFireResistTopsResponse. */
    class FireBuildingRiskAnalyseGetFireResistTopsResponse implements IFireBuildingRiskAnalyseGetFireResistTopsResponse {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireResistTopsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetFireResistTopsResponse);

        /** FireBuildingRiskAnalyseGetFireResistTopsResponse fireResistTops. */
        public fireResistTops: gustav.IFireResist[];

        /**
         * Creates a FireBuildingRiskAnalyseGetFireResistTopsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetFireResistTopsResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireResistTopsResponse message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetFireResistTopsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireResistTopsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireSource. */
    interface IFireSource {

        /** FireSource name */
        name?: (string|null);

        /** FireSource code */
        code?: (string|null);
    }

    /** Represents a FireSource. */
    class FireSource implements IFireSource {

        /**
         * Constructs a new FireSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireSource);

        /** FireSource name. */
        public name: string;

        /** FireSource code. */
        public code: string;

        /**
         * Creates a FireSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireSource
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireSource;

        /**
         * Creates a plain object from a FireSource message. Also converts values to other types if specified.
         * @param message FireSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetFireSourceFeatureRequest. */
    interface IFireBuildingRiskAnalyseGetFireSourceFeatureRequest {
    }

    /** Represents a FireBuildingRiskAnalyseGetFireSourceFeatureRequest. */
    class FireBuildingRiskAnalyseGetFireSourceFeatureRequest implements IFireBuildingRiskAnalyseGetFireSourceFeatureRequest {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireSourceFeatureRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureRequest);

        /**
         * Creates a FireBuildingRiskAnalyseGetFireSourceFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireSourceFeatureRequest message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetFireSourceFeatureRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetFireSourceFeatureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireSourceFeatureRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetFireSourceFeatureResponse. */
    interface IFireBuildingRiskAnalyseGetFireSourceFeatureResponse {

        /** FireBuildingRiskAnalyseGetFireSourceFeatureResponse fireSourceFeatures */
        fireSourceFeatures?: (gustav.IFireSource[]|null);
    }

    /** Represents a FireBuildingRiskAnalyseGetFireSourceFeatureResponse. */
    class FireBuildingRiskAnalyseGetFireSourceFeatureResponse implements IFireBuildingRiskAnalyseGetFireSourceFeatureResponse {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireSourceFeatureResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureResponse);

        /** FireBuildingRiskAnalyseGetFireSourceFeatureResponse fireSourceFeatures. */
        public fireSourceFeatures: gustav.IFireSource[];

        /**
         * Creates a FireBuildingRiskAnalyseGetFireSourceFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireSourceFeatureResponse message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireSourceFeatureResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireFightPowerProperty. */
    interface IFireFightPowerProperty {

        /** FireFightPowerProperty name */
        name?: (string|null);

        /** FireFightPowerProperty code */
        code?: (string|null);
    }

    /** Represents a FireFightPowerProperty. */
    class FireFightPowerProperty implements IFireFightPowerProperty {

        /**
         * Constructs a new FireFightPowerProperty.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireFightPowerProperty);

        /** FireFightPowerProperty name. */
        public name: string;

        /** FireFightPowerProperty code. */
        public code: string;

        /**
         * Creates a FireFightPowerProperty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireFightPowerProperty
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireFightPowerProperty;

        /**
         * Creates a plain object from a FireFightPowerProperty message. Also converts values to other types if specified.
         * @param message FireFightPowerProperty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireFightPowerProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireFightPowerProperty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireFightPowerDis. */
    interface IFireFightPowerDis {

        /** FireFightPowerDis name */
        name?: (string|null);

        /** FireFightPowerDis code */
        code?: (string|null);
    }

    /** Represents a FireFightPowerDis. */
    class FireFightPowerDis implements IFireFightPowerDis {

        /**
         * Constructs a new FireFightPowerDis.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireFightPowerDis);

        /** FireFightPowerDis name. */
        public name: string;

        /** FireFightPowerDis code. */
        public code: string;

        /**
         * Creates a FireFightPowerDis message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireFightPowerDis
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireFightPowerDis;

        /**
         * Creates a plain object from a FireFightPowerDis message. Also converts values to other types if specified.
         * @param message FireFightPowerDis
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireFightPowerDis, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireFightPowerDis to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest. */
    interface IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest {
    }

    /** Represents a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest. */
    class FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest implements IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest);

        /**
         * Creates a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse. */
    interface IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse {

        /** FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerProperty */
        fireFightPowerProperty?: (gustav.IFireFightPowerProperty[]|null);

        /** FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerDis */
        fireFightPowerDis?: (gustav.IFireFightPowerDis[]|null);
    }

    /** Represents a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse. */
    class FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse implements IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse {

        /**
         * Constructs a new FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse);

        /** FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerProperty. */
        public fireFightPowerProperty: gustav.IFireFightPowerProperty[];

        /** FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse fireFightPowerDis. */
        public fireFightPowerDis: gustav.IFireFightPowerDis[];

        /**
         * Creates a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse;

        /**
         * Creates a plain object from a FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse message. Also converts values to other types if specified.
         * @param message FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseRequest. */
    interface IBuildingFireRiskAnalyseRequest {

        /** BuildingFireRiskAnalyseRequest personFireRiskFeature */
        personFireRiskFeature?: (string|null);

        /** BuildingFireRiskAnalyseRequest assetsFireRiskFeature */
        assetsFireRiskFeature?: (string|null);

        /** BuildingFireRiskAnalyseRequest smokeFireRiskFeature */
        smokeFireRiskFeature?: (string|null);
    }

    /** Represents a BuildingFireRiskAnalyseRequest. */
    class BuildingFireRiskAnalyseRequest implements IBuildingFireRiskAnalyseRequest {

        /**
         * Constructs a new BuildingFireRiskAnalyseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseRequest);

        /** BuildingFireRiskAnalyseRequest personFireRiskFeature. */
        public personFireRiskFeature: string;

        /** BuildingFireRiskAnalyseRequest assetsFireRiskFeature. */
        public assetsFireRiskFeature: string;

        /** BuildingFireRiskAnalyseRequest smokeFireRiskFeature. */
        public smokeFireRiskFeature: string;

        /**
         * Creates a BuildingFireRiskAnalyseRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseRequest;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseResponse. */
    interface IBuildingFireRiskAnalyseResponse {

        /** BuildingFireRiskAnalyseResponse personRiskFactorH */
        personRiskFactorH?: (number|null);

        /** BuildingFireRiskAnalyseResponse assetsRiskFactorD */
        assetsRiskFactorD?: (number|null);

        /** BuildingFireRiskAnalyseResponse smokeRiskFactorF */
        smokeRiskFactorF?: (number|null);

        /** BuildingFireRiskAnalyseResponse buildingFireRiskIr */
        buildingFireRiskIr?: (number|null);
    }

    /** Represents a BuildingFireRiskAnalyseResponse. */
    class BuildingFireRiskAnalyseResponse implements IBuildingFireRiskAnalyseResponse {

        /**
         * Constructs a new BuildingFireRiskAnalyseResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseResponse);

        /** BuildingFireRiskAnalyseResponse personRiskFactorH. */
        public personRiskFactorH: number;

        /** BuildingFireRiskAnalyseResponse assetsRiskFactorD. */
        public assetsRiskFactorD: number;

        /** BuildingFireRiskAnalyseResponse smokeRiskFactorF. */
        public smokeRiskFactorF: number;

        /** BuildingFireRiskAnalyseResponse buildingFireRiskIr. */
        public buildingFireRiskIr: number;

        /**
         * Creates a BuildingFireRiskAnalyseResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseResponse;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RiskFeature. */
    interface IRiskFeature {

        /** RiskFeature name */
        name?: (string|null);

        /** RiskFeature code */
        code?: (string|null);
    }

    /** Represents a RiskFeature. */
    class RiskFeature implements IRiskFeature {

        /**
         * Constructs a new RiskFeature.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IRiskFeature);

        /** RiskFeature name. */
        public name: string;

        /** RiskFeature code. */
        public code: string;

        /**
         * Creates a RiskFeature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RiskFeature
         */
        public static fromObject(object: { [k: string]: any }): gustav.RiskFeature;

        /**
         * Creates a plain object from a RiskFeature message. Also converts values to other types if specified.
         * @param message RiskFeature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.RiskFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RiskFeature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest. */
    interface IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest {
    }

    /** Represents a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest. */
    class BuildingFireRiskAnalyseGetPersonRiskFeatureRequest implements IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest {

        /**
         * Constructs a new BuildingFireRiskAnalyseGetPersonRiskFeatureRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest);

        /**
         * Creates a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseGetPersonRiskFeatureRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseGetPersonRiskFeatureRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse. */
    interface IBuildingFireRiskAnalyseGetPersonRiskFeatureResponse {

        /** BuildingFireRiskAnalyseGetPersonRiskFeatureResponse personRiskFeature */
        personRiskFeature?: (gustav.IRiskFeature[]|null);
    }

    /** Represents a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse. */
    class BuildingFireRiskAnalyseGetPersonRiskFeatureResponse implements IBuildingFireRiskAnalyseGetPersonRiskFeatureResponse {

        /**
         * Constructs a new BuildingFireRiskAnalyseGetPersonRiskFeatureResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureResponse);

        /** BuildingFireRiskAnalyseGetPersonRiskFeatureResponse personRiskFeature. */
        public personRiskFeature: gustav.IRiskFeature[];

        /**
         * Creates a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetPersonRiskFeatureResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseGetPersonRiskFeatureResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest. */
    interface IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest {
    }

    /** Represents a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest. */
    class BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest implements IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest {

        /**
         * Constructs a new BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest);

        /**
         * Creates a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse. */
    interface IBuildingFireRiskAnalyseGetAssetsRiskFeatureResponse {

        /** BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse assetsRiskFeature */
        assetsRiskFeature?: (gustav.IRiskFeature[]|null);
    }

    /** Represents a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse. */
    class BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse implements IBuildingFireRiskAnalyseGetAssetsRiskFeatureResponse {

        /**
         * Constructs a new BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureResponse);

        /** BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse assetsRiskFeature. */
        public assetsRiskFeature: gustav.IRiskFeature[];

        /**
         * Creates a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest. */
    interface IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest {
    }

    /** Represents a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest. */
    class BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest implements IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest {

        /**
         * Constructs a new BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest);

        /**
         * Creates a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse. */
    interface IBuildingFireRiskAnalyseGetSmokeRiskFeatureResponse {

        /** BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse smokeRiskFeature */
        smokeRiskFeature?: (gustav.IRiskFeature[]|null);
    }

    /** Represents a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse. */
    class BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse implements IBuildingFireRiskAnalyseGetSmokeRiskFeatureResponse {

        /**
         * Constructs a new BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureResponse);

        /** BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse smokeRiskFeature. */
        public smokeRiskFeature: gustav.IRiskFeature[];

        /**
         * Creates a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse;

        /**
         * Creates a plain object from a BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskTotalAnalyseRequest. */
    interface IBuildingFireRiskTotalAnalyseRequest {

        /** BuildingFireRiskTotalAnalyseRequest buildingRisk_GR */
        buildingRisk_GR?: (string|null);

        /** BuildingFireRiskTotalAnalyseRequest buildingFireRisk_IR */
        buildingFireRisk_IR?: (string|null);
    }

    /** Represents a BuildingFireRiskTotalAnalyseRequest. */
    class BuildingFireRiskTotalAnalyseRequest implements IBuildingFireRiskTotalAnalyseRequest {

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskTotalAnalyseRequest);

        /** BuildingFireRiskTotalAnalyseRequest buildingRisk_GR. */
        public buildingRisk_GR: string;

        /** BuildingFireRiskTotalAnalyseRequest buildingFireRisk_IR. */
        public buildingFireRisk_IR: string;

        /**
         * Creates a BuildingFireRiskTotalAnalyseRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskTotalAnalyseRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskTotalAnalyseRequest;

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskTotalAnalyseRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskTotalAnalyseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskTotalAnalyseRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskTotalAnalyseResponse. */
    interface IBuildingFireRiskTotalAnalyseResponse {

        /** BuildingFireRiskTotalAnalyseResponse conclusion */
        conclusion?: (string|null);
    }

    /** Represents a BuildingFireRiskTotalAnalyseResponse. */
    class BuildingFireRiskTotalAnalyseResponse implements IBuildingFireRiskTotalAnalyseResponse {

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskTotalAnalyseResponse);

        /** BuildingFireRiskTotalAnalyseResponse conclusion. */
        public conclusion: string;

        /**
         * Creates a BuildingFireRiskTotalAnalyseResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskTotalAnalyseResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskTotalAnalyseResponse;

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskTotalAnalyseResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskTotalAnalyseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskTotalAnalyseResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskTotalAnalyseSavePointRequest. */
    interface IBuildingFireRiskTotalAnalyseSavePointRequest {

        /** BuildingFireRiskTotalAnalyseSavePointRequest x */
        x?: (number|null);

        /** BuildingFireRiskTotalAnalyseSavePointRequest y */
        y?: (number|null);
    }

    /** Represents a BuildingFireRiskTotalAnalyseSavePointRequest. */
    class BuildingFireRiskTotalAnalyseSavePointRequest implements IBuildingFireRiskTotalAnalyseSavePointRequest {

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseSavePointRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskTotalAnalyseSavePointRequest);

        /** BuildingFireRiskTotalAnalyseSavePointRequest x. */
        public x: number;

        /** BuildingFireRiskTotalAnalyseSavePointRequest y. */
        public y: number;

        /**
         * Creates a BuildingFireRiskTotalAnalyseSavePointRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskTotalAnalyseSavePointRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskTotalAnalyseSavePointRequest;

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseSavePointRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskTotalAnalyseSavePointRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskTotalAnalyseSavePointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskTotalAnalyseSavePointRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskTotalAnalyseSavePointResponse. */
    interface IBuildingFireRiskTotalAnalyseSavePointResponse {
    }

    /** Represents a BuildingFireRiskTotalAnalyseSavePointResponse. */
    class BuildingFireRiskTotalAnalyseSavePointResponse implements IBuildingFireRiskTotalAnalyseSavePointResponse {

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseSavePointResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskTotalAnalyseSavePointResponse);

        /**
         * Creates a BuildingFireRiskTotalAnalyseSavePointResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskTotalAnalyseSavePointResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskTotalAnalyseSavePointResponse;

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseSavePointResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskTotalAnalyseSavePointResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskTotalAnalyseSavePointResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskTotalAnalyseSavePointResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskTotalAnalyseGetPointRequest. */
    interface IBuildingFireRiskTotalAnalyseGetPointRequest {
    }

    /** Represents a BuildingFireRiskTotalAnalyseGetPointRequest. */
    class BuildingFireRiskTotalAnalyseGetPointRequest implements IBuildingFireRiskTotalAnalyseGetPointRequest {

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseGetPointRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskTotalAnalyseGetPointRequest);

        /**
         * Creates a BuildingFireRiskTotalAnalyseGetPointRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskTotalAnalyseGetPointRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskTotalAnalyseGetPointRequest;

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseGetPointRequest message. Also converts values to other types if specified.
         * @param message BuildingFireRiskTotalAnalyseGetPointRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskTotalAnalyseGetPointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskTotalAnalyseGetPointRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x?: (number|null);

        /** Point y */
        y?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): gustav.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildingFireRiskTotalAnalyseGetPointResponse. */
    interface IBuildingFireRiskTotalAnalyseGetPointResponse {

        /** BuildingFireRiskTotalAnalyseGetPointResponse points */
        points?: (gustav.IPoint[]|null);
    }

    /** Represents a BuildingFireRiskTotalAnalyseGetPointResponse. */
    class BuildingFireRiskTotalAnalyseGetPointResponse implements IBuildingFireRiskTotalAnalyseGetPointResponse {

        /**
         * Constructs a new BuildingFireRiskTotalAnalyseGetPointResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IBuildingFireRiskTotalAnalyseGetPointResponse);

        /** BuildingFireRiskTotalAnalyseGetPointResponse points. */
        public points: gustav.IPoint[];

        /**
         * Creates a BuildingFireRiskTotalAnalyseGetPointResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildingFireRiskTotalAnalyseGetPointResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.BuildingFireRiskTotalAnalyseGetPointResponse;

        /**
         * Creates a plain object from a BuildingFireRiskTotalAnalyseGetPointResponse message. Also converts values to other types if specified.
         * @param message BuildingFireRiskTotalAnalyseGetPointResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.BuildingFireRiskTotalAnalyseGetPointResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingFireRiskTotalAnalyseGetPointResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QiGetRequest. */
    interface IQiGetRequest {
    }

    /** Represents a QiGetRequest. */
    class QiGetRequest implements IQiGetRequest {

        /**
         * Constructs a new QiGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IQiGetRequest);

        /**
         * Creates a QiGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QiGetRequest
         */
        public static fromObject(object: { [k: string]: any }): gustav.QiGetRequest;

        /**
         * Creates a plain object from a QiGetRequest message. Also converts values to other types if specified.
         * @param message QiGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.QiGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QiGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Qi. */
    interface IQi {

        /** Qi name */
        name?: (string|null);

        /** Qi code */
        code?: (number|null);
    }

    /** Represents a Qi. */
    class Qi implements IQi {

        /**
         * Constructs a new Qi.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IQi);

        /** Qi name. */
        public name: string;

        /** Qi code. */
        public code: number;

        /**
         * Creates a Qi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Qi
         */
        public static fromObject(object: { [k: string]: any }): gustav.Qi;

        /**
         * Creates a plain object from a Qi message. Also converts values to other types if specified.
         * @param message Qi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.Qi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Qi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QiGetResponse. */
    interface IQiGetResponse {

        /** QiGetResponse qis */
        qis?: (gustav.IQi[]|null);
    }

    /** Represents a QiGetResponse. */
    class QiGetResponse implements IQiGetResponse {

        /**
         * Constructs a new QiGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gustav.IQiGetResponse);

        /** QiGetResponse qis. */
        public qis: gustav.IQi[];

        /**
         * Creates a QiGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QiGetResponse
         */
        public static fromObject(object: { [k: string]: any }): gustav.QiGetResponse;

        /**
         * Creates a plain object from a QiGetResponse message. Also converts values to other types if specified.
         * @param message QiGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gustav.QiGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QiGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a GustavService */
    class GustavService extends $protobuf.rpc.Service {

        /**
         * Constructs a new GustavService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls FireBuildingRiskAnalyse.
         * @param request FireBuildingRiskAnalyseRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseResponse
         */
        public fireBuildingRiskAnalyse(request: gustav.IFireBuildingRiskAnalyseRequest, callback: gustav.GustavService.FireBuildingRiskAnalyseCallback): void;

        /**
         * Calls FireBuildingRiskAnalyse.
         * @param request FireBuildingRiskAnalyseRequest message or plain object
         * @returns Promise
         */
        public fireBuildingRiskAnalyse(request: gustav.IFireBuildingRiskAnalyseRequest): Promise<gustav.FireBuildingRiskAnalyseResponse>;

        /**
         * Calls FireBuildingRiskAnalyseGetCombustibleNames.
         * @param request FireBuildingRiskAnalyseGetCombustibleNamesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetCombustibleNamesResponse
         */
        public fireBuildingRiskAnalyseGetCombustibleNames(request: gustav.IFireBuildingRiskAnalyseGetCombustibleNamesRequest, callback: gustav.GustavService.FireBuildingRiskAnalyseGetCombustibleNamesCallback): void;

        /**
         * Calls FireBuildingRiskAnalyseGetCombustibleNames.
         * @param request FireBuildingRiskAnalyseGetCombustibleNamesRequest message or plain object
         * @returns Promise
         */
        public fireBuildingRiskAnalyseGetCombustibleNames(request: gustav.IFireBuildingRiskAnalyseGetCombustibleNamesRequest): Promise<gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse>;

        /**
         * Calls FireBuildingRiskAnalyseGetFireResistTops.
         * @param request FireBuildingRiskAnalyseGetFireResistTopsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetFireResistTopsResponse
         */
        public fireBuildingRiskAnalyseGetFireResistTops(request: gustav.IFireBuildingRiskAnalyseGetFireResistTopsRequest, callback: gustav.GustavService.FireBuildingRiskAnalyseGetFireResistTopsCallback): void;

        /**
         * Calls FireBuildingRiskAnalyseGetFireResistTops.
         * @param request FireBuildingRiskAnalyseGetFireResistTopsRequest message or plain object
         * @returns Promise
         */
        public fireBuildingRiskAnalyseGetFireResistTops(request: gustav.IFireBuildingRiskAnalyseGetFireResistTopsRequest): Promise<gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse>;

        /**
         * Calls FireBuildingRiskAnalyseGetFireSourceFeature.
         * @param request FireBuildingRiskAnalyseGetFireSourceFeatureRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         */
        public fireBuildingRiskAnalyseGetFireSourceFeature(request: gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureRequest, callback: gustav.GustavService.FireBuildingRiskAnalyseGetFireSourceFeatureCallback): void;

        /**
         * Calls FireBuildingRiskAnalyseGetFireSourceFeature.
         * @param request FireBuildingRiskAnalyseGetFireSourceFeatureRequest message or plain object
         * @returns Promise
         */
        public fireBuildingRiskAnalyseGetFireSourceFeature(request: gustav.IFireBuildingRiskAnalyseGetFireSourceFeatureRequest): Promise<gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse>;

        /**
         * Calls FireBuildingRiskAnalyseGetFireFightPowerPropertyDis.
         * @param request FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         */
        public fireBuildingRiskAnalyseGetFireFightPowerPropertyDis(request: gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest, callback: gustav.GustavService.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisCallback): void;

        /**
         * Calls FireBuildingRiskAnalyseGetFireFightPowerPropertyDis.
         * @param request FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest message or plain object
         * @returns Promise
         */
        public fireBuildingRiskAnalyseGetFireFightPowerPropertyDis(request: gustav.IFireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest): Promise<gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse>;

        /**
         * Calls QiGet.
         * @param request QiGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QiGetResponse
         */
        public qiGet(request: gustav.IQiGetRequest, callback: gustav.GustavService.QiGetCallback): void;

        /**
         * Calls QiGet.
         * @param request QiGetRequest message or plain object
         * @returns Promise
         */
        public qiGet(request: gustav.IQiGetRequest): Promise<gustav.QiGetResponse>;

        /**
         * Calls BuildingFireRiskAnalyse.
         * @param request BuildingFireRiskAnalyseRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseResponse
         */
        public buildingFireRiskAnalyse(request: gustav.IBuildingFireRiskAnalyseRequest, callback: gustav.GustavService.BuildingFireRiskAnalyseCallback): void;

        /**
         * Calls BuildingFireRiskAnalyse.
         * @param request BuildingFireRiskAnalyseRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskAnalyse(request: gustav.IBuildingFireRiskAnalyseRequest): Promise<gustav.BuildingFireRiskAnalyseResponse>;

        /**
         * Calls BuildingFireRiskAnalyseGetPersonRiskFeature.
         * @param request BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         */
        public buildingFireRiskAnalyseGetPersonRiskFeature(request: gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest, callback: gustav.GustavService.BuildingFireRiskAnalyseGetPersonRiskFeatureCallback): void;

        /**
         * Calls BuildingFireRiskAnalyseGetPersonRiskFeature.
         * @param request BuildingFireRiskAnalyseGetPersonRiskFeatureRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskAnalyseGetPersonRiskFeature(request: gustav.IBuildingFireRiskAnalyseGetPersonRiskFeatureRequest): Promise<gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse>;

        /**
         * Calls BuildingFireRiskAnalyseGetAssetsRiskFeature.
         * @param request BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         */
        public buildingFireRiskAnalyseGetAssetsRiskFeature(request: gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest, callback: gustav.GustavService.BuildingFireRiskAnalyseGetAssetsRiskFeatureCallback): void;

        /**
         * Calls BuildingFireRiskAnalyseGetAssetsRiskFeature.
         * @param request BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskAnalyseGetAssetsRiskFeature(request: gustav.IBuildingFireRiskAnalyseGetAssetsRiskFeatureRequest): Promise<gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse>;

        /**
         * Calls BuildingFireRiskAnalyseGetSmokeRiskFeature.
         * @param request BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         */
        public buildingFireRiskAnalyseGetSmokeRiskFeature(request: gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest, callback: gustav.GustavService.BuildingFireRiskAnalyseGetSmokeRiskFeatureCallback): void;

        /**
         * Calls BuildingFireRiskAnalyseGetSmokeRiskFeature.
         * @param request BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskAnalyseGetSmokeRiskFeature(request: gustav.IBuildingFireRiskAnalyseGetSmokeRiskFeatureRequest): Promise<gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse>;

        /**
         * Calls BuildingFireRiskTotalAnalyse.
         * @param request BuildingFireRiskTotalAnalyseRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskTotalAnalyseResponse
         */
        public buildingFireRiskTotalAnalyse(request: gustav.IBuildingFireRiskTotalAnalyseRequest, callback: gustav.GustavService.BuildingFireRiskTotalAnalyseCallback): void;

        /**
         * Calls BuildingFireRiskTotalAnalyse.
         * @param request BuildingFireRiskTotalAnalyseRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskTotalAnalyse(request: gustav.IBuildingFireRiskTotalAnalyseRequest): Promise<gustav.BuildingFireRiskTotalAnalyseResponse>;

        /**
         * Calls BuildingFireRiskTotalAnalyseSavePoint.
         * @param request BuildingFireRiskTotalAnalyseSavePointRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskTotalAnalyseSavePointResponse
         */
        public buildingFireRiskTotalAnalyseSavePoint(request: gustav.IBuildingFireRiskTotalAnalyseSavePointRequest, callback: gustav.GustavService.BuildingFireRiskTotalAnalyseSavePointCallback): void;

        /**
         * Calls BuildingFireRiskTotalAnalyseSavePoint.
         * @param request BuildingFireRiskTotalAnalyseSavePointRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskTotalAnalyseSavePoint(request: gustav.IBuildingFireRiskTotalAnalyseSavePointRequest): Promise<gustav.BuildingFireRiskTotalAnalyseSavePointResponse>;

        /**
         * Calls BuildingFireRiskTotalAnalyseGetPoint.
         * @param request BuildingFireRiskTotalAnalyseGetPointRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BuildingFireRiskTotalAnalyseGetPointResponse
         */
        public buildingFireRiskTotalAnalyseGetPoint(request: gustav.IBuildingFireRiskTotalAnalyseGetPointRequest, callback: gustav.GustavService.BuildingFireRiskTotalAnalyseGetPointCallback): void;

        /**
         * Calls BuildingFireRiskTotalAnalyseGetPoint.
         * @param request BuildingFireRiskTotalAnalyseGetPointRequest message or plain object
         * @returns Promise
         */
        public buildingFireRiskTotalAnalyseGetPoint(request: gustav.IBuildingFireRiskTotalAnalyseGetPointRequest): Promise<gustav.BuildingFireRiskTotalAnalyseGetPointResponse>;
    }

    namespace GustavService {

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyse}.
         * @param error Error, if any
         * @param [response] FireBuildingRiskAnalyseResponse
         */
        type FireBuildingRiskAnalyseCallback = (error: (Error|null), response?: gustav.FireBuildingRiskAnalyseResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetCombustibleNames}.
         * @param error Error, if any
         * @param [response] FireBuildingRiskAnalyseGetCombustibleNamesResponse
         */
        type FireBuildingRiskAnalyseGetCombustibleNamesCallback = (error: (Error|null), response?: gustav.FireBuildingRiskAnalyseGetCombustibleNamesResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetFireResistTops}.
         * @param error Error, if any
         * @param [response] FireBuildingRiskAnalyseGetFireResistTopsResponse
         */
        type FireBuildingRiskAnalyseGetFireResistTopsCallback = (error: (Error|null), response?: gustav.FireBuildingRiskAnalyseGetFireResistTopsResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetFireSourceFeature}.
         * @param error Error, if any
         * @param [response] FireBuildingRiskAnalyseGetFireSourceFeatureResponse
         */
        type FireBuildingRiskAnalyseGetFireSourceFeatureCallback = (error: (Error|null), response?: gustav.FireBuildingRiskAnalyseGetFireSourceFeatureResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#fireBuildingRiskAnalyseGetFireFightPowerPropertyDis}.
         * @param error Error, if any
         * @param [response] FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse
         */
        type FireBuildingRiskAnalyseGetFireFightPowerPropertyDisCallback = (error: (Error|null), response?: gustav.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#qiGet}.
         * @param error Error, if any
         * @param [response] QiGetResponse
         */
        type QiGetCallback = (error: (Error|null), response?: gustav.QiGetResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyse}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskAnalyseResponse
         */
        type BuildingFireRiskAnalyseCallback = (error: (Error|null), response?: gustav.BuildingFireRiskAnalyseResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyseGetPersonRiskFeature}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskAnalyseGetPersonRiskFeatureResponse
         */
        type BuildingFireRiskAnalyseGetPersonRiskFeatureCallback = (error: (Error|null), response?: gustav.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyseGetAssetsRiskFeature}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse
         */
        type BuildingFireRiskAnalyseGetAssetsRiskFeatureCallback = (error: (Error|null), response?: gustav.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskAnalyseGetSmokeRiskFeature}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse
         */
        type BuildingFireRiskAnalyseGetSmokeRiskFeatureCallback = (error: (Error|null), response?: gustav.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskTotalAnalyse}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskTotalAnalyseResponse
         */
        type BuildingFireRiskTotalAnalyseCallback = (error: (Error|null), response?: gustav.BuildingFireRiskTotalAnalyseResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskTotalAnalyseSavePoint}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskTotalAnalyseSavePointResponse
         */
        type BuildingFireRiskTotalAnalyseSavePointCallback = (error: (Error|null), response?: gustav.BuildingFireRiskTotalAnalyseSavePointResponse) => void;

        /**
         * Callback as used by {@link gustav.GustavService#buildingFireRiskTotalAnalyseGetPoint}.
         * @param error Error, if any
         * @param [response] BuildingFireRiskTotalAnalyseGetPointResponse
         */
        type BuildingFireRiskTotalAnalyseGetPointCallback = (error: (Error|null), response?: gustav.BuildingFireRiskTotalAnalyseGetPointResponse) => void;
    }
}
