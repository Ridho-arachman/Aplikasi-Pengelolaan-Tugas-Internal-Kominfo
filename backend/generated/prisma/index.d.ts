
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Jabatan
 * 
 */
export type Jabatan = $Result.DefaultSelection<Prisma.$JabatanPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model HistoryJabatan
 * 
 */
export type HistoryJabatan = $Result.DefaultSelection<Prisma.$HistoryJabatanPayload>
/**
 * Model Tugas
 * 
 */
export type Tugas = $Result.DefaultSelection<Prisma.$TugasPayload>
/**
 * Model Laporan
 * 
 */
export type Laporan = $Result.DefaultSelection<Prisma.$LaporanPayload>
/**
 * Model PengumpulanTugas
 * 
 */
export type PengumpulanTugas = $Result.DefaultSelection<Prisma.$PengumpulanTugasPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Prioritas: {
  tinggi: 'tinggi',
  sedang: 'sedang',
  rendah: 'rendah'
};

export type Prioritas = (typeof Prioritas)[keyof typeof Prioritas]


export const StatusTugas: {
  pending: 'pending',
  in_progress: 'in_progress',
  selesai: 'selesai',
  dibatalkan: 'dibatalkan'
};

export type StatusTugas = (typeof StatusTugas)[keyof typeof StatusTugas]


export const StatusPengumpulanTugas: {
  menunggu: 'menunggu',
  disetujui: 'disetujui',
  revisi: 'revisi',
  ditolak: 'ditolak'
};

export type StatusPengumpulanTugas = (typeof StatusPengumpulanTugas)[keyof typeof StatusPengumpulanTugas]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Prioritas = $Enums.Prioritas

export const Prioritas: typeof $Enums.Prioritas

export type StatusTugas = $Enums.StatusTugas

export const StatusTugas: typeof $Enums.StatusTugas

export type StatusPengumpulanTugas = $Enums.StatusPengumpulanTugas

export const StatusPengumpulanTugas: typeof $Enums.StatusPengumpulanTugas

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jabatans
 * const jabatans = await prisma.jabatan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jabatans
   * const jabatans = await prisma.jabatan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.jabatan`: Exposes CRUD operations for the **Jabatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jabatans
    * const jabatans = await prisma.jabatan.findMany()
    * ```
    */
  get jabatan(): Prisma.JabatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyJabatan`: Exposes CRUD operations for the **HistoryJabatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryJabatans
    * const historyJabatans = await prisma.historyJabatan.findMany()
    * ```
    */
  get historyJabatan(): Prisma.HistoryJabatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **Tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.TugasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporan`: Exposes CRUD operations for the **Laporan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporans
    * const laporans = await prisma.laporan.findMany()
    * ```
    */
  get laporan(): Prisma.LaporanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengumpulanTugas`: Exposes CRUD operations for the **PengumpulanTugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PengumpulanTugases
    * const pengumpulanTugases = await prisma.pengumpulanTugas.findMany()
    * ```
    */
  get pengumpulanTugas(): Prisma.PengumpulanTugasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Jabatan: 'Jabatan',
    User: 'User',
    HistoryJabatan: 'HistoryJabatan',
    Tugas: 'Tugas',
    Laporan: 'Laporan',
    PengumpulanTugas: 'PengumpulanTugas',
    Rating: 'Rating'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "jabatan" | "user" | "historyJabatan" | "tugas" | "laporan" | "pengumpulanTugas" | "rating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Jabatan: {
        payload: Prisma.$JabatanPayload<ExtArgs>
        fields: Prisma.JabatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JabatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JabatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          findFirst: {
            args: Prisma.JabatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JabatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          findMany: {
            args: Prisma.JabatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>[]
          }
          create: {
            args: Prisma.JabatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          createMany: {
            args: Prisma.JabatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JabatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          update: {
            args: Prisma.JabatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          deleteMany: {
            args: Prisma.JabatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JabatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JabatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          aggregate: {
            args: Prisma.JabatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJabatan>
          }
          groupBy: {
            args: Prisma.JabatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JabatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.JabatanCountArgs<ExtArgs>
            result: $Utils.Optional<JabatanCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      HistoryJabatan: {
        payload: Prisma.$HistoryJabatanPayload<ExtArgs>
        fields: Prisma.HistoryJabatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryJabatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryJabatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>
          }
          findFirst: {
            args: Prisma.HistoryJabatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryJabatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>
          }
          findMany: {
            args: Prisma.HistoryJabatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>[]
          }
          create: {
            args: Prisma.HistoryJabatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>
          }
          createMany: {
            args: Prisma.HistoryJabatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoryJabatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>
          }
          update: {
            args: Prisma.HistoryJabatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>
          }
          deleteMany: {
            args: Prisma.HistoryJabatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryJabatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryJabatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryJabatanPayload>
          }
          aggregate: {
            args: Prisma.HistoryJabatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryJabatan>
          }
          groupBy: {
            args: Prisma.HistoryJabatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryJabatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryJabatanCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryJabatanCountAggregateOutputType> | number
          }
        }
      }
      Tugas: {
        payload: Prisma.$TugasPayload<ExtArgs>
        fields: Prisma.TugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findFirst: {
            args: Prisma.TugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findMany: {
            args: Prisma.TugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>[]
          }
          create: {
            args: Prisma.TugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          createMany: {
            args: Prisma.TugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          update: {
            args: Prisma.TugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          deleteMany: {
            args: Prisma.TugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          aggregate: {
            args: Prisma.TugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTugas>
          }
          groupBy: {
            args: Prisma.TugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.TugasCountArgs<ExtArgs>
            result: $Utils.Optional<TugasCountAggregateOutputType> | number
          }
        }
      }
      Laporan: {
        payload: Prisma.$LaporanPayload<ExtArgs>
        fields: Prisma.LaporanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findFirst: {
            args: Prisma.LaporanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findMany: {
            args: Prisma.LaporanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          create: {
            args: Prisma.LaporanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          createMany: {
            args: Prisma.LaporanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LaporanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          update: {
            args: Prisma.LaporanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LaporanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          aggregate: {
            args: Prisma.LaporanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan>
          }
          groupBy: {
            args: Prisma.LaporanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanCountAggregateOutputType> | number
          }
        }
      }
      PengumpulanTugas: {
        payload: Prisma.$PengumpulanTugasPayload<ExtArgs>
        fields: Prisma.PengumpulanTugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengumpulanTugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengumpulanTugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>
          }
          findFirst: {
            args: Prisma.PengumpulanTugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengumpulanTugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>
          }
          findMany: {
            args: Prisma.PengumpulanTugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>[]
          }
          create: {
            args: Prisma.PengumpulanTugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>
          }
          createMany: {
            args: Prisma.PengumpulanTugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PengumpulanTugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>
          }
          update: {
            args: Prisma.PengumpulanTugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>
          }
          deleteMany: {
            args: Prisma.PengumpulanTugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengumpulanTugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PengumpulanTugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumpulanTugasPayload>
          }
          aggregate: {
            args: Prisma.PengumpulanTugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengumpulanTugas>
          }
          groupBy: {
            args: Prisma.PengumpulanTugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengumpulanTugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengumpulanTugasCountArgs<ExtArgs>
            result: $Utils.Optional<PengumpulanTugasCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    jabatan?: JabatanOmit
    user?: UserOmit
    historyJabatan?: HistoryJabatanOmit
    tugas?: TugasOmit
    laporan?: LaporanOmit
    pengumpulanTugas?: PengumpulanTugasOmit
    rating?: RatingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JabatanCountOutputType
   */

  export type JabatanCountOutputType = {
    user: number
    history: number
  }

  export type JabatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | JabatanCountOutputTypeCountUserArgs
    history?: boolean | JabatanCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JabatanCountOutputType
     */
    select?: JabatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryJabatanWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bawahan: number
    history: number
    tugas: number
    laporan: number
    pengumpulan_tugas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bawahan?: boolean | UserCountOutputTypeCountBawahanArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    tugas?: boolean | UserCountOutputTypeCountTugasArgs
    laporan?: boolean | UserCountOutputTypeCountLaporanArgs
    pengumpulan_tugas?: boolean | UserCountOutputTypeCountPengumpulan_tugasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBawahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryJabatanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPengumpulan_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengumpulanTugasWhereInput
  }


  /**
   * Count Type TugasCountOutputType
   */

  export type TugasCountOutputType = {
    pengumpulan_tugas: number
  }

  export type TugasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengumpulan_tugas?: boolean | TugasCountOutputTypeCountPengumpulan_tugasArgs
  }

  // Custom InputTypes
  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasCountOutputType
     */
    select?: TugasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeCountPengumpulan_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengumpulanTugasWhereInput
  }


  /**
   * Count Type PengumpulanTugasCountOutputType
   */

  export type PengumpulanTugasCountOutputType = {
    rating: number
  }

  export type PengumpulanTugasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rating?: boolean | PengumpulanTugasCountOutputTypeCountRatingArgs
  }

  // Custom InputTypes
  /**
   * PengumpulanTugasCountOutputType without action
   */
  export type PengumpulanTugasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugasCountOutputType
     */
    select?: PengumpulanTugasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PengumpulanTugasCountOutputType without action
   */
  export type PengumpulanTugasCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Jabatan
   */

  export type AggregateJabatan = {
    _count: JabatanCountAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  export type JabatanMinAggregateOutputType = {
    kd_jabatan: string | null
    nama_jabatan: string | null
  }

  export type JabatanMaxAggregateOutputType = {
    kd_jabatan: string | null
    nama_jabatan: string | null
  }

  export type JabatanCountAggregateOutputType = {
    kd_jabatan: number
    nama_jabatan: number
    _all: number
  }


  export type JabatanMinAggregateInputType = {
    kd_jabatan?: true
    nama_jabatan?: true
  }

  export type JabatanMaxAggregateInputType = {
    kd_jabatan?: true
    nama_jabatan?: true
  }

  export type JabatanCountAggregateInputType = {
    kd_jabatan?: true
    nama_jabatan?: true
    _all?: true
  }

  export type JabatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatan to aggregate.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jabatans
    **/
    _count?: true | JabatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JabatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JabatanMaxAggregateInputType
  }

  export type GetJabatanAggregateType<T extends JabatanAggregateArgs> = {
        [P in keyof T & keyof AggregateJabatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJabatan[P]>
      : GetScalarType<T[P], AggregateJabatan[P]>
  }




  export type JabatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JabatanWhereInput
    orderBy?: JabatanOrderByWithAggregationInput | JabatanOrderByWithAggregationInput[]
    by: JabatanScalarFieldEnum[] | JabatanScalarFieldEnum
    having?: JabatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JabatanCountAggregateInputType | true
    _min?: JabatanMinAggregateInputType
    _max?: JabatanMaxAggregateInputType
  }

  export type JabatanGroupByOutputType = {
    kd_jabatan: string
    nama_jabatan: string
    _count: JabatanCountAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  type GetJabatanGroupByPayload<T extends JabatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JabatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JabatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JabatanGroupByOutputType[P]>
            : GetScalarType<T[P], JabatanGroupByOutputType[P]>
        }
      >
    >


  export type JabatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_jabatan?: boolean
    nama_jabatan?: boolean
    user?: boolean | Jabatan$userArgs<ExtArgs>
    history?: boolean | Jabatan$historyArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jabatan"]>



  export type JabatanSelectScalar = {
    kd_jabatan?: boolean
    nama_jabatan?: boolean
  }

  export type JabatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_jabatan" | "nama_jabatan", ExtArgs["result"]["jabatan"]>
  export type JabatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Jabatan$userArgs<ExtArgs>
    history?: boolean | Jabatan$historyArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JabatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jabatan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      history: Prisma.$HistoryJabatanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_jabatan: string
      nama_jabatan: string
    }, ExtArgs["result"]["jabatan"]>
    composites: {}
  }

  type JabatanGetPayload<S extends boolean | null | undefined | JabatanDefaultArgs> = $Result.GetResult<Prisma.$JabatanPayload, S>

  type JabatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JabatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JabatanCountAggregateInputType | true
    }

  export interface JabatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jabatan'], meta: { name: 'Jabatan' } }
    /**
     * Find zero or one Jabatan that matches the filter.
     * @param {JabatanFindUniqueArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JabatanFindUniqueArgs>(args: SelectSubset<T, JabatanFindUniqueArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jabatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JabatanFindUniqueOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JabatanFindUniqueOrThrowArgs>(args: SelectSubset<T, JabatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jabatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JabatanFindFirstArgs>(args?: SelectSubset<T, JabatanFindFirstArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jabatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JabatanFindFirstOrThrowArgs>(args?: SelectSubset<T, JabatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jabatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jabatans
     * const jabatans = await prisma.jabatan.findMany()
     * 
     * // Get first 10 Jabatans
     * const jabatans = await prisma.jabatan.findMany({ take: 10 })
     * 
     * // Only select the `kd_jabatan`
     * const jabatanWithKd_jabatanOnly = await prisma.jabatan.findMany({ select: { kd_jabatan: true } })
     * 
     */
    findMany<T extends JabatanFindManyArgs>(args?: SelectSubset<T, JabatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jabatan.
     * @param {JabatanCreateArgs} args - Arguments to create a Jabatan.
     * @example
     * // Create one Jabatan
     * const Jabatan = await prisma.jabatan.create({
     *   data: {
     *     // ... data to create a Jabatan
     *   }
     * })
     * 
     */
    create<T extends JabatanCreateArgs>(args: SelectSubset<T, JabatanCreateArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jabatans.
     * @param {JabatanCreateManyArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JabatanCreateManyArgs>(args?: SelectSubset<T, JabatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jabatan.
     * @param {JabatanDeleteArgs} args - Arguments to delete one Jabatan.
     * @example
     * // Delete one Jabatan
     * const Jabatan = await prisma.jabatan.delete({
     *   where: {
     *     // ... filter to delete one Jabatan
     *   }
     * })
     * 
     */
    delete<T extends JabatanDeleteArgs>(args: SelectSubset<T, JabatanDeleteArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jabatan.
     * @param {JabatanUpdateArgs} args - Arguments to update one Jabatan.
     * @example
     * // Update one Jabatan
     * const jabatan = await prisma.jabatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JabatanUpdateArgs>(args: SelectSubset<T, JabatanUpdateArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jabatans.
     * @param {JabatanDeleteManyArgs} args - Arguments to filter Jabatans to delete.
     * @example
     * // Delete a few Jabatans
     * const { count } = await prisma.jabatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JabatanDeleteManyArgs>(args?: SelectSubset<T, JabatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jabatans
     * const jabatan = await prisma.jabatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JabatanUpdateManyArgs>(args: SelectSubset<T, JabatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jabatan.
     * @param {JabatanUpsertArgs} args - Arguments to update or create a Jabatan.
     * @example
     * // Update or create a Jabatan
     * const jabatan = await prisma.jabatan.upsert({
     *   create: {
     *     // ... data to create a Jabatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jabatan we want to update
     *   }
     * })
     */
    upsert<T extends JabatanUpsertArgs>(args: SelectSubset<T, JabatanUpsertArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanCountArgs} args - Arguments to filter Jabatans to count.
     * @example
     * // Count the number of Jabatans
     * const count = await prisma.jabatan.count({
     *   where: {
     *     // ... the filter for the Jabatans we want to count
     *   }
     * })
    **/
    count<T extends JabatanCountArgs>(
      args?: Subset<T, JabatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JabatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JabatanAggregateArgs>(args: Subset<T, JabatanAggregateArgs>): Prisma.PrismaPromise<GetJabatanAggregateType<T>>

    /**
     * Group by Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JabatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JabatanGroupByArgs['orderBy'] }
        : { orderBy?: JabatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JabatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJabatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jabatan model
   */
  readonly fields: JabatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jabatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JabatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Jabatan$userArgs<ExtArgs> = {}>(args?: Subset<T, Jabatan$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Jabatan$historyArgs<ExtArgs> = {}>(args?: Subset<T, Jabatan$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jabatan model
   */
  interface JabatanFieldRefs {
    readonly kd_jabatan: FieldRef<"Jabatan", 'String'>
    readonly nama_jabatan: FieldRef<"Jabatan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jabatan findUnique
   */
  export type JabatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan findUniqueOrThrow
   */
  export type JabatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan findFirst
   */
  export type JabatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan findFirstOrThrow
   */
  export type JabatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan findMany
   */
  export type JabatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatans to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan create
   */
  export type JabatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Jabatan.
     */
    data: XOR<JabatanCreateInput, JabatanUncheckedCreateInput>
  }

  /**
   * Jabatan createMany
   */
  export type JabatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jabatans.
     */
    data: JabatanCreateManyInput | JabatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jabatan update
   */
  export type JabatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Jabatan.
     */
    data: XOR<JabatanUpdateInput, JabatanUncheckedUpdateInput>
    /**
     * Choose, which Jabatan to update.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan updateMany
   */
  export type JabatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jabatans.
     */
    data: XOR<JabatanUpdateManyMutationInput, JabatanUncheckedUpdateManyInput>
    /**
     * Filter which Jabatans to update
     */
    where?: JabatanWhereInput
    /**
     * Limit how many Jabatans to update.
     */
    limit?: number
  }

  /**
   * Jabatan upsert
   */
  export type JabatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Jabatan to update in case it exists.
     */
    where: JabatanWhereUniqueInput
    /**
     * In case the Jabatan found by the `where` argument doesn't exist, create a new Jabatan with this data.
     */
    create: XOR<JabatanCreateInput, JabatanUncheckedCreateInput>
    /**
     * In case the Jabatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JabatanUpdateInput, JabatanUncheckedUpdateInput>
  }

  /**
   * Jabatan delete
   */
  export type JabatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter which Jabatan to delete.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan deleteMany
   */
  export type JabatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatans to delete
     */
    where?: JabatanWhereInput
    /**
     * Limit how many Jabatans to delete.
     */
    limit?: number
  }

  /**
   * Jabatan.user
   */
  export type Jabatan$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Jabatan.history
   */
  export type Jabatan$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    where?: HistoryJabatanWhereInput
    orderBy?: HistoryJabatanOrderByWithRelationInput | HistoryJabatanOrderByWithRelationInput[]
    cursor?: HistoryJabatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryJabatanScalarFieldEnum | HistoryJabatanScalarFieldEnum[]
  }

  /**
   * Jabatan without action
   */
  export type JabatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jabatan
     */
    omit?: JabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    password: string | null
    role: $Enums.Role | null
    kd_jabatan: string | null
    nip_atasan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    password: string | null
    role: $Enums.Role | null
    kd_jabatan: string | null
    nip_atasan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    nip: number
    nama: number
    password: number
    role: number
    kd_jabatan: number
    nip_atasan: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    nip?: true
    nama?: true
    password?: true
    role?: true
    kd_jabatan?: true
    nip_atasan?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    nip?: true
    nama?: true
    password?: true
    role?: true
    kd_jabatan?: true
    nip_atasan?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    nip?: true
    nama?: true
    password?: true
    role?: true
    kd_jabatan?: true
    nip_atasan?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    nip: string
    nama: string
    password: string
    role: $Enums.Role
    kd_jabatan: string
    nip_atasan: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    password?: boolean
    role?: boolean
    kd_jabatan?: boolean
    nip_atasan?: boolean
    created_at?: boolean
    updated_at?: boolean
    atasan?: boolean | User$atasanArgs<ExtArgs>
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    bawahan?: boolean | User$bawahanArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    tugas?: boolean | User$tugasArgs<ExtArgs>
    laporan?: boolean | User$laporanArgs<ExtArgs>
    pengumpulan_tugas?: boolean | User$pengumpulan_tugasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    nip?: boolean
    nama?: boolean
    password?: boolean
    role?: boolean
    kd_jabatan?: boolean
    nip_atasan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "password" | "role" | "kd_jabatan" | "nip_atasan" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atasan?: boolean | User$atasanArgs<ExtArgs>
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    bawahan?: boolean | User$bawahanArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    tugas?: boolean | User$tugasArgs<ExtArgs>
    laporan?: boolean | User$laporanArgs<ExtArgs>
    pengumpulan_tugas?: boolean | User$pengumpulan_tugasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      atasan: Prisma.$UserPayload<ExtArgs> | null
      jabatan: Prisma.$JabatanPayload<ExtArgs>
      bawahan: Prisma.$UserPayload<ExtArgs>[]
      history: Prisma.$HistoryJabatanPayload<ExtArgs>[]
      tugas: Prisma.$TugasPayload<ExtArgs>[]
      laporan: Prisma.$LaporanPayload<ExtArgs>[]
      pengumpulan_tugas: Prisma.$PengumpulanTugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      password: string
      role: $Enums.Role
      kd_jabatan: string
      nip_atasan: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const userWithNipOnly = await prisma.user.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atasan<T extends User$atasanArgs<ExtArgs> = {}>(args?: Subset<T, User$atasanArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jabatan<T extends JabatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JabatanDefaultArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bawahan<T extends User$bawahanArgs<ExtArgs> = {}>(args?: Subset<T, User$bawahanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tugas<T extends User$tugasArgs<ExtArgs> = {}>(args?: Subset<T, User$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    laporan<T extends User$laporanArgs<ExtArgs> = {}>(args?: Subset<T, User$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengumpulan_tugas<T extends User$pengumpulan_tugasArgs<ExtArgs> = {}>(args?: Subset<T, User$pengumpulan_tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly nip: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly kd_jabatan: FieldRef<"User", 'String'>
    readonly nip_atasan: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.atasan
   */
  export type User$atasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.bawahan
   */
  export type User$bawahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    where?: HistoryJabatanWhereInput
    orderBy?: HistoryJabatanOrderByWithRelationInput | HistoryJabatanOrderByWithRelationInput[]
    cursor?: HistoryJabatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryJabatanScalarFieldEnum | HistoryJabatanScalarFieldEnum[]
  }

  /**
   * User.tugas
   */
  export type User$tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    cursor?: TugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * User.laporan
   */
  export type User$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * User.pengumpulan_tugas
   */
  export type User$pengumpulan_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    where?: PengumpulanTugasWhereInput
    orderBy?: PengumpulanTugasOrderByWithRelationInput | PengumpulanTugasOrderByWithRelationInput[]
    cursor?: PengumpulanTugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PengumpulanTugasScalarFieldEnum | PengumpulanTugasScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model HistoryJabatan
   */

  export type AggregateHistoryJabatan = {
    _count: HistoryJabatanCountAggregateOutputType | null
    _min: HistoryJabatanMinAggregateOutputType | null
    _max: HistoryJabatanMaxAggregateOutputType | null
  }

  export type HistoryJabatanMinAggregateOutputType = {
    id: string | null
    user_nip: string | null
    kd_jabatan: string | null
    tanggal_mulai: Date | null
    tanggal_akhir: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HistoryJabatanMaxAggregateOutputType = {
    id: string | null
    user_nip: string | null
    kd_jabatan: string | null
    tanggal_mulai: Date | null
    tanggal_akhir: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HistoryJabatanCountAggregateOutputType = {
    id: number
    user_nip: number
    kd_jabatan: number
    tanggal_mulai: number
    tanggal_akhir: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HistoryJabatanMinAggregateInputType = {
    id?: true
    user_nip?: true
    kd_jabatan?: true
    tanggal_mulai?: true
    tanggal_akhir?: true
    created_at?: true
    updated_at?: true
  }

  export type HistoryJabatanMaxAggregateInputType = {
    id?: true
    user_nip?: true
    kd_jabatan?: true
    tanggal_mulai?: true
    tanggal_akhir?: true
    created_at?: true
    updated_at?: true
  }

  export type HistoryJabatanCountAggregateInputType = {
    id?: true
    user_nip?: true
    kd_jabatan?: true
    tanggal_mulai?: true
    tanggal_akhir?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HistoryJabatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryJabatan to aggregate.
     */
    where?: HistoryJabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryJabatans to fetch.
     */
    orderBy?: HistoryJabatanOrderByWithRelationInput | HistoryJabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryJabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryJabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryJabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryJabatans
    **/
    _count?: true | HistoryJabatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryJabatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryJabatanMaxAggregateInputType
  }

  export type GetHistoryJabatanAggregateType<T extends HistoryJabatanAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryJabatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryJabatan[P]>
      : GetScalarType<T[P], AggregateHistoryJabatan[P]>
  }




  export type HistoryJabatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryJabatanWhereInput
    orderBy?: HistoryJabatanOrderByWithAggregationInput | HistoryJabatanOrderByWithAggregationInput[]
    by: HistoryJabatanScalarFieldEnum[] | HistoryJabatanScalarFieldEnum
    having?: HistoryJabatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryJabatanCountAggregateInputType | true
    _min?: HistoryJabatanMinAggregateInputType
    _max?: HistoryJabatanMaxAggregateInputType
  }

  export type HistoryJabatanGroupByOutputType = {
    id: string
    user_nip: string
    kd_jabatan: string
    tanggal_mulai: Date
    tanggal_akhir: Date | null
    created_at: Date
    updated_at: Date
    _count: HistoryJabatanCountAggregateOutputType | null
    _min: HistoryJabatanMinAggregateOutputType | null
    _max: HistoryJabatanMaxAggregateOutputType | null
  }

  type GetHistoryJabatanGroupByPayload<T extends HistoryJabatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryJabatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryJabatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryJabatanGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryJabatanGroupByOutputType[P]>
        }
      >
    >


  export type HistoryJabatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_nip?: boolean
    kd_jabatan?: boolean
    tanggal_mulai?: boolean
    tanggal_akhir?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyJabatan"]>



  export type HistoryJabatanSelectScalar = {
    id?: boolean
    user_nip?: boolean
    kd_jabatan?: boolean
    tanggal_mulai?: boolean
    tanggal_akhir?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HistoryJabatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_nip" | "kd_jabatan" | "tanggal_mulai" | "tanggal_akhir" | "created_at" | "updated_at", ExtArgs["result"]["historyJabatan"]>
  export type HistoryJabatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
  }

  export type $HistoryJabatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryJabatan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jabatan: Prisma.$JabatanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_nip: string
      kd_jabatan: string
      tanggal_mulai: Date
      tanggal_akhir: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["historyJabatan"]>
    composites: {}
  }

  type HistoryJabatanGetPayload<S extends boolean | null | undefined | HistoryJabatanDefaultArgs> = $Result.GetResult<Prisma.$HistoryJabatanPayload, S>

  type HistoryJabatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryJabatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryJabatanCountAggregateInputType | true
    }

  export interface HistoryJabatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryJabatan'], meta: { name: 'HistoryJabatan' } }
    /**
     * Find zero or one HistoryJabatan that matches the filter.
     * @param {HistoryJabatanFindUniqueArgs} args - Arguments to find a HistoryJabatan
     * @example
     * // Get one HistoryJabatan
     * const historyJabatan = await prisma.historyJabatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryJabatanFindUniqueArgs>(args: SelectSubset<T, HistoryJabatanFindUniqueArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryJabatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryJabatanFindUniqueOrThrowArgs} args - Arguments to find a HistoryJabatan
     * @example
     * // Get one HistoryJabatan
     * const historyJabatan = await prisma.historyJabatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryJabatanFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryJabatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryJabatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanFindFirstArgs} args - Arguments to find a HistoryJabatan
     * @example
     * // Get one HistoryJabatan
     * const historyJabatan = await prisma.historyJabatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryJabatanFindFirstArgs>(args?: SelectSubset<T, HistoryJabatanFindFirstArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryJabatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanFindFirstOrThrowArgs} args - Arguments to find a HistoryJabatan
     * @example
     * // Get one HistoryJabatan
     * const historyJabatan = await prisma.historyJabatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryJabatanFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryJabatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryJabatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryJabatans
     * const historyJabatans = await prisma.historyJabatan.findMany()
     * 
     * // Get first 10 HistoryJabatans
     * const historyJabatans = await prisma.historyJabatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyJabatanWithIdOnly = await prisma.historyJabatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryJabatanFindManyArgs>(args?: SelectSubset<T, HistoryJabatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryJabatan.
     * @param {HistoryJabatanCreateArgs} args - Arguments to create a HistoryJabatan.
     * @example
     * // Create one HistoryJabatan
     * const HistoryJabatan = await prisma.historyJabatan.create({
     *   data: {
     *     // ... data to create a HistoryJabatan
     *   }
     * })
     * 
     */
    create<T extends HistoryJabatanCreateArgs>(args: SelectSubset<T, HistoryJabatanCreateArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryJabatans.
     * @param {HistoryJabatanCreateManyArgs} args - Arguments to create many HistoryJabatans.
     * @example
     * // Create many HistoryJabatans
     * const historyJabatan = await prisma.historyJabatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryJabatanCreateManyArgs>(args?: SelectSubset<T, HistoryJabatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoryJabatan.
     * @param {HistoryJabatanDeleteArgs} args - Arguments to delete one HistoryJabatan.
     * @example
     * // Delete one HistoryJabatan
     * const HistoryJabatan = await prisma.historyJabatan.delete({
     *   where: {
     *     // ... filter to delete one HistoryJabatan
     *   }
     * })
     * 
     */
    delete<T extends HistoryJabatanDeleteArgs>(args: SelectSubset<T, HistoryJabatanDeleteArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryJabatan.
     * @param {HistoryJabatanUpdateArgs} args - Arguments to update one HistoryJabatan.
     * @example
     * // Update one HistoryJabatan
     * const historyJabatan = await prisma.historyJabatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryJabatanUpdateArgs>(args: SelectSubset<T, HistoryJabatanUpdateArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryJabatans.
     * @param {HistoryJabatanDeleteManyArgs} args - Arguments to filter HistoryJabatans to delete.
     * @example
     * // Delete a few HistoryJabatans
     * const { count } = await prisma.historyJabatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryJabatanDeleteManyArgs>(args?: SelectSubset<T, HistoryJabatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryJabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryJabatans
     * const historyJabatan = await prisma.historyJabatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryJabatanUpdateManyArgs>(args: SelectSubset<T, HistoryJabatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoryJabatan.
     * @param {HistoryJabatanUpsertArgs} args - Arguments to update or create a HistoryJabatan.
     * @example
     * // Update or create a HistoryJabatan
     * const historyJabatan = await prisma.historyJabatan.upsert({
     *   create: {
     *     // ... data to create a HistoryJabatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryJabatan we want to update
     *   }
     * })
     */
    upsert<T extends HistoryJabatanUpsertArgs>(args: SelectSubset<T, HistoryJabatanUpsertArgs<ExtArgs>>): Prisma__HistoryJabatanClient<$Result.GetResult<Prisma.$HistoryJabatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryJabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanCountArgs} args - Arguments to filter HistoryJabatans to count.
     * @example
     * // Count the number of HistoryJabatans
     * const count = await prisma.historyJabatan.count({
     *   where: {
     *     // ... the filter for the HistoryJabatans we want to count
     *   }
     * })
    **/
    count<T extends HistoryJabatanCountArgs>(
      args?: Subset<T, HistoryJabatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryJabatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryJabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryJabatanAggregateArgs>(args: Subset<T, HistoryJabatanAggregateArgs>): Prisma.PrismaPromise<GetHistoryJabatanAggregateType<T>>

    /**
     * Group by HistoryJabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryJabatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryJabatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryJabatanGroupByArgs['orderBy'] }
        : { orderBy?: HistoryJabatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryJabatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryJabatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryJabatan model
   */
  readonly fields: HistoryJabatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryJabatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryJabatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jabatan<T extends JabatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JabatanDefaultArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryJabatan model
   */
  interface HistoryJabatanFieldRefs {
    readonly id: FieldRef<"HistoryJabatan", 'String'>
    readonly user_nip: FieldRef<"HistoryJabatan", 'String'>
    readonly kd_jabatan: FieldRef<"HistoryJabatan", 'String'>
    readonly tanggal_mulai: FieldRef<"HistoryJabatan", 'DateTime'>
    readonly tanggal_akhir: FieldRef<"HistoryJabatan", 'DateTime'>
    readonly created_at: FieldRef<"HistoryJabatan", 'DateTime'>
    readonly updated_at: FieldRef<"HistoryJabatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoryJabatan findUnique
   */
  export type HistoryJabatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryJabatan to fetch.
     */
    where: HistoryJabatanWhereUniqueInput
  }

  /**
   * HistoryJabatan findUniqueOrThrow
   */
  export type HistoryJabatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryJabatan to fetch.
     */
    where: HistoryJabatanWhereUniqueInput
  }

  /**
   * HistoryJabatan findFirst
   */
  export type HistoryJabatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryJabatan to fetch.
     */
    where?: HistoryJabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryJabatans to fetch.
     */
    orderBy?: HistoryJabatanOrderByWithRelationInput | HistoryJabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryJabatans.
     */
    cursor?: HistoryJabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryJabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryJabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryJabatans.
     */
    distinct?: HistoryJabatanScalarFieldEnum | HistoryJabatanScalarFieldEnum[]
  }

  /**
   * HistoryJabatan findFirstOrThrow
   */
  export type HistoryJabatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryJabatan to fetch.
     */
    where?: HistoryJabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryJabatans to fetch.
     */
    orderBy?: HistoryJabatanOrderByWithRelationInput | HistoryJabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryJabatans.
     */
    cursor?: HistoryJabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryJabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryJabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryJabatans.
     */
    distinct?: HistoryJabatanScalarFieldEnum | HistoryJabatanScalarFieldEnum[]
  }

  /**
   * HistoryJabatan findMany
   */
  export type HistoryJabatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryJabatans to fetch.
     */
    where?: HistoryJabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryJabatans to fetch.
     */
    orderBy?: HistoryJabatanOrderByWithRelationInput | HistoryJabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryJabatans.
     */
    cursor?: HistoryJabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryJabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryJabatans.
     */
    skip?: number
    distinct?: HistoryJabatanScalarFieldEnum | HistoryJabatanScalarFieldEnum[]
  }

  /**
   * HistoryJabatan create
   */
  export type HistoryJabatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryJabatan.
     */
    data: XOR<HistoryJabatanCreateInput, HistoryJabatanUncheckedCreateInput>
  }

  /**
   * HistoryJabatan createMany
   */
  export type HistoryJabatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryJabatans.
     */
    data: HistoryJabatanCreateManyInput | HistoryJabatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryJabatan update
   */
  export type HistoryJabatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryJabatan.
     */
    data: XOR<HistoryJabatanUpdateInput, HistoryJabatanUncheckedUpdateInput>
    /**
     * Choose, which HistoryJabatan to update.
     */
    where: HistoryJabatanWhereUniqueInput
  }

  /**
   * HistoryJabatan updateMany
   */
  export type HistoryJabatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryJabatans.
     */
    data: XOR<HistoryJabatanUpdateManyMutationInput, HistoryJabatanUncheckedUpdateManyInput>
    /**
     * Filter which HistoryJabatans to update
     */
    where?: HistoryJabatanWhereInput
    /**
     * Limit how many HistoryJabatans to update.
     */
    limit?: number
  }

  /**
   * HistoryJabatan upsert
   */
  export type HistoryJabatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryJabatan to update in case it exists.
     */
    where: HistoryJabatanWhereUniqueInput
    /**
     * In case the HistoryJabatan found by the `where` argument doesn't exist, create a new HistoryJabatan with this data.
     */
    create: XOR<HistoryJabatanCreateInput, HistoryJabatanUncheckedCreateInput>
    /**
     * In case the HistoryJabatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryJabatanUpdateInput, HistoryJabatanUncheckedUpdateInput>
  }

  /**
   * HistoryJabatan delete
   */
  export type HistoryJabatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
    /**
     * Filter which HistoryJabatan to delete.
     */
    where: HistoryJabatanWhereUniqueInput
  }

  /**
   * HistoryJabatan deleteMany
   */
  export type HistoryJabatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryJabatans to delete
     */
    where?: HistoryJabatanWhereInput
    /**
     * Limit how many HistoryJabatans to delete.
     */
    limit?: number
  }

  /**
   * HistoryJabatan without action
   */
  export type HistoryJabatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryJabatan
     */
    select?: HistoryJabatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryJabatan
     */
    omit?: HistoryJabatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryJabatanInclude<ExtArgs> | null
  }


  /**
   * Model Tugas
   */

  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  export type TugasMinAggregateOutputType = {
    kd_tugas: string | null
    judul: string | null
    deskripsi: string | null
    user_nip: string | null
    status: $Enums.StatusTugas | null
    deadline: Date | null
    prioritas: $Enums.Prioritas | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TugasMaxAggregateOutputType = {
    kd_tugas: string | null
    judul: string | null
    deskripsi: string | null
    user_nip: string | null
    status: $Enums.StatusTugas | null
    deadline: Date | null
    prioritas: $Enums.Prioritas | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TugasCountAggregateOutputType = {
    kd_tugas: number
    judul: number
    deskripsi: number
    user_nip: number
    status: number
    deadline: number
    prioritas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TugasMinAggregateInputType = {
    kd_tugas?: true
    judul?: true
    deskripsi?: true
    user_nip?: true
    status?: true
    deadline?: true
    prioritas?: true
    created_at?: true
    updated_at?: true
  }

  export type TugasMaxAggregateInputType = {
    kd_tugas?: true
    judul?: true
    deskripsi?: true
    user_nip?: true
    status?: true
    deadline?: true
    prioritas?: true
    created_at?: true
    updated_at?: true
  }

  export type TugasCountAggregateInputType = {
    kd_tugas?: true
    judul?: true
    deskripsi?: true
    user_nip?: true
    status?: true
    deadline?: true
    prioritas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugas to aggregate.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }




  export type TugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithAggregationInput | TugasOrderByWithAggregationInput[]
    by: TugasScalarFieldEnum[] | TugasScalarFieldEnum
    having?: TugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }

  export type TugasGroupByOutputType = {
    kd_tugas: string
    judul: string
    deskripsi: string
    user_nip: string
    status: $Enums.StatusTugas
    deadline: Date
    prioritas: $Enums.Prioritas
    created_at: Date
    updated_at: Date
    _count: TugasCountAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends TugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasGroupByOutputType[P]>
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      >
    >


  export type TugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_tugas?: boolean
    judul?: boolean
    deskripsi?: boolean
    user_nip?: boolean
    status?: boolean
    deadline?: boolean
    prioritas?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pengumpulan_tugas?: boolean | Tugas$pengumpulan_tugasArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>



  export type TugasSelectScalar = {
    kd_tugas?: boolean
    judul?: boolean
    deskripsi?: boolean
    user_nip?: boolean
    status?: boolean
    deadline?: boolean
    prioritas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_tugas" | "judul" | "deskripsi" | "user_nip" | "status" | "deadline" | "prioritas" | "created_at" | "updated_at", ExtArgs["result"]["tugas"]>
  export type TugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pengumpulan_tugas?: boolean | Tugas$pengumpulan_tugasArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tugas"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pengumpulan_tugas: Prisma.$PengumpulanTugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_tugas: string
      judul: string
      deskripsi: string
      user_nip: string
      status: $Enums.StatusTugas
      deadline: Date
      prioritas: $Enums.Prioritas
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tugas"]>
    composites: {}
  }

  type TugasGetPayload<S extends boolean | null | undefined | TugasDefaultArgs> = $Result.GetResult<Prisma.$TugasPayload, S>

  type TugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TugasCountAggregateInputType | true
    }

  export interface TugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tugas'], meta: { name: 'Tugas' } }
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {TugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TugasFindUniqueArgs>(args: SelectSubset<T, TugasFindUniqueArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TugasFindUniqueOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TugasFindUniqueOrThrowArgs>(args: SelectSubset<T, TugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TugasFindFirstArgs>(args?: SelectSubset<T, TugasFindFirstArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TugasFindFirstOrThrowArgs>(args?: SelectSubset<T, TugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `kd_tugas`
     * const tugasWithKd_tugasOnly = await prisma.tugas.findMany({ select: { kd_tugas: true } })
     * 
     */
    findMany<T extends TugasFindManyArgs>(args?: SelectSubset<T, TugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tugas.
     * @param {TugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
     */
    create<T extends TugasCreateArgs>(args: SelectSubset<T, TugasCreateArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tugases.
     * @param {TugasCreateManyArgs} args - Arguments to create many Tugases.
     * @example
     * // Create many Tugases
     * const tugas = await prisma.tugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TugasCreateManyArgs>(args?: SelectSubset<T, TugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas.
     * @param {TugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
     */
    delete<T extends TugasDeleteArgs>(args: SelectSubset<T, TugasDeleteArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tugas.
     * @param {TugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TugasUpdateArgs>(args: SelectSubset<T, TugasUpdateArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tugases.
     * @param {TugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TugasDeleteManyArgs>(args?: SelectSubset<T, TugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TugasUpdateManyArgs>(args: SelectSubset<T, TugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas.
     * @param {TugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
     */
    upsert<T extends TugasUpsertArgs>(args: SelectSubset<T, TugasUpsertArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends TugasCountArgs>(
      args?: Subset<T, TugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): Prisma.PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TugasGroupByArgs['orderBy'] }
        : { orderBy?: TugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tugas model
   */
  readonly fields: TugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pengumpulan_tugas<T extends Tugas$pengumpulan_tugasArgs<ExtArgs> = {}>(args?: Subset<T, Tugas$pengumpulan_tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tugas model
   */
  interface TugasFieldRefs {
    readonly kd_tugas: FieldRef<"Tugas", 'String'>
    readonly judul: FieldRef<"Tugas", 'String'>
    readonly deskripsi: FieldRef<"Tugas", 'String'>
    readonly user_nip: FieldRef<"Tugas", 'String'>
    readonly status: FieldRef<"Tugas", 'StatusTugas'>
    readonly deadline: FieldRef<"Tugas", 'DateTime'>
    readonly prioritas: FieldRef<"Tugas", 'Prioritas'>
    readonly created_at: FieldRef<"Tugas", 'DateTime'>
    readonly updated_at: FieldRef<"Tugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tugas findUnique
   */
  export type TugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas findUniqueOrThrow
   */
  export type TugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas findFirst
   */
  export type TugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas findFirstOrThrow
   */
  export type TugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas findMany
   */
  export type TugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugases to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas create
   */
  export type TugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to create a Tugas.
     */
    data: XOR<TugasCreateInput, TugasUncheckedCreateInput>
  }

  /**
   * Tugas createMany
   */
  export type TugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tugases.
     */
    data: TugasCreateManyInput | TugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tugas update
   */
  export type TugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to update a Tugas.
     */
    data: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
    /**
     * Choose, which Tugas to update.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas updateMany
   */
  export type TugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tugases.
     */
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyInput>
    /**
     * Filter which Tugases to update
     */
    where?: TugasWhereInput
    /**
     * Limit how many Tugases to update.
     */
    limit?: number
  }

  /**
   * Tugas upsert
   */
  export type TugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The filter to search for the Tugas to update in case it exists.
     */
    where: TugasWhereUniqueInput
    /**
     * In case the Tugas found by the `where` argument doesn't exist, create a new Tugas with this data.
     */
    create: XOR<TugasCreateInput, TugasUncheckedCreateInput>
    /**
     * In case the Tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
  }

  /**
   * Tugas delete
   */
  export type TugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter which Tugas to delete.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas deleteMany
   */
  export type TugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugases to delete
     */
    where?: TugasWhereInput
    /**
     * Limit how many Tugases to delete.
     */
    limit?: number
  }

  /**
   * Tugas.pengumpulan_tugas
   */
  export type Tugas$pengumpulan_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    where?: PengumpulanTugasWhereInput
    orderBy?: PengumpulanTugasOrderByWithRelationInput | PengumpulanTugasOrderByWithRelationInput[]
    cursor?: PengumpulanTugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PengumpulanTugasScalarFieldEnum | PengumpulanTugasScalarFieldEnum[]
  }

  /**
   * Tugas without action
   */
  export type TugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tugas
     */
    omit?: TugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
  }


  /**
   * Model Laporan
   */

  export type AggregateLaporan = {
    _count: LaporanCountAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  export type LaporanMinAggregateOutputType = {
    kd_laporan: string | null
    isi_laporan: string | null
    judul_laporan: string | null
    user_nip: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LaporanMaxAggregateOutputType = {
    kd_laporan: string | null
    isi_laporan: string | null
    judul_laporan: string | null
    user_nip: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LaporanCountAggregateOutputType = {
    kd_laporan: number
    isi_laporan: number
    judul_laporan: number
    user_nip: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LaporanMinAggregateInputType = {
    kd_laporan?: true
    isi_laporan?: true
    judul_laporan?: true
    user_nip?: true
    created_at?: true
    updated_at?: true
  }

  export type LaporanMaxAggregateInputType = {
    kd_laporan?: true
    isi_laporan?: true
    judul_laporan?: true
    user_nip?: true
    created_at?: true
    updated_at?: true
  }

  export type LaporanCountAggregateInputType = {
    kd_laporan?: true
    isi_laporan?: true
    judul_laporan?: true
    user_nip?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LaporanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporan to aggregate.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laporans
    **/
    _count?: true | LaporanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanMaxAggregateInputType
  }

  export type GetLaporanAggregateType<T extends LaporanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan[P]>
      : GetScalarType<T[P], AggregateLaporan[P]>
  }




  export type LaporanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithAggregationInput | LaporanOrderByWithAggregationInput[]
    by: LaporanScalarFieldEnum[] | LaporanScalarFieldEnum
    having?: LaporanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanCountAggregateInputType | true
    _min?: LaporanMinAggregateInputType
    _max?: LaporanMaxAggregateInputType
  }

  export type LaporanGroupByOutputType = {
    kd_laporan: string
    isi_laporan: string
    judul_laporan: string
    user_nip: string
    created_at: Date
    updated_at: Date
    _count: LaporanCountAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  type GetLaporanGroupByPayload<T extends LaporanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_laporan?: boolean
    isi_laporan?: boolean
    judul_laporan?: boolean
    user_nip?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>



  export type LaporanSelectScalar = {
    kd_laporan?: boolean
    isi_laporan?: boolean
    judul_laporan?: boolean
    user_nip?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LaporanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_laporan" | "isi_laporan" | "judul_laporan" | "user_nip" | "created_at" | "updated_at", ExtArgs["result"]["laporan"]>
  export type LaporanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LaporanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laporan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_laporan: string
      isi_laporan: string
      judul_laporan: string
      user_nip: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["laporan"]>
    composites: {}
  }

  type LaporanGetPayload<S extends boolean | null | undefined | LaporanDefaultArgs> = $Result.GetResult<Prisma.$LaporanPayload, S>

  type LaporanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanCountAggregateInputType | true
    }

  export interface LaporanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laporan'], meta: { name: 'Laporan' } }
    /**
     * Find zero or one Laporan that matches the filter.
     * @param {LaporanFindUniqueArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanFindUniqueArgs>(args: SelectSubset<T, LaporanFindUniqueArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laporan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanFindUniqueOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanFindFirstArgs>(args?: SelectSubset<T, LaporanFindFirstArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laporans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporans
     * const laporans = await prisma.laporan.findMany()
     * 
     * // Get first 10 Laporans
     * const laporans = await prisma.laporan.findMany({ take: 10 })
     * 
     * // Only select the `kd_laporan`
     * const laporanWithKd_laporanOnly = await prisma.laporan.findMany({ select: { kd_laporan: true } })
     * 
     */
    findMany<T extends LaporanFindManyArgs>(args?: SelectSubset<T, LaporanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laporan.
     * @param {LaporanCreateArgs} args - Arguments to create a Laporan.
     * @example
     * // Create one Laporan
     * const Laporan = await prisma.laporan.create({
     *   data: {
     *     // ... data to create a Laporan
     *   }
     * })
     * 
     */
    create<T extends LaporanCreateArgs>(args: SelectSubset<T, LaporanCreateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laporans.
     * @param {LaporanCreateManyArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanCreateManyArgs>(args?: SelectSubset<T, LaporanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Laporan.
     * @param {LaporanDeleteArgs} args - Arguments to delete one Laporan.
     * @example
     * // Delete one Laporan
     * const Laporan = await prisma.laporan.delete({
     *   where: {
     *     // ... filter to delete one Laporan
     *   }
     * })
     * 
     */
    delete<T extends LaporanDeleteArgs>(args: SelectSubset<T, LaporanDeleteArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laporan.
     * @param {LaporanUpdateArgs} args - Arguments to update one Laporan.
     * @example
     * // Update one Laporan
     * const laporan = await prisma.laporan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanUpdateArgs>(args: SelectSubset<T, LaporanUpdateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laporans.
     * @param {LaporanDeleteManyArgs} args - Arguments to filter Laporans to delete.
     * @example
     * // Delete a few Laporans
     * const { count } = await prisma.laporan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanDeleteManyArgs>(args?: SelectSubset<T, LaporanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanUpdateManyArgs>(args: SelectSubset<T, LaporanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Laporan.
     * @param {LaporanUpsertArgs} args - Arguments to update or create a Laporan.
     * @example
     * // Update or create a Laporan
     * const laporan = await prisma.laporan.upsert({
     *   create: {
     *     // ... data to create a Laporan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanUpsertArgs>(args: SelectSubset<T, LaporanUpsertArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCountArgs} args - Arguments to filter Laporans to count.
     * @example
     * // Count the number of Laporans
     * const count = await prisma.laporan.count({
     *   where: {
     *     // ... the filter for the Laporans we want to count
     *   }
     * })
    **/
    count<T extends LaporanCountArgs>(
      args?: Subset<T, LaporanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaporanAggregateArgs>(args: Subset<T, LaporanAggregateArgs>): Prisma.PrismaPromise<GetLaporanAggregateType<T>>

    /**
     * Group by Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaporanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laporan model
   */
  readonly fields: LaporanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laporan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Laporan model
   */
  interface LaporanFieldRefs {
    readonly kd_laporan: FieldRef<"Laporan", 'String'>
    readonly isi_laporan: FieldRef<"Laporan", 'String'>
    readonly judul_laporan: FieldRef<"Laporan", 'String'>
    readonly user_nip: FieldRef<"Laporan", 'String'>
    readonly created_at: FieldRef<"Laporan", 'DateTime'>
    readonly updated_at: FieldRef<"Laporan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Laporan findUnique
   */
  export type LaporanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findUniqueOrThrow
   */
  export type LaporanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findFirst
   */
  export type LaporanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findFirstOrThrow
   */
  export type LaporanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findMany
   */
  export type LaporanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporans to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan create
   */
  export type LaporanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to create a Laporan.
     */
    data: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
  }

  /**
   * Laporan createMany
   */
  export type LaporanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan update
   */
  export type LaporanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to update a Laporan.
     */
    data: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
    /**
     * Choose, which Laporan to update.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan updateMany
   */
  export type LaporanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
  }

  /**
   * Laporan upsert
   */
  export type LaporanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The filter to search for the Laporan to update in case it exists.
     */
    where: LaporanWhereUniqueInput
    /**
     * In case the Laporan found by the `where` argument doesn't exist, create a new Laporan with this data.
     */
    create: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
    /**
     * In case the Laporan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
  }

  /**
   * Laporan delete
   */
  export type LaporanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter which Laporan to delete.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan deleteMany
   */
  export type LaporanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporans to delete
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to delete.
     */
    limit?: number
  }

  /**
   * Laporan without action
   */
  export type LaporanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
  }


  /**
   * Model PengumpulanTugas
   */

  export type AggregatePengumpulanTugas = {
    _count: PengumpulanTugasCountAggregateOutputType | null
    _min: PengumpulanTugasMinAggregateOutputType | null
    _max: PengumpulanTugasMaxAggregateOutputType | null
  }

  export type PengumpulanTugasMinAggregateOutputType = {
    kd_pengumpulan_tugas: string | null
    kd_tugas: string | null
    user_nip: string | null
    tanggal_pengumpulan: Date | null
    file_path: string | null
    catatan: string | null
    status: $Enums.StatusPengumpulanTugas | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PengumpulanTugasMaxAggregateOutputType = {
    kd_pengumpulan_tugas: string | null
    kd_tugas: string | null
    user_nip: string | null
    tanggal_pengumpulan: Date | null
    file_path: string | null
    catatan: string | null
    status: $Enums.StatusPengumpulanTugas | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PengumpulanTugasCountAggregateOutputType = {
    kd_pengumpulan_tugas: number
    kd_tugas: number
    user_nip: number
    tanggal_pengumpulan: number
    file_path: number
    catatan: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PengumpulanTugasMinAggregateInputType = {
    kd_pengumpulan_tugas?: true
    kd_tugas?: true
    user_nip?: true
    tanggal_pengumpulan?: true
    file_path?: true
    catatan?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type PengumpulanTugasMaxAggregateInputType = {
    kd_pengumpulan_tugas?: true
    kd_tugas?: true
    user_nip?: true
    tanggal_pengumpulan?: true
    file_path?: true
    catatan?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type PengumpulanTugasCountAggregateInputType = {
    kd_pengumpulan_tugas?: true
    kd_tugas?: true
    user_nip?: true
    tanggal_pengumpulan?: true
    file_path?: true
    catatan?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PengumpulanTugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PengumpulanTugas to aggregate.
     */
    where?: PengumpulanTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengumpulanTugases to fetch.
     */
    orderBy?: PengumpulanTugasOrderByWithRelationInput | PengumpulanTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengumpulanTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengumpulanTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengumpulanTugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PengumpulanTugases
    **/
    _count?: true | PengumpulanTugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengumpulanTugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengumpulanTugasMaxAggregateInputType
  }

  export type GetPengumpulanTugasAggregateType<T extends PengumpulanTugasAggregateArgs> = {
        [P in keyof T & keyof AggregatePengumpulanTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengumpulanTugas[P]>
      : GetScalarType<T[P], AggregatePengumpulanTugas[P]>
  }




  export type PengumpulanTugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengumpulanTugasWhereInput
    orderBy?: PengumpulanTugasOrderByWithAggregationInput | PengumpulanTugasOrderByWithAggregationInput[]
    by: PengumpulanTugasScalarFieldEnum[] | PengumpulanTugasScalarFieldEnum
    having?: PengumpulanTugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengumpulanTugasCountAggregateInputType | true
    _min?: PengumpulanTugasMinAggregateInputType
    _max?: PengumpulanTugasMaxAggregateInputType
  }

  export type PengumpulanTugasGroupByOutputType = {
    kd_pengumpulan_tugas: string
    kd_tugas: string
    user_nip: string
    tanggal_pengumpulan: Date
    file_path: string
    catatan: string
    status: $Enums.StatusPengumpulanTugas
    created_at: Date
    updated_at: Date
    _count: PengumpulanTugasCountAggregateOutputType | null
    _min: PengumpulanTugasMinAggregateOutputType | null
    _max: PengumpulanTugasMaxAggregateOutputType | null
  }

  type GetPengumpulanTugasGroupByPayload<T extends PengumpulanTugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengumpulanTugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengumpulanTugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengumpulanTugasGroupByOutputType[P]>
            : GetScalarType<T[P], PengumpulanTugasGroupByOutputType[P]>
        }
      >
    >


  export type PengumpulanTugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_pengumpulan_tugas?: boolean
    kd_tugas?: boolean
    user_nip?: boolean
    tanggal_pengumpulan?: boolean
    file_path?: boolean
    catatan?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rating?: boolean | PengumpulanTugas$ratingArgs<ExtArgs>
    _count?: boolean | PengumpulanTugasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengumpulanTugas"]>



  export type PengumpulanTugasSelectScalar = {
    kd_pengumpulan_tugas?: boolean
    kd_tugas?: boolean
    user_nip?: boolean
    tanggal_pengumpulan?: boolean
    file_path?: boolean
    catatan?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PengumpulanTugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_pengumpulan_tugas" | "kd_tugas" | "user_nip" | "tanggal_pengumpulan" | "file_path" | "catatan" | "status" | "created_at" | "updated_at", ExtArgs["result"]["pengumpulanTugas"]>
  export type PengumpulanTugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rating?: boolean | PengumpulanTugas$ratingArgs<ExtArgs>
    _count?: boolean | PengumpulanTugasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PengumpulanTugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PengumpulanTugas"
    objects: {
      tugas: Prisma.$TugasPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      rating: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_pengumpulan_tugas: string
      kd_tugas: string
      user_nip: string
      tanggal_pengumpulan: Date
      file_path: string
      catatan: string
      status: $Enums.StatusPengumpulanTugas
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pengumpulanTugas"]>
    composites: {}
  }

  type PengumpulanTugasGetPayload<S extends boolean | null | undefined | PengumpulanTugasDefaultArgs> = $Result.GetResult<Prisma.$PengumpulanTugasPayload, S>

  type PengumpulanTugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengumpulanTugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengumpulanTugasCountAggregateInputType | true
    }

  export interface PengumpulanTugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PengumpulanTugas'], meta: { name: 'PengumpulanTugas' } }
    /**
     * Find zero or one PengumpulanTugas that matches the filter.
     * @param {PengumpulanTugasFindUniqueArgs} args - Arguments to find a PengumpulanTugas
     * @example
     * // Get one PengumpulanTugas
     * const pengumpulanTugas = await prisma.pengumpulanTugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengumpulanTugasFindUniqueArgs>(args: SelectSubset<T, PengumpulanTugasFindUniqueArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PengumpulanTugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengumpulanTugasFindUniqueOrThrowArgs} args - Arguments to find a PengumpulanTugas
     * @example
     * // Get one PengumpulanTugas
     * const pengumpulanTugas = await prisma.pengumpulanTugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengumpulanTugasFindUniqueOrThrowArgs>(args: SelectSubset<T, PengumpulanTugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PengumpulanTugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasFindFirstArgs} args - Arguments to find a PengumpulanTugas
     * @example
     * // Get one PengumpulanTugas
     * const pengumpulanTugas = await prisma.pengumpulanTugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengumpulanTugasFindFirstArgs>(args?: SelectSubset<T, PengumpulanTugasFindFirstArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PengumpulanTugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasFindFirstOrThrowArgs} args - Arguments to find a PengumpulanTugas
     * @example
     * // Get one PengumpulanTugas
     * const pengumpulanTugas = await prisma.pengumpulanTugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengumpulanTugasFindFirstOrThrowArgs>(args?: SelectSubset<T, PengumpulanTugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PengumpulanTugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PengumpulanTugases
     * const pengumpulanTugases = await prisma.pengumpulanTugas.findMany()
     * 
     * // Get first 10 PengumpulanTugases
     * const pengumpulanTugases = await prisma.pengumpulanTugas.findMany({ take: 10 })
     * 
     * // Only select the `kd_pengumpulan_tugas`
     * const pengumpulanTugasWithKd_pengumpulan_tugasOnly = await prisma.pengumpulanTugas.findMany({ select: { kd_pengumpulan_tugas: true } })
     * 
     */
    findMany<T extends PengumpulanTugasFindManyArgs>(args?: SelectSubset<T, PengumpulanTugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PengumpulanTugas.
     * @param {PengumpulanTugasCreateArgs} args - Arguments to create a PengumpulanTugas.
     * @example
     * // Create one PengumpulanTugas
     * const PengumpulanTugas = await prisma.pengumpulanTugas.create({
     *   data: {
     *     // ... data to create a PengumpulanTugas
     *   }
     * })
     * 
     */
    create<T extends PengumpulanTugasCreateArgs>(args: SelectSubset<T, PengumpulanTugasCreateArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PengumpulanTugases.
     * @param {PengumpulanTugasCreateManyArgs} args - Arguments to create many PengumpulanTugases.
     * @example
     * // Create many PengumpulanTugases
     * const pengumpulanTugas = await prisma.pengumpulanTugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengumpulanTugasCreateManyArgs>(args?: SelectSubset<T, PengumpulanTugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PengumpulanTugas.
     * @param {PengumpulanTugasDeleteArgs} args - Arguments to delete one PengumpulanTugas.
     * @example
     * // Delete one PengumpulanTugas
     * const PengumpulanTugas = await prisma.pengumpulanTugas.delete({
     *   where: {
     *     // ... filter to delete one PengumpulanTugas
     *   }
     * })
     * 
     */
    delete<T extends PengumpulanTugasDeleteArgs>(args: SelectSubset<T, PengumpulanTugasDeleteArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PengumpulanTugas.
     * @param {PengumpulanTugasUpdateArgs} args - Arguments to update one PengumpulanTugas.
     * @example
     * // Update one PengumpulanTugas
     * const pengumpulanTugas = await prisma.pengumpulanTugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengumpulanTugasUpdateArgs>(args: SelectSubset<T, PengumpulanTugasUpdateArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PengumpulanTugases.
     * @param {PengumpulanTugasDeleteManyArgs} args - Arguments to filter PengumpulanTugases to delete.
     * @example
     * // Delete a few PengumpulanTugases
     * const { count } = await prisma.pengumpulanTugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengumpulanTugasDeleteManyArgs>(args?: SelectSubset<T, PengumpulanTugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PengumpulanTugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PengumpulanTugases
     * const pengumpulanTugas = await prisma.pengumpulanTugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengumpulanTugasUpdateManyArgs>(args: SelectSubset<T, PengumpulanTugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PengumpulanTugas.
     * @param {PengumpulanTugasUpsertArgs} args - Arguments to update or create a PengumpulanTugas.
     * @example
     * // Update or create a PengumpulanTugas
     * const pengumpulanTugas = await prisma.pengumpulanTugas.upsert({
     *   create: {
     *     // ... data to create a PengumpulanTugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PengumpulanTugas we want to update
     *   }
     * })
     */
    upsert<T extends PengumpulanTugasUpsertArgs>(args: SelectSubset<T, PengumpulanTugasUpsertArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PengumpulanTugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasCountArgs} args - Arguments to filter PengumpulanTugases to count.
     * @example
     * // Count the number of PengumpulanTugases
     * const count = await prisma.pengumpulanTugas.count({
     *   where: {
     *     // ... the filter for the PengumpulanTugases we want to count
     *   }
     * })
    **/
    count<T extends PengumpulanTugasCountArgs>(
      args?: Subset<T, PengumpulanTugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengumpulanTugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PengumpulanTugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PengumpulanTugasAggregateArgs>(args: Subset<T, PengumpulanTugasAggregateArgs>): Prisma.PrismaPromise<GetPengumpulanTugasAggregateType<T>>

    /**
     * Group by PengumpulanTugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumpulanTugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PengumpulanTugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengumpulanTugasGroupByArgs['orderBy'] }
        : { orderBy?: PengumpulanTugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PengumpulanTugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengumpulanTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PengumpulanTugas model
   */
  readonly fields: PengumpulanTugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PengumpulanTugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengumpulanTugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tugas<T extends TugasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TugasDefaultArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rating<T extends PengumpulanTugas$ratingArgs<ExtArgs> = {}>(args?: Subset<T, PengumpulanTugas$ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PengumpulanTugas model
   */
  interface PengumpulanTugasFieldRefs {
    readonly kd_pengumpulan_tugas: FieldRef<"PengumpulanTugas", 'String'>
    readonly kd_tugas: FieldRef<"PengumpulanTugas", 'String'>
    readonly user_nip: FieldRef<"PengumpulanTugas", 'String'>
    readonly tanggal_pengumpulan: FieldRef<"PengumpulanTugas", 'DateTime'>
    readonly file_path: FieldRef<"PengumpulanTugas", 'String'>
    readonly catatan: FieldRef<"PengumpulanTugas", 'String'>
    readonly status: FieldRef<"PengumpulanTugas", 'StatusPengumpulanTugas'>
    readonly created_at: FieldRef<"PengumpulanTugas", 'DateTime'>
    readonly updated_at: FieldRef<"PengumpulanTugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PengumpulanTugas findUnique
   */
  export type PengumpulanTugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * Filter, which PengumpulanTugas to fetch.
     */
    where: PengumpulanTugasWhereUniqueInput
  }

  /**
   * PengumpulanTugas findUniqueOrThrow
   */
  export type PengumpulanTugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * Filter, which PengumpulanTugas to fetch.
     */
    where: PengumpulanTugasWhereUniqueInput
  }

  /**
   * PengumpulanTugas findFirst
   */
  export type PengumpulanTugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * Filter, which PengumpulanTugas to fetch.
     */
    where?: PengumpulanTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengumpulanTugases to fetch.
     */
    orderBy?: PengumpulanTugasOrderByWithRelationInput | PengumpulanTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PengumpulanTugases.
     */
    cursor?: PengumpulanTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengumpulanTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengumpulanTugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengumpulanTugases.
     */
    distinct?: PengumpulanTugasScalarFieldEnum | PengumpulanTugasScalarFieldEnum[]
  }

  /**
   * PengumpulanTugas findFirstOrThrow
   */
  export type PengumpulanTugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * Filter, which PengumpulanTugas to fetch.
     */
    where?: PengumpulanTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengumpulanTugases to fetch.
     */
    orderBy?: PengumpulanTugasOrderByWithRelationInput | PengumpulanTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PengumpulanTugases.
     */
    cursor?: PengumpulanTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengumpulanTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengumpulanTugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengumpulanTugases.
     */
    distinct?: PengumpulanTugasScalarFieldEnum | PengumpulanTugasScalarFieldEnum[]
  }

  /**
   * PengumpulanTugas findMany
   */
  export type PengumpulanTugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * Filter, which PengumpulanTugases to fetch.
     */
    where?: PengumpulanTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengumpulanTugases to fetch.
     */
    orderBy?: PengumpulanTugasOrderByWithRelationInput | PengumpulanTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PengumpulanTugases.
     */
    cursor?: PengumpulanTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengumpulanTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengumpulanTugases.
     */
    skip?: number
    distinct?: PengumpulanTugasScalarFieldEnum | PengumpulanTugasScalarFieldEnum[]
  }

  /**
   * PengumpulanTugas create
   */
  export type PengumpulanTugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * The data needed to create a PengumpulanTugas.
     */
    data: XOR<PengumpulanTugasCreateInput, PengumpulanTugasUncheckedCreateInput>
  }

  /**
   * PengumpulanTugas createMany
   */
  export type PengumpulanTugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PengumpulanTugases.
     */
    data: PengumpulanTugasCreateManyInput | PengumpulanTugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PengumpulanTugas update
   */
  export type PengumpulanTugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * The data needed to update a PengumpulanTugas.
     */
    data: XOR<PengumpulanTugasUpdateInput, PengumpulanTugasUncheckedUpdateInput>
    /**
     * Choose, which PengumpulanTugas to update.
     */
    where: PengumpulanTugasWhereUniqueInput
  }

  /**
   * PengumpulanTugas updateMany
   */
  export type PengumpulanTugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PengumpulanTugases.
     */
    data: XOR<PengumpulanTugasUpdateManyMutationInput, PengumpulanTugasUncheckedUpdateManyInput>
    /**
     * Filter which PengumpulanTugases to update
     */
    where?: PengumpulanTugasWhereInput
    /**
     * Limit how many PengumpulanTugases to update.
     */
    limit?: number
  }

  /**
   * PengumpulanTugas upsert
   */
  export type PengumpulanTugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * The filter to search for the PengumpulanTugas to update in case it exists.
     */
    where: PengumpulanTugasWhereUniqueInput
    /**
     * In case the PengumpulanTugas found by the `where` argument doesn't exist, create a new PengumpulanTugas with this data.
     */
    create: XOR<PengumpulanTugasCreateInput, PengumpulanTugasUncheckedCreateInput>
    /**
     * In case the PengumpulanTugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengumpulanTugasUpdateInput, PengumpulanTugasUncheckedUpdateInput>
  }

  /**
   * PengumpulanTugas delete
   */
  export type PengumpulanTugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
    /**
     * Filter which PengumpulanTugas to delete.
     */
    where: PengumpulanTugasWhereUniqueInput
  }

  /**
   * PengumpulanTugas deleteMany
   */
  export type PengumpulanTugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PengumpulanTugases to delete
     */
    where?: PengumpulanTugasWhereInput
    /**
     * Limit how many PengumpulanTugases to delete.
     */
    limit?: number
  }

  /**
   * PengumpulanTugas.rating
   */
  export type PengumpulanTugas$ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * PengumpulanTugas without action
   */
  export type PengumpulanTugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengumpulanTugas
     */
    select?: PengumpulanTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengumpulanTugas
     */
    omit?: PengumpulanTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengumpulanTugasInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    nilai: number | null
  }

  export type RatingSumAggregateOutputType = {
    nilai: number | null
  }

  export type RatingMinAggregateOutputType = {
    kd_rating: string | null
    kd_pengumpulan_tugas: string | null
    nilai: number | null
    komentar: string | null
    created_at: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    kd_rating: string | null
    kd_pengumpulan_tugas: string | null
    nilai: number | null
    komentar: string | null
    created_at: Date | null
  }

  export type RatingCountAggregateOutputType = {
    kd_rating: number
    kd_pengumpulan_tugas: number
    nilai: number
    komentar: number
    created_at: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    nilai?: true
  }

  export type RatingSumAggregateInputType = {
    nilai?: true
  }

  export type RatingMinAggregateInputType = {
    kd_rating?: true
    kd_pengumpulan_tugas?: true
    nilai?: true
    komentar?: true
    created_at?: true
  }

  export type RatingMaxAggregateInputType = {
    kd_rating?: true
    kd_pengumpulan_tugas?: true
    nilai?: true
    komentar?: true
    created_at?: true
  }

  export type RatingCountAggregateInputType = {
    kd_rating?: true
    kd_pengumpulan_tugas?: true
    nilai?: true
    komentar?: true
    created_at?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    kd_rating: string
    kd_pengumpulan_tugas: string
    nilai: number
    komentar: string | null
    created_at: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kd_rating?: boolean
    kd_pengumpulan_tugas?: boolean
    nilai?: boolean
    komentar?: boolean
    created_at?: boolean
    pengumpulanTugas?: boolean | PengumpulanTugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>



  export type RatingSelectScalar = {
    kd_rating?: boolean
    kd_pengumpulan_tugas?: boolean
    nilai?: boolean
    komentar?: boolean
    created_at?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kd_rating" | "kd_pengumpulan_tugas" | "nilai" | "komentar" | "created_at", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengumpulanTugas?: boolean | PengumpulanTugasDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      pengumpulanTugas: Prisma.$PengumpulanTugasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      kd_rating: string
      kd_pengumpulan_tugas: string
      nilai: number
      komentar: string | null
      created_at: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `kd_rating`
     * const ratingWithKd_ratingOnly = await prisma.rating.findMany({ select: { kd_rating: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengumpulanTugas<T extends PengumpulanTugasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PengumpulanTugasDefaultArgs<ExtArgs>>): Prisma__PengumpulanTugasClient<$Result.GetResult<Prisma.$PengumpulanTugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly kd_rating: FieldRef<"Rating", 'String'>
    readonly kd_pengumpulan_tugas: FieldRef<"Rating", 'String'>
    readonly nilai: FieldRef<"Rating", 'Float'>
    readonly komentar: FieldRef<"Rating", 'String'>
    readonly created_at: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JabatanScalarFieldEnum: {
    kd_jabatan: 'kd_jabatan',
    nama_jabatan: 'nama_jabatan'
  };

  export type JabatanScalarFieldEnum = (typeof JabatanScalarFieldEnum)[keyof typeof JabatanScalarFieldEnum]


  export const UserScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    password: 'password',
    role: 'role',
    kd_jabatan: 'kd_jabatan',
    nip_atasan: 'nip_atasan',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HistoryJabatanScalarFieldEnum: {
    id: 'id',
    user_nip: 'user_nip',
    kd_jabatan: 'kd_jabatan',
    tanggal_mulai: 'tanggal_mulai',
    tanggal_akhir: 'tanggal_akhir',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HistoryJabatanScalarFieldEnum = (typeof HistoryJabatanScalarFieldEnum)[keyof typeof HistoryJabatanScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    kd_tugas: 'kd_tugas',
    judul: 'judul',
    deskripsi: 'deskripsi',
    user_nip: 'user_nip',
    status: 'status',
    deadline: 'deadline',
    prioritas: 'prioritas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const LaporanScalarFieldEnum: {
    kd_laporan: 'kd_laporan',
    isi_laporan: 'isi_laporan',
    judul_laporan: 'judul_laporan',
    user_nip: 'user_nip',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LaporanScalarFieldEnum = (typeof LaporanScalarFieldEnum)[keyof typeof LaporanScalarFieldEnum]


  export const PengumpulanTugasScalarFieldEnum: {
    kd_pengumpulan_tugas: 'kd_pengumpulan_tugas',
    kd_tugas: 'kd_tugas',
    user_nip: 'user_nip',
    tanggal_pengumpulan: 'tanggal_pengumpulan',
    file_path: 'file_path',
    catatan: 'catatan',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PengumpulanTugasScalarFieldEnum = (typeof PengumpulanTugasScalarFieldEnum)[keyof typeof PengumpulanTugasScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    kd_rating: 'kd_rating',
    kd_pengumpulan_tugas: 'kd_pengumpulan_tugas',
    nilai: 'nilai',
    komentar: 'komentar',
    created_at: 'created_at'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JabatanOrderByRelevanceFieldEnum: {
    kd_jabatan: 'kd_jabatan',
    nama_jabatan: 'nama_jabatan'
  };

  export type JabatanOrderByRelevanceFieldEnum = (typeof JabatanOrderByRelevanceFieldEnum)[keyof typeof JabatanOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    password: 'password',
    kd_jabatan: 'kd_jabatan',
    nip_atasan: 'nip_atasan'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const HistoryJabatanOrderByRelevanceFieldEnum: {
    id: 'id',
    user_nip: 'user_nip',
    kd_jabatan: 'kd_jabatan'
  };

  export type HistoryJabatanOrderByRelevanceFieldEnum = (typeof HistoryJabatanOrderByRelevanceFieldEnum)[keyof typeof HistoryJabatanOrderByRelevanceFieldEnum]


  export const TugasOrderByRelevanceFieldEnum: {
    kd_tugas: 'kd_tugas',
    judul: 'judul',
    deskripsi: 'deskripsi',
    user_nip: 'user_nip'
  };

  export type TugasOrderByRelevanceFieldEnum = (typeof TugasOrderByRelevanceFieldEnum)[keyof typeof TugasOrderByRelevanceFieldEnum]


  export const LaporanOrderByRelevanceFieldEnum: {
    kd_laporan: 'kd_laporan',
    isi_laporan: 'isi_laporan',
    judul_laporan: 'judul_laporan',
    user_nip: 'user_nip'
  };

  export type LaporanOrderByRelevanceFieldEnum = (typeof LaporanOrderByRelevanceFieldEnum)[keyof typeof LaporanOrderByRelevanceFieldEnum]


  export const PengumpulanTugasOrderByRelevanceFieldEnum: {
    kd_pengumpulan_tugas: 'kd_pengumpulan_tugas',
    kd_tugas: 'kd_tugas',
    user_nip: 'user_nip',
    file_path: 'file_path',
    catatan: 'catatan'
  };

  export type PengumpulanTugasOrderByRelevanceFieldEnum = (typeof PengumpulanTugasOrderByRelevanceFieldEnum)[keyof typeof PengumpulanTugasOrderByRelevanceFieldEnum]


  export const RatingOrderByRelevanceFieldEnum: {
    kd_rating: 'kd_rating',
    kd_pengumpulan_tugas: 'kd_pengumpulan_tugas',
    komentar: 'komentar'
  };

  export type RatingOrderByRelevanceFieldEnum = (typeof RatingOrderByRelevanceFieldEnum)[keyof typeof RatingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatusTugas'
   */
  export type EnumStatusTugasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTugas'>
    


  /**
   * Reference to a field of type 'Prioritas'
   */
  export type EnumPrioritasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioritas'>
    


  /**
   * Reference to a field of type 'StatusPengumpulanTugas'
   */
  export type EnumStatusPengumpulanTugasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPengumpulanTugas'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type JabatanWhereInput = {
    AND?: JabatanWhereInput | JabatanWhereInput[]
    OR?: JabatanWhereInput[]
    NOT?: JabatanWhereInput | JabatanWhereInput[]
    kd_jabatan?: StringFilter<"Jabatan"> | string
    nama_jabatan?: StringFilter<"Jabatan"> | string
    user?: UserListRelationFilter
    history?: HistoryJabatanListRelationFilter
  }

  export type JabatanOrderByWithRelationInput = {
    kd_jabatan?: SortOrder
    nama_jabatan?: SortOrder
    user?: UserOrderByRelationAggregateInput
    history?: HistoryJabatanOrderByRelationAggregateInput
    _relevance?: JabatanOrderByRelevanceInput
  }

  export type JabatanWhereUniqueInput = Prisma.AtLeast<{
    kd_jabatan?: string
    nama_jabatan?: string
    AND?: JabatanWhereInput | JabatanWhereInput[]
    OR?: JabatanWhereInput[]
    NOT?: JabatanWhereInput | JabatanWhereInput[]
    user?: UserListRelationFilter
    history?: HistoryJabatanListRelationFilter
  }, "kd_jabatan" | "nama_jabatan">

  export type JabatanOrderByWithAggregationInput = {
    kd_jabatan?: SortOrder
    nama_jabatan?: SortOrder
    _count?: JabatanCountOrderByAggregateInput
    _max?: JabatanMaxOrderByAggregateInput
    _min?: JabatanMinOrderByAggregateInput
  }

  export type JabatanScalarWhereWithAggregatesInput = {
    AND?: JabatanScalarWhereWithAggregatesInput | JabatanScalarWhereWithAggregatesInput[]
    OR?: JabatanScalarWhereWithAggregatesInput[]
    NOT?: JabatanScalarWhereWithAggregatesInput | JabatanScalarWhereWithAggregatesInput[]
    kd_jabatan?: StringWithAggregatesFilter<"Jabatan"> | string
    nama_jabatan?: StringWithAggregatesFilter<"Jabatan"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nip?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kd_jabatan?: StringFilter<"User"> | string
    nip_atasan?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    atasan?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    jabatan?: XOR<JabatanScalarRelationFilter, JabatanWhereInput>
    bawahan?: UserListRelationFilter
    history?: HistoryJabatanListRelationFilter
    tugas?: TugasListRelationFilter
    laporan?: LaporanListRelationFilter
    pengumpulan_tugas?: PengumpulanTugasListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    role?: SortOrder
    kd_jabatan?: SortOrder
    nip_atasan?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    atasan?: UserOrderByWithRelationInput
    jabatan?: JabatanOrderByWithRelationInput
    bawahan?: UserOrderByRelationAggregateInput
    history?: HistoryJabatanOrderByRelationAggregateInput
    tugas?: TugasOrderByRelationAggregateInput
    laporan?: LaporanOrderByRelationAggregateInput
    pengumpulan_tugas?: PengumpulanTugasOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kd_jabatan?: StringFilter<"User"> | string
    nip_atasan?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    atasan?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    jabatan?: XOR<JabatanScalarRelationFilter, JabatanWhereInput>
    bawahan?: UserListRelationFilter
    history?: HistoryJabatanListRelationFilter
    tugas?: TugasListRelationFilter
    laporan?: LaporanListRelationFilter
    pengumpulan_tugas?: PengumpulanTugasListRelationFilter
  }, "nip">

  export type UserOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    role?: SortOrder
    kd_jabatan?: SortOrder
    nip_atasan?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    kd_jabatan?: StringWithAggregatesFilter<"User"> | string
    nip_atasan?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HistoryJabatanWhereInput = {
    AND?: HistoryJabatanWhereInput | HistoryJabatanWhereInput[]
    OR?: HistoryJabatanWhereInput[]
    NOT?: HistoryJabatanWhereInput | HistoryJabatanWhereInput[]
    id?: StringFilter<"HistoryJabatan"> | string
    user_nip?: StringFilter<"HistoryJabatan"> | string
    kd_jabatan?: StringFilter<"HistoryJabatan"> | string
    tanggal_mulai?: DateTimeFilter<"HistoryJabatan"> | Date | string
    tanggal_akhir?: DateTimeNullableFilter<"HistoryJabatan"> | Date | string | null
    created_at?: DateTimeFilter<"HistoryJabatan"> | Date | string
    updated_at?: DateTimeFilter<"HistoryJabatan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jabatan?: XOR<JabatanScalarRelationFilter, JabatanWhereInput>
  }

  export type HistoryJabatanOrderByWithRelationInput = {
    id?: SortOrder
    user_nip?: SortOrder
    kd_jabatan?: SortOrder
    tanggal_mulai?: SortOrder
    tanggal_akhir?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    jabatan?: JabatanOrderByWithRelationInput
    _relevance?: HistoryJabatanOrderByRelevanceInput
  }

  export type HistoryJabatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryJabatanWhereInput | HistoryJabatanWhereInput[]
    OR?: HistoryJabatanWhereInput[]
    NOT?: HistoryJabatanWhereInput | HistoryJabatanWhereInput[]
    user_nip?: StringFilter<"HistoryJabatan"> | string
    kd_jabatan?: StringFilter<"HistoryJabatan"> | string
    tanggal_mulai?: DateTimeFilter<"HistoryJabatan"> | Date | string
    tanggal_akhir?: DateTimeNullableFilter<"HistoryJabatan"> | Date | string | null
    created_at?: DateTimeFilter<"HistoryJabatan"> | Date | string
    updated_at?: DateTimeFilter<"HistoryJabatan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jabatan?: XOR<JabatanScalarRelationFilter, JabatanWhereInput>
  }, "id">

  export type HistoryJabatanOrderByWithAggregationInput = {
    id?: SortOrder
    user_nip?: SortOrder
    kd_jabatan?: SortOrder
    tanggal_mulai?: SortOrder
    tanggal_akhir?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HistoryJabatanCountOrderByAggregateInput
    _max?: HistoryJabatanMaxOrderByAggregateInput
    _min?: HistoryJabatanMinOrderByAggregateInput
  }

  export type HistoryJabatanScalarWhereWithAggregatesInput = {
    AND?: HistoryJabatanScalarWhereWithAggregatesInput | HistoryJabatanScalarWhereWithAggregatesInput[]
    OR?: HistoryJabatanScalarWhereWithAggregatesInput[]
    NOT?: HistoryJabatanScalarWhereWithAggregatesInput | HistoryJabatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryJabatan"> | string
    user_nip?: StringWithAggregatesFilter<"HistoryJabatan"> | string
    kd_jabatan?: StringWithAggregatesFilter<"HistoryJabatan"> | string
    tanggal_mulai?: DateTimeWithAggregatesFilter<"HistoryJabatan"> | Date | string
    tanggal_akhir?: DateTimeNullableWithAggregatesFilter<"HistoryJabatan"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"HistoryJabatan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HistoryJabatan"> | Date | string
  }

  export type TugasWhereInput = {
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    kd_tugas?: StringFilter<"Tugas"> | string
    judul?: StringFilter<"Tugas"> | string
    deskripsi?: StringFilter<"Tugas"> | string
    user_nip?: StringFilter<"Tugas"> | string
    status?: EnumStatusTugasFilter<"Tugas"> | $Enums.StatusTugas
    deadline?: DateTimeFilter<"Tugas"> | Date | string
    prioritas?: EnumPrioritasFilter<"Tugas"> | $Enums.Prioritas
    created_at?: DateTimeFilter<"Tugas"> | Date | string
    updated_at?: DateTimeFilter<"Tugas"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pengumpulan_tugas?: PengumpulanTugasListRelationFilter
  }

  export type TugasOrderByWithRelationInput = {
    kd_tugas?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    user_nip?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    prioritas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    pengumpulan_tugas?: PengumpulanTugasOrderByRelationAggregateInput
    _relevance?: TugasOrderByRelevanceInput
  }

  export type TugasWhereUniqueInput = Prisma.AtLeast<{
    kd_tugas?: string
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    judul?: StringFilter<"Tugas"> | string
    deskripsi?: StringFilter<"Tugas"> | string
    user_nip?: StringFilter<"Tugas"> | string
    status?: EnumStatusTugasFilter<"Tugas"> | $Enums.StatusTugas
    deadline?: DateTimeFilter<"Tugas"> | Date | string
    prioritas?: EnumPrioritasFilter<"Tugas"> | $Enums.Prioritas
    created_at?: DateTimeFilter<"Tugas"> | Date | string
    updated_at?: DateTimeFilter<"Tugas"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pengumpulan_tugas?: PengumpulanTugasListRelationFilter
  }, "kd_tugas">

  export type TugasOrderByWithAggregationInput = {
    kd_tugas?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    user_nip?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    prioritas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TugasCountOrderByAggregateInput
    _max?: TugasMaxOrderByAggregateInput
    _min?: TugasMinOrderByAggregateInput
  }

  export type TugasScalarWhereWithAggregatesInput = {
    AND?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    OR?: TugasScalarWhereWithAggregatesInput[]
    NOT?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    kd_tugas?: StringWithAggregatesFilter<"Tugas"> | string
    judul?: StringWithAggregatesFilter<"Tugas"> | string
    deskripsi?: StringWithAggregatesFilter<"Tugas"> | string
    user_nip?: StringWithAggregatesFilter<"Tugas"> | string
    status?: EnumStatusTugasWithAggregatesFilter<"Tugas"> | $Enums.StatusTugas
    deadline?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
    prioritas?: EnumPrioritasWithAggregatesFilter<"Tugas"> | $Enums.Prioritas
    created_at?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
  }

  export type LaporanWhereInput = {
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    kd_laporan?: StringFilter<"Laporan"> | string
    isi_laporan?: StringFilter<"Laporan"> | string
    judul_laporan?: StringFilter<"Laporan"> | string
    user_nip?: StringFilter<"Laporan"> | string
    created_at?: DateTimeFilter<"Laporan"> | Date | string
    updated_at?: DateTimeFilter<"Laporan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LaporanOrderByWithRelationInput = {
    kd_laporan?: SortOrder
    isi_laporan?: SortOrder
    judul_laporan?: SortOrder
    user_nip?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: LaporanOrderByRelevanceInput
  }

  export type LaporanWhereUniqueInput = Prisma.AtLeast<{
    kd_laporan?: string
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    isi_laporan?: StringFilter<"Laporan"> | string
    judul_laporan?: StringFilter<"Laporan"> | string
    user_nip?: StringFilter<"Laporan"> | string
    created_at?: DateTimeFilter<"Laporan"> | Date | string
    updated_at?: DateTimeFilter<"Laporan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "kd_laporan">

  export type LaporanOrderByWithAggregationInput = {
    kd_laporan?: SortOrder
    isi_laporan?: SortOrder
    judul_laporan?: SortOrder
    user_nip?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LaporanCountOrderByAggregateInput
    _max?: LaporanMaxOrderByAggregateInput
    _min?: LaporanMinOrderByAggregateInput
  }

  export type LaporanScalarWhereWithAggregatesInput = {
    AND?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    OR?: LaporanScalarWhereWithAggregatesInput[]
    NOT?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    kd_laporan?: StringWithAggregatesFilter<"Laporan"> | string
    isi_laporan?: StringWithAggregatesFilter<"Laporan"> | string
    judul_laporan?: StringWithAggregatesFilter<"Laporan"> | string
    user_nip?: StringWithAggregatesFilter<"Laporan"> | string
    created_at?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
  }

  export type PengumpulanTugasWhereInput = {
    AND?: PengumpulanTugasWhereInput | PengumpulanTugasWhereInput[]
    OR?: PengumpulanTugasWhereInput[]
    NOT?: PengumpulanTugasWhereInput | PengumpulanTugasWhereInput[]
    kd_pengumpulan_tugas?: StringFilter<"PengumpulanTugas"> | string
    kd_tugas?: StringFilter<"PengumpulanTugas"> | string
    user_nip?: StringFilter<"PengumpulanTugas"> | string
    tanggal_pengumpulan?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    file_path?: StringFilter<"PengumpulanTugas"> | string
    catatan?: StringFilter<"PengumpulanTugas"> | string
    status?: EnumStatusPengumpulanTugasFilter<"PengumpulanTugas"> | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    updated_at?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    tugas?: XOR<TugasScalarRelationFilter, TugasWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rating?: RatingListRelationFilter
  }

  export type PengumpulanTugasOrderByWithRelationInput = {
    kd_pengumpulan_tugas?: SortOrder
    kd_tugas?: SortOrder
    user_nip?: SortOrder
    tanggal_pengumpulan?: SortOrder
    file_path?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tugas?: TugasOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    rating?: RatingOrderByRelationAggregateInput
    _relevance?: PengumpulanTugasOrderByRelevanceInput
  }

  export type PengumpulanTugasWhereUniqueInput = Prisma.AtLeast<{
    kd_pengumpulan_tugas?: string
    AND?: PengumpulanTugasWhereInput | PengumpulanTugasWhereInput[]
    OR?: PengumpulanTugasWhereInput[]
    NOT?: PengumpulanTugasWhereInput | PengumpulanTugasWhereInput[]
    kd_tugas?: StringFilter<"PengumpulanTugas"> | string
    user_nip?: StringFilter<"PengumpulanTugas"> | string
    tanggal_pengumpulan?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    file_path?: StringFilter<"PengumpulanTugas"> | string
    catatan?: StringFilter<"PengumpulanTugas"> | string
    status?: EnumStatusPengumpulanTugasFilter<"PengumpulanTugas"> | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    updated_at?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    tugas?: XOR<TugasScalarRelationFilter, TugasWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rating?: RatingListRelationFilter
  }, "kd_pengumpulan_tugas">

  export type PengumpulanTugasOrderByWithAggregationInput = {
    kd_pengumpulan_tugas?: SortOrder
    kd_tugas?: SortOrder
    user_nip?: SortOrder
    tanggal_pengumpulan?: SortOrder
    file_path?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PengumpulanTugasCountOrderByAggregateInput
    _max?: PengumpulanTugasMaxOrderByAggregateInput
    _min?: PengumpulanTugasMinOrderByAggregateInput
  }

  export type PengumpulanTugasScalarWhereWithAggregatesInput = {
    AND?: PengumpulanTugasScalarWhereWithAggregatesInput | PengumpulanTugasScalarWhereWithAggregatesInput[]
    OR?: PengumpulanTugasScalarWhereWithAggregatesInput[]
    NOT?: PengumpulanTugasScalarWhereWithAggregatesInput | PengumpulanTugasScalarWhereWithAggregatesInput[]
    kd_pengumpulan_tugas?: StringWithAggregatesFilter<"PengumpulanTugas"> | string
    kd_tugas?: StringWithAggregatesFilter<"PengumpulanTugas"> | string
    user_nip?: StringWithAggregatesFilter<"PengumpulanTugas"> | string
    tanggal_pengumpulan?: DateTimeWithAggregatesFilter<"PengumpulanTugas"> | Date | string
    file_path?: StringWithAggregatesFilter<"PengumpulanTugas"> | string
    catatan?: StringWithAggregatesFilter<"PengumpulanTugas"> | string
    status?: EnumStatusPengumpulanTugasWithAggregatesFilter<"PengumpulanTugas"> | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeWithAggregatesFilter<"PengumpulanTugas"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PengumpulanTugas"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    kd_rating?: StringFilter<"Rating"> | string
    kd_pengumpulan_tugas?: StringFilter<"Rating"> | string
    nilai?: FloatFilter<"Rating"> | number
    komentar?: StringNullableFilter<"Rating"> | string | null
    created_at?: DateTimeFilter<"Rating"> | Date | string
    pengumpulanTugas?: XOR<PengumpulanTugasScalarRelationFilter, PengumpulanTugasWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    kd_rating?: SortOrder
    kd_pengumpulan_tugas?: SortOrder
    nilai?: SortOrder
    komentar?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pengumpulanTugas?: PengumpulanTugasOrderByWithRelationInput
    _relevance?: RatingOrderByRelevanceInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    kd_rating?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    kd_pengumpulan_tugas?: StringFilter<"Rating"> | string
    nilai?: FloatFilter<"Rating"> | number
    komentar?: StringNullableFilter<"Rating"> | string | null
    created_at?: DateTimeFilter<"Rating"> | Date | string
    pengumpulanTugas?: XOR<PengumpulanTugasScalarRelationFilter, PengumpulanTugasWhereInput>
  }, "kd_rating">

  export type RatingOrderByWithAggregationInput = {
    kd_rating?: SortOrder
    kd_pengumpulan_tugas?: SortOrder
    nilai?: SortOrder
    komentar?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    kd_rating?: StringWithAggregatesFilter<"Rating"> | string
    kd_pengumpulan_tugas?: StringWithAggregatesFilter<"Rating"> | string
    nilai?: FloatWithAggregatesFilter<"Rating"> | number
    komentar?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type JabatanCreateInput = {
    kd_jabatan?: string
    nama_jabatan: string
    user?: UserCreateNestedManyWithoutJabatanInput
    history?: HistoryJabatanCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateInput = {
    kd_jabatan?: string
    nama_jabatan: string
    user?: UserUncheckedCreateNestedManyWithoutJabatanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUpdateInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutJabatanNestedInput
    history?: HistoryJabatanUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutJabatanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanCreateManyInput = {
    kd_jabatan?: string
    nama_jabatan: string
  }

  export type JabatanUpdateManyMutationInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
  }

  export type JabatanUncheckedUpdateManyInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    jabatan: JabatanCreateNestedOneWithoutUserInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanCreateInput = {
    id?: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
    jabatan: JabatanCreateNestedOneWithoutHistoryInput
  }

  export type HistoryJabatanUncheckedCreateInput = {
    id?: string
    user_nip: string
    kd_jabatan: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HistoryJabatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryJabatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanCreateManyInput = {
    id?: string
    user_nip: string
    kd_jabatan: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HistoryJabatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasCreateInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTugasInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    user_nip: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasUpdateInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTugasNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasCreateManyInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    user_nip: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TugasUpdateManyMutationInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUncheckedUpdateManyInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateInput = {
    kd_laporan?: string
    isi_laporan: string
    judul_laporan: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutLaporanInput
  }

  export type LaporanUncheckedCreateInput = {
    kd_laporan?: string
    isi_laporan: string
    judul_laporan: string
    user_nip: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LaporanUpdateInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateManyInput = {
    kd_laporan?: string
    isi_laporan: string
    judul_laporan: string
    user_nip: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LaporanUpdateManyMutationInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUncheckedUpdateManyInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumpulanTugasCreateInput = {
    kd_pengumpulan_tugas?: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    tugas: TugasCreateNestedOneWithoutPengumpulan_tugasInput
    user: UserCreateNestedOneWithoutPengumpulan_tugasInput
    rating?: RatingCreateNestedManyWithoutPengumpulanTugasInput
  }

  export type PengumpulanTugasUncheckedCreateInput = {
    kd_pengumpulan_tugas?: string
    kd_tugas: string
    user_nip: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    rating?: RatingUncheckedCreateNestedManyWithoutPengumpulanTugasInput
  }

  export type PengumpulanTugasUpdateInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: TugasUpdateOneRequiredWithoutPengumpulan_tugasNestedInput
    user?: UserUpdateOneRequiredWithoutPengumpulan_tugasNestedInput
    rating?: RatingUpdateManyWithoutPengumpulanTugasNestedInput
  }

  export type PengumpulanTugasUncheckedUpdateInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    kd_tugas?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingUncheckedUpdateManyWithoutPengumpulanTugasNestedInput
  }

  export type PengumpulanTugasCreateManyInput = {
    kd_pengumpulan_tugas?: string
    kd_tugas: string
    user_nip: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengumpulanTugasUpdateManyMutationInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumpulanTugasUncheckedUpdateManyInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    kd_tugas?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    kd_rating?: string
    nilai: number
    komentar?: string | null
    created_at?: Date | string
    pengumpulanTugas: PengumpulanTugasCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    kd_rating?: string
    kd_pengumpulan_tugas: string
    nilai: number
    komentar?: string | null
    created_at?: Date | string
  }

  export type RatingUpdateInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pengumpulanTugas?: PengumpulanTugasUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    kd_rating?: string
    kd_pengumpulan_tugas: string
    nilai: number
    komentar?: string | null
    created_at?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type HistoryJabatanListRelationFilter = {
    every?: HistoryJabatanWhereInput
    some?: HistoryJabatanWhereInput
    none?: HistoryJabatanWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryJabatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JabatanOrderByRelevanceInput = {
    fields: JabatanOrderByRelevanceFieldEnum | JabatanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JabatanCountOrderByAggregateInput = {
    kd_jabatan?: SortOrder
    nama_jabatan?: SortOrder
  }

  export type JabatanMaxOrderByAggregateInput = {
    kd_jabatan?: SortOrder
    nama_jabatan?: SortOrder
  }

  export type JabatanMinOrderByAggregateInput = {
    kd_jabatan?: SortOrder
    nama_jabatan?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type JabatanScalarRelationFilter = {
    is?: JabatanWhereInput
    isNot?: JabatanWhereInput
  }

  export type TugasListRelationFilter = {
    every?: TugasWhereInput
    some?: TugasWhereInput
    none?: TugasWhereInput
  }

  export type LaporanListRelationFilter = {
    every?: LaporanWhereInput
    some?: LaporanWhereInput
    none?: LaporanWhereInput
  }

  export type PengumpulanTugasListRelationFilter = {
    every?: PengumpulanTugasWhereInput
    some?: PengumpulanTugasWhereInput
    none?: PengumpulanTugasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaporanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PengumpulanTugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    role?: SortOrder
    kd_jabatan?: SortOrder
    nip_atasan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    role?: SortOrder
    kd_jabatan?: SortOrder
    nip_atasan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    role?: SortOrder
    kd_jabatan?: SortOrder
    nip_atasan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HistoryJabatanOrderByRelevanceInput = {
    fields: HistoryJabatanOrderByRelevanceFieldEnum | HistoryJabatanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoryJabatanCountOrderByAggregateInput = {
    id?: SortOrder
    user_nip?: SortOrder
    kd_jabatan?: SortOrder
    tanggal_mulai?: SortOrder
    tanggal_akhir?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HistoryJabatanMaxOrderByAggregateInput = {
    id?: SortOrder
    user_nip?: SortOrder
    kd_jabatan?: SortOrder
    tanggal_mulai?: SortOrder
    tanggal_akhir?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HistoryJabatanMinOrderByAggregateInput = {
    id?: SortOrder
    user_nip?: SortOrder
    kd_jabatan?: SortOrder
    tanggal_mulai?: SortOrder
    tanggal_akhir?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusTugasFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTugas | EnumStatusTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTugas[]
    notIn?: $Enums.StatusTugas[]
    not?: NestedEnumStatusTugasFilter<$PrismaModel> | $Enums.StatusTugas
  }

  export type EnumPrioritasFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioritas | EnumPrioritasFieldRefInput<$PrismaModel>
    in?: $Enums.Prioritas[]
    notIn?: $Enums.Prioritas[]
    not?: NestedEnumPrioritasFilter<$PrismaModel> | $Enums.Prioritas
  }

  export type TugasOrderByRelevanceInput = {
    fields: TugasOrderByRelevanceFieldEnum | TugasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TugasCountOrderByAggregateInput = {
    kd_tugas?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    user_nip?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    prioritas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TugasMaxOrderByAggregateInput = {
    kd_tugas?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    user_nip?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    prioritas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TugasMinOrderByAggregateInput = {
    kd_tugas?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    user_nip?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    prioritas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumStatusTugasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTugas | EnumStatusTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTugas[]
    notIn?: $Enums.StatusTugas[]
    not?: NestedEnumStatusTugasWithAggregatesFilter<$PrismaModel> | $Enums.StatusTugas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTugasFilter<$PrismaModel>
    _max?: NestedEnumStatusTugasFilter<$PrismaModel>
  }

  export type EnumPrioritasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioritas | EnumPrioritasFieldRefInput<$PrismaModel>
    in?: $Enums.Prioritas[]
    notIn?: $Enums.Prioritas[]
    not?: NestedEnumPrioritasWithAggregatesFilter<$PrismaModel> | $Enums.Prioritas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioritasFilter<$PrismaModel>
    _max?: NestedEnumPrioritasFilter<$PrismaModel>
  }

  export type LaporanOrderByRelevanceInput = {
    fields: LaporanOrderByRelevanceFieldEnum | LaporanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LaporanCountOrderByAggregateInput = {
    kd_laporan?: SortOrder
    isi_laporan?: SortOrder
    judul_laporan?: SortOrder
    user_nip?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LaporanMaxOrderByAggregateInput = {
    kd_laporan?: SortOrder
    isi_laporan?: SortOrder
    judul_laporan?: SortOrder
    user_nip?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LaporanMinOrderByAggregateInput = {
    kd_laporan?: SortOrder
    isi_laporan?: SortOrder
    judul_laporan?: SortOrder
    user_nip?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumStatusPengumpulanTugasFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengumpulanTugas | EnumStatusPengumpulanTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPengumpulanTugas[]
    notIn?: $Enums.StatusPengumpulanTugas[]
    not?: NestedEnumStatusPengumpulanTugasFilter<$PrismaModel> | $Enums.StatusPengumpulanTugas
  }

  export type TugasScalarRelationFilter = {
    is?: TugasWhereInput
    isNot?: TugasWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PengumpulanTugasOrderByRelevanceInput = {
    fields: PengumpulanTugasOrderByRelevanceFieldEnum | PengumpulanTugasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PengumpulanTugasCountOrderByAggregateInput = {
    kd_pengumpulan_tugas?: SortOrder
    kd_tugas?: SortOrder
    user_nip?: SortOrder
    tanggal_pengumpulan?: SortOrder
    file_path?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PengumpulanTugasMaxOrderByAggregateInput = {
    kd_pengumpulan_tugas?: SortOrder
    kd_tugas?: SortOrder
    user_nip?: SortOrder
    tanggal_pengumpulan?: SortOrder
    file_path?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PengumpulanTugasMinOrderByAggregateInput = {
    kd_pengumpulan_tugas?: SortOrder
    kd_tugas?: SortOrder
    user_nip?: SortOrder
    tanggal_pengumpulan?: SortOrder
    file_path?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumStatusPengumpulanTugasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengumpulanTugas | EnumStatusPengumpulanTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPengumpulanTugas[]
    notIn?: $Enums.StatusPengumpulanTugas[]
    not?: NestedEnumStatusPengumpulanTugasWithAggregatesFilter<$PrismaModel> | $Enums.StatusPengumpulanTugas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPengumpulanTugasFilter<$PrismaModel>
    _max?: NestedEnumStatusPengumpulanTugasFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PengumpulanTugasScalarRelationFilter = {
    is?: PengumpulanTugasWhereInput
    isNot?: PengumpulanTugasWhereInput
  }

  export type RatingOrderByRelevanceInput = {
    fields: RatingOrderByRelevanceFieldEnum | RatingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RatingCountOrderByAggregateInput = {
    kd_rating?: SortOrder
    kd_pengumpulan_tugas?: SortOrder
    nilai?: SortOrder
    komentar?: SortOrder
    created_at?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    kd_rating?: SortOrder
    kd_pengumpulan_tugas?: SortOrder
    nilai?: SortOrder
    komentar?: SortOrder
    created_at?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    kd_rating?: SortOrder
    kd_pengumpulan_tugas?: SortOrder
    nilai?: SortOrder
    komentar?: SortOrder
    created_at?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutJabatanInput = {
    create?: XOR<UserCreateWithoutJabatanInput, UserUncheckedCreateWithoutJabatanInput> | UserCreateWithoutJabatanInput[] | UserUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJabatanInput | UserCreateOrConnectWithoutJabatanInput[]
    createMany?: UserCreateManyJabatanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HistoryJabatanCreateNestedManyWithoutJabatanInput = {
    create?: XOR<HistoryJabatanCreateWithoutJabatanInput, HistoryJabatanUncheckedCreateWithoutJabatanInput> | HistoryJabatanCreateWithoutJabatanInput[] | HistoryJabatanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutJabatanInput | HistoryJabatanCreateOrConnectWithoutJabatanInput[]
    createMany?: HistoryJabatanCreateManyJabatanInputEnvelope
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutJabatanInput = {
    create?: XOR<UserCreateWithoutJabatanInput, UserUncheckedCreateWithoutJabatanInput> | UserCreateWithoutJabatanInput[] | UserUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJabatanInput | UserCreateOrConnectWithoutJabatanInput[]
    createMany?: UserCreateManyJabatanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HistoryJabatanUncheckedCreateNestedManyWithoutJabatanInput = {
    create?: XOR<HistoryJabatanCreateWithoutJabatanInput, HistoryJabatanUncheckedCreateWithoutJabatanInput> | HistoryJabatanCreateWithoutJabatanInput[] | HistoryJabatanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutJabatanInput | HistoryJabatanCreateOrConnectWithoutJabatanInput[]
    createMany?: HistoryJabatanCreateManyJabatanInputEnvelope
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<UserCreateWithoutJabatanInput, UserUncheckedCreateWithoutJabatanInput> | UserCreateWithoutJabatanInput[] | UserUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJabatanInput | UserCreateOrConnectWithoutJabatanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJabatanInput | UserUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: UserCreateManyJabatanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJabatanInput | UserUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJabatanInput | UserUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HistoryJabatanUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<HistoryJabatanCreateWithoutJabatanInput, HistoryJabatanUncheckedCreateWithoutJabatanInput> | HistoryJabatanCreateWithoutJabatanInput[] | HistoryJabatanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutJabatanInput | HistoryJabatanCreateOrConnectWithoutJabatanInput[]
    upsert?: HistoryJabatanUpsertWithWhereUniqueWithoutJabatanInput | HistoryJabatanUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: HistoryJabatanCreateManyJabatanInputEnvelope
    set?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    disconnect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    delete?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    update?: HistoryJabatanUpdateWithWhereUniqueWithoutJabatanInput | HistoryJabatanUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: HistoryJabatanUpdateManyWithWhereWithoutJabatanInput | HistoryJabatanUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: HistoryJabatanScalarWhereInput | HistoryJabatanScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<UserCreateWithoutJabatanInput, UserUncheckedCreateWithoutJabatanInput> | UserCreateWithoutJabatanInput[] | UserUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJabatanInput | UserCreateOrConnectWithoutJabatanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJabatanInput | UserUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: UserCreateManyJabatanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJabatanInput | UserUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJabatanInput | UserUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HistoryJabatanUncheckedUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<HistoryJabatanCreateWithoutJabatanInput, HistoryJabatanUncheckedCreateWithoutJabatanInput> | HistoryJabatanCreateWithoutJabatanInput[] | HistoryJabatanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutJabatanInput | HistoryJabatanCreateOrConnectWithoutJabatanInput[]
    upsert?: HistoryJabatanUpsertWithWhereUniqueWithoutJabatanInput | HistoryJabatanUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: HistoryJabatanCreateManyJabatanInputEnvelope
    set?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    disconnect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    delete?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    update?: HistoryJabatanUpdateWithWhereUniqueWithoutJabatanInput | HistoryJabatanUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: HistoryJabatanUpdateManyWithWhereWithoutJabatanInput | HistoryJabatanUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: HistoryJabatanScalarWhereInput | HistoryJabatanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBawahanInput = {
    create?: XOR<UserCreateWithoutBawahanInput, UserUncheckedCreateWithoutBawahanInput>
    connectOrCreate?: UserCreateOrConnectWithoutBawahanInput
    connect?: UserWhereUniqueInput
  }

  export type JabatanCreateNestedOneWithoutUserInput = {
    create?: XOR<JabatanCreateWithoutUserInput, JabatanUncheckedCreateWithoutUserInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutUserInput
    connect?: JabatanWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutAtasanInput = {
    create?: XOR<UserCreateWithoutAtasanInput, UserUncheckedCreateWithoutAtasanInput> | UserCreateWithoutAtasanInput[] | UserUncheckedCreateWithoutAtasanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAtasanInput | UserCreateOrConnectWithoutAtasanInput[]
    createMany?: UserCreateManyAtasanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HistoryJabatanCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryJabatanCreateWithoutUserInput, HistoryJabatanUncheckedCreateWithoutUserInput> | HistoryJabatanCreateWithoutUserInput[] | HistoryJabatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutUserInput | HistoryJabatanCreateOrConnectWithoutUserInput[]
    createMany?: HistoryJabatanCreateManyUserInputEnvelope
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
  }

  export type TugasCreateNestedManyWithoutUserInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type LaporanCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type PengumpulanTugasCreateNestedManyWithoutUserInput = {
    create?: XOR<PengumpulanTugasCreateWithoutUserInput, PengumpulanTugasUncheckedCreateWithoutUserInput> | PengumpulanTugasCreateWithoutUserInput[] | PengumpulanTugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutUserInput | PengumpulanTugasCreateOrConnectWithoutUserInput[]
    createMany?: PengumpulanTugasCreateManyUserInputEnvelope
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAtasanInput = {
    create?: XOR<UserCreateWithoutAtasanInput, UserUncheckedCreateWithoutAtasanInput> | UserCreateWithoutAtasanInput[] | UserUncheckedCreateWithoutAtasanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAtasanInput | UserCreateOrConnectWithoutAtasanInput[]
    createMany?: UserCreateManyAtasanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HistoryJabatanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryJabatanCreateWithoutUserInput, HistoryJabatanUncheckedCreateWithoutUserInput> | HistoryJabatanCreateWithoutUserInput[] | HistoryJabatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutUserInput | HistoryJabatanCreateOrConnectWithoutUserInput[]
    createMany?: HistoryJabatanCreateManyUserInputEnvelope
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
  }

  export type TugasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PengumpulanTugasCreateWithoutUserInput, PengumpulanTugasUncheckedCreateWithoutUserInput> | PengumpulanTugasCreateWithoutUserInput[] | PengumpulanTugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutUserInput | PengumpulanTugasCreateOrConnectWithoutUserInput[]
    createMany?: PengumpulanTugasCreateManyUserInputEnvelope
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutBawahanNestedInput = {
    create?: XOR<UserCreateWithoutBawahanInput, UserUncheckedCreateWithoutBawahanInput>
    connectOrCreate?: UserCreateOrConnectWithoutBawahanInput
    upsert?: UserUpsertWithoutBawahanInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBawahanInput, UserUpdateWithoutBawahanInput>, UserUncheckedUpdateWithoutBawahanInput>
  }

  export type JabatanUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<JabatanCreateWithoutUserInput, JabatanUncheckedCreateWithoutUserInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutUserInput
    upsert?: JabatanUpsertWithoutUserInput
    connect?: JabatanWhereUniqueInput
    update?: XOR<XOR<JabatanUpdateToOneWithWhereWithoutUserInput, JabatanUpdateWithoutUserInput>, JabatanUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateManyWithoutAtasanNestedInput = {
    create?: XOR<UserCreateWithoutAtasanInput, UserUncheckedCreateWithoutAtasanInput> | UserCreateWithoutAtasanInput[] | UserUncheckedCreateWithoutAtasanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAtasanInput | UserCreateOrConnectWithoutAtasanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAtasanInput | UserUpsertWithWhereUniqueWithoutAtasanInput[]
    createMany?: UserCreateManyAtasanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAtasanInput | UserUpdateWithWhereUniqueWithoutAtasanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAtasanInput | UserUpdateManyWithWhereWithoutAtasanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HistoryJabatanUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryJabatanCreateWithoutUserInput, HistoryJabatanUncheckedCreateWithoutUserInput> | HistoryJabatanCreateWithoutUserInput[] | HistoryJabatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutUserInput | HistoryJabatanCreateOrConnectWithoutUserInput[]
    upsert?: HistoryJabatanUpsertWithWhereUniqueWithoutUserInput | HistoryJabatanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryJabatanCreateManyUserInputEnvelope
    set?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    disconnect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    delete?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    update?: HistoryJabatanUpdateWithWhereUniqueWithoutUserInput | HistoryJabatanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryJabatanUpdateManyWithWhereWithoutUserInput | HistoryJabatanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryJabatanScalarWhereInput | HistoryJabatanScalarWhereInput[]
  }

  export type TugasUpdateManyWithoutUserNestedInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutUserInput | TugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutUserInput | TugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutUserInput | TugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type LaporanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutUserInput | LaporanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutUserInput | LaporanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutUserInput | LaporanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type PengumpulanTugasUpdateManyWithoutUserNestedInput = {
    create?: XOR<PengumpulanTugasCreateWithoutUserInput, PengumpulanTugasUncheckedCreateWithoutUserInput> | PengumpulanTugasCreateWithoutUserInput[] | PengumpulanTugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutUserInput | PengumpulanTugasCreateOrConnectWithoutUserInput[]
    upsert?: PengumpulanTugasUpsertWithWhereUniqueWithoutUserInput | PengumpulanTugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PengumpulanTugasCreateManyUserInputEnvelope
    set?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    disconnect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    delete?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    update?: PengumpulanTugasUpdateWithWhereUniqueWithoutUserInput | PengumpulanTugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PengumpulanTugasUpdateManyWithWhereWithoutUserInput | PengumpulanTugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PengumpulanTugasScalarWhereInput | PengumpulanTugasScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutAtasanNestedInput = {
    create?: XOR<UserCreateWithoutAtasanInput, UserUncheckedCreateWithoutAtasanInput> | UserCreateWithoutAtasanInput[] | UserUncheckedCreateWithoutAtasanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAtasanInput | UserCreateOrConnectWithoutAtasanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAtasanInput | UserUpsertWithWhereUniqueWithoutAtasanInput[]
    createMany?: UserCreateManyAtasanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAtasanInput | UserUpdateWithWhereUniqueWithoutAtasanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAtasanInput | UserUpdateManyWithWhereWithoutAtasanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryJabatanCreateWithoutUserInput, HistoryJabatanUncheckedCreateWithoutUserInput> | HistoryJabatanCreateWithoutUserInput[] | HistoryJabatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryJabatanCreateOrConnectWithoutUserInput | HistoryJabatanCreateOrConnectWithoutUserInput[]
    upsert?: HistoryJabatanUpsertWithWhereUniqueWithoutUserInput | HistoryJabatanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryJabatanCreateManyUserInputEnvelope
    set?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    disconnect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    delete?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    connect?: HistoryJabatanWhereUniqueInput | HistoryJabatanWhereUniqueInput[]
    update?: HistoryJabatanUpdateWithWhereUniqueWithoutUserInput | HistoryJabatanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryJabatanUpdateManyWithWhereWithoutUserInput | HistoryJabatanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryJabatanScalarWhereInput | HistoryJabatanScalarWhereInput[]
  }

  export type TugasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutUserInput | TugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutUserInput | TugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutUserInput | TugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutUserInput | LaporanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutUserInput | LaporanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutUserInput | LaporanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PengumpulanTugasCreateWithoutUserInput, PengumpulanTugasUncheckedCreateWithoutUserInput> | PengumpulanTugasCreateWithoutUserInput[] | PengumpulanTugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutUserInput | PengumpulanTugasCreateOrConnectWithoutUserInput[]
    upsert?: PengumpulanTugasUpsertWithWhereUniqueWithoutUserInput | PengumpulanTugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PengumpulanTugasCreateManyUserInputEnvelope
    set?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    disconnect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    delete?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    update?: PengumpulanTugasUpdateWithWhereUniqueWithoutUserInput | PengumpulanTugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PengumpulanTugasUpdateManyWithWhereWithoutUserInput | PengumpulanTugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PengumpulanTugasScalarWhereInput | PengumpulanTugasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type JabatanCreateNestedOneWithoutHistoryInput = {
    create?: XOR<JabatanCreateWithoutHistoryInput, JabatanUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutHistoryInput
    connect?: JabatanWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type JabatanUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<JabatanCreateWithoutHistoryInput, JabatanUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutHistoryInput
    upsert?: JabatanUpsertWithoutHistoryInput
    connect?: JabatanWhereUniqueInput
    update?: XOR<XOR<JabatanUpdateToOneWithWhereWithoutHistoryInput, JabatanUpdateWithoutHistoryInput>, JabatanUncheckedUpdateWithoutHistoryInput>
  }

  export type UserCreateNestedOneWithoutTugasInput = {
    create?: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
    connectOrCreate?: UserCreateOrConnectWithoutTugasInput
    connect?: UserWhereUniqueInput
  }

  export type PengumpulanTugasCreateNestedManyWithoutTugasInput = {
    create?: XOR<PengumpulanTugasCreateWithoutTugasInput, PengumpulanTugasUncheckedCreateWithoutTugasInput> | PengumpulanTugasCreateWithoutTugasInput[] | PengumpulanTugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutTugasInput | PengumpulanTugasCreateOrConnectWithoutTugasInput[]
    createMany?: PengumpulanTugasCreateManyTugasInputEnvelope
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
  }

  export type PengumpulanTugasUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<PengumpulanTugasCreateWithoutTugasInput, PengumpulanTugasUncheckedCreateWithoutTugasInput> | PengumpulanTugasCreateWithoutTugasInput[] | PengumpulanTugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutTugasInput | PengumpulanTugasCreateOrConnectWithoutTugasInput[]
    createMany?: PengumpulanTugasCreateManyTugasInputEnvelope
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
  }

  export type EnumStatusTugasFieldUpdateOperationsInput = {
    set?: $Enums.StatusTugas
  }

  export type EnumPrioritasFieldUpdateOperationsInput = {
    set?: $Enums.Prioritas
  }

  export type UserUpdateOneRequiredWithoutTugasNestedInput = {
    create?: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
    connectOrCreate?: UserCreateOrConnectWithoutTugasInput
    upsert?: UserUpsertWithoutTugasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTugasInput, UserUpdateWithoutTugasInput>, UserUncheckedUpdateWithoutTugasInput>
  }

  export type PengumpulanTugasUpdateManyWithoutTugasNestedInput = {
    create?: XOR<PengumpulanTugasCreateWithoutTugasInput, PengumpulanTugasUncheckedCreateWithoutTugasInput> | PengumpulanTugasCreateWithoutTugasInput[] | PengumpulanTugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutTugasInput | PengumpulanTugasCreateOrConnectWithoutTugasInput[]
    upsert?: PengumpulanTugasUpsertWithWhereUniqueWithoutTugasInput | PengumpulanTugasUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: PengumpulanTugasCreateManyTugasInputEnvelope
    set?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    disconnect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    delete?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    update?: PengumpulanTugasUpdateWithWhereUniqueWithoutTugasInput | PengumpulanTugasUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: PengumpulanTugasUpdateManyWithWhereWithoutTugasInput | PengumpulanTugasUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: PengumpulanTugasScalarWhereInput | PengumpulanTugasScalarWhereInput[]
  }

  export type PengumpulanTugasUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<PengumpulanTugasCreateWithoutTugasInput, PengumpulanTugasUncheckedCreateWithoutTugasInput> | PengumpulanTugasCreateWithoutTugasInput[] | PengumpulanTugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutTugasInput | PengumpulanTugasCreateOrConnectWithoutTugasInput[]
    upsert?: PengumpulanTugasUpsertWithWhereUniqueWithoutTugasInput | PengumpulanTugasUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: PengumpulanTugasCreateManyTugasInputEnvelope
    set?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    disconnect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    delete?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    connect?: PengumpulanTugasWhereUniqueInput | PengumpulanTugasWhereUniqueInput[]
    update?: PengumpulanTugasUpdateWithWhereUniqueWithoutTugasInput | PengumpulanTugasUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: PengumpulanTugasUpdateManyWithWhereWithoutTugasInput | PengumpulanTugasUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: PengumpulanTugasScalarWhereInput | PengumpulanTugasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLaporanInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    upsert?: UserUpsertWithoutLaporanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaporanInput, UserUpdateWithoutLaporanInput>, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type TugasCreateNestedOneWithoutPengumpulan_tugasInput = {
    create?: XOR<TugasCreateWithoutPengumpulan_tugasInput, TugasUncheckedCreateWithoutPengumpulan_tugasInput>
    connectOrCreate?: TugasCreateOrConnectWithoutPengumpulan_tugasInput
    connect?: TugasWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPengumpulan_tugasInput = {
    create?: XOR<UserCreateWithoutPengumpulan_tugasInput, UserUncheckedCreateWithoutPengumpulan_tugasInput>
    connectOrCreate?: UserCreateOrConnectWithoutPengumpulan_tugasInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutPengumpulanTugasInput = {
    create?: XOR<RatingCreateWithoutPengumpulanTugasInput, RatingUncheckedCreateWithoutPengumpulanTugasInput> | RatingCreateWithoutPengumpulanTugasInput[] | RatingUncheckedCreateWithoutPengumpulanTugasInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutPengumpulanTugasInput | RatingCreateOrConnectWithoutPengumpulanTugasInput[]
    createMany?: RatingCreateManyPengumpulanTugasInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutPengumpulanTugasInput = {
    create?: XOR<RatingCreateWithoutPengumpulanTugasInput, RatingUncheckedCreateWithoutPengumpulanTugasInput> | RatingCreateWithoutPengumpulanTugasInput[] | RatingUncheckedCreateWithoutPengumpulanTugasInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutPengumpulanTugasInput | RatingCreateOrConnectWithoutPengumpulanTugasInput[]
    createMany?: RatingCreateManyPengumpulanTugasInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type EnumStatusPengumpulanTugasFieldUpdateOperationsInput = {
    set?: $Enums.StatusPengumpulanTugas
  }

  export type TugasUpdateOneRequiredWithoutPengumpulan_tugasNestedInput = {
    create?: XOR<TugasCreateWithoutPengumpulan_tugasInput, TugasUncheckedCreateWithoutPengumpulan_tugasInput>
    connectOrCreate?: TugasCreateOrConnectWithoutPengumpulan_tugasInput
    upsert?: TugasUpsertWithoutPengumpulan_tugasInput
    connect?: TugasWhereUniqueInput
    update?: XOR<XOR<TugasUpdateToOneWithWhereWithoutPengumpulan_tugasInput, TugasUpdateWithoutPengumpulan_tugasInput>, TugasUncheckedUpdateWithoutPengumpulan_tugasInput>
  }

  export type UserUpdateOneRequiredWithoutPengumpulan_tugasNestedInput = {
    create?: XOR<UserCreateWithoutPengumpulan_tugasInput, UserUncheckedCreateWithoutPengumpulan_tugasInput>
    connectOrCreate?: UserCreateOrConnectWithoutPengumpulan_tugasInput
    upsert?: UserUpsertWithoutPengumpulan_tugasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPengumpulan_tugasInput, UserUpdateWithoutPengumpulan_tugasInput>, UserUncheckedUpdateWithoutPengumpulan_tugasInput>
  }

  export type RatingUpdateManyWithoutPengumpulanTugasNestedInput = {
    create?: XOR<RatingCreateWithoutPengumpulanTugasInput, RatingUncheckedCreateWithoutPengumpulanTugasInput> | RatingCreateWithoutPengumpulanTugasInput[] | RatingUncheckedCreateWithoutPengumpulanTugasInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutPengumpulanTugasInput | RatingCreateOrConnectWithoutPengumpulanTugasInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutPengumpulanTugasInput | RatingUpsertWithWhereUniqueWithoutPengumpulanTugasInput[]
    createMany?: RatingCreateManyPengumpulanTugasInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutPengumpulanTugasInput | RatingUpdateWithWhereUniqueWithoutPengumpulanTugasInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutPengumpulanTugasInput | RatingUpdateManyWithWhereWithoutPengumpulanTugasInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutPengumpulanTugasNestedInput = {
    create?: XOR<RatingCreateWithoutPengumpulanTugasInput, RatingUncheckedCreateWithoutPengumpulanTugasInput> | RatingCreateWithoutPengumpulanTugasInput[] | RatingUncheckedCreateWithoutPengumpulanTugasInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutPengumpulanTugasInput | RatingCreateOrConnectWithoutPengumpulanTugasInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutPengumpulanTugasInput | RatingUpsertWithWhereUniqueWithoutPengumpulanTugasInput[]
    createMany?: RatingCreateManyPengumpulanTugasInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutPengumpulanTugasInput | RatingUpdateWithWhereUniqueWithoutPengumpulanTugasInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutPengumpulanTugasInput | RatingUpdateManyWithWhereWithoutPengumpulanTugasInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type PengumpulanTugasCreateNestedOneWithoutRatingInput = {
    create?: XOR<PengumpulanTugasCreateWithoutRatingInput, PengumpulanTugasUncheckedCreateWithoutRatingInput>
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutRatingInput
    connect?: PengumpulanTugasWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PengumpulanTugasUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<PengumpulanTugasCreateWithoutRatingInput, PengumpulanTugasUncheckedCreateWithoutRatingInput>
    connectOrCreate?: PengumpulanTugasCreateOrConnectWithoutRatingInput
    upsert?: PengumpulanTugasUpsertWithoutRatingInput
    connect?: PengumpulanTugasWhereUniqueInput
    update?: XOR<XOR<PengumpulanTugasUpdateToOneWithWhereWithoutRatingInput, PengumpulanTugasUpdateWithoutRatingInput>, PengumpulanTugasUncheckedUpdateWithoutRatingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusTugasFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTugas | EnumStatusTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTugas[]
    notIn?: $Enums.StatusTugas[]
    not?: NestedEnumStatusTugasFilter<$PrismaModel> | $Enums.StatusTugas
  }

  export type NestedEnumPrioritasFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioritas | EnumPrioritasFieldRefInput<$PrismaModel>
    in?: $Enums.Prioritas[]
    notIn?: $Enums.Prioritas[]
    not?: NestedEnumPrioritasFilter<$PrismaModel> | $Enums.Prioritas
  }

  export type NestedEnumStatusTugasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTugas | EnumStatusTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTugas[]
    notIn?: $Enums.StatusTugas[]
    not?: NestedEnumStatusTugasWithAggregatesFilter<$PrismaModel> | $Enums.StatusTugas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTugasFilter<$PrismaModel>
    _max?: NestedEnumStatusTugasFilter<$PrismaModel>
  }

  export type NestedEnumPrioritasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioritas | EnumPrioritasFieldRefInput<$PrismaModel>
    in?: $Enums.Prioritas[]
    notIn?: $Enums.Prioritas[]
    not?: NestedEnumPrioritasWithAggregatesFilter<$PrismaModel> | $Enums.Prioritas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioritasFilter<$PrismaModel>
    _max?: NestedEnumPrioritasFilter<$PrismaModel>
  }

  export type NestedEnumStatusPengumpulanTugasFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengumpulanTugas | EnumStatusPengumpulanTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPengumpulanTugas[]
    notIn?: $Enums.StatusPengumpulanTugas[]
    not?: NestedEnumStatusPengumpulanTugasFilter<$PrismaModel> | $Enums.StatusPengumpulanTugas
  }

  export type NestedEnumStatusPengumpulanTugasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengumpulanTugas | EnumStatusPengumpulanTugasFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPengumpulanTugas[]
    notIn?: $Enums.StatusPengumpulanTugas[]
    not?: NestedEnumStatusPengumpulanTugasWithAggregatesFilter<$PrismaModel> | $Enums.StatusPengumpulanTugas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPengumpulanTugasFilter<$PrismaModel>
    _max?: NestedEnumStatusPengumpulanTugasFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutJabatanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJabatanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJabatanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJabatanInput, UserUncheckedCreateWithoutJabatanInput>
  }

  export type UserCreateManyJabatanInputEnvelope = {
    data: UserCreateManyJabatanInput | UserCreateManyJabatanInput[]
    skipDuplicates?: boolean
  }

  export type HistoryJabatanCreateWithoutJabatanInput = {
    id?: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type HistoryJabatanUncheckedCreateWithoutJabatanInput = {
    id?: string
    user_nip: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HistoryJabatanCreateOrConnectWithoutJabatanInput = {
    where: HistoryJabatanWhereUniqueInput
    create: XOR<HistoryJabatanCreateWithoutJabatanInput, HistoryJabatanUncheckedCreateWithoutJabatanInput>
  }

  export type HistoryJabatanCreateManyJabatanInputEnvelope = {
    data: HistoryJabatanCreateManyJabatanInput | HistoryJabatanCreateManyJabatanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutJabatanInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutJabatanInput, UserUncheckedUpdateWithoutJabatanInput>
    create: XOR<UserCreateWithoutJabatanInput, UserUncheckedCreateWithoutJabatanInput>
  }

  export type UserUpdateWithWhereUniqueWithoutJabatanInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutJabatanInput, UserUncheckedUpdateWithoutJabatanInput>
  }

  export type UserUpdateManyWithWhereWithoutJabatanInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutJabatanInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    nip?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kd_jabatan?: StringFilter<"User"> | string
    nip_atasan?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type HistoryJabatanUpsertWithWhereUniqueWithoutJabatanInput = {
    where: HistoryJabatanWhereUniqueInput
    update: XOR<HistoryJabatanUpdateWithoutJabatanInput, HistoryJabatanUncheckedUpdateWithoutJabatanInput>
    create: XOR<HistoryJabatanCreateWithoutJabatanInput, HistoryJabatanUncheckedCreateWithoutJabatanInput>
  }

  export type HistoryJabatanUpdateWithWhereUniqueWithoutJabatanInput = {
    where: HistoryJabatanWhereUniqueInput
    data: XOR<HistoryJabatanUpdateWithoutJabatanInput, HistoryJabatanUncheckedUpdateWithoutJabatanInput>
  }

  export type HistoryJabatanUpdateManyWithWhereWithoutJabatanInput = {
    where: HistoryJabatanScalarWhereInput
    data: XOR<HistoryJabatanUpdateManyMutationInput, HistoryJabatanUncheckedUpdateManyWithoutJabatanInput>
  }

  export type HistoryJabatanScalarWhereInput = {
    AND?: HistoryJabatanScalarWhereInput | HistoryJabatanScalarWhereInput[]
    OR?: HistoryJabatanScalarWhereInput[]
    NOT?: HistoryJabatanScalarWhereInput | HistoryJabatanScalarWhereInput[]
    id?: StringFilter<"HistoryJabatan"> | string
    user_nip?: StringFilter<"HistoryJabatan"> | string
    kd_jabatan?: StringFilter<"HistoryJabatan"> | string
    tanggal_mulai?: DateTimeFilter<"HistoryJabatan"> | Date | string
    tanggal_akhir?: DateTimeNullableFilter<"HistoryJabatan"> | Date | string | null
    created_at?: DateTimeFilter<"HistoryJabatan"> | Date | string
    updated_at?: DateTimeFilter<"HistoryJabatan"> | Date | string
  }

  export type UserCreateWithoutBawahanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    jabatan: JabatanCreateNestedOneWithoutUserInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBawahanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBawahanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBawahanInput, UserUncheckedCreateWithoutBawahanInput>
  }

  export type JabatanCreateWithoutUserInput = {
    kd_jabatan?: string
    nama_jabatan: string
    history?: HistoryJabatanCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateWithoutUserInput = {
    kd_jabatan?: string
    nama_jabatan: string
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanCreateOrConnectWithoutUserInput = {
    where: JabatanWhereUniqueInput
    create: XOR<JabatanCreateWithoutUserInput, JabatanUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutAtasanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    jabatan: JabatanCreateNestedOneWithoutUserInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAtasanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAtasanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAtasanInput, UserUncheckedCreateWithoutAtasanInput>
  }

  export type UserCreateManyAtasanInputEnvelope = {
    data: UserCreateManyAtasanInput | UserCreateManyAtasanInput[]
    skipDuplicates?: boolean
  }

  export type HistoryJabatanCreateWithoutUserInput = {
    id?: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    jabatan: JabatanCreateNestedOneWithoutHistoryInput
  }

  export type HistoryJabatanUncheckedCreateWithoutUserInput = {
    id?: string
    kd_jabatan: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HistoryJabatanCreateOrConnectWithoutUserInput = {
    where: HistoryJabatanWhereUniqueInput
    create: XOR<HistoryJabatanCreateWithoutUserInput, HistoryJabatanUncheckedCreateWithoutUserInput>
  }

  export type HistoryJabatanCreateManyUserInputEnvelope = {
    data: HistoryJabatanCreateManyUserInput | HistoryJabatanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TugasCreateWithoutUserInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateWithoutUserInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasCreateOrConnectWithoutUserInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput>
  }

  export type TugasCreateManyUserInputEnvelope = {
    data: TugasCreateManyUserInput | TugasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LaporanCreateWithoutUserInput = {
    kd_laporan?: string
    isi_laporan: string
    judul_laporan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LaporanUncheckedCreateWithoutUserInput = {
    kd_laporan?: string
    isi_laporan: string
    judul_laporan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LaporanCreateOrConnectWithoutUserInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput>
  }

  export type LaporanCreateManyUserInputEnvelope = {
    data: LaporanCreateManyUserInput | LaporanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PengumpulanTugasCreateWithoutUserInput = {
    kd_pengumpulan_tugas?: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    tugas: TugasCreateNestedOneWithoutPengumpulan_tugasInput
    rating?: RatingCreateNestedManyWithoutPengumpulanTugasInput
  }

  export type PengumpulanTugasUncheckedCreateWithoutUserInput = {
    kd_pengumpulan_tugas?: string
    kd_tugas: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    rating?: RatingUncheckedCreateNestedManyWithoutPengumpulanTugasInput
  }

  export type PengumpulanTugasCreateOrConnectWithoutUserInput = {
    where: PengumpulanTugasWhereUniqueInput
    create: XOR<PengumpulanTugasCreateWithoutUserInput, PengumpulanTugasUncheckedCreateWithoutUserInput>
  }

  export type PengumpulanTugasCreateManyUserInputEnvelope = {
    data: PengumpulanTugasCreateManyUserInput | PengumpulanTugasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBawahanInput = {
    update: XOR<UserUpdateWithoutBawahanInput, UserUncheckedUpdateWithoutBawahanInput>
    create: XOR<UserCreateWithoutBawahanInput, UserUncheckedCreateWithoutBawahanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBawahanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBawahanInput, UserUncheckedUpdateWithoutBawahanInput>
  }

  export type UserUpdateWithoutBawahanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBawahanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JabatanUpsertWithoutUserInput = {
    update: XOR<JabatanUpdateWithoutUserInput, JabatanUncheckedUpdateWithoutUserInput>
    create: XOR<JabatanCreateWithoutUserInput, JabatanUncheckedCreateWithoutUserInput>
    where?: JabatanWhereInput
  }

  export type JabatanUpdateToOneWithWhereWithoutUserInput = {
    where?: JabatanWhereInput
    data: XOR<JabatanUpdateWithoutUserInput, JabatanUncheckedUpdateWithoutUserInput>
  }

  export type JabatanUpdateWithoutUserInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    history?: HistoryJabatanUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateWithoutUserInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    history?: HistoryJabatanUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutAtasanInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAtasanInput, UserUncheckedUpdateWithoutAtasanInput>
    create: XOR<UserCreateWithoutAtasanInput, UserUncheckedCreateWithoutAtasanInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAtasanInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAtasanInput, UserUncheckedUpdateWithoutAtasanInput>
  }

  export type UserUpdateManyWithWhereWithoutAtasanInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAtasanInput>
  }

  export type HistoryJabatanUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryJabatanWhereUniqueInput
    update: XOR<HistoryJabatanUpdateWithoutUserInput, HistoryJabatanUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryJabatanCreateWithoutUserInput, HistoryJabatanUncheckedCreateWithoutUserInput>
  }

  export type HistoryJabatanUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryJabatanWhereUniqueInput
    data: XOR<HistoryJabatanUpdateWithoutUserInput, HistoryJabatanUncheckedUpdateWithoutUserInput>
  }

  export type HistoryJabatanUpdateManyWithWhereWithoutUserInput = {
    where: HistoryJabatanScalarWhereInput
    data: XOR<HistoryJabatanUpdateManyMutationInput, HistoryJabatanUncheckedUpdateManyWithoutUserInput>
  }

  export type TugasUpsertWithWhereUniqueWithoutUserInput = {
    where: TugasWhereUniqueInput
    update: XOR<TugasUpdateWithoutUserInput, TugasUncheckedUpdateWithoutUserInput>
    create: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput>
  }

  export type TugasUpdateWithWhereUniqueWithoutUserInput = {
    where: TugasWhereUniqueInput
    data: XOR<TugasUpdateWithoutUserInput, TugasUncheckedUpdateWithoutUserInput>
  }

  export type TugasUpdateManyWithWhereWithoutUserInput = {
    where: TugasScalarWhereInput
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyWithoutUserInput>
  }

  export type TugasScalarWhereInput = {
    AND?: TugasScalarWhereInput | TugasScalarWhereInput[]
    OR?: TugasScalarWhereInput[]
    NOT?: TugasScalarWhereInput | TugasScalarWhereInput[]
    kd_tugas?: StringFilter<"Tugas"> | string
    judul?: StringFilter<"Tugas"> | string
    deskripsi?: StringFilter<"Tugas"> | string
    user_nip?: StringFilter<"Tugas"> | string
    status?: EnumStatusTugasFilter<"Tugas"> | $Enums.StatusTugas
    deadline?: DateTimeFilter<"Tugas"> | Date | string
    prioritas?: EnumPrioritasFilter<"Tugas"> | $Enums.Prioritas
    created_at?: DateTimeFilter<"Tugas"> | Date | string
    updated_at?: DateTimeFilter<"Tugas"> | Date | string
  }

  export type LaporanUpsertWithWhereUniqueWithoutUserInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutUserInput, LaporanUncheckedUpdateWithoutUserInput>
    create: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutUserInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutUserInput, LaporanUncheckedUpdateWithoutUserInput>
  }

  export type LaporanUpdateManyWithWhereWithoutUserInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutUserInput>
  }

  export type LaporanScalarWhereInput = {
    AND?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    OR?: LaporanScalarWhereInput[]
    NOT?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    kd_laporan?: StringFilter<"Laporan"> | string
    isi_laporan?: StringFilter<"Laporan"> | string
    judul_laporan?: StringFilter<"Laporan"> | string
    user_nip?: StringFilter<"Laporan"> | string
    created_at?: DateTimeFilter<"Laporan"> | Date | string
    updated_at?: DateTimeFilter<"Laporan"> | Date | string
  }

  export type PengumpulanTugasUpsertWithWhereUniqueWithoutUserInput = {
    where: PengumpulanTugasWhereUniqueInput
    update: XOR<PengumpulanTugasUpdateWithoutUserInput, PengumpulanTugasUncheckedUpdateWithoutUserInput>
    create: XOR<PengumpulanTugasCreateWithoutUserInput, PengumpulanTugasUncheckedCreateWithoutUserInput>
  }

  export type PengumpulanTugasUpdateWithWhereUniqueWithoutUserInput = {
    where: PengumpulanTugasWhereUniqueInput
    data: XOR<PengumpulanTugasUpdateWithoutUserInput, PengumpulanTugasUncheckedUpdateWithoutUserInput>
  }

  export type PengumpulanTugasUpdateManyWithWhereWithoutUserInput = {
    where: PengumpulanTugasScalarWhereInput
    data: XOR<PengumpulanTugasUpdateManyMutationInput, PengumpulanTugasUncheckedUpdateManyWithoutUserInput>
  }

  export type PengumpulanTugasScalarWhereInput = {
    AND?: PengumpulanTugasScalarWhereInput | PengumpulanTugasScalarWhereInput[]
    OR?: PengumpulanTugasScalarWhereInput[]
    NOT?: PengumpulanTugasScalarWhereInput | PengumpulanTugasScalarWhereInput[]
    kd_pengumpulan_tugas?: StringFilter<"PengumpulanTugas"> | string
    kd_tugas?: StringFilter<"PengumpulanTugas"> | string
    user_nip?: StringFilter<"PengumpulanTugas"> | string
    tanggal_pengumpulan?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    file_path?: StringFilter<"PengumpulanTugas"> | string
    catatan?: StringFilter<"PengumpulanTugas"> | string
    status?: EnumStatusPengumpulanTugasFilter<"PengumpulanTugas"> | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFilter<"PengumpulanTugas"> | Date | string
    updated_at?: DateTimeFilter<"PengumpulanTugas"> | Date | string
  }

  export type UserCreateWithoutHistoryInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    jabatan: JabatanCreateNestedOneWithoutUserInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type JabatanCreateWithoutHistoryInput = {
    kd_jabatan?: string
    nama_jabatan: string
    user?: UserCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateWithoutHistoryInput = {
    kd_jabatan?: string
    nama_jabatan: string
    user?: UserUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanCreateOrConnectWithoutHistoryInput = {
    where: JabatanWhereUniqueInput
    create: XOR<JabatanCreateWithoutHistoryInput, JabatanUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JabatanUpsertWithoutHistoryInput = {
    update: XOR<JabatanUpdateWithoutHistoryInput, JabatanUncheckedUpdateWithoutHistoryInput>
    create: XOR<JabatanCreateWithoutHistoryInput, JabatanUncheckedCreateWithoutHistoryInput>
    where?: JabatanWhereInput
  }

  export type JabatanUpdateToOneWithWhereWithoutHistoryInput = {
    where?: JabatanWhereInput
    data: XOR<JabatanUpdateWithoutHistoryInput, JabatanUncheckedUpdateWithoutHistoryInput>
  }

  export type JabatanUpdateWithoutHistoryInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateWithoutHistoryInput = {
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type UserCreateWithoutTugasInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    jabatan: JabatanCreateNestedOneWithoutUserInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTugasInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTugasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
  }

  export type PengumpulanTugasCreateWithoutTugasInput = {
    kd_pengumpulan_tugas?: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPengumpulan_tugasInput
    rating?: RatingCreateNestedManyWithoutPengumpulanTugasInput
  }

  export type PengumpulanTugasUncheckedCreateWithoutTugasInput = {
    kd_pengumpulan_tugas?: string
    user_nip: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    rating?: RatingUncheckedCreateNestedManyWithoutPengumpulanTugasInput
  }

  export type PengumpulanTugasCreateOrConnectWithoutTugasInput = {
    where: PengumpulanTugasWhereUniqueInput
    create: XOR<PengumpulanTugasCreateWithoutTugasInput, PengumpulanTugasUncheckedCreateWithoutTugasInput>
  }

  export type PengumpulanTugasCreateManyTugasInputEnvelope = {
    data: PengumpulanTugasCreateManyTugasInput | PengumpulanTugasCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTugasInput = {
    update: XOR<UserUpdateWithoutTugasInput, UserUncheckedUpdateWithoutTugasInput>
    create: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTugasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTugasInput, UserUncheckedUpdateWithoutTugasInput>
  }

  export type UserUpdateWithoutTugasInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTugasInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PengumpulanTugasUpsertWithWhereUniqueWithoutTugasInput = {
    where: PengumpulanTugasWhereUniqueInput
    update: XOR<PengumpulanTugasUpdateWithoutTugasInput, PengumpulanTugasUncheckedUpdateWithoutTugasInput>
    create: XOR<PengumpulanTugasCreateWithoutTugasInput, PengumpulanTugasUncheckedCreateWithoutTugasInput>
  }

  export type PengumpulanTugasUpdateWithWhereUniqueWithoutTugasInput = {
    where: PengumpulanTugasWhereUniqueInput
    data: XOR<PengumpulanTugasUpdateWithoutTugasInput, PengumpulanTugasUncheckedUpdateWithoutTugasInput>
  }

  export type PengumpulanTugasUpdateManyWithWhereWithoutTugasInput = {
    where: PengumpulanTugasScalarWhereInput
    data: XOR<PengumpulanTugasUpdateManyMutationInput, PengumpulanTugasUncheckedUpdateManyWithoutTugasInput>
  }

  export type UserCreateWithoutLaporanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    jabatan: JabatanCreateNestedOneWithoutUserInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLaporanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLaporanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
  }

  export type UserUpsertWithoutLaporanInput = {
    update: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaporanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type UserUpdateWithoutLaporanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLaporanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TugasCreateWithoutPengumpulan_tugasInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTugasInput
  }

  export type TugasUncheckedCreateWithoutPengumpulan_tugasInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    user_nip: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TugasCreateOrConnectWithoutPengumpulan_tugasInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutPengumpulan_tugasInput, TugasUncheckedCreateWithoutPengumpulan_tugasInput>
  }

  export type UserCreateWithoutPengumpulan_tugasInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    atasan?: UserCreateNestedOneWithoutBawahanInput
    jabatan: JabatanCreateNestedOneWithoutUserInput
    bawahan?: UserCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPengumpulan_tugasInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bawahan?: UserUncheckedCreateNestedManyWithoutAtasanInput
    history?: HistoryJabatanUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPengumpulan_tugasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPengumpulan_tugasInput, UserUncheckedCreateWithoutPengumpulan_tugasInput>
  }

  export type RatingCreateWithoutPengumpulanTugasInput = {
    kd_rating?: string
    nilai: number
    komentar?: string | null
    created_at?: Date | string
  }

  export type RatingUncheckedCreateWithoutPengumpulanTugasInput = {
    kd_rating?: string
    nilai: number
    komentar?: string | null
    created_at?: Date | string
  }

  export type RatingCreateOrConnectWithoutPengumpulanTugasInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutPengumpulanTugasInput, RatingUncheckedCreateWithoutPengumpulanTugasInput>
  }

  export type RatingCreateManyPengumpulanTugasInputEnvelope = {
    data: RatingCreateManyPengumpulanTugasInput | RatingCreateManyPengumpulanTugasInput[]
    skipDuplicates?: boolean
  }

  export type TugasUpsertWithoutPengumpulan_tugasInput = {
    update: XOR<TugasUpdateWithoutPengumpulan_tugasInput, TugasUncheckedUpdateWithoutPengumpulan_tugasInput>
    create: XOR<TugasCreateWithoutPengumpulan_tugasInput, TugasUncheckedCreateWithoutPengumpulan_tugasInput>
    where?: TugasWhereInput
  }

  export type TugasUpdateToOneWithWhereWithoutPengumpulan_tugasInput = {
    where?: TugasWhereInput
    data: XOR<TugasUpdateWithoutPengumpulan_tugasInput, TugasUncheckedUpdateWithoutPengumpulan_tugasInput>
  }

  export type TugasUpdateWithoutPengumpulan_tugasInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateWithoutPengumpulan_tugasInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPengumpulan_tugasInput = {
    update: XOR<UserUpdateWithoutPengumpulan_tugasInput, UserUncheckedUpdateWithoutPengumpulan_tugasInput>
    create: XOR<UserCreateWithoutPengumpulan_tugasInput, UserUncheckedCreateWithoutPengumpulan_tugasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPengumpulan_tugasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPengumpulan_tugasInput, UserUncheckedUpdateWithoutPengumpulan_tugasInput>
  }

  export type UserUpdateWithoutPengumpulan_tugasInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPengumpulan_tugasInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RatingUpsertWithWhereUniqueWithoutPengumpulanTugasInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutPengumpulanTugasInput, RatingUncheckedUpdateWithoutPengumpulanTugasInput>
    create: XOR<RatingCreateWithoutPengumpulanTugasInput, RatingUncheckedCreateWithoutPengumpulanTugasInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutPengumpulanTugasInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutPengumpulanTugasInput, RatingUncheckedUpdateWithoutPengumpulanTugasInput>
  }

  export type RatingUpdateManyWithWhereWithoutPengumpulanTugasInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutPengumpulanTugasInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    kd_rating?: StringFilter<"Rating"> | string
    kd_pengumpulan_tugas?: StringFilter<"Rating"> | string
    nilai?: FloatFilter<"Rating"> | number
    komentar?: StringNullableFilter<"Rating"> | string | null
    created_at?: DateTimeFilter<"Rating"> | Date | string
  }

  export type PengumpulanTugasCreateWithoutRatingInput = {
    kd_pengumpulan_tugas?: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
    tugas: TugasCreateNestedOneWithoutPengumpulan_tugasInput
    user: UserCreateNestedOneWithoutPengumpulan_tugasInput
  }

  export type PengumpulanTugasUncheckedCreateWithoutRatingInput = {
    kd_pengumpulan_tugas?: string
    kd_tugas: string
    user_nip: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengumpulanTugasCreateOrConnectWithoutRatingInput = {
    where: PengumpulanTugasWhereUniqueInput
    create: XOR<PengumpulanTugasCreateWithoutRatingInput, PengumpulanTugasUncheckedCreateWithoutRatingInput>
  }

  export type PengumpulanTugasUpsertWithoutRatingInput = {
    update: XOR<PengumpulanTugasUpdateWithoutRatingInput, PengumpulanTugasUncheckedUpdateWithoutRatingInput>
    create: XOR<PengumpulanTugasCreateWithoutRatingInput, PengumpulanTugasUncheckedCreateWithoutRatingInput>
    where?: PengumpulanTugasWhereInput
  }

  export type PengumpulanTugasUpdateToOneWithWhereWithoutRatingInput = {
    where?: PengumpulanTugasWhereInput
    data: XOR<PengumpulanTugasUpdateWithoutRatingInput, PengumpulanTugasUncheckedUpdateWithoutRatingInput>
  }

  export type PengumpulanTugasUpdateWithoutRatingInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: TugasUpdateOneRequiredWithoutPengumpulan_tugasNestedInput
    user?: UserUpdateOneRequiredWithoutPengumpulan_tugasNestedInput
  }

  export type PengumpulanTugasUncheckedUpdateWithoutRatingInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    kd_tugas?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyJabatanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    nip_atasan?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HistoryJabatanCreateManyJabatanInput = {
    id?: string
    user_nip: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutJabatanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    atasan?: UserUpdateOneWithoutBawahanNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJabatanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutJabatanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nip_atasan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanUpdateWithoutJabatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryJabatanUncheckedUpdateWithoutJabatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanUncheckedUpdateManyWithoutJabatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyAtasanInput = {
    nip: string
    nama: string
    password: string
    role?: $Enums.Role
    kd_jabatan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HistoryJabatanCreateManyUserInput = {
    id?: string
    kd_jabatan: string
    tanggal_mulai: Date | string
    tanggal_akhir?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TugasCreateManyUserInput = {
    kd_tugas?: string
    judul: string
    deskripsi: string
    status?: $Enums.StatusTugas
    deadline: Date | string
    prioritas: $Enums.Prioritas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LaporanCreateManyUserInput = {
    kd_laporan?: string
    isi_laporan: string
    judul_laporan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengumpulanTugasCreateManyUserInput = {
    kd_pengumpulan_tugas?: string
    kd_tugas: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutAtasanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutUserNestedInput
    bawahan?: UserUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAtasanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bawahan?: UserUncheckedUpdateManyWithoutAtasanNestedInput
    history?: HistoryJabatanUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAtasanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryJabatanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryJabatanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kd_jabatan?: StringFieldUpdateOperationsInput | string
    tanggal_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUpdateWithoutUserInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pengumpulan_tugas?: PengumpulanTugasUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateWithoutUserInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pengumpulan_tugas?: PengumpulanTugasUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateManyWithoutUserInput = {
    kd_tugas?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTugasFieldUpdateOperationsInput | $Enums.StatusTugas
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    prioritas?: EnumPrioritasFieldUpdateOperationsInput | $Enums.Prioritas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUpdateWithoutUserInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUncheckedUpdateWithoutUserInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUncheckedUpdateManyWithoutUserInput = {
    kd_laporan?: StringFieldUpdateOperationsInput | string
    isi_laporan?: StringFieldUpdateOperationsInput | string
    judul_laporan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumpulanTugasUpdateWithoutUserInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: TugasUpdateOneRequiredWithoutPengumpulan_tugasNestedInput
    rating?: RatingUpdateManyWithoutPengumpulanTugasNestedInput
  }

  export type PengumpulanTugasUncheckedUpdateWithoutUserInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    kd_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingUncheckedUpdateManyWithoutPengumpulanTugasNestedInput
  }

  export type PengumpulanTugasUncheckedUpdateManyWithoutUserInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    kd_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumpulanTugasCreateManyTugasInput = {
    kd_pengumpulan_tugas?: string
    user_nip: string
    tanggal_pengumpulan: Date | string
    file_path: string
    catatan: string
    status?: $Enums.StatusPengumpulanTugas
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengumpulanTugasUpdateWithoutTugasInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPengumpulan_tugasNestedInput
    rating?: RatingUpdateManyWithoutPengumpulanTugasNestedInput
  }

  export type PengumpulanTugasUncheckedUpdateWithoutTugasInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingUncheckedUpdateManyWithoutPengumpulanTugasNestedInput
  }

  export type PengumpulanTugasUncheckedUpdateManyWithoutTugasInput = {
    kd_pengumpulan_tugas?: StringFieldUpdateOperationsInput | string
    user_nip?: StringFieldUpdateOperationsInput | string
    tanggal_pengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    file_path?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPengumpulanTugasFieldUpdateOperationsInput | $Enums.StatusPengumpulanTugas
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyPengumpulanTugasInput = {
    kd_rating?: string
    nilai: number
    komentar?: string | null
    created_at?: Date | string
  }

  export type RatingUpdateWithoutPengumpulanTugasInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateWithoutPengumpulanTugasInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutPengumpulanTugasInput = {
    kd_rating?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}