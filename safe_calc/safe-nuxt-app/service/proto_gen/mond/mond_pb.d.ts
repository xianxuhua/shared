import * as $protobuf from "protobufjs";
/** Namespace mond. */
export namespace mond {

    /** Properties of a MaterialCoefficientSaveUnknownMaterialRequest. */
    interface IMaterialCoefficientSaveUnknownMaterialRequest {

        /** MaterialCoefficientSaveUnknownMaterialRequest name */
        name?: (string|null);

        /** MaterialCoefficientSaveUnknownMaterialRequest heat */
        heat?: (number|null);

        /** MaterialCoefficientSaveUnknownMaterialRequest coefficient */
        coefficient?: (number|null);
    }

    /** Represents a MaterialCoefficientSaveUnknownMaterialRequest. */
    class MaterialCoefficientSaveUnknownMaterialRequest implements IMaterialCoefficientSaveUnknownMaterialRequest {

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientSaveUnknownMaterialRequest);

        /** MaterialCoefficientSaveUnknownMaterialRequest name. */
        public name: string;

        /** MaterialCoefficientSaveUnknownMaterialRequest heat. */
        public heat: number;

        /** MaterialCoefficientSaveUnknownMaterialRequest coefficient. */
        public coefficient: number;

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientSaveUnknownMaterialRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientSaveUnknownMaterialRequest;

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientSaveUnknownMaterialRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientSaveUnknownMaterialRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientSaveUnknownMaterialResponse. */
    interface IMaterialCoefficientSaveUnknownMaterialResponse {
    }

    /** Represents a MaterialCoefficientSaveUnknownMaterialResponse. */
    class MaterialCoefficientSaveUnknownMaterialResponse implements IMaterialCoefficientSaveUnknownMaterialResponse {

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientSaveUnknownMaterialResponse);

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientSaveUnknownMaterialResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientSaveUnknownMaterialResponse;

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientSaveUnknownMaterialResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientSaveUnknownMaterialResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownCoefficientRequest. */
    interface IMaterialCoefficientGetKnownCoefficientRequest {

        /** MaterialCoefficientGetKnownCoefficientRequest name */
        name?: (string|null);
    }

    /** Represents a MaterialCoefficientGetKnownCoefficientRequest. */
    class MaterialCoefficientGetKnownCoefficientRequest implements IMaterialCoefficientGetKnownCoefficientRequest {

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientGetKnownCoefficientRequest);

        /** MaterialCoefficientGetKnownCoefficientRequest name. */
        public name: string;

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientGetKnownCoefficientRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientGetKnownCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownCoefficientResponse. */
    interface IMaterialCoefficientGetKnownCoefficientResponse {

        /** MaterialCoefficientGetKnownCoefficientResponse coefficient */
        coefficient?: (number|null);

        /** MaterialCoefficientGetKnownCoefficientResponse heat */
        heat?: (number|null);
    }

    /** Represents a MaterialCoefficientGetKnownCoefficientResponse. */
    class MaterialCoefficientGetKnownCoefficientResponse implements IMaterialCoefficientGetKnownCoefficientResponse {

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientGetKnownCoefficientResponse);

        /** MaterialCoefficientGetKnownCoefficientResponse coefficient. */
        public coefficient: number;

        /** MaterialCoefficientGetKnownCoefficientResponse heat. */
        public heat: number;

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientGetKnownCoefficientResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientGetKnownCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownNamesRequest. */
    interface IMaterialCoefficientGetKnownNamesRequest {
    }

    /** Represents a MaterialCoefficientGetKnownNamesRequest. */
    class MaterialCoefficientGetKnownNamesRequest implements IMaterialCoefficientGetKnownNamesRequest {

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientGetKnownNamesRequest);

        /**
         * Creates a MaterialCoefficientGetKnownNamesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownNamesRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientGetKnownNamesRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownNamesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientGetKnownNamesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownNamesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Name. */
    interface IName {

        /** Name name */
        name?: (string|null);

        /** Name code */
        code?: (string|null);
    }

    /** Represents a Name. */
    class Name implements IName {

        /**
         * Constructs a new Name.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IName);

        /** Name name. */
        public name: string;

        /** Name code. */
        public code: string;

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Name
         */
        public static fromObject(object: { [k: string]: any }): mond.Name;

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @param message Name
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.Name, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Name to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownNamesResponse. */
    interface IMaterialCoefficientGetKnownNamesResponse {

        /** MaterialCoefficientGetKnownNamesResponse names */
        names?: (mond.IName[]|null);
    }

    /** Represents a MaterialCoefficientGetKnownNamesResponse. */
    class MaterialCoefficientGetKnownNamesResponse implements IMaterialCoefficientGetKnownNamesResponse {

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientGetKnownNamesResponse);

        /** MaterialCoefficientGetKnownNamesResponse names. */
        public names: mond.IName[];

        /**
         * Creates a MaterialCoefficientGetKnownNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownNamesResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientGetKnownNamesResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownNamesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientGetKnownNamesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownNamesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialMaterialHazardRequest. */
    interface ISpecialMaterialHazardRequest {

        /** SpecialMaterialHazardRequest a */
        a?: (number|null);

        /** SpecialMaterialHazardRequest b */
        b?: (number|null);

        /** SpecialMaterialHazardRequest c */
        c?: (number|null);

        /** SpecialMaterialHazardRequest d */
        d?: (number|null);

        /** SpecialMaterialHazardRequest e */
        e?: (number|null);

        /** SpecialMaterialHazardRequest f */
        f?: (number|null);

        /** SpecialMaterialHazardRequest g */
        g?: (number|null);

        /** SpecialMaterialHazardRequest h */
        h?: (number|null);

        /** SpecialMaterialHazardRequest i */
        i?: (number|null);

        /** SpecialMaterialHazardRequest j */
        j?: (number|null);
    }

    /** Represents a SpecialMaterialHazardRequest. */
    class SpecialMaterialHazardRequest implements ISpecialMaterialHazardRequest {

        /**
         * Constructs a new SpecialMaterialHazardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.ISpecialMaterialHazardRequest);

        /** SpecialMaterialHazardRequest a. */
        public a: number;

        /** SpecialMaterialHazardRequest b. */
        public b: number;

        /** SpecialMaterialHazardRequest c. */
        public c: number;

        /** SpecialMaterialHazardRequest d. */
        public d: number;

        /** SpecialMaterialHazardRequest e. */
        public e: number;

        /** SpecialMaterialHazardRequest f. */
        public f: number;

        /** SpecialMaterialHazardRequest g. */
        public g: number;

        /** SpecialMaterialHazardRequest h. */
        public h: number;

        /** SpecialMaterialHazardRequest i. */
        public i: number;

        /** SpecialMaterialHazardRequest j. */
        public j: number;

        /**
         * Creates a SpecialMaterialHazardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialMaterialHazardRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.SpecialMaterialHazardRequest;

        /**
         * Creates a plain object from a SpecialMaterialHazardRequest message. Also converts values to other types if specified.
         * @param message SpecialMaterialHazardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.SpecialMaterialHazardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialMaterialHazardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialMaterialHazardResponse. */
    interface ISpecialMaterialHazardResponse {

        /** SpecialMaterialHazardResponse M */
        M?: (number|null);
    }

    /** Represents a SpecialMaterialHazardResponse. */
    class SpecialMaterialHazardResponse implements ISpecialMaterialHazardResponse {

        /**
         * Constructs a new SpecialMaterialHazardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.ISpecialMaterialHazardResponse);

        /** SpecialMaterialHazardResponse M. */
        public M: number;

        /**
         * Creates a SpecialMaterialHazardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialMaterialHazardResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.SpecialMaterialHazardResponse;

        /**
         * Creates a plain object from a SpecialMaterialHazardResponse message. Also converts values to other types if specified.
         * @param message SpecialMaterialHazardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.SpecialMaterialHazardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialMaterialHazardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneralProcessHazardRequest. */
    interface IGeneralProcessHazardRequest {

        /** GeneralProcessHazardRequest a */
        a?: (number|null);

        /** GeneralProcessHazardRequest b */
        b?: (number|null);

        /** GeneralProcessHazardRequest c */
        c?: (number|null);

        /** GeneralProcessHazardRequest d */
        d?: (number|null);

        /** GeneralProcessHazardRequest e */
        e?: (number|null);

        /** GeneralProcessHazardRequest f */
        f?: (number|null);
    }

    /** Represents a GeneralProcessHazardRequest. */
    class GeneralProcessHazardRequest implements IGeneralProcessHazardRequest {

        /**
         * Constructs a new GeneralProcessHazardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IGeneralProcessHazardRequest);

        /** GeneralProcessHazardRequest a. */
        public a: number;

        /** GeneralProcessHazardRequest b. */
        public b: number;

        /** GeneralProcessHazardRequest c. */
        public c: number;

        /** GeneralProcessHazardRequest d. */
        public d: number;

        /** GeneralProcessHazardRequest e. */
        public e: number;

        /** GeneralProcessHazardRequest f. */
        public f: number;

        /**
         * Creates a GeneralProcessHazardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneralProcessHazardRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.GeneralProcessHazardRequest;

        /**
         * Creates a plain object from a GeneralProcessHazardRequest message. Also converts values to other types if specified.
         * @param message GeneralProcessHazardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.GeneralProcessHazardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneralProcessHazardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneralProcessHazardResponse. */
    interface IGeneralProcessHazardResponse {

        /** GeneralProcessHazardResponse P */
        P?: (number|null);
    }

    /** Represents a GeneralProcessHazardResponse. */
    class GeneralProcessHazardResponse implements IGeneralProcessHazardResponse {

        /**
         * Constructs a new GeneralProcessHazardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IGeneralProcessHazardResponse);

        /** GeneralProcessHazardResponse P. */
        public P: number;

        /**
         * Creates a GeneralProcessHazardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneralProcessHazardResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.GeneralProcessHazardResponse;

        /**
         * Creates a plain object from a GeneralProcessHazardResponse message. Also converts values to other types if specified.
         * @param message GeneralProcessHazardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.GeneralProcessHazardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneralProcessHazardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialProcessHazardRequest. */
    interface ISpecialProcessHazardRequest {

        /** SpecialProcessHazardRequest a */
        a?: (number|null);

        /** SpecialProcessHazardRequest b */
        b?: (number|null);

        /** SpecialProcessHazardRequest c */
        c?: (number|null);

        /** SpecialProcessHazardRequest d */
        d?: (number|null);

        /** SpecialProcessHazardRequest e */
        e?: (number|null);

        /** SpecialProcessHazardRequest f */
        f?: (number|null);

        /** SpecialProcessHazardRequest g */
        g?: (number|null);

        /** SpecialProcessHazardRequest h */
        h?: (number|null);

        /** SpecialProcessHazardRequest i */
        i?: (number|null);

        /** SpecialProcessHazardRequest j */
        j?: (number|null);

        /** SpecialProcessHazardRequest k */
        k?: (number|null);

        /** SpecialProcessHazardRequest l */
        l?: (number|null);

        /** SpecialProcessHazardRequest m */
        m?: (number|null);

        /** SpecialProcessHazardRequest n */
        n?: (number|null);
    }

    /** Represents a SpecialProcessHazardRequest. */
    class SpecialProcessHazardRequest implements ISpecialProcessHazardRequest {

        /**
         * Constructs a new SpecialProcessHazardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.ISpecialProcessHazardRequest);

        /** SpecialProcessHazardRequest a. */
        public a: number;

        /** SpecialProcessHazardRequest b. */
        public b: number;

        /** SpecialProcessHazardRequest c. */
        public c: number;

        /** SpecialProcessHazardRequest d. */
        public d: number;

        /** SpecialProcessHazardRequest e. */
        public e: number;

        /** SpecialProcessHazardRequest f. */
        public f: number;

        /** SpecialProcessHazardRequest g. */
        public g: number;

        /** SpecialProcessHazardRequest h. */
        public h: number;

        /** SpecialProcessHazardRequest i. */
        public i: number;

        /** SpecialProcessHazardRequest j. */
        public j: number;

        /** SpecialProcessHazardRequest k. */
        public k: number;

        /** SpecialProcessHazardRequest l. */
        public l: number;

        /** SpecialProcessHazardRequest m. */
        public m: number;

        /** SpecialProcessHazardRequest n. */
        public n: number;

        /**
         * Creates a SpecialProcessHazardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialProcessHazardRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.SpecialProcessHazardRequest;

        /**
         * Creates a plain object from a SpecialProcessHazardRequest message. Also converts values to other types if specified.
         * @param message SpecialProcessHazardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.SpecialProcessHazardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialProcessHazardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialProcessHazardResponse. */
    interface ISpecialProcessHazardResponse {

        /** SpecialProcessHazardResponse S */
        S?: (number|null);
    }

    /** Represents a SpecialProcessHazardResponse. */
    class SpecialProcessHazardResponse implements ISpecialProcessHazardResponse {

        /**
         * Constructs a new SpecialProcessHazardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.ISpecialProcessHazardResponse);

        /** SpecialProcessHazardResponse S. */
        public S: number;

        /**
         * Creates a SpecialProcessHazardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialProcessHazardResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.SpecialProcessHazardResponse;

        /**
         * Creates a plain object from a SpecialProcessHazardResponse message. Also converts values to other types if specified.
         * @param message SpecialProcessHazardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.SpecialProcessHazardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialProcessHazardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientRequest. */
    interface IMaterialCoefficientRequest {

        /** MaterialCoefficientRequest Hc */
        Hc?: (number|null);
    }

    /** Represents a MaterialCoefficientRequest. */
    class MaterialCoefficientRequest implements IMaterialCoefficientRequest {

        /**
         * Constructs a new MaterialCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientRequest);

        /** MaterialCoefficientRequest Hc. */
        public Hc: number;

        /**
         * Creates a MaterialCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientRequest;

        /**
         * Creates a plain object from a MaterialCoefficientRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientResponse. */
    interface IMaterialCoefficientResponse {

        /** MaterialCoefficientResponse B */
        B?: (number|null);
    }

    /** Represents a MaterialCoefficientResponse. */
    class MaterialCoefficientResponse implements IMaterialCoefficientResponse {

        /**
         * Constructs a new MaterialCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialCoefficientResponse);

        /** MaterialCoefficientResponse B. */
        public B: number;

        /**
         * Creates a MaterialCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialCoefficientResponse;

        /**
         * Creates a plain object from a MaterialCoefficientResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArrangementHazardCoefficientRequest. */
    interface IArrangementHazardCoefficientRequest {

        /** ArrangementHazardCoefficientRequest a */
        a?: (number|null);

        /** ArrangementHazardCoefficientRequest b */
        b?: (number|null);

        /** ArrangementHazardCoefficientRequest c */
        c?: (number|null);

        /** ArrangementHazardCoefficientRequest d */
        d?: (number|null);

        /** ArrangementHazardCoefficientRequest e */
        e?: (number|null);
    }

    /** Represents an ArrangementHazardCoefficientRequest. */
    class ArrangementHazardCoefficientRequest implements IArrangementHazardCoefficientRequest {

        /**
         * Constructs a new ArrangementHazardCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IArrangementHazardCoefficientRequest);

        /** ArrangementHazardCoefficientRequest a. */
        public a: number;

        /** ArrangementHazardCoefficientRequest b. */
        public b: number;

        /** ArrangementHazardCoefficientRequest c. */
        public c: number;

        /** ArrangementHazardCoefficientRequest d. */
        public d: number;

        /** ArrangementHazardCoefficientRequest e. */
        public e: number;

        /**
         * Creates an ArrangementHazardCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArrangementHazardCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.ArrangementHazardCoefficientRequest;

        /**
         * Creates a plain object from an ArrangementHazardCoefficientRequest message. Also converts values to other types if specified.
         * @param message ArrangementHazardCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.ArrangementHazardCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArrangementHazardCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArrangementHazardCoefficientResponse. */
    interface IArrangementHazardCoefficientResponse {

        /** ArrangementHazardCoefficientResponse L */
        L?: (number|null);
    }

    /** Represents an ArrangementHazardCoefficientResponse. */
    class ArrangementHazardCoefficientResponse implements IArrangementHazardCoefficientResponse {

        /**
         * Constructs a new ArrangementHazardCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IArrangementHazardCoefficientResponse);

        /** ArrangementHazardCoefficientResponse L. */
        public L: number;

        /**
         * Creates an ArrangementHazardCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArrangementHazardCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.ArrangementHazardCoefficientResponse;

        /**
         * Creates a plain object from an ArrangementHazardCoefficientResponse message. Also converts values to other types if specified.
         * @param message ArrangementHazardCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.ArrangementHazardCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArrangementHazardCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoisonHazardCoefficientRequest. */
    interface IPoisonHazardCoefficientRequest {

        /** PoisonHazardCoefficientRequest a */
        a?: (number|null);

        /** PoisonHazardCoefficientRequest b */
        b?: (number|null);

        /** PoisonHazardCoefficientRequest c */
        c?: (number|null);

        /** PoisonHazardCoefficientRequest d */
        d?: (number|null);

        /** PoisonHazardCoefficientRequest e */
        e?: (number|null);
    }

    /** Represents a PoisonHazardCoefficientRequest. */
    class PoisonHazardCoefficientRequest implements IPoisonHazardCoefficientRequest {

        /**
         * Constructs a new PoisonHazardCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IPoisonHazardCoefficientRequest);

        /** PoisonHazardCoefficientRequest a. */
        public a: number;

        /** PoisonHazardCoefficientRequest b. */
        public b: number;

        /** PoisonHazardCoefficientRequest c. */
        public c: number;

        /** PoisonHazardCoefficientRequest d. */
        public d: number;

        /** PoisonHazardCoefficientRequest e. */
        public e: number;

        /**
         * Creates a PoisonHazardCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoisonHazardCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.PoisonHazardCoefficientRequest;

        /**
         * Creates a plain object from a PoisonHazardCoefficientRequest message. Also converts values to other types if specified.
         * @param message PoisonHazardCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.PoisonHazardCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoisonHazardCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoisonHazardCoefficientResponse. */
    interface IPoisonHazardCoefficientResponse {

        /** PoisonHazardCoefficientResponse T */
        T?: (number|null);
    }

    /** Represents a PoisonHazardCoefficientResponse. */
    class PoisonHazardCoefficientResponse implements IPoisonHazardCoefficientResponse {

        /**
         * Constructs a new PoisonHazardCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IPoisonHazardCoefficientResponse);

        /** PoisonHazardCoefficientResponse T. */
        public T: number;

        /**
         * Creates a PoisonHazardCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoisonHazardCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.PoisonHazardCoefficientResponse;

        /**
         * Creates a plain object from a PoisonHazardCoefficientResponse message. Also converts values to other types if specified.
         * @param message PoisonHazardCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.PoisonHazardCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoisonHazardCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoisonHazardCoefficientGetTLVTypeExposureRequest. */
    interface IPoisonHazardCoefficientGetTLVTypeExposureRequest {
    }

    /** Represents a PoisonHazardCoefficientGetTLVTypeExposureRequest. */
    class PoisonHazardCoefficientGetTLVTypeExposureRequest implements IPoisonHazardCoefficientGetTLVTypeExposureRequest {

        /**
         * Constructs a new PoisonHazardCoefficientGetTLVTypeExposureRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IPoisonHazardCoefficientGetTLVTypeExposureRequest);

        /**
         * Creates a PoisonHazardCoefficientGetTLVTypeExposureRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoisonHazardCoefficientGetTLVTypeExposureRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.PoisonHazardCoefficientGetTLVTypeExposureRequest;

        /**
         * Creates a plain object from a PoisonHazardCoefficientGetTLVTypeExposureRequest message. Also converts values to other types if specified.
         * @param message PoisonHazardCoefficientGetTLVTypeExposureRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.PoisonHazardCoefficientGetTLVTypeExposureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoisonHazardCoefficientGetTLVTypeExposureRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoisonHazardCoefficientParam. */
    interface IPoisonHazardCoefficientParam {

        /** PoisonHazardCoefficientParam name */
        name?: (string|null);

        /** PoisonHazardCoefficientParam code */
        code?: (number|null);
    }

    /** Represents a PoisonHazardCoefficientParam. */
    class PoisonHazardCoefficientParam implements IPoisonHazardCoefficientParam {

        /**
         * Constructs a new PoisonHazardCoefficientParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IPoisonHazardCoefficientParam);

        /** PoisonHazardCoefficientParam name. */
        public name: string;

        /** PoisonHazardCoefficientParam code. */
        public code: number;

        /**
         * Creates a PoisonHazardCoefficientParam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoisonHazardCoefficientParam
         */
        public static fromObject(object: { [k: string]: any }): mond.PoisonHazardCoefficientParam;

        /**
         * Creates a plain object from a PoisonHazardCoefficientParam message. Also converts values to other types if specified.
         * @param message PoisonHazardCoefficientParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.PoisonHazardCoefficientParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoisonHazardCoefficientParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoisonHazardCoefficientGetTLVTypeExposureResponse. */
    interface IPoisonHazardCoefficientGetTLVTypeExposureResponse {

        /** PoisonHazardCoefficientGetTLVTypeExposureResponse tlv */
        tlv?: (mond.IPoisonHazardCoefficientParam[]|null);

        /** PoisonHazardCoefficientGetTLVTypeExposureResponse type */
        type?: (mond.IPoisonHazardCoefficientParam[]|null);

        /** PoisonHazardCoefficientGetTLVTypeExposureResponse exposure */
        exposure?: (mond.IPoisonHazardCoefficientParam[]|null);
    }

    /** Represents a PoisonHazardCoefficientGetTLVTypeExposureResponse. */
    class PoisonHazardCoefficientGetTLVTypeExposureResponse implements IPoisonHazardCoefficientGetTLVTypeExposureResponse {

        /**
         * Constructs a new PoisonHazardCoefficientGetTLVTypeExposureResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IPoisonHazardCoefficientGetTLVTypeExposureResponse);

        /** PoisonHazardCoefficientGetTLVTypeExposureResponse tlv. */
        public tlv: mond.IPoisonHazardCoefficientParam[];

        /** PoisonHazardCoefficientGetTLVTypeExposureResponse type. */
        public type: mond.IPoisonHazardCoefficientParam[];

        /** PoisonHazardCoefficientGetTLVTypeExposureResponse exposure. */
        public exposure: mond.IPoisonHazardCoefficientParam[];

        /**
         * Creates a PoisonHazardCoefficientGetTLVTypeExposureResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoisonHazardCoefficientGetTLVTypeExposureResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.PoisonHazardCoefficientGetTLVTypeExposureResponse;

        /**
         * Creates a plain object from a PoisonHazardCoefficientGetTLVTypeExposureResponse message. Also converts values to other types if specified.
         * @param message PoisonHazardCoefficientGetTLVTypeExposureResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.PoisonHazardCoefficientGetTLVTypeExposureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoisonHazardCoefficientGetTLVTypeExposureResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainerSystemCoefficientRequest. */
    interface IContainerSystemCoefficientRequest {

        /** ContainerSystemCoefficientRequest a */
        a?: (number|null);

        /** ContainerSystemCoefficientRequest b */
        b?: (number|null);

        /** ContainerSystemCoefficientRequest c */
        c?: (number|null);

        /** ContainerSystemCoefficientRequest d */
        d?: (number|null);

        /** ContainerSystemCoefficientRequest e */
        e?: (number|null);

        /** ContainerSystemCoefficientRequest f */
        f?: (number|null);
    }

    /** Represents a ContainerSystemCoefficientRequest. */
    class ContainerSystemCoefficientRequest implements IContainerSystemCoefficientRequest {

        /**
         * Constructs a new ContainerSystemCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IContainerSystemCoefficientRequest);

        /** ContainerSystemCoefficientRequest a. */
        public a: number;

        /** ContainerSystemCoefficientRequest b. */
        public b: number;

        /** ContainerSystemCoefficientRequest c. */
        public c: number;

        /** ContainerSystemCoefficientRequest d. */
        public d: number;

        /** ContainerSystemCoefficientRequest e. */
        public e: number;

        /** ContainerSystemCoefficientRequest f. */
        public f: number;

        /**
         * Creates a ContainerSystemCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerSystemCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.ContainerSystemCoefficientRequest;

        /**
         * Creates a plain object from a ContainerSystemCoefficientRequest message. Also converts values to other types if specified.
         * @param message ContainerSystemCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.ContainerSystemCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerSystemCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainerSystemCoefficientResponse. */
    interface IContainerSystemCoefficientResponse {

        /** ContainerSystemCoefficientResponse k1 */
        k1?: (number|null);
    }

    /** Represents a ContainerSystemCoefficientResponse. */
    class ContainerSystemCoefficientResponse implements IContainerSystemCoefficientResponse {

        /**
         * Constructs a new ContainerSystemCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IContainerSystemCoefficientResponse);

        /** ContainerSystemCoefficientResponse k1. */
        public k1: number;

        /**
         * Creates a ContainerSystemCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerSystemCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.ContainerSystemCoefficientResponse;

        /**
         * Creates a plain object from a ContainerSystemCoefficientResponse message. Also converts values to other types if specified.
         * @param message ContainerSystemCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.ContainerSystemCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerSystemCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessManagementCoefficientRequest. */
    interface IProcessManagementCoefficientRequest {

        /** ProcessManagementCoefficientRequest a */
        a?: (number|null);

        /** ProcessManagementCoefficientRequest b */
        b?: (number|null);

        /** ProcessManagementCoefficientRequest c */
        c?: (number|null);

        /** ProcessManagementCoefficientRequest d */
        d?: (number|null);

        /** ProcessManagementCoefficientRequest e */
        e?: (number|null);

        /** ProcessManagementCoefficientRequest f */
        f?: (number|null);

        /** ProcessManagementCoefficientRequest g */
        g?: (number|null);

        /** ProcessManagementCoefficientRequest h */
        h?: (number|null);

        /** ProcessManagementCoefficientRequest i */
        i?: (number|null);

        /** ProcessManagementCoefficientRequest j */
        j?: (number|null);
    }

    /** Represents a ProcessManagementCoefficientRequest. */
    class ProcessManagementCoefficientRequest implements IProcessManagementCoefficientRequest {

        /**
         * Constructs a new ProcessManagementCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IProcessManagementCoefficientRequest);

        /** ProcessManagementCoefficientRequest a. */
        public a: number;

        /** ProcessManagementCoefficientRequest b. */
        public b: number;

        /** ProcessManagementCoefficientRequest c. */
        public c: number;

        /** ProcessManagementCoefficientRequest d. */
        public d: number;

        /** ProcessManagementCoefficientRequest e. */
        public e: number;

        /** ProcessManagementCoefficientRequest f. */
        public f: number;

        /** ProcessManagementCoefficientRequest g. */
        public g: number;

        /** ProcessManagementCoefficientRequest h. */
        public h: number;

        /** ProcessManagementCoefficientRequest i. */
        public i: number;

        /** ProcessManagementCoefficientRequest j. */
        public j: number;

        /**
         * Creates a ProcessManagementCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessManagementCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.ProcessManagementCoefficientRequest;

        /**
         * Creates a plain object from a ProcessManagementCoefficientRequest message. Also converts values to other types if specified.
         * @param message ProcessManagementCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.ProcessManagementCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessManagementCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessManagementCoefficientResponse. */
    interface IProcessManagementCoefficientResponse {

        /** ProcessManagementCoefficientResponse k2 */
        k2?: (number|null);
    }

    /** Represents a ProcessManagementCoefficientResponse. */
    class ProcessManagementCoefficientResponse implements IProcessManagementCoefficientResponse {

        /**
         * Constructs a new ProcessManagementCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IProcessManagementCoefficientResponse);

        /** ProcessManagementCoefficientResponse k2. */
        public k2: number;

        /**
         * Creates a ProcessManagementCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessManagementCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.ProcessManagementCoefficientResponse;

        /**
         * Creates a plain object from a ProcessManagementCoefficientResponse message. Also converts values to other types if specified.
         * @param message ProcessManagementCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.ProcessManagementCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessManagementCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialIsolationCoefficientRequest. */
    interface IMaterialIsolationCoefficientRequest {

        /** MaterialIsolationCoefficientRequest a */
        a?: (number|null);

        /** MaterialIsolationCoefficientRequest b */
        b?: (number|null);
    }

    /** Represents a MaterialIsolationCoefficientRequest. */
    class MaterialIsolationCoefficientRequest implements IMaterialIsolationCoefficientRequest {

        /**
         * Constructs a new MaterialIsolationCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialIsolationCoefficientRequest);

        /** MaterialIsolationCoefficientRequest a. */
        public a: number;

        /** MaterialIsolationCoefficientRequest b. */
        public b: number;

        /**
         * Creates a MaterialIsolationCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialIsolationCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialIsolationCoefficientRequest;

        /**
         * Creates a plain object from a MaterialIsolationCoefficientRequest message. Also converts values to other types if specified.
         * @param message MaterialIsolationCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialIsolationCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialIsolationCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialIsolationCoefficientResponse. */
    interface IMaterialIsolationCoefficientResponse {

        /** MaterialIsolationCoefficientResponse k5 */
        k5?: (number|null);
    }

    /** Represents a MaterialIsolationCoefficientResponse. */
    class MaterialIsolationCoefficientResponse implements IMaterialIsolationCoefficientResponse {

        /**
         * Constructs a new MaterialIsolationCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialIsolationCoefficientResponse);

        /** MaterialIsolationCoefficientResponse k5. */
        public k5: number;

        /**
         * Creates a MaterialIsolationCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialIsolationCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialIsolationCoefficientResponse;

        /**
         * Creates a plain object from a MaterialIsolationCoefficientResponse message. Also converts values to other types if specified.
         * @param message MaterialIsolationCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialIsolationCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialIsolationCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SafetyAttitudeCoefficientRequest. */
    interface ISafetyAttitudeCoefficientRequest {

        /** SafetyAttitudeCoefficientRequest a */
        a?: (number|null);

        /** SafetyAttitudeCoefficientRequest b */
        b?: (number|null);

        /** SafetyAttitudeCoefficientRequest c */
        c?: (number|null);
    }

    /** Represents a SafetyAttitudeCoefficientRequest. */
    class SafetyAttitudeCoefficientRequest implements ISafetyAttitudeCoefficientRequest {

        /**
         * Constructs a new SafetyAttitudeCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.ISafetyAttitudeCoefficientRequest);

        /** SafetyAttitudeCoefficientRequest a. */
        public a: number;

        /** SafetyAttitudeCoefficientRequest b. */
        public b: number;

        /** SafetyAttitudeCoefficientRequest c. */
        public c: number;

        /**
         * Creates a SafetyAttitudeCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SafetyAttitudeCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.SafetyAttitudeCoefficientRequest;

        /**
         * Creates a plain object from a SafetyAttitudeCoefficientRequest message. Also converts values to other types if specified.
         * @param message SafetyAttitudeCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.SafetyAttitudeCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SafetyAttitudeCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SafetyAttitudeCoefficientResponse. */
    interface ISafetyAttitudeCoefficientResponse {

        /** SafetyAttitudeCoefficientResponse k3 */
        k3?: (number|null);
    }

    /** Represents a SafetyAttitudeCoefficientResponse. */
    class SafetyAttitudeCoefficientResponse implements ISafetyAttitudeCoefficientResponse {

        /**
         * Constructs a new SafetyAttitudeCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.ISafetyAttitudeCoefficientResponse);

        /** SafetyAttitudeCoefficientResponse k3. */
        public k3: number;

        /**
         * Creates a SafetyAttitudeCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SafetyAttitudeCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.SafetyAttitudeCoefficientResponse;

        /**
         * Creates a plain object from a SafetyAttitudeCoefficientResponse message. Also converts values to other types if specified.
         * @param message SafetyAttitudeCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.SafetyAttitudeCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SafetyAttitudeCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FirePreventionCoefficientRequest. */
    interface IFirePreventionCoefficientRequest {

        /** FirePreventionCoefficientRequest a */
        a?: (number|null);

        /** FirePreventionCoefficientRequest b */
        b?: (number|null);

        /** FirePreventionCoefficientRequest c */
        c?: (number|null);
    }

    /** Represents a FirePreventionCoefficientRequest. */
    class FirePreventionCoefficientRequest implements IFirePreventionCoefficientRequest {

        /**
         * Constructs a new FirePreventionCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IFirePreventionCoefficientRequest);

        /** FirePreventionCoefficientRequest a. */
        public a: number;

        /** FirePreventionCoefficientRequest b. */
        public b: number;

        /** FirePreventionCoefficientRequest c. */
        public c: number;

        /**
         * Creates a FirePreventionCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirePreventionCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.FirePreventionCoefficientRequest;

        /**
         * Creates a plain object from a FirePreventionCoefficientRequest message. Also converts values to other types if specified.
         * @param message FirePreventionCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.FirePreventionCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirePreventionCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FirePreventionCoefficientResponse. */
    interface IFirePreventionCoefficientResponse {

        /** FirePreventionCoefficientResponse k4 */
        k4?: (number|null);
    }

    /** Represents a FirePreventionCoefficientResponse. */
    class FirePreventionCoefficientResponse implements IFirePreventionCoefficientResponse {

        /**
         * Constructs a new FirePreventionCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IFirePreventionCoefficientResponse);

        /** FirePreventionCoefficientResponse k4. */
        public k4: number;

        /**
         * Creates a FirePreventionCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirePreventionCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.FirePreventionCoefficientResponse;

        /**
         * Creates a plain object from a FirePreventionCoefficientResponse message. Also converts values to other types if specified.
         * @param message FirePreventionCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.FirePreventionCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirePreventionCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireFightingActivityCoefficientRequest. */
    interface IFireFightingActivityCoefficientRequest {

        /** FireFightingActivityCoefficientRequest a */
        a?: (number|null);

        /** FireFightingActivityCoefficientRequest b */
        b?: (number|null);

        /** FireFightingActivityCoefficientRequest c */
        c?: (number|null);

        /** FireFightingActivityCoefficientRequest d */
        d?: (number|null);

        /** FireFightingActivityCoefficientRequest e */
        e?: (number|null);

        /** FireFightingActivityCoefficientRequest f */
        f?: (number|null);

        /** FireFightingActivityCoefficientRequest g */
        g?: (number|null);

        /** FireFightingActivityCoefficientRequest h */
        h?: (number|null);
    }

    /** Represents a FireFightingActivityCoefficientRequest. */
    class FireFightingActivityCoefficientRequest implements IFireFightingActivityCoefficientRequest {

        /**
         * Constructs a new FireFightingActivityCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IFireFightingActivityCoefficientRequest);

        /** FireFightingActivityCoefficientRequest a. */
        public a: number;

        /** FireFightingActivityCoefficientRequest b. */
        public b: number;

        /** FireFightingActivityCoefficientRequest c. */
        public c: number;

        /** FireFightingActivityCoefficientRequest d. */
        public d: number;

        /** FireFightingActivityCoefficientRequest e. */
        public e: number;

        /** FireFightingActivityCoefficientRequest f. */
        public f: number;

        /** FireFightingActivityCoefficientRequest g. */
        public g: number;

        /** FireFightingActivityCoefficientRequest h. */
        public h: number;

        /**
         * Creates a FireFightingActivityCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireFightingActivityCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.FireFightingActivityCoefficientRequest;

        /**
         * Creates a plain object from a FireFightingActivityCoefficientRequest message. Also converts values to other types if specified.
         * @param message FireFightingActivityCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.FireFightingActivityCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireFightingActivityCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireFightingActivityCoefficientResponse. */
    interface IFireFightingActivityCoefficientResponse {

        /** FireFightingActivityCoefficientResponse k6 */
        k6?: (number|null);
    }

    /** Represents a FireFightingActivityCoefficientResponse. */
    class FireFightingActivityCoefficientResponse implements IFireFightingActivityCoefficientResponse {

        /**
         * Constructs a new FireFightingActivityCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IFireFightingActivityCoefficientResponse);

        /** FireFightingActivityCoefficientResponse k6. */
        public k6: number;

        /**
         * Creates a FireFightingActivityCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireFightingActivityCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.FireFightingActivityCoefficientResponse;

        /**
         * Creates a plain object from a FireFightingActivityCoefficientResponse message. Also converts values to other types if specified.
         * @param message FireFightingActivityCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.FireFightingActivityCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireFightingActivityCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NumHazardCoefficientRequest. */
    interface INumHazardCoefficientRequest {

        /** NumHazardCoefficientRequest materialQuality */
        materialQuality?: (number|null);
    }

    /** Represents a NumHazardCoefficientRequest. */
    class NumHazardCoefficientRequest implements INumHazardCoefficientRequest {

        /**
         * Constructs a new NumHazardCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.INumHazardCoefficientRequest);

        /** NumHazardCoefficientRequest materialQuality. */
        public materialQuality: number;

        /**
         * Creates a NumHazardCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NumHazardCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.NumHazardCoefficientRequest;

        /**
         * Creates a plain object from a NumHazardCoefficientRequest message. Also converts values to other types if specified.
         * @param message NumHazardCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.NumHazardCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NumHazardCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NumHazardCoefficientResponse. */
    interface INumHazardCoefficientResponse {

        /** NumHazardCoefficientResponse Q */
        Q?: (number|null);
    }

    /** Represents a NumHazardCoefficientResponse. */
    class NumHazardCoefficientResponse implements INumHazardCoefficientResponse {

        /**
         * Constructs a new NumHazardCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.INumHazardCoefficientResponse);

        /** NumHazardCoefficientResponse Q. */
        public Q: number;

        /**
         * Creates a NumHazardCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NumHazardCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.NumHazardCoefficientResponse;

        /**
         * Creates a plain object from a NumHazardCoefficientResponse message. Also converts values to other types if specified.
         * @param message NumHazardCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.NumHazardCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NumHazardCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitialCommentIndexFinialCompensationCoefficientRequest. */
    interface IInitialCommentIndexFinialCompensationCoefficientRequest {

        /** InitialCommentIndexFinialCompensationCoefficientRequest materialCoefficientB */
        materialCoefficientB?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest specialMaterialHazardCoefficientM */
        specialMaterialHazardCoefficientM?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest generalProcessHazardCoefficientP */
        generalProcessHazardCoefficientP?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest specialProcessHazardCoefficientS */
        specialProcessHazardCoefficientS?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest numHazardCoefficientQ */
        numHazardCoefficientQ?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest arrangementHazardCoefficientL */
        arrangementHazardCoefficientL?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest poisonHazardCoefficientT */
        poisonHazardCoefficientT?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest combustibleTotalNumK */
        combustibleTotalNumK?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest workingAreaN */
        workingAreaN?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest mixedDiffusionCoefficientM */
        mixedDiffusionCoefficientM?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest unitHeightH */
        unitHeightH?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest k1 */
        k1?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest k2 */
        k2?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest k3 */
        k3?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest k4 */
        k4?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest k5 */
        k5?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientRequest k6 */
        k6?: (number|null);
    }

    /** Represents an InitialCommentIndexFinialCompensationCoefficientRequest. */
    class InitialCommentIndexFinialCompensationCoefficientRequest implements IInitialCommentIndexFinialCompensationCoefficientRequest {

        /**
         * Constructs a new InitialCommentIndexFinialCompensationCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IInitialCommentIndexFinialCompensationCoefficientRequest);

        /** InitialCommentIndexFinialCompensationCoefficientRequest materialCoefficientB. */
        public materialCoefficientB: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest specialMaterialHazardCoefficientM. */
        public specialMaterialHazardCoefficientM: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest generalProcessHazardCoefficientP. */
        public generalProcessHazardCoefficientP: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest specialProcessHazardCoefficientS. */
        public specialProcessHazardCoefficientS: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest numHazardCoefficientQ. */
        public numHazardCoefficientQ: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest arrangementHazardCoefficientL. */
        public arrangementHazardCoefficientL: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest poisonHazardCoefficientT. */
        public poisonHazardCoefficientT: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest combustibleTotalNumK. */
        public combustibleTotalNumK: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest workingAreaN. */
        public workingAreaN: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest mixedDiffusionCoefficientM. */
        public mixedDiffusionCoefficientM: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest unitHeightH. */
        public unitHeightH: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest k1. */
        public k1: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest k2. */
        public k2: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest k3. */
        public k3: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest k4. */
        public k4: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest k5. */
        public k5: number;

        /** InitialCommentIndexFinialCompensationCoefficientRequest k6. */
        public k6: number;

        /**
         * Creates an InitialCommentIndexFinialCompensationCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitialCommentIndexFinialCompensationCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.InitialCommentIndexFinialCompensationCoefficientRequest;

        /**
         * Creates a plain object from an InitialCommentIndexFinialCompensationCoefficientRequest message. Also converts values to other types if specified.
         * @param message InitialCommentIndexFinialCompensationCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.InitialCommentIndexFinialCompensationCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitialCommentIndexFinialCompensationCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitialCommentIndexFinialCompensationCoefficientResponse. */
    interface IInitialCommentIndexFinialCompensationCoefficientResponse {

        /** InitialCommentIndexFinialCompensationCoefficientResponse D */
        D?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse F */
        F?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse E */
        E?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse A */
        A?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse U */
        U?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse C */
        C?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse R */
        R?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse F1 */
        F1?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse E1 */
        E1?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse A1 */
        A1?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse R1 */
        R1?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse R2 */
        R2?: (number|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse initHazardLevel */
        initHazardLevel?: (string|null);

        /** InitialCommentIndexFinialCompensationCoefficientResponse finalHazardLevel */
        finalHazardLevel?: (string|null);
    }

    /** Represents an InitialCommentIndexFinialCompensationCoefficientResponse. */
    class InitialCommentIndexFinialCompensationCoefficientResponse implements IInitialCommentIndexFinialCompensationCoefficientResponse {

        /**
         * Constructs a new InitialCommentIndexFinialCompensationCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IInitialCommentIndexFinialCompensationCoefficientResponse);

        /** InitialCommentIndexFinialCompensationCoefficientResponse D. */
        public D: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse F. */
        public F: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse E. */
        public E: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse A. */
        public A: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse U. */
        public U: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse C. */
        public C: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse R. */
        public R: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse F1. */
        public F1: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse E1. */
        public E1: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse A1. */
        public A1: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse R1. */
        public R1: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse R2. */
        public R2: number;

        /** InitialCommentIndexFinialCompensationCoefficientResponse initHazardLevel. */
        public initHazardLevel: string;

        /** InitialCommentIndexFinialCompensationCoefficientResponse finalHazardLevel. */
        public finalHazardLevel: string;

        /**
         * Creates an InitialCommentIndexFinialCompensationCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitialCommentIndexFinialCompensationCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.InitialCommentIndexFinialCompensationCoefficientResponse;

        /**
         * Creates a plain object from an InitialCommentIndexFinialCompensationCoefficientResponse message. Also converts values to other types if specified.
         * @param message InitialCommentIndexFinialCompensationCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.InitialCommentIndexFinialCompensationCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitialCommentIndexFinialCompensationCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialsGetRequest. */
    interface IMaterialsGetRequest {
    }

    /** Represents a MaterialsGetRequest. */
    class MaterialsGetRequest implements IMaterialsGetRequest {

        /**
         * Constructs a new MaterialsGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialsGetRequest);

        /**
         * Creates a MaterialsGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialsGetRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialsGetRequest;

        /**
         * Creates a plain object from a MaterialsGetRequest message. Also converts values to other types if specified.
         * @param message MaterialsGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialsGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialsGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Material. */
    interface IMaterial {

        /** Material id */
        id?: (string|null);

        /** Material name */
        name?: (string|null);

        /** Material heat */
        heat?: (number|null);

        /** Material coefficient */
        coefficient?: (number|null);
    }

    /** Represents a Material. */
    class Material implements IMaterial {

        /**
         * Constructs a new Material.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterial);

        /** Material id. */
        public id: string;

        /** Material name. */
        public name: string;

        /** Material heat. */
        public heat: number;

        /** Material coefficient. */
        public coefficient: number;

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Material
         */
        public static fromObject(object: { [k: string]: any }): mond.Material;

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @param message Material
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.Material, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Material to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialsGetResponse. */
    interface IMaterialsGetResponse {

        /** MaterialsGetResponse materials */
        materials?: (mond.IMaterial[]|null);
    }

    /** Represents a MaterialsGetResponse. */
    class MaterialsGetResponse implements IMaterialsGetResponse {

        /**
         * Constructs a new MaterialsGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialsGetResponse);

        /** MaterialsGetResponse materials. */
        public materials: mond.IMaterial[];

        /**
         * Creates a MaterialsGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialsGetResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialsGetResponse;

        /**
         * Creates a plain object from a MaterialsGetResponse message. Also converts values to other types if specified.
         * @param message MaterialsGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialsGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialsGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialEditRequest. */
    interface IMaterialEditRequest {

        /** MaterialEditRequest id */
        id?: (string|null);

        /** MaterialEditRequest name */
        name?: (string|null);

        /** MaterialEditRequest heat */
        heat?: (number|null);

        /** MaterialEditRequest coefficient */
        coefficient?: (number|null);
    }

    /** Represents a MaterialEditRequest. */
    class MaterialEditRequest implements IMaterialEditRequest {

        /**
         * Constructs a new MaterialEditRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialEditRequest);

        /** MaterialEditRequest id. */
        public id: string;

        /** MaterialEditRequest name. */
        public name: string;

        /** MaterialEditRequest heat. */
        public heat: number;

        /** MaterialEditRequest coefficient. */
        public coefficient: number;

        /**
         * Creates a MaterialEditRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialEditRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialEditRequest;

        /**
         * Creates a plain object from a MaterialEditRequest message. Also converts values to other types if specified.
         * @param message MaterialEditRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialEditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialEditRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialEditResponse. */
    interface IMaterialEditResponse {
    }

    /** Represents a MaterialEditResponse. */
    class MaterialEditResponse implements IMaterialEditResponse {

        /**
         * Constructs a new MaterialEditResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialEditResponse);

        /**
         * Creates a MaterialEditResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialEditResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialEditResponse;

        /**
         * Creates a plain object from a MaterialEditResponse message. Also converts values to other types if specified.
         * @param message MaterialEditResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialEditResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialEditResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialDeleteRequest. */
    interface IMaterialDeleteRequest {

        /** MaterialDeleteRequest id */
        id?: (string|null);
    }

    /** Represents a MaterialDeleteRequest. */
    class MaterialDeleteRequest implements IMaterialDeleteRequest {

        /**
         * Constructs a new MaterialDeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialDeleteRequest);

        /** MaterialDeleteRequest id. */
        public id: string;

        /**
         * Creates a MaterialDeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialDeleteRequest
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialDeleteRequest;

        /**
         * Creates a plain object from a MaterialDeleteRequest message. Also converts values to other types if specified.
         * @param message MaterialDeleteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialDeleteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialDeleteResponse. */
    interface IMaterialDeleteResponse {
    }

    /** Represents a MaterialDeleteResponse. */
    class MaterialDeleteResponse implements IMaterialDeleteResponse {

        /**
         * Constructs a new MaterialDeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mond.IMaterialDeleteResponse);

        /**
         * Creates a MaterialDeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialDeleteResponse
         */
        public static fromObject(object: { [k: string]: any }): mond.MaterialDeleteResponse;

        /**
         * Creates a plain object from a MaterialDeleteResponse message. Also converts values to other types if specified.
         * @param message MaterialDeleteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mond.MaterialDeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialDeleteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a MondService */
    class MondService extends $protobuf.rpc.Service {

        /**
         * Constructs a new MondService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @param request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientSaveUnknownMaterialResponse
         */
        public materialCoefficientSaveUnknownMaterial(request: mond.IMaterialCoefficientSaveUnknownMaterialRequest, callback: mond.MondService.MaterialCoefficientSaveUnknownMaterialCallback): void;

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @param request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientSaveUnknownMaterial(request: mond.IMaterialCoefficientSaveUnknownMaterialRequest): Promise<mond.MaterialCoefficientSaveUnknownMaterialResponse>;

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @param request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownCoefficientResponse
         */
        public materialCoefficientGetKnownCoefficient(request: mond.IMaterialCoefficientGetKnownCoefficientRequest, callback: mond.MondService.MaterialCoefficientGetKnownCoefficientCallback): void;

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @param request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetKnownCoefficient(request: mond.IMaterialCoefficientGetKnownCoefficientRequest): Promise<mond.MaterialCoefficientGetKnownCoefficientResponse>;

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @param request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownNamesResponse
         */
        public materialCoefficientGetKnownNames(request: mond.IMaterialCoefficientGetKnownNamesRequest, callback: mond.MondService.MaterialCoefficientGetKnownNamesCallback): void;

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @param request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetKnownNames(request: mond.IMaterialCoefficientGetKnownNamesRequest): Promise<mond.MaterialCoefficientGetKnownNamesResponse>;

        /**
         * Calls MaterialCoefficient.
         * @param request MaterialCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientResponse
         */
        public materialCoefficient(request: mond.IMaterialCoefficientRequest, callback: mond.MondService.MaterialCoefficientCallback): void;

        /**
         * Calls MaterialCoefficient.
         * @param request MaterialCoefficientRequest message or plain object
         * @returns Promise
         */
        public materialCoefficient(request: mond.IMaterialCoefficientRequest): Promise<mond.MaterialCoefficientResponse>;

        /**
         * Calls SpecialMaterialHazard.
         * @param request SpecialMaterialHazardRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SpecialMaterialHazardResponse
         */
        public specialMaterialHazard(request: mond.ISpecialMaterialHazardRequest, callback: mond.MondService.SpecialMaterialHazardCallback): void;

        /**
         * Calls SpecialMaterialHazard.
         * @param request SpecialMaterialHazardRequest message or plain object
         * @returns Promise
         */
        public specialMaterialHazard(request: mond.ISpecialMaterialHazardRequest): Promise<mond.SpecialMaterialHazardResponse>;

        /**
         * Calls GeneralProcessHazard.
         * @param request GeneralProcessHazardRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GeneralProcessHazardResponse
         */
        public generalProcessHazard(request: mond.IGeneralProcessHazardRequest, callback: mond.MondService.GeneralProcessHazardCallback): void;

        /**
         * Calls GeneralProcessHazard.
         * @param request GeneralProcessHazardRequest message or plain object
         * @returns Promise
         */
        public generalProcessHazard(request: mond.IGeneralProcessHazardRequest): Promise<mond.GeneralProcessHazardResponse>;

        /**
         * Calls SpecialProcessHazard.
         * @param request SpecialProcessHazardRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SpecialProcessHazardResponse
         */
        public specialProcessHazard(request: mond.ISpecialProcessHazardRequest, callback: mond.MondService.SpecialProcessHazardCallback): void;

        /**
         * Calls SpecialProcessHazard.
         * @param request SpecialProcessHazardRequest message or plain object
         * @returns Promise
         */
        public specialProcessHazard(request: mond.ISpecialProcessHazardRequest): Promise<mond.SpecialProcessHazardResponse>;

        /**
         * Calls ArrangementHazardCoefficient.
         * @param request ArrangementHazardCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ArrangementHazardCoefficientResponse
         */
        public arrangementHazardCoefficient(request: mond.IArrangementHazardCoefficientRequest, callback: mond.MondService.ArrangementHazardCoefficientCallback): void;

        /**
         * Calls ArrangementHazardCoefficient.
         * @param request ArrangementHazardCoefficientRequest message or plain object
         * @returns Promise
         */
        public arrangementHazardCoefficient(request: mond.IArrangementHazardCoefficientRequest): Promise<mond.ArrangementHazardCoefficientResponse>;

        /**
         * Calls NumHazardCoefficient.
         * @param request NumHazardCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NumHazardCoefficientResponse
         */
        public numHazardCoefficient(request: mond.INumHazardCoefficientRequest, callback: mond.MondService.NumHazardCoefficientCallback): void;

        /**
         * Calls NumHazardCoefficient.
         * @param request NumHazardCoefficientRequest message or plain object
         * @returns Promise
         */
        public numHazardCoefficient(request: mond.INumHazardCoefficientRequest): Promise<mond.NumHazardCoefficientResponse>;

        /**
         * Calls PoisonHazardCoefficient.
         * @param request PoisonHazardCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PoisonHazardCoefficientResponse
         */
        public poisonHazardCoefficient(request: mond.IPoisonHazardCoefficientRequest, callback: mond.MondService.PoisonHazardCoefficientCallback): void;

        /**
         * Calls PoisonHazardCoefficient.
         * @param request PoisonHazardCoefficientRequest message or plain object
         * @returns Promise
         */
        public poisonHazardCoefficient(request: mond.IPoisonHazardCoefficientRequest): Promise<mond.PoisonHazardCoefficientResponse>;

        /**
         * Calls PoisonHazardCoefficientGetTLVTypeExposure.
         * @param request PoisonHazardCoefficientGetTLVTypeExposureRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PoisonHazardCoefficientGetTLVTypeExposureResponse
         */
        public poisonHazardCoefficientGetTLVTypeExposure(request: mond.IPoisonHazardCoefficientGetTLVTypeExposureRequest, callback: mond.MondService.PoisonHazardCoefficientGetTLVTypeExposureCallback): void;

        /**
         * Calls PoisonHazardCoefficientGetTLVTypeExposure.
         * @param request PoisonHazardCoefficientGetTLVTypeExposureRequest message or plain object
         * @returns Promise
         */
        public poisonHazardCoefficientGetTLVTypeExposure(request: mond.IPoisonHazardCoefficientGetTLVTypeExposureRequest): Promise<mond.PoisonHazardCoefficientGetTLVTypeExposureResponse>;

        /**
         * Calls ContainerSystemCoefficient.
         * @param request ContainerSystemCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ContainerSystemCoefficientResponse
         */
        public containerSystemCoefficient(request: mond.IContainerSystemCoefficientRequest, callback: mond.MondService.ContainerSystemCoefficientCallback): void;

        /**
         * Calls ContainerSystemCoefficient.
         * @param request ContainerSystemCoefficientRequest message or plain object
         * @returns Promise
         */
        public containerSystemCoefficient(request: mond.IContainerSystemCoefficientRequest): Promise<mond.ContainerSystemCoefficientResponse>;

        /**
         * Calls ProcessManagementCoefficient.
         * @param request ProcessManagementCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ProcessManagementCoefficientResponse
         */
        public processManagementCoefficient(request: mond.IProcessManagementCoefficientRequest, callback: mond.MondService.ProcessManagementCoefficientCallback): void;

        /**
         * Calls ProcessManagementCoefficient.
         * @param request ProcessManagementCoefficientRequest message or plain object
         * @returns Promise
         */
        public processManagementCoefficient(request: mond.IProcessManagementCoefficientRequest): Promise<mond.ProcessManagementCoefficientResponse>;

        /**
         * Calls MaterialIsolationCoefficient.
         * @param request MaterialIsolationCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialIsolationCoefficientResponse
         */
        public materialIsolationCoefficient(request: mond.IMaterialIsolationCoefficientRequest, callback: mond.MondService.MaterialIsolationCoefficientCallback): void;

        /**
         * Calls MaterialIsolationCoefficient.
         * @param request MaterialIsolationCoefficientRequest message or plain object
         * @returns Promise
         */
        public materialIsolationCoefficient(request: mond.IMaterialIsolationCoefficientRequest): Promise<mond.MaterialIsolationCoefficientResponse>;

        /**
         * Calls SafetyAttitudeCoefficient.
         * @param request SafetyAttitudeCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SafetyAttitudeCoefficientResponse
         */
        public safetyAttitudeCoefficient(request: mond.ISafetyAttitudeCoefficientRequest, callback: mond.MondService.SafetyAttitudeCoefficientCallback): void;

        /**
         * Calls SafetyAttitudeCoefficient.
         * @param request SafetyAttitudeCoefficientRequest message or plain object
         * @returns Promise
         */
        public safetyAttitudeCoefficient(request: mond.ISafetyAttitudeCoefficientRequest): Promise<mond.SafetyAttitudeCoefficientResponse>;

        /**
         * Calls FirePreventionCoefficient.
         * @param request FirePreventionCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FirePreventionCoefficientResponse
         */
        public firePreventionCoefficient(request: mond.IFirePreventionCoefficientRequest, callback: mond.MondService.FirePreventionCoefficientCallback): void;

        /**
         * Calls FirePreventionCoefficient.
         * @param request FirePreventionCoefficientRequest message or plain object
         * @returns Promise
         */
        public firePreventionCoefficient(request: mond.IFirePreventionCoefficientRequest): Promise<mond.FirePreventionCoefficientResponse>;

        /**
         * Calls FireFightingActivityCoefficient.
         * @param request FireFightingActivityCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireFightingActivityCoefficientResponse
         */
        public fireFightingActivityCoefficient(request: mond.IFireFightingActivityCoefficientRequest, callback: mond.MondService.FireFightingActivityCoefficientCallback): void;

        /**
         * Calls FireFightingActivityCoefficient.
         * @param request FireFightingActivityCoefficientRequest message or plain object
         * @returns Promise
         */
        public fireFightingActivityCoefficient(request: mond.IFireFightingActivityCoefficientRequest): Promise<mond.FireFightingActivityCoefficientResponse>;

        /**
         * Calls InitialCommentIndexFinialCompensationCoefficient.
         * @param request InitialCommentIndexFinialCompensationCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InitialCommentIndexFinialCompensationCoefficientResponse
         */
        public initialCommentIndexFinialCompensationCoefficient(request: mond.IInitialCommentIndexFinialCompensationCoefficientRequest, callback: mond.MondService.InitialCommentIndexFinialCompensationCoefficientCallback): void;

        /**
         * Calls InitialCommentIndexFinialCompensationCoefficient.
         * @param request InitialCommentIndexFinialCompensationCoefficientRequest message or plain object
         * @returns Promise
         */
        public initialCommentIndexFinialCompensationCoefficient(request: mond.IInitialCommentIndexFinialCompensationCoefficientRequest): Promise<mond.InitialCommentIndexFinialCompensationCoefficientResponse>;

        /**
         * Calls MaterialsGet.
         * @param request MaterialsGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialsGetResponse
         */
        public materialsGet(request: mond.IMaterialsGetRequest, callback: mond.MondService.MaterialsGetCallback): void;

        /**
         * Calls MaterialsGet.
         * @param request MaterialsGetRequest message or plain object
         * @returns Promise
         */
        public materialsGet(request: mond.IMaterialsGetRequest): Promise<mond.MaterialsGetResponse>;

        /**
         * Calls MaterialEdit.
         * @param request MaterialEditRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialEditResponse
         */
        public materialEdit(request: mond.IMaterialEditRequest, callback: mond.MondService.MaterialEditCallback): void;

        /**
         * Calls MaterialEdit.
         * @param request MaterialEditRequest message or plain object
         * @returns Promise
         */
        public materialEdit(request: mond.IMaterialEditRequest): Promise<mond.MaterialEditResponse>;

        /**
         * Calls MaterialDelete.
         * @param request MaterialDeleteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialDeleteResponse
         */
        public materialDelete(request: mond.IMaterialDeleteRequest, callback: mond.MondService.MaterialDeleteCallback): void;

        /**
         * Calls MaterialDelete.
         * @param request MaterialDeleteRequest message or plain object
         * @returns Promise
         */
        public materialDelete(request: mond.IMaterialDeleteRequest): Promise<mond.MaterialDeleteResponse>;
    }

    namespace MondService {

        /**
         * Callback as used by {@link mond.MondService#materialCoefficientSaveUnknownMaterial}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientSaveUnknownMaterialResponse
         */
        type MaterialCoefficientSaveUnknownMaterialCallback = (error: (Error|null), response?: mond.MaterialCoefficientSaveUnknownMaterialResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialCoefficientGetKnownCoefficient}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetKnownCoefficientResponse
         */
        type MaterialCoefficientGetKnownCoefficientCallback = (error: (Error|null), response?: mond.MaterialCoefficientGetKnownCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialCoefficientGetKnownNames}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetKnownNamesResponse
         */
        type MaterialCoefficientGetKnownNamesCallback = (error: (Error|null), response?: mond.MaterialCoefficientGetKnownNamesResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialCoefficient}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientResponse
         */
        type MaterialCoefficientCallback = (error: (Error|null), response?: mond.MaterialCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#specialMaterialHazard}.
         * @param error Error, if any
         * @param [response] SpecialMaterialHazardResponse
         */
        type SpecialMaterialHazardCallback = (error: (Error|null), response?: mond.SpecialMaterialHazardResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#generalProcessHazard}.
         * @param error Error, if any
         * @param [response] GeneralProcessHazardResponse
         */
        type GeneralProcessHazardCallback = (error: (Error|null), response?: mond.GeneralProcessHazardResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#specialProcessHazard}.
         * @param error Error, if any
         * @param [response] SpecialProcessHazardResponse
         */
        type SpecialProcessHazardCallback = (error: (Error|null), response?: mond.SpecialProcessHazardResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#arrangementHazardCoefficient}.
         * @param error Error, if any
         * @param [response] ArrangementHazardCoefficientResponse
         */
        type ArrangementHazardCoefficientCallback = (error: (Error|null), response?: mond.ArrangementHazardCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#numHazardCoefficient}.
         * @param error Error, if any
         * @param [response] NumHazardCoefficientResponse
         */
        type NumHazardCoefficientCallback = (error: (Error|null), response?: mond.NumHazardCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#poisonHazardCoefficient}.
         * @param error Error, if any
         * @param [response] PoisonHazardCoefficientResponse
         */
        type PoisonHazardCoefficientCallback = (error: (Error|null), response?: mond.PoisonHazardCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#poisonHazardCoefficientGetTLVTypeExposure}.
         * @param error Error, if any
         * @param [response] PoisonHazardCoefficientGetTLVTypeExposureResponse
         */
        type PoisonHazardCoefficientGetTLVTypeExposureCallback = (error: (Error|null), response?: mond.PoisonHazardCoefficientGetTLVTypeExposureResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#containerSystemCoefficient}.
         * @param error Error, if any
         * @param [response] ContainerSystemCoefficientResponse
         */
        type ContainerSystemCoefficientCallback = (error: (Error|null), response?: mond.ContainerSystemCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#processManagementCoefficient}.
         * @param error Error, if any
         * @param [response] ProcessManagementCoefficientResponse
         */
        type ProcessManagementCoefficientCallback = (error: (Error|null), response?: mond.ProcessManagementCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialIsolationCoefficient}.
         * @param error Error, if any
         * @param [response] MaterialIsolationCoefficientResponse
         */
        type MaterialIsolationCoefficientCallback = (error: (Error|null), response?: mond.MaterialIsolationCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#safetyAttitudeCoefficient}.
         * @param error Error, if any
         * @param [response] SafetyAttitudeCoefficientResponse
         */
        type SafetyAttitudeCoefficientCallback = (error: (Error|null), response?: mond.SafetyAttitudeCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#firePreventionCoefficient}.
         * @param error Error, if any
         * @param [response] FirePreventionCoefficientResponse
         */
        type FirePreventionCoefficientCallback = (error: (Error|null), response?: mond.FirePreventionCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#fireFightingActivityCoefficient}.
         * @param error Error, if any
         * @param [response] FireFightingActivityCoefficientResponse
         */
        type FireFightingActivityCoefficientCallback = (error: (Error|null), response?: mond.FireFightingActivityCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#initialCommentIndexFinialCompensationCoefficient}.
         * @param error Error, if any
         * @param [response] InitialCommentIndexFinialCompensationCoefficientResponse
         */
        type InitialCommentIndexFinialCompensationCoefficientCallback = (error: (Error|null), response?: mond.InitialCommentIndexFinialCompensationCoefficientResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialsGet}.
         * @param error Error, if any
         * @param [response] MaterialsGetResponse
         */
        type MaterialsGetCallback = (error: (Error|null), response?: mond.MaterialsGetResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialEdit}.
         * @param error Error, if any
         * @param [response] MaterialEditResponse
         */
        type MaterialEditCallback = (error: (Error|null), response?: mond.MaterialEditResponse) => void;

        /**
         * Callback as used by {@link mond.MondService#materialDelete}.
         * @param error Error, if any
         * @param [response] MaterialDeleteResponse
         */
        type MaterialDeleteCallback = (error: (Error|null), response?: mond.MaterialDeleteResponse) => void;
    }
}
