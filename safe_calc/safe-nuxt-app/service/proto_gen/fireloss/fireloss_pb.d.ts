import * as $protobuf from "protobufjs";
/** Namespace fireloss. */
export namespace fireloss {

    /** Properties of a FireGrowthCategoryRequest. */
    interface IFireGrowthCategoryRequest {
    }

    /** Represents a FireGrowthCategoryRequest. */
    class FireGrowthCategoryRequest implements IFireGrowthCategoryRequest {

        /**
         * Constructs a new FireGrowthCategoryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IFireGrowthCategoryRequest);

        /**
         * Creates a FireGrowthCategoryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireGrowthCategoryRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.FireGrowthCategoryRequest;

        /**
         * Creates a plain object from a FireGrowthCategoryRequest message. Also converts values to other types if specified.
         * @param message FireGrowthCategoryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.FireGrowthCategoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireGrowthCategoryRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Level. */
    interface ILevel {

        /** Level name */
        name?: (string|null);

        /** Level code */
        code?: (string|null);
    }

    /** Represents a Level. */
    class Level implements ILevel {

        /**
         * Constructs a new Level.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.ILevel);

        /** Level name. */
        public name: string;

        /** Level code. */
        public code: string;

        /**
         * Creates a Level message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Level
         */
        public static fromObject(object: { [k: string]: any }): fireloss.Level;

        /**
         * Creates a plain object from a Level message. Also converts values to other types if specified.
         * @param message Level
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.Level, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Level to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Category. */
    interface ICategory {

        /** Category name */
        name?: (string|null);

        /** Category code */
        code?: (string|null);

        /** Category children */
        children?: (fireloss.ILevel[]|null);
    }

    /** Represents a Category. */
    class Category implements ICategory {

        /**
         * Constructs a new Category.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.ICategory);

        /** Category name. */
        public name: string;

        /** Category code. */
        public code: string;

        /** Category children. */
        public children: fireloss.ILevel[];

        /**
         * Creates a Category message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Category
         */
        public static fromObject(object: { [k: string]: any }): fireloss.Category;

        /**
         * Creates a plain object from a Category message. Also converts values to other types if specified.
         * @param message Category
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.Category, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Category to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireGrowthCategoryResponse. */
    interface IFireGrowthCategoryResponse {

        /** FireGrowthCategoryResponse categories */
        categories?: (fireloss.ICategory[]|null);
    }

    /** Represents a FireGrowthCategoryResponse. */
    class FireGrowthCategoryResponse implements IFireGrowthCategoryResponse {

        /**
         * Constructs a new FireGrowthCategoryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IFireGrowthCategoryResponse);

        /** FireGrowthCategoryResponse categories. */
        public categories: fireloss.ICategory[];

        /**
         * Creates a FireGrowthCategoryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireGrowthCategoryResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.FireGrowthCategoryResponse;

        /**
         * Creates a plain object from a FireGrowthCategoryResponse message. Also converts values to other types if specified.
         * @param message FireGrowthCategoryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.FireGrowthCategoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireGrowthCategoryResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireGrowthCoefficientRequest. */
    interface IFireGrowthCoefficientRequest {

        /** FireGrowthCoefficientRequest Mv */
        Mv?: (number|null);

        /** FireGrowthCoefficientRequest Hc */
        Hc?: (number|null);

        /** FireGrowthCoefficientRequest At */
        At?: (number|null);

        /** FireGrowthCoefficientRequest v */
        v?: (number|null);

        /** FireGrowthCoefficientRequest t */
        t?: (number|null);

        /** FireGrowthCoefficientRequest t0 */
        t0?: (number|null);

        /** FireGrowthCoefficientRequest places */
        places?: (string|null);

        /** FireGrowthCoefficientRequest level */
        level?: (string|null);
    }

    /** Represents a FireGrowthCoefficientRequest. */
    class FireGrowthCoefficientRequest implements IFireGrowthCoefficientRequest {

        /**
         * Constructs a new FireGrowthCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IFireGrowthCoefficientRequest);

        /** FireGrowthCoefficientRequest Mv. */
        public Mv: number;

        /** FireGrowthCoefficientRequest Hc. */
        public Hc: number;

        /** FireGrowthCoefficientRequest At. */
        public At: number;

        /** FireGrowthCoefficientRequest v. */
        public v: number;

        /** FireGrowthCoefficientRequest t. */
        public t: number;

        /** FireGrowthCoefficientRequest t0. */
        public t0: number;

        /** FireGrowthCoefficientRequest places. */
        public places: string;

        /** FireGrowthCoefficientRequest level. */
        public level: string;

        /**
         * Creates a FireGrowthCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireGrowthCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.FireGrowthCoefficientRequest;

        /**
         * Creates a plain object from a FireGrowthCoefficientRequest message. Also converts values to other types if specified.
         * @param message FireGrowthCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.FireGrowthCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireGrowthCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireGrowthCoefficientResponse. */
    interface IFireGrowthCoefficientResponse {

        /** FireGrowthCoefficientResponse fireDensityQ */
        fireDensityQ?: (number|null);

        /** FireGrowthCoefficientResponse a */
        a?: (number|null);

        /** FireGrowthCoefficientResponse fireReleaseRateQ */
        fireReleaseRateQ?: (number|null);
    }

    /** Represents a FireGrowthCoefficientResponse. */
    class FireGrowthCoefficientResponse implements IFireGrowthCoefficientResponse {

        /**
         * Constructs a new FireGrowthCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IFireGrowthCoefficientResponse);

        /** FireGrowthCoefficientResponse fireDensityQ. */
        public fireDensityQ: number;

        /** FireGrowthCoefficientResponse a. */
        public a: number;

        /** FireGrowthCoefficientResponse fireReleaseRateQ. */
        public fireReleaseRateQ: number;

        /**
         * Creates a FireGrowthCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireGrowthCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.FireGrowthCoefficientResponse;

        /**
         * Creates a plain object from a FireGrowthCoefficientResponse message. Also converts values to other types if specified.
         * @param message FireGrowthCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.FireGrowthCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireGrowthCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageOneRequest. */
    interface IStageOneRequest {

        /** StageOneRequest pA1 */
        pA1?: (number|null);

        /** StageOneRequest pA2 */
        pA2?: (number|null);

        /** StageOneRequest pA3 */
        pA3?: (number|null);

        /** StageOneRequest a */
        a?: (number|null);

        /** StageOneRequest v */
        v?: (number|null);
    }

    /** Represents a StageOneRequest. */
    class StageOneRequest implements IStageOneRequest {

        /**
         * Constructs a new StageOneRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageOneRequest);

        /** StageOneRequest pA1. */
        public pA1: number;

        /** StageOneRequest pA2. */
        public pA2: number;

        /** StageOneRequest pA3. */
        public pA3: number;

        /** StageOneRequest a. */
        public a: number;

        /** StageOneRequest v. */
        public v: number;

        /**
         * Creates a StageOneRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageOneRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageOneRequest;

        /**
         * Creates a plain object from a StageOneRequest message. Also converts values to other types if specified.
         * @param message StageOneRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageOneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageOneRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageOneResponse. */
    interface IStageOneResponse {

        /** StageOneResponse pFph1 */
        pFph1?: (number|null);

        /** StageOneResponse tFpdh1 */
        tFpdh1?: (number|null);

        /** StageOneResponse A1 */
        A1?: (number|null);
    }

    /** Represents a StageOneResponse. */
    class StageOneResponse implements IStageOneResponse {

        /**
         * Constructs a new StageOneResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageOneResponse);

        /** StageOneResponse pFph1. */
        public pFph1: number;

        /** StageOneResponse tFpdh1. */
        public tFpdh1: number;

        /** StageOneResponse A1. */
        public A1: number;

        /**
         * Creates a StageOneResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageOneResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageOneResponse;

        /**
         * Creates a plain object from a StageOneResponse message. Also converts values to other types if specified.
         * @param message StageOneResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageOneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageOneResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageTwoRequest. */
    interface IStageTwoRequest {

        /** StageTwoRequest pB1 */
        pB1?: (number|null);

        /** StageTwoRequest pB2 */
        pB2?: (number|null);

        /** StageTwoRequest pFph1 */
        pFph1?: (number|null);

        /** StageTwoRequest h */
        h?: (number|null);

        /** StageTwoRequest v */
        v?: (number|null);
    }

    /** Represents a StageTwoRequest. */
    class StageTwoRequest implements IStageTwoRequest {

        /**
         * Constructs a new StageTwoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageTwoRequest);

        /** StageTwoRequest pB1. */
        public pB1: number;

        /** StageTwoRequest pB2. */
        public pB2: number;

        /** StageTwoRequest pFph1. */
        public pFph1: number;

        /** StageTwoRequest h. */
        public h: number;

        /** StageTwoRequest v. */
        public v: number;

        /**
         * Creates a StageTwoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageTwoRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageTwoRequest;

        /**
         * Creates a plain object from a StageTwoRequest message. Also converts values to other types if specified.
         * @param message StageTwoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageTwoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageTwoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageTwoResponse. */
    interface IStageTwoResponse {

        /** StageTwoResponse pFph2 */
        pFph2?: (number|null);

        /** StageTwoResponse tFpdh2 */
        tFpdh2?: (number|null);

        /** StageTwoResponse A2 */
        A2?: (number|null);
    }

    /** Represents a StageTwoResponse. */
    class StageTwoResponse implements IStageTwoResponse {

        /**
         * Constructs a new StageTwoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageTwoResponse);

        /** StageTwoResponse pFph2. */
        public pFph2: number;

        /** StageTwoResponse tFpdh2. */
        public tFpdh2: number;

        /** StageTwoResponse A2. */
        public A2: number;

        /**
         * Creates a StageTwoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageTwoResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageTwoResponse;

        /**
         * Creates a plain object from a StageTwoResponse message. Also converts values to other types if specified.
         * @param message StageTwoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageTwoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageTwoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageThreeRequest. */
    interface IStageThreeRequest {

        /** StageThreeRequest pF */
        pF?: (number|null);

        /** StageThreeRequest tHt */
        tHt?: (number|null);

        /** StageThreeRequest Q */
        Q?: (number|null);

        /** StageThreeRequest A */
        A?: (number|null);

        /** StageThreeRequest H */
        H?: (number|null);

        /** StageThreeRequest aT */
        aT?: (number|null);

        /** StageThreeRequest tInf */
        tInf?: (number|null);

        /** StageThreeRequest t0 */
        t0?: (number|null);

        /** StageThreeRequest k */
        k?: (number|null);

        /** StageThreeRequest rho */
        rho?: (number|null);

        /** StageThreeRequest C */
        C?: (number|null);

        /** StageThreeRequest t */
        t?: (number|null);

        /** StageThreeRequest pFph2 */
        pFph2?: (number|null);
    }

    /** Represents a StageThreeRequest. */
    class StageThreeRequest implements IStageThreeRequest {

        /**
         * Constructs a new StageThreeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageThreeRequest);

        /** StageThreeRequest pF. */
        public pF: number;

        /** StageThreeRequest tHt. */
        public tHt: number;

        /** StageThreeRequest Q. */
        public Q: number;

        /** StageThreeRequest A. */
        public A: number;

        /** StageThreeRequest H. */
        public H: number;

        /** StageThreeRequest aT. */
        public aT: number;

        /** StageThreeRequest tInf. */
        public tInf: number;

        /** StageThreeRequest t0. */
        public t0: number;

        /** StageThreeRequest k. */
        public k: number;

        /** StageThreeRequest rho. */
        public rho: number;

        /** StageThreeRequest C. */
        public C: number;

        /** StageThreeRequest t. */
        public t: number;

        /** StageThreeRequest pFph2. */
        public pFph2: number;

        /**
         * Creates a StageThreeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageThreeRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageThreeRequest;

        /**
         * Creates a plain object from a StageThreeRequest message. Also converts values to other types if specified.
         * @param message StageThreeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageThreeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageThreeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageThreeResponse. */
    interface IStageThreeResponse {

        /** StageThreeResponse pFph3 */
        pFph3?: (number|null);

        /** StageThreeResponse tFph3 */
        tFph3?: (number|null);

        /** StageThreeResponse A3 */
        A3?: (number|null);
    }

    /** Represents a StageThreeResponse. */
    class StageThreeResponse implements IStageThreeResponse {

        /**
         * Constructs a new StageThreeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageThreeResponse);

        /** StageThreeResponse pFph3. */
        public pFph3: number;

        /** StageThreeResponse tFph3. */
        public tFph3: number;

        /** StageThreeResponse A3. */
        public A3: number;

        /**
         * Creates a StageThreeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageThreeResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageThreeResponse;

        /**
         * Creates a plain object from a StageThreeResponse message. Also converts values to other types if specified.
         * @param message StageThreeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageThreeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageThreeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageFourRequest. */
    interface IStageFourRequest {

        /** StageFourRequest pC1 */
        pC1?: (number|null);

        /** StageFourRequest pF */
        pF?: (number|null);

        /** StageFourRequest pFph3 */
        pFph3?: (number|null);

        /** StageFourRequest v */
        v?: (number|null);
    }

    /** Represents a StageFourRequest. */
    class StageFourRequest implements IStageFourRequest {

        /**
         * Constructs a new StageFourRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageFourRequest);

        /** StageFourRequest pC1. */
        public pC1: number;

        /** StageFourRequest pF. */
        public pF: number;

        /** StageFourRequest pFph3. */
        public pFph3: number;

        /** StageFourRequest v. */
        public v: number;

        /**
         * Creates a StageFourRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageFourRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageFourRequest;

        /**
         * Creates a plain object from a StageFourRequest message. Also converts values to other types if specified.
         * @param message StageFourRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageFourRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageFourRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageFourResponse. */
    interface IStageFourResponse {

        /** StageFourResponse pFph4 */
        pFph4?: (number|null);

        /** StageFourResponse A4 */
        A4?: (number|null);
    }

    /** Represents a StageFourResponse. */
    class StageFourResponse implements IStageFourResponse {

        /**
         * Constructs a new StageFourResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IStageFourResponse);

        /** StageFourResponse pFph4. */
        public pFph4: number;

        /** StageFourResponse A4. */
        public A4: number;

        /**
         * Creates a StageFourResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageFourResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.StageFourResponse;

        /**
         * Creates a plain object from a StageFourResponse message. Also converts values to other types if specified.
         * @param message StageFourResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.StageFourResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageFourResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BurntAreaRequest. */
    interface IBurntAreaRequest {

        /** BurntAreaRequest yL */
        yL?: (number|null);

        /** BurntAreaRequest S */
        S?: (number|null);

        /** BurntAreaRequest pFire */
        pFire?: (number|null);

        /** BurntAreaRequest pFph1 */
        pFph1?: (number|null);

        /** BurntAreaRequest pFph2 */
        pFph2?: (number|null);

        /** BurntAreaRequest pFph3 */
        pFph3?: (number|null);

        /** BurntAreaRequest pFph4 */
        pFph4?: (number|null);

        /** BurntAreaRequest A1 */
        A1?: (number|null);

        /** BurntAreaRequest A2 */
        A2?: (number|null);

        /** BurntAreaRequest A3 */
        A3?: (number|null);

        /** BurntAreaRequest A4 */
        A4?: (number|null);

        /** BurntAreaRequest wE */
        wE?: (number|null);
    }

    /** Represents a BurntAreaRequest. */
    class BurntAreaRequest implements IBurntAreaRequest {

        /**
         * Constructs a new BurntAreaRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IBurntAreaRequest);

        /** BurntAreaRequest yL. */
        public yL: number;

        /** BurntAreaRequest S. */
        public S: number;

        /** BurntAreaRequest pFire. */
        public pFire: number;

        /** BurntAreaRequest pFph1. */
        public pFph1: number;

        /** BurntAreaRequest pFph2. */
        public pFph2: number;

        /** BurntAreaRequest pFph3. */
        public pFph3: number;

        /** BurntAreaRequest pFph4. */
        public pFph4: number;

        /** BurntAreaRequest A1. */
        public A1: number;

        /** BurntAreaRequest A2. */
        public A2: number;

        /** BurntAreaRequest A3. */
        public A3: number;

        /** BurntAreaRequest A4. */
        public A4: number;

        /** BurntAreaRequest wE. */
        public wE: number;

        /**
         * Creates a BurntAreaRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BurntAreaRequest
         */
        public static fromObject(object: { [k: string]: any }): fireloss.BurntAreaRequest;

        /**
         * Creates a plain object from a BurntAreaRequest message. Also converts values to other types if specified.
         * @param message BurntAreaRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.BurntAreaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BurntAreaRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BurntAreaResponse. */
    interface IBurntAreaResponse {

        /** BurntAreaResponse aFz */
        aFz?: (number|null);

        /** BurntAreaResponse aF */
        aF?: (number|null);

        /** BurntAreaResponse eFire */
        eFire?: (number|null);
    }

    /** Represents a BurntAreaResponse. */
    class BurntAreaResponse implements IBurntAreaResponse {

        /**
         * Constructs a new BurntAreaResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: fireloss.IBurntAreaResponse);

        /** BurntAreaResponse aFz. */
        public aFz: number;

        /** BurntAreaResponse aF. */
        public aF: number;

        /** BurntAreaResponse eFire. */
        public eFire: number;

        /**
         * Creates a BurntAreaResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BurntAreaResponse
         */
        public static fromObject(object: { [k: string]: any }): fireloss.BurntAreaResponse;

        /**
         * Creates a plain object from a BurntAreaResponse message. Also converts values to other types if specified.
         * @param message BurntAreaResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fireloss.BurntAreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BurntAreaResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a FireLossService */
    class FireLossService extends $protobuf.rpc.Service {

        /**
         * Constructs a new FireLossService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls FireGrowthCoefficient.
         * @param request FireGrowthCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireGrowthCoefficientResponse
         */
        public fireGrowthCoefficient(request: fireloss.IFireGrowthCoefficientRequest, callback: fireloss.FireLossService.FireGrowthCoefficientCallback): void;

        /**
         * Calls FireGrowthCoefficient.
         * @param request FireGrowthCoefficientRequest message or plain object
         * @returns Promise
         */
        public fireGrowthCoefficient(request: fireloss.IFireGrowthCoefficientRequest): Promise<fireloss.FireGrowthCoefficientResponse>;

        /**
         * Calls FireGrowthCategory.
         * @param request FireGrowthCategoryRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireGrowthCategoryResponse
         */
        public fireGrowthCategory(request: fireloss.IFireGrowthCategoryRequest, callback: fireloss.FireLossService.FireGrowthCategoryCallback): void;

        /**
         * Calls FireGrowthCategory.
         * @param request FireGrowthCategoryRequest message or plain object
         * @returns Promise
         */
        public fireGrowthCategory(request: fireloss.IFireGrowthCategoryRequest): Promise<fireloss.FireGrowthCategoryResponse>;

        /**
         * Calls StageOne.
         * @param request StageOneRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StageOneResponse
         */
        public stageOne(request: fireloss.IStageOneRequest, callback: fireloss.FireLossService.StageOneCallback): void;

        /**
         * Calls StageOne.
         * @param request StageOneRequest message or plain object
         * @returns Promise
         */
        public stageOne(request: fireloss.IStageOneRequest): Promise<fireloss.StageOneResponse>;

        /**
         * Calls StageTwo.
         * @param request StageTwoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StageTwoResponse
         */
        public stageTwo(request: fireloss.IStageTwoRequest, callback: fireloss.FireLossService.StageTwoCallback): void;

        /**
         * Calls StageTwo.
         * @param request StageTwoRequest message or plain object
         * @returns Promise
         */
        public stageTwo(request: fireloss.IStageTwoRequest): Promise<fireloss.StageTwoResponse>;

        /**
         * Calls StageThree.
         * @param request StageThreeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StageThreeResponse
         */
        public stageThree(request: fireloss.IStageThreeRequest, callback: fireloss.FireLossService.StageThreeCallback): void;

        /**
         * Calls StageThree.
         * @param request StageThreeRequest message or plain object
         * @returns Promise
         */
        public stageThree(request: fireloss.IStageThreeRequest): Promise<fireloss.StageThreeResponse>;

        /**
         * Calls StageFour.
         * @param request StageFourRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StageFourResponse
         */
        public stageFour(request: fireloss.IStageFourRequest, callback: fireloss.FireLossService.StageFourCallback): void;

        /**
         * Calls StageFour.
         * @param request StageFourRequest message or plain object
         * @returns Promise
         */
        public stageFour(request: fireloss.IStageFourRequest): Promise<fireloss.StageFourResponse>;

        /**
         * Calls BurntArea.
         * @param request BurntAreaRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BurntAreaResponse
         */
        public burntArea(request: fireloss.IBurntAreaRequest, callback: fireloss.FireLossService.BurntAreaCallback): void;

        /**
         * Calls BurntArea.
         * @param request BurntAreaRequest message or plain object
         * @returns Promise
         */
        public burntArea(request: fireloss.IBurntAreaRequest): Promise<fireloss.BurntAreaResponse>;
    }

    namespace FireLossService {

        /**
         * Callback as used by {@link fireloss.FireLossService#fireGrowthCoefficient}.
         * @param error Error, if any
         * @param [response] FireGrowthCoefficientResponse
         */
        type FireGrowthCoefficientCallback = (error: (Error|null), response?: fireloss.FireGrowthCoefficientResponse) => void;

        /**
         * Callback as used by {@link fireloss.FireLossService#fireGrowthCategory}.
         * @param error Error, if any
         * @param [response] FireGrowthCategoryResponse
         */
        type FireGrowthCategoryCallback = (error: (Error|null), response?: fireloss.FireGrowthCategoryResponse) => void;

        /**
         * Callback as used by {@link fireloss.FireLossService#stageOne}.
         * @param error Error, if any
         * @param [response] StageOneResponse
         */
        type StageOneCallback = (error: (Error|null), response?: fireloss.StageOneResponse) => void;

        /**
         * Callback as used by {@link fireloss.FireLossService#stageTwo}.
         * @param error Error, if any
         * @param [response] StageTwoResponse
         */
        type StageTwoCallback = (error: (Error|null), response?: fireloss.StageTwoResponse) => void;

        /**
         * Callback as used by {@link fireloss.FireLossService#stageThree}.
         * @param error Error, if any
         * @param [response] StageThreeResponse
         */
        type StageThreeCallback = (error: (Error|null), response?: fireloss.StageThreeResponse) => void;

        /**
         * Callback as used by {@link fireloss.FireLossService#stageFour}.
         * @param error Error, if any
         * @param [response] StageFourResponse
         */
        type StageFourCallback = (error: (Error|null), response?: fireloss.StageFourResponse) => void;

        /**
         * Callback as used by {@link fireloss.FireLossService#burntArea}.
         * @param error Error, if any
         * @param [response] BurntAreaResponse
         */
        type BurntAreaCallback = (error: (Error|null), response?: fireloss.BurntAreaResponse) => void;
    }
}
