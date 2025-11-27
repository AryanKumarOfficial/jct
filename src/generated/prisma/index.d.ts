
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
 * Model paper
 * 
 */
export type paper = $Result.DefaultSelection<Prisma.$paperPayload>
/**
 * Model author
 * 
 */
export type author = $Result.DefaultSelection<Prisma.$authorPayload>
/**
 * Model status
 * 
 */
export type status = $Result.DefaultSelection<Prisma.$statusPayload>
/**
 * Model employee
 * 
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>
/**
 * Model archive
 * 
 */
export type archive = $Result.DefaultSelection<Prisma.$archivePayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model WalletTransaction
 * 
 */
export type WalletTransaction = $Result.DefaultSelection<Prisma.$WalletTransactionPayload>
/**
 * Model IdCounter
 * 
 */
export type IdCounter = $Result.DefaultSelection<Prisma.$IdCounterPayload>
/**
 * Model Copyright
 * 
 */
export type Copyright = $Result.DefaultSelection<Prisma.$CopyrightPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmployeeRole: {
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
  FRESHER: 'FRESHER'
};

export type EmployeeRole = (typeof EmployeeRole)[keyof typeof EmployeeRole]


export const PaperStatus: {
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PUBLISHED: 'PUBLISHED'
};

export type PaperStatus = (typeof PaperStatus)[keyof typeof PaperStatus]


export const paymentStatus: {
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS'
};

export type paymentStatus = (typeof paymentStatus)[keyof typeof paymentStatus]


export const ActivityType: {
  PAPER_SUBMITTED: 'PAPER_SUBMITTED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  COMMENT_ADDED: 'COMMENT_ADDED',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAPER_PUBLISHED: 'PAPER_PUBLISHED',
  EDITOR_ASSIGNED: 'EDITOR_ASSIGNED',
  EMPLOYEE_ADDED: 'EMPLOYEE_ADDED'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const WalletTransactionType: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

export type WalletTransactionType = (typeof WalletTransactionType)[keyof typeof WalletTransactionType]


export const CopyrightStatus: {
  PENDING: 'PENDING',
  SIGNED: 'SIGNED'
};

export type CopyrightStatus = (typeof CopyrightStatus)[keyof typeof CopyrightStatus]

}

export type EmployeeRole = $Enums.EmployeeRole

export const EmployeeRole: typeof $Enums.EmployeeRole

export type PaperStatus = $Enums.PaperStatus

export const PaperStatus: typeof $Enums.PaperStatus

export type paymentStatus = $Enums.paymentStatus

export const paymentStatus: typeof $Enums.paymentStatus

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type WalletTransactionType = $Enums.WalletTransactionType

export const WalletTransactionType: typeof $Enums.WalletTransactionType

export type CopyrightStatus = $Enums.CopyrightStatus

export const CopyrightStatus: typeof $Enums.CopyrightStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Papers
 * const papers = await prisma.paper.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Papers
   * const papers = await prisma.paper.findMany()
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
   * `prisma.paper`: Exposes CRUD operations for the **paper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Papers
    * const papers = await prisma.paper.findMany()
    * ```
    */
  get paper(): Prisma.paperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.authorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.employeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archive`: Exposes CRUD operations for the **archive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archives
    * const archives = await prisma.archive.findMany()
    * ```
    */
  get archive(): Prisma.archiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransaction.findMany()
    * ```
    */
  get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idCounter`: Exposes CRUD operations for the **IdCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdCounters
    * const idCounters = await prisma.idCounter.findMany()
    * ```
    */
  get idCounter(): Prisma.IdCounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.copyright`: Exposes CRUD operations for the **Copyright** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Copyrights
    * const copyrights = await prisma.copyright.findMany()
    * ```
    */
  get copyright(): Prisma.CopyrightDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    paper: 'paper',
    author: 'author',
    status: 'status',
    employee: 'employee',
    archive: 'archive',
    transaction: 'transaction',
    ActivityLog: 'ActivityLog',
    WalletTransaction: 'WalletTransaction',
    IdCounter: 'IdCounter',
    Copyright: 'Copyright'
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
      modelProps: "paper" | "author" | "status" | "employee" | "archive" | "transaction" | "activityLog" | "walletTransaction" | "idCounter" | "copyright"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      paper: {
        payload: Prisma.$paperPayload<ExtArgs>
        fields: Prisma.paperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>
          }
          findFirst: {
            args: Prisma.paperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>
          }
          findMany: {
            args: Prisma.paperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>[]
          }
          create: {
            args: Prisma.paperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>
          }
          createMany: {
            args: Prisma.paperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>[]
          }
          delete: {
            args: Prisma.paperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>
          }
          update: {
            args: Prisma.paperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>
          }
          deleteMany: {
            args: Prisma.paperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>[]
          }
          upsert: {
            args: Prisma.paperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paperPayload>
          }
          aggregate: {
            args: Prisma.PaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaper>
          }
          groupBy: {
            args: Prisma.paperGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.paperCountArgs<ExtArgs>
            result: $Utils.Optional<PaperCountAggregateOutputType> | number
          }
        }
      }
      author: {
        payload: Prisma.$authorPayload<ExtArgs>
        fields: Prisma.authorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findFirst: {
            args: Prisma.authorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findMany: {
            args: Prisma.authorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          create: {
            args: Prisma.authorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          createMany: {
            args: Prisma.authorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          delete: {
            args: Prisma.authorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          update: {
            args: Prisma.authorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          deleteMany: {
            args: Prisma.authorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          upsert: {
            args: Prisma.authorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.authorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      status: {
        payload: Prisma.$statusPayload<ExtArgs>
        fields: Prisma.statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findFirst: {
            args: Prisma.statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findMany: {
            args: Prisma.statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          create: {
            args: Prisma.statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          createMany: {
            args: Prisma.statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          delete: {
            args: Prisma.statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          update: {
            args: Prisma.statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          deleteMany: {
            args: Prisma.statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.statusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          upsert: {
            args: Prisma.statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.statusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>
        fields: Prisma.employeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      archive: {
        payload: Prisma.$archivePayload<ExtArgs>
        fields: Prisma.archiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>
          }
          findFirst: {
            args: Prisma.archiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>
          }
          findMany: {
            args: Prisma.archiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>[]
          }
          create: {
            args: Prisma.archiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>
          }
          createMany: {
            args: Prisma.archiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.archiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>[]
          }
          delete: {
            args: Prisma.archiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>
          }
          update: {
            args: Prisma.archiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>
          }
          deleteMany: {
            args: Prisma.archiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.archiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>[]
          }
          upsert: {
            args: Prisma.archiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivePayload>
          }
          aggregate: {
            args: Prisma.ArchiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchive>
          }
          groupBy: {
            args: Prisma.archiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.archiveCountArgs<ExtArgs>
            result: $Utils.Optional<ArchiveCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      WalletTransaction: {
        payload: Prisma.$WalletTransactionPayload<ExtArgs>
        fields: Prisma.WalletTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          delete: {
            args: Prisma.WalletTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          update: {
            args: Prisma.WalletTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          upsert: {
            args: Prisma.WalletTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransaction>
          }
          groupBy: {
            args: Prisma.WalletTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionCountAggregateOutputType> | number
          }
        }
      }
      IdCounter: {
        payload: Prisma.$IdCounterPayload<ExtArgs>
        fields: Prisma.IdCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>
          }
          findFirst: {
            args: Prisma.IdCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>
          }
          findMany: {
            args: Prisma.IdCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>[]
          }
          create: {
            args: Prisma.IdCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>
          }
          createMany: {
            args: Prisma.IdCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>[]
          }
          delete: {
            args: Prisma.IdCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>
          }
          update: {
            args: Prisma.IdCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>
          }
          deleteMany: {
            args: Prisma.IdCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>[]
          }
          upsert: {
            args: Prisma.IdCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdCounterPayload>
          }
          aggregate: {
            args: Prisma.IdCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdCounter>
          }
          groupBy: {
            args: Prisma.IdCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdCounterCountArgs<ExtArgs>
            result: $Utils.Optional<IdCounterCountAggregateOutputType> | number
          }
        }
      }
      Copyright: {
        payload: Prisma.$CopyrightPayload<ExtArgs>
        fields: Prisma.CopyrightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CopyrightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CopyrightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>
          }
          findFirst: {
            args: Prisma.CopyrightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CopyrightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>
          }
          findMany: {
            args: Prisma.CopyrightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>[]
          }
          create: {
            args: Prisma.CopyrightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>
          }
          createMany: {
            args: Prisma.CopyrightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CopyrightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>[]
          }
          delete: {
            args: Prisma.CopyrightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>
          }
          update: {
            args: Prisma.CopyrightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>
          }
          deleteMany: {
            args: Prisma.CopyrightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CopyrightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CopyrightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>[]
          }
          upsert: {
            args: Prisma.CopyrightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightPayload>
          }
          aggregate: {
            args: Prisma.CopyrightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCopyright>
          }
          groupBy: {
            args: Prisma.CopyrightGroupByArgs<ExtArgs>
            result: $Utils.Optional<CopyrightGroupByOutputType>[]
          }
          count: {
            args: Prisma.CopyrightCountArgs<ExtArgs>
            result: $Utils.Optional<CopyrightCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    paper?: paperOmit
    author?: authorOmit
    status?: statusOmit
    employee?: employeeOmit
    archive?: archiveOmit
    transaction?: transactionOmit
    activityLog?: ActivityLogOmit
    walletTransaction?: WalletTransactionOmit
    idCounter?: IdCounterOmit
    copyright?: CopyrightOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PaperCountOutputType
   */

  export type PaperCountOutputType = {
    authors: number
    paperStatuses: number
    transactions: number
    activityLogs: number
    walletTransactions: number
  }

  export type PaperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | PaperCountOutputTypeCountAuthorsArgs
    paperStatuses?: boolean | PaperCountOutputTypeCountPaperStatusesArgs
    transactions?: boolean | PaperCountOutputTypeCountTransactionsArgs
    activityLogs?: boolean | PaperCountOutputTypeCountActivityLogsArgs
    walletTransactions?: boolean | PaperCountOutputTypeCountWalletTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PaperCountOutputType without action
   */
  export type PaperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaperCountOutputType
     */
    select?: PaperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaperCountOutputType without action
   */
  export type PaperCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
  }

  /**
   * PaperCountOutputType without action
   */
  export type PaperCountOutputTypeCountPaperStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
  }

  /**
   * PaperCountOutputType without action
   */
  export type PaperCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }

  /**
   * PaperCountOutputType without action
   */
  export type PaperCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * PaperCountOutputType without action
   */
  export type PaperCountOutputTypeCountWalletTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    papers: number
    transactions: number
    ActivityLog: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    papers?: boolean | AuthorCountOutputTypeCountPapersArgs
    transactions?: boolean | AuthorCountOutputTypeCountTransactionsArgs
    ActivityLog?: boolean | AuthorCountOutputTypeCountActivityLogArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountPapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paperWhereInput
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    createdEmployees: number
    status: number
    activities: number
    walletTransactions: number
    paper: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdEmployees?: boolean | EmployeeCountOutputTypeCountCreatedEmployeesArgs
    status?: boolean | EmployeeCountOutputTypeCountStatusArgs
    activities?: boolean | EmployeeCountOutputTypeCountActivitiesArgs
    walletTransactions?: boolean | EmployeeCountOutputTypeCountWalletTransactionsArgs
    paper?: boolean | EmployeeCountOutputTypeCountPaperArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountCreatedEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountWalletTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPaperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paperWhereInput
  }


  /**
   * Count Type ArchiveCountOutputType
   */

  export type ArchiveCountOutputType = {
    papers: number
  }

  export type ArchiveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    papers?: boolean | ArchiveCountOutputTypeCountPapersArgs
  }

  // Custom InputTypes
  /**
   * ArchiveCountOutputType without action
   */
  export type ArchiveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveCountOutputType
     */
    select?: ArchiveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArchiveCountOutputType without action
   */
  export type ArchiveCountOutputTypeCountPapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paperWhereInput
  }


  /**
   * Models
   */

  /**
   * Model paper
   */

  export type AggregatePaper = {
    _count: PaperCountAggregateOutputType | null
    _min: PaperMinAggregateOutputType | null
    _max: PaperMaxAggregateOutputType | null
  }

  export type PaperMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    name: string | null
    manuscriptId: string | null
    manuscriptUrl: string | null
    publishId: string | null
    publishUrl: string | null
    archiveId: string | null
    editorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaperMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    name: string | null
    manuscriptId: string | null
    manuscriptUrl: string | null
    publishId: string | null
    publishUrl: string | null
    archiveId: string | null
    editorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaperCountAggregateOutputType = {
    id: number
    submissionId: number
    name: number
    keywords: number
    manuscriptId: number
    manuscriptUrl: number
    publishId: number
    publishUrl: number
    archiveId: number
    editorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaperMinAggregateInputType = {
    id?: true
    submissionId?: true
    name?: true
    manuscriptId?: true
    manuscriptUrl?: true
    publishId?: true
    publishUrl?: true
    archiveId?: true
    editorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaperMaxAggregateInputType = {
    id?: true
    submissionId?: true
    name?: true
    manuscriptId?: true
    manuscriptUrl?: true
    publishId?: true
    publishUrl?: true
    archiveId?: true
    editorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaperCountAggregateInputType = {
    id?: true
    submissionId?: true
    name?: true
    keywords?: true
    manuscriptId?: true
    manuscriptUrl?: true
    publishId?: true
    publishUrl?: true
    archiveId?: true
    editorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paper to aggregate.
     */
    where?: paperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of papers to fetch.
     */
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` papers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` papers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned papers
    **/
    _count?: true | PaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaperMaxAggregateInputType
  }

  export type GetPaperAggregateType<T extends PaperAggregateArgs> = {
        [P in keyof T & keyof AggregatePaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaper[P]>
      : GetScalarType<T[P], AggregatePaper[P]>
  }




  export type paperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paperWhereInput
    orderBy?: paperOrderByWithAggregationInput | paperOrderByWithAggregationInput[]
    by: PaperScalarFieldEnum[] | PaperScalarFieldEnum
    having?: paperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaperCountAggregateInputType | true
    _min?: PaperMinAggregateInputType
    _max?: PaperMaxAggregateInputType
  }

  export type PaperGroupByOutputType = {
    id: string
    submissionId: string
    name: string
    keywords: string[]
    manuscriptId: string | null
    manuscriptUrl: string | null
    publishId: string | null
    publishUrl: string | null
    archiveId: string
    editorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaperCountAggregateOutputType | null
    _min: PaperMinAggregateOutputType | null
    _max: PaperMaxAggregateOutputType | null
  }

  type GetPaperGroupByPayload<T extends paperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaperGroupByOutputType[P]>
            : GetScalarType<T[P], PaperGroupByOutputType[P]>
        }
      >
    >


  export type paperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    name?: boolean
    keywords?: boolean
    manuscriptId?: boolean
    manuscriptUrl?: boolean
    publishId?: boolean
    publishUrl?: boolean
    archiveId?: boolean
    editorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authors?: boolean | paper$authorsArgs<ExtArgs>
    paperStatuses?: boolean | paper$paperStatusesArgs<ExtArgs>
    archive?: boolean | archiveDefaultArgs<ExtArgs>
    transactions?: boolean | paper$transactionsArgs<ExtArgs>
    activityLogs?: boolean | paper$activityLogsArgs<ExtArgs>
    walletTransactions?: boolean | paper$walletTransactionsArgs<ExtArgs>
    editor?: boolean | paper$editorArgs<ExtArgs>
    Copyright?: boolean | paper$CopyrightArgs<ExtArgs>
    _count?: boolean | PaperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paper"]>

  export type paperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    name?: boolean
    keywords?: boolean
    manuscriptId?: boolean
    manuscriptUrl?: boolean
    publishId?: boolean
    publishUrl?: boolean
    archiveId?: boolean
    editorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archive?: boolean | archiveDefaultArgs<ExtArgs>
    editor?: boolean | paper$editorArgs<ExtArgs>
  }, ExtArgs["result"]["paper"]>

  export type paperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    name?: boolean
    keywords?: boolean
    manuscriptId?: boolean
    manuscriptUrl?: boolean
    publishId?: boolean
    publishUrl?: boolean
    archiveId?: boolean
    editorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archive?: boolean | archiveDefaultArgs<ExtArgs>
    editor?: boolean | paper$editorArgs<ExtArgs>
  }, ExtArgs["result"]["paper"]>

  export type paperSelectScalar = {
    id?: boolean
    submissionId?: boolean
    name?: boolean
    keywords?: boolean
    manuscriptId?: boolean
    manuscriptUrl?: boolean
    publishId?: boolean
    publishUrl?: boolean
    archiveId?: boolean
    editorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type paperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "name" | "keywords" | "manuscriptId" | "manuscriptUrl" | "publishId" | "publishUrl" | "archiveId" | "editorId" | "createdAt" | "updatedAt", ExtArgs["result"]["paper"]>
  export type paperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | paper$authorsArgs<ExtArgs>
    paperStatuses?: boolean | paper$paperStatusesArgs<ExtArgs>
    archive?: boolean | archiveDefaultArgs<ExtArgs>
    transactions?: boolean | paper$transactionsArgs<ExtArgs>
    activityLogs?: boolean | paper$activityLogsArgs<ExtArgs>
    walletTransactions?: boolean | paper$walletTransactionsArgs<ExtArgs>
    editor?: boolean | paper$editorArgs<ExtArgs>
    Copyright?: boolean | paper$CopyrightArgs<ExtArgs>
    _count?: boolean | PaperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type paperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archive?: boolean | archiveDefaultArgs<ExtArgs>
    editor?: boolean | paper$editorArgs<ExtArgs>
  }
  export type paperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archive?: boolean | archiveDefaultArgs<ExtArgs>
    editor?: boolean | paper$editorArgs<ExtArgs>
  }

  export type $paperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paper"
    objects: {
      authors: Prisma.$authorPayload<ExtArgs>[]
      paperStatuses: Prisma.$statusPayload<ExtArgs>[]
      archive: Prisma.$archivePayload<ExtArgs>
      transactions: Prisma.$transactionPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      walletTransactions: Prisma.$WalletTransactionPayload<ExtArgs>[]
      editor: Prisma.$employeePayload<ExtArgs> | null
      Copyright: Prisma.$CopyrightPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      name: string
      keywords: string[]
      manuscriptId: string | null
      manuscriptUrl: string | null
      publishId: string | null
      publishUrl: string | null
      archiveId: string
      editorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paper"]>
    composites: {}
  }

  type paperGetPayload<S extends boolean | null | undefined | paperDefaultArgs> = $Result.GetResult<Prisma.$paperPayload, S>

  type paperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaperCountAggregateInputType | true
    }

  export interface paperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paper'], meta: { name: 'paper' } }
    /**
     * Find zero or one Paper that matches the filter.
     * @param {paperFindUniqueArgs} args - Arguments to find a Paper
     * @example
     * // Get one Paper
     * const paper = await prisma.paper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paperFindUniqueArgs>(args: SelectSubset<T, paperFindUniqueArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paperFindUniqueOrThrowArgs} args - Arguments to find a Paper
     * @example
     * // Get one Paper
     * const paper = await prisma.paper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paperFindUniqueOrThrowArgs>(args: SelectSubset<T, paperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperFindFirstArgs} args - Arguments to find a Paper
     * @example
     * // Get one Paper
     * const paper = await prisma.paper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paperFindFirstArgs>(args?: SelectSubset<T, paperFindFirstArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperFindFirstOrThrowArgs} args - Arguments to find a Paper
     * @example
     * // Get one Paper
     * const paper = await prisma.paper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paperFindFirstOrThrowArgs>(args?: SelectSubset<T, paperFindFirstOrThrowArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Papers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Papers
     * const papers = await prisma.paper.findMany()
     * 
     * // Get first 10 Papers
     * const papers = await prisma.paper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paperWithIdOnly = await prisma.paper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paperFindManyArgs>(args?: SelectSubset<T, paperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paper.
     * @param {paperCreateArgs} args - Arguments to create a Paper.
     * @example
     * // Create one Paper
     * const Paper = await prisma.paper.create({
     *   data: {
     *     // ... data to create a Paper
     *   }
     * })
     * 
     */
    create<T extends paperCreateArgs>(args: SelectSubset<T, paperCreateArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Papers.
     * @param {paperCreateManyArgs} args - Arguments to create many Papers.
     * @example
     * // Create many Papers
     * const paper = await prisma.paper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paperCreateManyArgs>(args?: SelectSubset<T, paperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Papers and returns the data saved in the database.
     * @param {paperCreateManyAndReturnArgs} args - Arguments to create many Papers.
     * @example
     * // Create many Papers
     * const paper = await prisma.paper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Papers and only return the `id`
     * const paperWithIdOnly = await prisma.paper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paperCreateManyAndReturnArgs>(args?: SelectSubset<T, paperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paper.
     * @param {paperDeleteArgs} args - Arguments to delete one Paper.
     * @example
     * // Delete one Paper
     * const Paper = await prisma.paper.delete({
     *   where: {
     *     // ... filter to delete one Paper
     *   }
     * })
     * 
     */
    delete<T extends paperDeleteArgs>(args: SelectSubset<T, paperDeleteArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paper.
     * @param {paperUpdateArgs} args - Arguments to update one Paper.
     * @example
     * // Update one Paper
     * const paper = await prisma.paper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paperUpdateArgs>(args: SelectSubset<T, paperUpdateArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Papers.
     * @param {paperDeleteManyArgs} args - Arguments to filter Papers to delete.
     * @example
     * // Delete a few Papers
     * const { count } = await prisma.paper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paperDeleteManyArgs>(args?: SelectSubset<T, paperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Papers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Papers
     * const paper = await prisma.paper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paperUpdateManyArgs>(args: SelectSubset<T, paperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Papers and returns the data updated in the database.
     * @param {paperUpdateManyAndReturnArgs} args - Arguments to update many Papers.
     * @example
     * // Update many Papers
     * const paper = await prisma.paper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Papers and only return the `id`
     * const paperWithIdOnly = await prisma.paper.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paperUpdateManyAndReturnArgs>(args: SelectSubset<T, paperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paper.
     * @param {paperUpsertArgs} args - Arguments to update or create a Paper.
     * @example
     * // Update or create a Paper
     * const paper = await prisma.paper.upsert({
     *   create: {
     *     // ... data to create a Paper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paper we want to update
     *   }
     * })
     */
    upsert<T extends paperUpsertArgs>(args: SelectSubset<T, paperUpsertArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Papers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperCountArgs} args - Arguments to filter Papers to count.
     * @example
     * // Count the number of Papers
     * const count = await prisma.paper.count({
     *   where: {
     *     // ... the filter for the Papers we want to count
     *   }
     * })
    **/
    count<T extends paperCountArgs>(
      args?: Subset<T, paperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaperAggregateArgs>(args: Subset<T, PaperAggregateArgs>): Prisma.PrismaPromise<GetPaperAggregateType<T>>

    /**
     * Group by Paper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paperGroupByArgs} args - Group by arguments.
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
      T extends paperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paperGroupByArgs['orderBy'] }
        : { orderBy?: paperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paper model
   */
  readonly fields: paperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors<T extends paper$authorsArgs<ExtArgs> = {}>(args?: Subset<T, paper$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paperStatuses<T extends paper$paperStatusesArgs<ExtArgs> = {}>(args?: Subset<T, paper$paperStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archive<T extends archiveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, archiveDefaultArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends paper$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, paper$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends paper$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, paper$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    walletTransactions<T extends paper$walletTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, paper$walletTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editor<T extends paper$editorArgs<ExtArgs> = {}>(args?: Subset<T, paper$editorArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Copyright<T extends paper$CopyrightArgs<ExtArgs> = {}>(args?: Subset<T, paper$CopyrightArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the paper model
   */
  interface paperFieldRefs {
    readonly id: FieldRef<"paper", 'String'>
    readonly submissionId: FieldRef<"paper", 'String'>
    readonly name: FieldRef<"paper", 'String'>
    readonly keywords: FieldRef<"paper", 'String[]'>
    readonly manuscriptId: FieldRef<"paper", 'String'>
    readonly manuscriptUrl: FieldRef<"paper", 'String'>
    readonly publishId: FieldRef<"paper", 'String'>
    readonly publishUrl: FieldRef<"paper", 'String'>
    readonly archiveId: FieldRef<"paper", 'String'>
    readonly editorId: FieldRef<"paper", 'String'>
    readonly createdAt: FieldRef<"paper", 'DateTime'>
    readonly updatedAt: FieldRef<"paper", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paper findUnique
   */
  export type paperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * Filter, which paper to fetch.
     */
    where: paperWhereUniqueInput
  }

  /**
   * paper findUniqueOrThrow
   */
  export type paperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * Filter, which paper to fetch.
     */
    where: paperWhereUniqueInput
  }

  /**
   * paper findFirst
   */
  export type paperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * Filter, which paper to fetch.
     */
    where?: paperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of papers to fetch.
     */
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for papers.
     */
    cursor?: paperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` papers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` papers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of papers.
     */
    distinct?: PaperScalarFieldEnum | PaperScalarFieldEnum[]
  }

  /**
   * paper findFirstOrThrow
   */
  export type paperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * Filter, which paper to fetch.
     */
    where?: paperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of papers to fetch.
     */
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for papers.
     */
    cursor?: paperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` papers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` papers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of papers.
     */
    distinct?: PaperScalarFieldEnum | PaperScalarFieldEnum[]
  }

  /**
   * paper findMany
   */
  export type paperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * Filter, which papers to fetch.
     */
    where?: paperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of papers to fetch.
     */
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing papers.
     */
    cursor?: paperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` papers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` papers.
     */
    skip?: number
    distinct?: PaperScalarFieldEnum | PaperScalarFieldEnum[]
  }

  /**
   * paper create
   */
  export type paperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * The data needed to create a paper.
     */
    data: XOR<paperCreateInput, paperUncheckedCreateInput>
  }

  /**
   * paper createMany
   */
  export type paperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many papers.
     */
    data: paperCreateManyInput | paperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paper createManyAndReturn
   */
  export type paperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * The data used to create many papers.
     */
    data: paperCreateManyInput | paperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * paper update
   */
  export type paperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * The data needed to update a paper.
     */
    data: XOR<paperUpdateInput, paperUncheckedUpdateInput>
    /**
     * Choose, which paper to update.
     */
    where: paperWhereUniqueInput
  }

  /**
   * paper updateMany
   */
  export type paperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update papers.
     */
    data: XOR<paperUpdateManyMutationInput, paperUncheckedUpdateManyInput>
    /**
     * Filter which papers to update
     */
    where?: paperWhereInput
    /**
     * Limit how many papers to update.
     */
    limit?: number
  }

  /**
   * paper updateManyAndReturn
   */
  export type paperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * The data used to update papers.
     */
    data: XOR<paperUpdateManyMutationInput, paperUncheckedUpdateManyInput>
    /**
     * Filter which papers to update
     */
    where?: paperWhereInput
    /**
     * Limit how many papers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * paper upsert
   */
  export type paperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * The filter to search for the paper to update in case it exists.
     */
    where: paperWhereUniqueInput
    /**
     * In case the paper found by the `where` argument doesn't exist, create a new paper with this data.
     */
    create: XOR<paperCreateInput, paperUncheckedCreateInput>
    /**
     * In case the paper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paperUpdateInput, paperUncheckedUpdateInput>
  }

  /**
   * paper delete
   */
  export type paperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    /**
     * Filter which paper to delete.
     */
    where: paperWhereUniqueInput
  }

  /**
   * paper deleteMany
   */
  export type paperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which papers to delete
     */
    where?: paperWhereInput
    /**
     * Limit how many papers to delete.
     */
    limit?: number
  }

  /**
   * paper.authors
   */
  export type paper$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    where?: authorWhereInput
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    cursor?: authorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * paper.paperStatuses
   */
  export type paper$paperStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    where?: statusWhereInput
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    cursor?: statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * paper.transactions
   */
  export type paper$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * paper.activityLogs
   */
  export type paper$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * paper.walletTransactions
   */
  export type paper$walletTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * paper.editor
   */
  export type paper$editorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
  }

  /**
   * paper.Copyright
   */
  export type paper$CopyrightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    where?: CopyrightWhereInput
  }

  /**
   * paper without action
   */
  export type paperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
  }


  /**
   * Model author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    organisation: string | null
    country: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    organisation: string | null
    country: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    organisation: number
    country: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    organisation?: true
    country?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    organisation?: true
    country?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    organisation?: true
    country?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author to aggregate.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type authorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
    orderBy?: authorOrderByWithAggregationInput | authorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: authorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    firstName: string
    lastName: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends authorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type authorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    organisation?: boolean
    country?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    papers?: boolean | author$papersArgs<ExtArgs>
    transactions?: boolean | author$transactionsArgs<ExtArgs>
    ActivityLog?: boolean | author$ActivityLogArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    organisation?: boolean
    country?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    organisation?: boolean
    country?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    organisation?: boolean
    country?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type authorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "organisation" | "country" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["author"]>
  export type authorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    papers?: boolean | author$papersArgs<ExtArgs>
    transactions?: boolean | author$transactionsArgs<ExtArgs>
    ActivityLog?: boolean | author$ActivityLogArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author"
    objects: {
      papers: Prisma.$paperPayload<ExtArgs>[]
      transactions: Prisma.$transactionPayload<ExtArgs>[]
      ActivityLog: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string | null
      email: string
      password: string
      organisation: string
      country: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type authorGetPayload<S extends boolean | null | undefined | authorDefaultArgs> = $Result.GetResult<Prisma.$authorPayload, S>

  type authorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface authorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author'], meta: { name: 'author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {authorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorFindUniqueArgs>(args: SelectSubset<T, authorFindUniqueArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorFindUniqueOrThrowArgs>(args: SelectSubset<T, authorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorFindFirstArgs>(args?: SelectSubset<T, authorFindFirstArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorFindFirstOrThrowArgs>(args?: SelectSubset<T, authorFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorFindManyArgs>(args?: SelectSubset<T, authorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {authorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends authorCreateArgs>(args: SelectSubset<T, authorCreateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {authorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorCreateManyArgs>(args?: SelectSubset<T, authorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorCreateManyAndReturnArgs>(args?: SelectSubset<T, authorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {authorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends authorDeleteArgs>(args: SelectSubset<T, authorDeleteArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {authorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorUpdateArgs>(args: SelectSubset<T, authorUpdateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {authorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorDeleteManyArgs>(args?: SelectSubset<T, authorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorUpdateManyArgs>(args: SelectSubset<T, authorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {authorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorUpdateManyAndReturnArgs>(args: SelectSubset<T, authorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {authorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends authorUpsertArgs>(args: SelectSubset<T, authorUpsertArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorCountArgs>(
      args?: Subset<T, authorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorGroupByArgs} args - Group by arguments.
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
      T extends authorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorGroupByArgs['orderBy'] }
        : { orderBy?: authorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author model
   */
  readonly fields: authorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    papers<T extends author$papersArgs<ExtArgs> = {}>(args?: Subset<T, author$papersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends author$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, author$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ActivityLog<T extends author$ActivityLogArgs<ExtArgs> = {}>(args?: Subset<T, author$ActivityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the author model
   */
  interface authorFieldRefs {
    readonly id: FieldRef<"author", 'String'>
    readonly firstName: FieldRef<"author", 'String'>
    readonly lastName: FieldRef<"author", 'String'>
    readonly email: FieldRef<"author", 'String'>
    readonly password: FieldRef<"author", 'String'>
    readonly organisation: FieldRef<"author", 'String'>
    readonly country: FieldRef<"author", 'String'>
    readonly phone: FieldRef<"author", 'String'>
    readonly createdAt: FieldRef<"author", 'DateTime'>
    readonly updatedAt: FieldRef<"author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * author findUnique
   */
  export type authorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findUniqueOrThrow
   */
  export type authorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findFirst
   */
  export type authorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findFirstOrThrow
   */
  export type authorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findMany
   */
  export type authorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author create
   */
  export type authorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to create a author.
     */
    data: XOR<authorCreateInput, authorUncheckedCreateInput>
  }

  /**
   * author createMany
   */
  export type authorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author createManyAndReturn
   */
  export type authorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author update
   */
  export type authorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to update a author.
     */
    data: XOR<authorUpdateInput, authorUncheckedUpdateInput>
    /**
     * Choose, which author to update.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author updateMany
   */
  export type authorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author updateManyAndReturn
   */
  export type authorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author upsert
   */
  export type authorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The filter to search for the author to update in case it exists.
     */
    where: authorWhereUniqueInput
    /**
     * In case the author found by the `where` argument doesn't exist, create a new author with this data.
     */
    create: XOR<authorCreateInput, authorUncheckedCreateInput>
    /**
     * In case the author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorUpdateInput, authorUncheckedUpdateInput>
  }

  /**
   * author delete
   */
  export type authorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter which author to delete.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author deleteMany
   */
  export type authorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to delete.
     */
    limit?: number
  }

  /**
   * author.papers
   */
  export type author$papersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    where?: paperWhereInput
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    cursor?: paperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaperScalarFieldEnum | PaperScalarFieldEnum[]
  }

  /**
   * author.transactions
   */
  export type author$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * author.ActivityLog
   */
  export type author$ActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * author without action
   */
  export type authorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
  }


  /**
   * Model status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusMinAggregateOutputType = {
    id: string | null
    status: $Enums.PaperStatus | null
    isApproved: boolean | null
    paperId: string | null
    changedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatusMaxAggregateOutputType = {
    id: string | null
    status: $Enums.PaperStatus | null
    isApproved: boolean | null
    paperId: string | null
    changedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    status: number
    isApproved: number
    paperId: number
    changedById: number
    comments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StatusMinAggregateInputType = {
    id?: true
    status?: true
    isApproved?: true
    paperId?: true
    changedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    status?: true
    isApproved?: true
    paperId?: true
    changedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    status?: true
    isApproved?: true
    paperId?: true
    changedById?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which status to aggregate.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
    orderBy?: statusOrderByWithAggregationInput | statusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: string
    status: $Enums.PaperStatus
    isApproved: boolean
    paperId: string
    changedById: string | null
    comments: string[]
    createdAt: Date
    updatedAt: Date
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    isApproved?: boolean
    paperId?: boolean
    changedById?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
    changedBy?: boolean | status$changedByArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    isApproved?: boolean
    paperId?: boolean
    changedById?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
    changedBy?: boolean | status$changedByArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type statusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    isApproved?: boolean
    paperId?: boolean
    changedById?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
    changedBy?: boolean | status$changedByArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type statusSelectScalar = {
    id?: boolean
    status?: boolean
    isApproved?: boolean
    paperId?: boolean
    changedById?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "isApproved" | "paperId" | "changedById" | "comments" | "createdAt" | "updatedAt", ExtArgs["result"]["status"]>
  export type statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
    changedBy?: boolean | status$changedByArgs<ExtArgs>
  }
  export type statusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
    changedBy?: boolean | status$changedByArgs<ExtArgs>
  }
  export type statusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
    changedBy?: boolean | status$changedByArgs<ExtArgs>
  }

  export type $statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "status"
    objects: {
      paper: Prisma.$paperPayload<ExtArgs>
      changedBy: Prisma.$employeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.PaperStatus
      isApproved: boolean
      paperId: string
      changedById: string | null
      comments: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type statusGetPayload<S extends boolean | null | undefined | statusDefaultArgs> = $Result.GetResult<Prisma.$statusPayload, S>

  type statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['status'], meta: { name: 'status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {statusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statusFindUniqueArgs>(args: SelectSubset<T, statusFindUniqueArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {statusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statusFindUniqueOrThrowArgs>(args: SelectSubset<T, statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statusFindFirstArgs>(args?: SelectSubset<T, statusFindFirstArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statusFindFirstOrThrowArgs>(args?: SelectSubset<T, statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends statusFindManyArgs>(args?: SelectSubset<T, statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {statusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends statusCreateArgs>(args: SelectSubset<T, statusCreateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {statusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statusCreateManyArgs>(args?: SelectSubset<T, statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {statusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends statusCreateManyAndReturnArgs>(args?: SelectSubset<T, statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {statusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends statusDeleteArgs>(args: SelectSubset<T, statusDeleteArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {statusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statusUpdateArgs>(args: SelectSubset<T, statusUpdateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {statusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statusDeleteManyArgs>(args?: SelectSubset<T, statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statusUpdateManyArgs>(args: SelectSubset<T, statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {statusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends statusUpdateManyAndReturnArgs>(args: SelectSubset<T, statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {statusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends statusUpsertArgs>(args: SelectSubset<T, statusUpsertArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends statusCountArgs>(
      args?: Subset<T, statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusGroupByArgs} args - Group by arguments.
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
      T extends statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statusGroupByArgs['orderBy'] }
        : { orderBy?: statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the status model
   */
  readonly fields: statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paper<T extends paperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paperDefaultArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changedBy<T extends status$changedByArgs<ExtArgs> = {}>(args?: Subset<T, status$changedByArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the status model
   */
  interface statusFieldRefs {
    readonly id: FieldRef<"status", 'String'>
    readonly status: FieldRef<"status", 'PaperStatus'>
    readonly isApproved: FieldRef<"status", 'Boolean'>
    readonly paperId: FieldRef<"status", 'String'>
    readonly changedById: FieldRef<"status", 'String'>
    readonly comments: FieldRef<"status", 'String[]'>
    readonly createdAt: FieldRef<"status", 'DateTime'>
    readonly updatedAt: FieldRef<"status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * status findUnique
   */
  export type statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findUniqueOrThrow
   */
  export type statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findFirst
   */
  export type statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findFirstOrThrow
   */
  export type statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findMany
   */
  export type statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status create
   */
  export type statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to create a status.
     */
    data: XOR<statusCreateInput, statusUncheckedCreateInput>
  }

  /**
   * status createMany
   */
  export type statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * status createManyAndReturn
   */
  export type statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * status update
   */
  export type statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to update a status.
     */
    data: XOR<statusUpdateInput, statusUncheckedUpdateInput>
    /**
     * Choose, which status to update.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status updateMany
   */
  export type statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to update.
     */
    limit?: number
  }

  /**
   * status updateManyAndReturn
   */
  export type statusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * status upsert
   */
  export type statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The filter to search for the status to update in case it exists.
     */
    where: statusWhereUniqueInput
    /**
     * In case the status found by the `where` argument doesn't exist, create a new status with this data.
     */
    create: XOR<statusCreateInput, statusUncheckedCreateInput>
    /**
     * In case the status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statusUpdateInput, statusUncheckedUpdateInput>
  }

  /**
   * status delete
   */
  export type statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter which status to delete.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status deleteMany
   */
  export type statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuses to delete
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to delete.
     */
    limit?: number
  }

  /**
   * status.changedBy
   */
  export type status$changedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
  }

  /**
   * status without action
   */
  export type statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
  }


  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    walletBalance: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    walletBalance: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.EmployeeRole | null
    specialization: string | null
    isActive: boolean | null
    createdById: string | null
    walletBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.EmployeeRole | null
    specialization: string | null
    isActive: boolean | null
    createdById: string | null
    walletBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    specialization: number
    isActive: number
    createdById: number
    walletBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    walletBalance?: true
  }

  export type EmployeeSumAggregateInputType = {
    walletBalance?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    specialization?: true
    isActive?: true
    createdById?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    specialization?: true
    isActive?: true
    createdById?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    specialization?: true
    isActive?: true
    createdById?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    firstName: string
    lastName: string | null
    email: string
    password: string
    role: $Enums.EmployeeRole
    specialization: string | null
    isActive: boolean
    createdById: string | null
    walletBalance: number
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    specialization?: boolean
    isActive?: boolean
    createdById?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | employee$createdByArgs<ExtArgs>
    createdEmployees?: boolean | employee$createdEmployeesArgs<ExtArgs>
    status?: boolean | employee$statusArgs<ExtArgs>
    activities?: boolean | employee$activitiesArgs<ExtArgs>
    walletTransactions?: boolean | employee$walletTransactionsArgs<ExtArgs>
    paper?: boolean | employee$paperArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    specialization?: boolean
    isActive?: boolean
    createdById?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | employee$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    specialization?: boolean
    isActive?: boolean
    createdById?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | employee$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    specialization?: boolean
    isActive?: boolean
    createdById?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type employeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "specialization" | "isActive" | "createdById" | "walletBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | employee$createdByArgs<ExtArgs>
    createdEmployees?: boolean | employee$createdEmployeesArgs<ExtArgs>
    status?: boolean | employee$statusArgs<ExtArgs>
    activities?: boolean | employee$activitiesArgs<ExtArgs>
    walletTransactions?: boolean | employee$walletTransactionsArgs<ExtArgs>
    paper?: boolean | employee$paperArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | employee$createdByArgs<ExtArgs>
  }
  export type employeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | employee$createdByArgs<ExtArgs>
  }

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employee"
    objects: {
      createdBy: Prisma.$employeePayload<ExtArgs> | null
      createdEmployees: Prisma.$employeePayload<ExtArgs>[]
      status: Prisma.$statusPayload<ExtArgs>[]
      activities: Prisma.$ActivityLogPayload<ExtArgs>[]
      walletTransactions: Prisma.$WalletTransactionPayload<ExtArgs>[]
      paper: Prisma.$paperPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string | null
      email: string
      password: string
      role: $Enums.EmployeeRole
      specialization: string | null
      isActive: boolean
      createdById: string | null
      walletBalance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<Prisma.$employeePayload, S>

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee'], meta: { name: 'employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeeFindUniqueArgs>(args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs>(args: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeeFindFirstArgs>(args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs>(args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employeeFindManyArgs>(args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends employeeCreateArgs>(args: SelectSubset<T, employeeCreateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeeCreateManyArgs>(args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeeCreateManyAndReturnArgs>(args?: SelectSubset<T, employeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends employeeDeleteArgs>(args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeeUpdateArgs>(args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeeDeleteManyArgs>(args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeeUpdateManyArgs>(args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends employeeUpdateManyAndReturnArgs>(args: SelectSubset<T, employeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends employeeUpsertArgs>(args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employee model
   */
  readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends employee$createdByArgs<ExtArgs> = {}>(args?: Subset<T, employee$createdByArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdEmployees<T extends employee$createdEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, employee$createdEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    status<T extends employee$statusArgs<ExtArgs> = {}>(args?: Subset<T, employee$statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends employee$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, employee$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    walletTransactions<T extends employee$walletTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, employee$walletTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paper<T extends employee$paperArgs<ExtArgs> = {}>(args?: Subset<T, employee$paperArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<"employee", 'String'>
    readonly firstName: FieldRef<"employee", 'String'>
    readonly lastName: FieldRef<"employee", 'String'>
    readonly email: FieldRef<"employee", 'String'>
    readonly password: FieldRef<"employee", 'String'>
    readonly role: FieldRef<"employee", 'EmployeeRole'>
    readonly specialization: FieldRef<"employee", 'String'>
    readonly isActive: FieldRef<"employee", 'Boolean'>
    readonly createdById: FieldRef<"employee", 'String'>
    readonly walletBalance: FieldRef<"employee", 'Float'>
    readonly createdAt: FieldRef<"employee", 'DateTime'>
    readonly updatedAt: FieldRef<"employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>
  }

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employee createManyAndReturn
   */
  export type employeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employee updateManyAndReturn
   */
  export type employeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
  }

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employee.createdBy
   */
  export type employee$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
  }

  /**
   * employee.createdEmployees
   */
  export type employee$createdEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    cursor?: employeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee.status
   */
  export type employee$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    where?: statusWhereInput
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    cursor?: statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * employee.activities
   */
  export type employee$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * employee.walletTransactions
   */
  export type employee$walletTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * employee.paper
   */
  export type employee$paperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    where?: paperWhereInput
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    cursor?: paperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaperScalarFieldEnum | PaperScalarFieldEnum[]
  }

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
  }


  /**
   * Model archive
   */

  export type AggregateArchive = {
    _count: ArchiveCountAggregateOutputType | null
    _avg: ArchiveAvgAggregateOutputType | null
    _sum: ArchiveSumAggregateOutputType | null
    _min: ArchiveMinAggregateOutputType | null
    _max: ArchiveMaxAggregateOutputType | null
  }

  export type ArchiveAvgAggregateOutputType = {
    volume: number | null
    issue: number | null
    year: number | null
  }

  export type ArchiveSumAggregateOutputType = {
    volume: number | null
    issue: number | null
    year: number | null
  }

  export type ArchiveMinAggregateOutputType = {
    id: string | null
    volume: number | null
    issue: number | null
    month: string | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArchiveMaxAggregateOutputType = {
    id: string | null
    volume: number | null
    issue: number | null
    month: string | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArchiveCountAggregateOutputType = {
    id: number
    volume: number
    issue: number
    month: number
    year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArchiveAvgAggregateInputType = {
    volume?: true
    issue?: true
    year?: true
  }

  export type ArchiveSumAggregateInputType = {
    volume?: true
    issue?: true
    year?: true
  }

  export type ArchiveMinAggregateInputType = {
    id?: true
    volume?: true
    issue?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArchiveMaxAggregateInputType = {
    id?: true
    volume?: true
    issue?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArchiveCountAggregateInputType = {
    id?: true
    volume?: true
    issue?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archive to aggregate.
     */
    where?: archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archives to fetch.
     */
    orderBy?: archiveOrderByWithRelationInput | archiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archives
    **/
    _count?: true | ArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchiveMaxAggregateInputType
  }

  export type GetArchiveAggregateType<T extends ArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchive[P]>
      : GetScalarType<T[P], AggregateArchive[P]>
  }




  export type archiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archiveWhereInput
    orderBy?: archiveOrderByWithAggregationInput | archiveOrderByWithAggregationInput[]
    by: ArchiveScalarFieldEnum[] | ArchiveScalarFieldEnum
    having?: archiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchiveCountAggregateInputType | true
    _avg?: ArchiveAvgAggregateInputType
    _sum?: ArchiveSumAggregateInputType
    _min?: ArchiveMinAggregateInputType
    _max?: ArchiveMaxAggregateInputType
  }

  export type ArchiveGroupByOutputType = {
    id: string
    volume: number
    issue: number
    month: string
    year: number
    createdAt: Date
    updatedAt: Date
    _count: ArchiveCountAggregateOutputType | null
    _avg: ArchiveAvgAggregateOutputType | null
    _sum: ArchiveSumAggregateOutputType | null
    _min: ArchiveMinAggregateOutputType | null
    _max: ArchiveMaxAggregateOutputType | null
  }

  type GetArchiveGroupByPayload<T extends archiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], ArchiveGroupByOutputType[P]>
        }
      >
    >


  export type archiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume?: boolean
    issue?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    papers?: boolean | archive$papersArgs<ExtArgs>
    _count?: boolean | ArchiveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archive"]>

  export type archiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume?: boolean
    issue?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["archive"]>

  export type archiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume?: boolean
    issue?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["archive"]>

  export type archiveSelectScalar = {
    id?: boolean
    volume?: boolean
    issue?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type archiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volume" | "issue" | "month" | "year" | "createdAt" | "updatedAt", ExtArgs["result"]["archive"]>
  export type archiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    papers?: boolean | archive$papersArgs<ExtArgs>
    _count?: boolean | ArchiveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type archiveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type archiveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $archivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archive"
    objects: {
      papers: Prisma.$paperPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volume: number
      issue: number
      month: string
      year: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["archive"]>
    composites: {}
  }

  type archiveGetPayload<S extends boolean | null | undefined | archiveDefaultArgs> = $Result.GetResult<Prisma.$archivePayload, S>

  type archiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchiveCountAggregateInputType | true
    }

  export interface archiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archive'], meta: { name: 'archive' } }
    /**
     * Find zero or one Archive that matches the filter.
     * @param {archiveFindUniqueArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archiveFindUniqueArgs>(args: SelectSubset<T, archiveFindUniqueArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archiveFindUniqueOrThrowArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archiveFindUniqueOrThrowArgs>(args: SelectSubset<T, archiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archiveFindFirstArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archiveFindFirstArgs>(args?: SelectSubset<T, archiveFindFirstArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archiveFindFirstOrThrowArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archiveFindFirstOrThrowArgs>(args?: SelectSubset<T, archiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archives
     * const archives = await prisma.archive.findMany()
     * 
     * // Get first 10 Archives
     * const archives = await prisma.archive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archiveWithIdOnly = await prisma.archive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends archiveFindManyArgs>(args?: SelectSubset<T, archiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archive.
     * @param {archiveCreateArgs} args - Arguments to create a Archive.
     * @example
     * // Create one Archive
     * const Archive = await prisma.archive.create({
     *   data: {
     *     // ... data to create a Archive
     *   }
     * })
     * 
     */
    create<T extends archiveCreateArgs>(args: SelectSubset<T, archiveCreateArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archives.
     * @param {archiveCreateManyArgs} args - Arguments to create many Archives.
     * @example
     * // Create many Archives
     * const archive = await prisma.archive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archiveCreateManyArgs>(args?: SelectSubset<T, archiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archives and returns the data saved in the database.
     * @param {archiveCreateManyAndReturnArgs} args - Arguments to create many Archives.
     * @example
     * // Create many Archives
     * const archive = await prisma.archive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archives and only return the `id`
     * const archiveWithIdOnly = await prisma.archive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends archiveCreateManyAndReturnArgs>(args?: SelectSubset<T, archiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archive.
     * @param {archiveDeleteArgs} args - Arguments to delete one Archive.
     * @example
     * // Delete one Archive
     * const Archive = await prisma.archive.delete({
     *   where: {
     *     // ... filter to delete one Archive
     *   }
     * })
     * 
     */
    delete<T extends archiveDeleteArgs>(args: SelectSubset<T, archiveDeleteArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archive.
     * @param {archiveUpdateArgs} args - Arguments to update one Archive.
     * @example
     * // Update one Archive
     * const archive = await prisma.archive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archiveUpdateArgs>(args: SelectSubset<T, archiveUpdateArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archives.
     * @param {archiveDeleteManyArgs} args - Arguments to filter Archives to delete.
     * @example
     * // Delete a few Archives
     * const { count } = await prisma.archive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archiveDeleteManyArgs>(args?: SelectSubset<T, archiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archives
     * const archive = await prisma.archive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archiveUpdateManyArgs>(args: SelectSubset<T, archiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archives and returns the data updated in the database.
     * @param {archiveUpdateManyAndReturnArgs} args - Arguments to update many Archives.
     * @example
     * // Update many Archives
     * const archive = await prisma.archive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archives and only return the `id`
     * const archiveWithIdOnly = await prisma.archive.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends archiveUpdateManyAndReturnArgs>(args: SelectSubset<T, archiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archive.
     * @param {archiveUpsertArgs} args - Arguments to update or create a Archive.
     * @example
     * // Update or create a Archive
     * const archive = await prisma.archive.upsert({
     *   create: {
     *     // ... data to create a Archive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archive we want to update
     *   }
     * })
     */
    upsert<T extends archiveUpsertArgs>(args: SelectSubset<T, archiveUpsertArgs<ExtArgs>>): Prisma__archiveClient<$Result.GetResult<Prisma.$archivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archiveCountArgs} args - Arguments to filter Archives to count.
     * @example
     * // Count the number of Archives
     * const count = await prisma.archive.count({
     *   where: {
     *     // ... the filter for the Archives we want to count
     *   }
     * })
    **/
    count<T extends archiveCountArgs>(
      args?: Subset<T, archiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchiveAggregateArgs>(args: Subset<T, ArchiveAggregateArgs>): Prisma.PrismaPromise<GetArchiveAggregateType<T>>

    /**
     * Group by Archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archiveGroupByArgs} args - Group by arguments.
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
      T extends archiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archiveGroupByArgs['orderBy'] }
        : { orderBy?: archiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, archiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archive model
   */
  readonly fields: archiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    papers<T extends archive$papersArgs<ExtArgs> = {}>(args?: Subset<T, archive$papersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the archive model
   */
  interface archiveFieldRefs {
    readonly id: FieldRef<"archive", 'String'>
    readonly volume: FieldRef<"archive", 'Int'>
    readonly issue: FieldRef<"archive", 'Int'>
    readonly month: FieldRef<"archive", 'String'>
    readonly year: FieldRef<"archive", 'Int'>
    readonly createdAt: FieldRef<"archive", 'DateTime'>
    readonly updatedAt: FieldRef<"archive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * archive findUnique
   */
  export type archiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * Filter, which archive to fetch.
     */
    where: archiveWhereUniqueInput
  }

  /**
   * archive findUniqueOrThrow
   */
  export type archiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * Filter, which archive to fetch.
     */
    where: archiveWhereUniqueInput
  }

  /**
   * archive findFirst
   */
  export type archiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * Filter, which archive to fetch.
     */
    where?: archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archives to fetch.
     */
    orderBy?: archiveOrderByWithRelationInput | archiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archives.
     */
    cursor?: archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * archive findFirstOrThrow
   */
  export type archiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * Filter, which archive to fetch.
     */
    where?: archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archives to fetch.
     */
    orderBy?: archiveOrderByWithRelationInput | archiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archives.
     */
    cursor?: archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * archive findMany
   */
  export type archiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * Filter, which archives to fetch.
     */
    where?: archiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archives to fetch.
     */
    orderBy?: archiveOrderByWithRelationInput | archiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archives.
     */
    cursor?: archiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archives.
     */
    skip?: number
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * archive create
   */
  export type archiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * The data needed to create a archive.
     */
    data: XOR<archiveCreateInput, archiveUncheckedCreateInput>
  }

  /**
   * archive createMany
   */
  export type archiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archives.
     */
    data: archiveCreateManyInput | archiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archive createManyAndReturn
   */
  export type archiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * The data used to create many archives.
     */
    data: archiveCreateManyInput | archiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archive update
   */
  export type archiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * The data needed to update a archive.
     */
    data: XOR<archiveUpdateInput, archiveUncheckedUpdateInput>
    /**
     * Choose, which archive to update.
     */
    where: archiveWhereUniqueInput
  }

  /**
   * archive updateMany
   */
  export type archiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archives.
     */
    data: XOR<archiveUpdateManyMutationInput, archiveUncheckedUpdateManyInput>
    /**
     * Filter which archives to update
     */
    where?: archiveWhereInput
    /**
     * Limit how many archives to update.
     */
    limit?: number
  }

  /**
   * archive updateManyAndReturn
   */
  export type archiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * The data used to update archives.
     */
    data: XOR<archiveUpdateManyMutationInput, archiveUncheckedUpdateManyInput>
    /**
     * Filter which archives to update
     */
    where?: archiveWhereInput
    /**
     * Limit how many archives to update.
     */
    limit?: number
  }

  /**
   * archive upsert
   */
  export type archiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * The filter to search for the archive to update in case it exists.
     */
    where: archiveWhereUniqueInput
    /**
     * In case the archive found by the `where` argument doesn't exist, create a new archive with this data.
     */
    create: XOR<archiveCreateInput, archiveUncheckedCreateInput>
    /**
     * In case the archive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archiveUpdateInput, archiveUncheckedUpdateInput>
  }

  /**
   * archive delete
   */
  export type archiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
    /**
     * Filter which archive to delete.
     */
    where: archiveWhereUniqueInput
  }

  /**
   * archive deleteMany
   */
  export type archiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archives to delete
     */
    where?: archiveWhereInput
    /**
     * Limit how many archives to delete.
     */
    limit?: number
  }

  /**
   * archive.papers
   */
  export type archive$papersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    where?: paperWhereInput
    orderBy?: paperOrderByWithRelationInput | paperOrderByWithRelationInput[]
    cursor?: paperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaperScalarFieldEnum | PaperScalarFieldEnum[]
  }

  /**
   * archive without action
   */
  export type archiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive
     */
    select?: archiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive
     */
    omit?: archiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archiveInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: number | null
    status: $Enums.paymentStatus | null
    paperId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: number | null
    status: $Enums.paymentStatus | null
    paperId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    razorpayOrderId: number
    razorpayPaymentId: number
    amount: number
    status: number
    paperId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    status?: true
    paperId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    status?: true
    paperId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    status?: true
    paperId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    razorpayOrderId: string
    razorpayPaymentId: string | null
    amount: number
    status: $Enums.paymentStatus
    paperId: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    paperId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
    author?: boolean | authorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    paperId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
    author?: boolean | authorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    paperId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
    author?: boolean | authorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    paperId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "razorpayOrderId" | "razorpayPaymentId" | "amount" | "status" | "paperId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
    author?: boolean | authorDefaultArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
    author?: boolean | authorDefaultArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
    author?: boolean | authorDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      paper: Prisma.$paperPayload<ExtArgs>
      author: Prisma.$authorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razorpayOrderId: string
      razorpayPaymentId: string | null
      amount: number
      status: $Enums.paymentStatus
      paperId: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paper<T extends paperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paperDefaultArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'String'>
    readonly razorpayOrderId: FieldRef<"transaction", 'String'>
    readonly razorpayPaymentId: FieldRef<"transaction", 'String'>
    readonly amount: FieldRef<"transaction", 'Int'>
    readonly status: FieldRef<"transaction", 'paymentStatus'>
    readonly paperId: FieldRef<"transaction", 'String'>
    readonly authorId: FieldRef<"transaction", 'String'>
    readonly createdAt: FieldRef<"transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    paperId: string | null
    actorId: string | null
    authorId: string | null
    activity: $Enums.ActivityType | null
    details: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    paperId: string | null
    actorId: string | null
    authorId: string | null
    activity: $Enums.ActivityType | null
    details: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    paperId: number
    actorId: number
    authorId: number
    activity: number
    details: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    paperId?: true
    actorId?: true
    authorId?: true
    activity?: true
    details?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    paperId?: true
    actorId?: true
    authorId?: true
    activity?: true
    details?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    paperId?: true
    actorId?: true
    authorId?: true
    activity?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    paperId: string | null
    actorId: string | null
    authorId: string | null
    activity: $Enums.ActivityType
    details: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paperId?: boolean
    actorId?: boolean
    authorId?: boolean
    activity?: boolean
    details?: boolean
    createdAt?: boolean
    paper?: boolean | ActivityLog$paperArgs<ExtArgs>
    actor?: boolean | ActivityLog$actorArgs<ExtArgs>
    author?: boolean | ActivityLog$authorArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paperId?: boolean
    actorId?: boolean
    authorId?: boolean
    activity?: boolean
    details?: boolean
    createdAt?: boolean
    paper?: boolean | ActivityLog$paperArgs<ExtArgs>
    actor?: boolean | ActivityLog$actorArgs<ExtArgs>
    author?: boolean | ActivityLog$authorArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paperId?: boolean
    actorId?: boolean
    authorId?: boolean
    activity?: boolean
    details?: boolean
    createdAt?: boolean
    paper?: boolean | ActivityLog$paperArgs<ExtArgs>
    actor?: boolean | ActivityLog$actorArgs<ExtArgs>
    author?: boolean | ActivityLog$authorArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    paperId?: boolean
    actorId?: boolean
    authorId?: boolean
    activity?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paperId" | "actorId" | "authorId" | "activity" | "details" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | ActivityLog$paperArgs<ExtArgs>
    actor?: boolean | ActivityLog$actorArgs<ExtArgs>
    author?: boolean | ActivityLog$authorArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | ActivityLog$paperArgs<ExtArgs>
    actor?: boolean | ActivityLog$actorArgs<ExtArgs>
    author?: boolean | ActivityLog$authorArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | ActivityLog$paperArgs<ExtArgs>
    actor?: boolean | ActivityLog$actorArgs<ExtArgs>
    author?: boolean | ActivityLog$authorArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      paper: Prisma.$paperPayload<ExtArgs> | null
      actor: Prisma.$employeePayload<ExtArgs> | null
      author: Prisma.$authorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paperId: string | null
      actorId: string | null
      authorId: string | null
      activity: $Enums.ActivityType
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paper<T extends ActivityLog$paperArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$paperArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actor<T extends ActivityLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$actorArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends ActivityLog$authorArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$authorArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly paperId: FieldRef<"ActivityLog", 'String'>
    readonly actorId: FieldRef<"ActivityLog", 'String'>
    readonly authorId: FieldRef<"ActivityLog", 'String'>
    readonly activity: FieldRef<"ActivityLog", 'ActivityType'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.paper
   */
  export type ActivityLog$paperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    where?: paperWhereInput
  }

  /**
   * ActivityLog.actor
   */
  export type ActivityLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
  }

  /**
   * ActivityLog.author
   */
  export type ActivityLog$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    where?: authorWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransaction
   */

  export type AggregateWalletTransaction = {
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  export type WalletTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    type: $Enums.WalletTransactionType | null
    amount: number | null
    notes: string | null
    relatedPaperId: string | null
    createdAt: Date | null
  }

  export type WalletTransactionMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    type: $Enums.WalletTransactionType | null
    amount: number | null
    notes: string | null
    relatedPaperId: string | null
    createdAt: Date | null
  }

  export type WalletTransactionCountAggregateOutputType = {
    id: number
    employeeId: number
    type: number
    amount: number
    notes: number
    relatedPaperId: number
    createdAt: number
    _all: number
  }


  export type WalletTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionSumAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionMinAggregateInputType = {
    id?: true
    employeeId?: true
    type?: true
    amount?: true
    notes?: true
    relatedPaperId?: true
    createdAt?: true
  }

  export type WalletTransactionMaxAggregateInputType = {
    id?: true
    employeeId?: true
    type?: true
    amount?: true
    notes?: true
    relatedPaperId?: true
    createdAt?: true
  }

  export type WalletTransactionCountAggregateInputType = {
    id?: true
    employeeId?: true
    type?: true
    amount?: true
    notes?: true
    relatedPaperId?: true
    createdAt?: true
    _all?: true
  }

  export type WalletTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransaction to aggregate.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type GetWalletTransactionAggregateType<T extends WalletTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransaction[P]>
      : GetScalarType<T[P], AggregateWalletTransaction[P]>
  }




  export type WalletTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithAggregationInput | WalletTransactionOrderByWithAggregationInput[]
    by: WalletTransactionScalarFieldEnum[] | WalletTransactionScalarFieldEnum
    having?: WalletTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionCountAggregateInputType | true
    _avg?: WalletTransactionAvgAggregateInputType
    _sum?: WalletTransactionSumAggregateInputType
    _min?: WalletTransactionMinAggregateInputType
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type WalletTransactionGroupByOutputType = {
    id: string
    employeeId: string
    type: $Enums.WalletTransactionType
    amount: number
    notes: string | null
    relatedPaperId: string | null
    createdAt: Date
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  type GetWalletTransactionGroupByPayload<T extends WalletTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    relatedPaperId?: boolean
    createdAt?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
    relatedPaper?: boolean | WalletTransaction$relatedPaperArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    relatedPaperId?: boolean
    createdAt?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
    relatedPaper?: boolean | WalletTransaction$relatedPaperArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    relatedPaperId?: boolean
    createdAt?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
    relatedPaper?: boolean | WalletTransaction$relatedPaperArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectScalar = {
    id?: boolean
    employeeId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    relatedPaperId?: boolean
    createdAt?: boolean
  }

  export type WalletTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "type" | "amount" | "notes" | "relatedPaperId" | "createdAt", ExtArgs["result"]["walletTransaction"]>
  export type WalletTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
    relatedPaper?: boolean | WalletTransaction$relatedPaperArgs<ExtArgs>
  }
  export type WalletTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
    relatedPaper?: boolean | WalletTransaction$relatedPaperArgs<ExtArgs>
  }
  export type WalletTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
    relatedPaper?: boolean | WalletTransaction$relatedPaperArgs<ExtArgs>
  }

  export type $WalletTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransaction"
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>
      relatedPaper: Prisma.$paperPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      type: $Enums.WalletTransactionType
      amount: number
      notes: string | null
      relatedPaperId: string | null
      createdAt: Date
    }, ExtArgs["result"]["walletTransaction"]>
    composites: {}
  }

  type WalletTransactionGetPayload<S extends boolean | null | undefined | WalletTransactionDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionPayload, S>

  type WalletTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransactionCountAggregateInputType | true
    }

  export interface WalletTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransaction'], meta: { name: 'WalletTransaction' } }
    /**
     * Find zero or one WalletTransaction that matches the filter.
     * @param {WalletTransactionFindUniqueArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionFindUniqueArgs>(args: SelectSubset<T, WalletTransactionFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransactionFindUniqueOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionFindFirstArgs>(args?: SelectSubset<T, WalletTransactionFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionFindManyArgs>(args?: SelectSubset<T, WalletTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletTransaction.
     * @param {WalletTransactionCreateArgs} args - Arguments to create a WalletTransaction.
     * @example
     * // Create one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.create({
     *   data: {
     *     // ... data to create a WalletTransaction
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionCreateArgs>(args: SelectSubset<T, WalletTransactionCreateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionCreateManyArgs>(args?: SelectSubset<T, WalletTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletTransactions and returns the data saved in the database.
     * @param {WalletTransactionCreateManyAndReturnArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletTransaction.
     * @param {WalletTransactionDeleteArgs} args - Arguments to delete one WalletTransaction.
     * @example
     * // Delete one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.delete({
     *   where: {
     *     // ... filter to delete one WalletTransaction
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionDeleteArgs>(args: SelectSubset<T, WalletTransactionDeleteArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletTransaction.
     * @param {WalletTransactionUpdateArgs} args - Arguments to update one WalletTransaction.
     * @example
     * // Update one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionUpdateArgs>(args: SelectSubset<T, WalletTransactionUpdateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionUpdateManyArgs>(args: SelectSubset<T, WalletTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions and returns the data updated in the database.
     * @param {WalletTransactionUpdateManyAndReturnArgs} args - Arguments to update many WalletTransactions.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletTransaction.
     * @param {WalletTransactionUpsertArgs} args - Arguments to update or create a WalletTransaction.
     * @example
     * // Update or create a WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.upsert({
     *   create: {
     *     // ... data to create a WalletTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionUpsertArgs>(args: SelectSubset<T, WalletTransactionUpsertArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransaction.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionCountArgs>(
      args?: Subset<T, WalletTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletTransactionAggregateArgs>(args: Subset<T, WalletTransactionAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionAggregateType<T>>

    /**
     * Group by WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionGroupByArgs} args - Group by arguments.
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
      T extends WalletTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransaction model
   */
  readonly fields: WalletTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeeDefaultArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedPaper<T extends WalletTransaction$relatedPaperArgs<ExtArgs> = {}>(args?: Subset<T, WalletTransaction$relatedPaperArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WalletTransaction model
   */
  interface WalletTransactionFieldRefs {
    readonly id: FieldRef<"WalletTransaction", 'String'>
    readonly employeeId: FieldRef<"WalletTransaction", 'String'>
    readonly type: FieldRef<"WalletTransaction", 'WalletTransactionType'>
    readonly amount: FieldRef<"WalletTransaction", 'Float'>
    readonly notes: FieldRef<"WalletTransaction", 'String'>
    readonly relatedPaperId: FieldRef<"WalletTransaction", 'String'>
    readonly createdAt: FieldRef<"WalletTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransaction findUnique
   */
  export type WalletTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findUniqueOrThrow
   */
  export type WalletTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findFirst
   */
  export type WalletTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findFirstOrThrow
   */
  export type WalletTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findMany
   */
  export type WalletTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction create
   */
  export type WalletTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransaction.
     */
    data: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
  }

  /**
   * WalletTransaction createMany
   */
  export type WalletTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransaction createManyAndReturn
   */
  export type WalletTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction update
   */
  export type WalletTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransaction.
     */
    data: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
    /**
     * Choose, which WalletTransaction to update.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction updateMany
   */
  export type WalletTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
  }

  /**
   * WalletTransaction updateManyAndReturn
   */
  export type WalletTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction upsert
   */
  export type WalletTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransaction to update in case it exists.
     */
    where: WalletTransactionWhereUniqueInput
    /**
     * In case the WalletTransaction found by the `where` argument doesn't exist, create a new WalletTransaction with this data.
     */
    create: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
    /**
     * In case the WalletTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
  }

  /**
   * WalletTransaction delete
   */
  export type WalletTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter which WalletTransaction to delete.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction deleteMany
   */
  export type WalletTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to delete.
     */
    limit?: number
  }

  /**
   * WalletTransaction.relatedPaper
   */
  export type WalletTransaction$relatedPaperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paper
     */
    select?: paperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paper
     */
    omit?: paperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paperInclude<ExtArgs> | null
    where?: paperWhereInput
  }

  /**
   * WalletTransaction without action
   */
  export type WalletTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
  }


  /**
   * Model IdCounter
   */

  export type AggregateIdCounter = {
    _count: IdCounterCountAggregateOutputType | null
    _avg: IdCounterAvgAggregateOutputType | null
    _sum: IdCounterSumAggregateOutputType | null
    _min: IdCounterMinAggregateOutputType | null
    _max: IdCounterMaxAggregateOutputType | null
  }

  export type IdCounterAvgAggregateOutputType = {
    year: number | null
    count: number | null
  }

  export type IdCounterSumAggregateOutputType = {
    year: number | null
    count: number | null
  }

  export type IdCounterMinAggregateOutputType = {
    id: string | null
    year: number | null
    count: number | null
  }

  export type IdCounterMaxAggregateOutputType = {
    id: string | null
    year: number | null
    count: number | null
  }

  export type IdCounterCountAggregateOutputType = {
    id: number
    year: number
    count: number
    _all: number
  }


  export type IdCounterAvgAggregateInputType = {
    year?: true
    count?: true
  }

  export type IdCounterSumAggregateInputType = {
    year?: true
    count?: true
  }

  export type IdCounterMinAggregateInputType = {
    id?: true
    year?: true
    count?: true
  }

  export type IdCounterMaxAggregateInputType = {
    id?: true
    year?: true
    count?: true
  }

  export type IdCounterCountAggregateInputType = {
    id?: true
    year?: true
    count?: true
    _all?: true
  }

  export type IdCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdCounter to aggregate.
     */
    where?: IdCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdCounters to fetch.
     */
    orderBy?: IdCounterOrderByWithRelationInput | IdCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdCounters
    **/
    _count?: true | IdCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdCounterMaxAggregateInputType
  }

  export type GetIdCounterAggregateType<T extends IdCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateIdCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdCounter[P]>
      : GetScalarType<T[P], AggregateIdCounter[P]>
  }




  export type IdCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdCounterWhereInput
    orderBy?: IdCounterOrderByWithAggregationInput | IdCounterOrderByWithAggregationInput[]
    by: IdCounterScalarFieldEnum[] | IdCounterScalarFieldEnum
    having?: IdCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdCounterCountAggregateInputType | true
    _avg?: IdCounterAvgAggregateInputType
    _sum?: IdCounterSumAggregateInputType
    _min?: IdCounterMinAggregateInputType
    _max?: IdCounterMaxAggregateInputType
  }

  export type IdCounterGroupByOutputType = {
    id: string
    year: number
    count: number
    _count: IdCounterCountAggregateOutputType | null
    _avg: IdCounterAvgAggregateOutputType | null
    _sum: IdCounterSumAggregateOutputType | null
    _min: IdCounterMinAggregateOutputType | null
    _max: IdCounterMaxAggregateOutputType | null
  }

  type GetIdCounterGroupByPayload<T extends IdCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdCounterGroupByOutputType[P]>
            : GetScalarType<T[P], IdCounterGroupByOutputType[P]>
        }
      >
    >


  export type IdCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    count?: boolean
  }, ExtArgs["result"]["idCounter"]>

  export type IdCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    count?: boolean
  }, ExtArgs["result"]["idCounter"]>

  export type IdCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    count?: boolean
  }, ExtArgs["result"]["idCounter"]>

  export type IdCounterSelectScalar = {
    id?: boolean
    year?: boolean
    count?: boolean
  }

  export type IdCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "count", ExtArgs["result"]["idCounter"]>

  export type $IdCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      count: number
    }, ExtArgs["result"]["idCounter"]>
    composites: {}
  }

  type IdCounterGetPayload<S extends boolean | null | undefined | IdCounterDefaultArgs> = $Result.GetResult<Prisma.$IdCounterPayload, S>

  type IdCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdCounterCountAggregateInputType | true
    }

  export interface IdCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdCounter'], meta: { name: 'IdCounter' } }
    /**
     * Find zero or one IdCounter that matches the filter.
     * @param {IdCounterFindUniqueArgs} args - Arguments to find a IdCounter
     * @example
     * // Get one IdCounter
     * const idCounter = await prisma.idCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdCounterFindUniqueArgs>(args: SelectSubset<T, IdCounterFindUniqueArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdCounterFindUniqueOrThrowArgs} args - Arguments to find a IdCounter
     * @example
     * // Get one IdCounter
     * const idCounter = await prisma.idCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, IdCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterFindFirstArgs} args - Arguments to find a IdCounter
     * @example
     * // Get one IdCounter
     * const idCounter = await prisma.idCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdCounterFindFirstArgs>(args?: SelectSubset<T, IdCounterFindFirstArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterFindFirstOrThrowArgs} args - Arguments to find a IdCounter
     * @example
     * // Get one IdCounter
     * const idCounter = await prisma.idCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, IdCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdCounters
     * const idCounters = await prisma.idCounter.findMany()
     * 
     * // Get first 10 IdCounters
     * const idCounters = await prisma.idCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idCounterWithIdOnly = await prisma.idCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdCounterFindManyArgs>(args?: SelectSubset<T, IdCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdCounter.
     * @param {IdCounterCreateArgs} args - Arguments to create a IdCounter.
     * @example
     * // Create one IdCounter
     * const IdCounter = await prisma.idCounter.create({
     *   data: {
     *     // ... data to create a IdCounter
     *   }
     * })
     * 
     */
    create<T extends IdCounterCreateArgs>(args: SelectSubset<T, IdCounterCreateArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdCounters.
     * @param {IdCounterCreateManyArgs} args - Arguments to create many IdCounters.
     * @example
     * // Create many IdCounters
     * const idCounter = await prisma.idCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdCounterCreateManyArgs>(args?: SelectSubset<T, IdCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdCounters and returns the data saved in the database.
     * @param {IdCounterCreateManyAndReturnArgs} args - Arguments to create many IdCounters.
     * @example
     * // Create many IdCounters
     * const idCounter = await prisma.idCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdCounters and only return the `id`
     * const idCounterWithIdOnly = await prisma.idCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, IdCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdCounter.
     * @param {IdCounterDeleteArgs} args - Arguments to delete one IdCounter.
     * @example
     * // Delete one IdCounter
     * const IdCounter = await prisma.idCounter.delete({
     *   where: {
     *     // ... filter to delete one IdCounter
     *   }
     * })
     * 
     */
    delete<T extends IdCounterDeleteArgs>(args: SelectSubset<T, IdCounterDeleteArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdCounter.
     * @param {IdCounterUpdateArgs} args - Arguments to update one IdCounter.
     * @example
     * // Update one IdCounter
     * const idCounter = await prisma.idCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdCounterUpdateArgs>(args: SelectSubset<T, IdCounterUpdateArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdCounters.
     * @param {IdCounterDeleteManyArgs} args - Arguments to filter IdCounters to delete.
     * @example
     * // Delete a few IdCounters
     * const { count } = await prisma.idCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdCounterDeleteManyArgs>(args?: SelectSubset<T, IdCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdCounters
     * const idCounter = await prisma.idCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdCounterUpdateManyArgs>(args: SelectSubset<T, IdCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdCounters and returns the data updated in the database.
     * @param {IdCounterUpdateManyAndReturnArgs} args - Arguments to update many IdCounters.
     * @example
     * // Update many IdCounters
     * const idCounter = await prisma.idCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdCounters and only return the `id`
     * const idCounterWithIdOnly = await prisma.idCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, IdCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdCounter.
     * @param {IdCounterUpsertArgs} args - Arguments to update or create a IdCounter.
     * @example
     * // Update or create a IdCounter
     * const idCounter = await prisma.idCounter.upsert({
     *   create: {
     *     // ... data to create a IdCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdCounter we want to update
     *   }
     * })
     */
    upsert<T extends IdCounterUpsertArgs>(args: SelectSubset<T, IdCounterUpsertArgs<ExtArgs>>): Prisma__IdCounterClient<$Result.GetResult<Prisma.$IdCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterCountArgs} args - Arguments to filter IdCounters to count.
     * @example
     * // Count the number of IdCounters
     * const count = await prisma.idCounter.count({
     *   where: {
     *     // ... the filter for the IdCounters we want to count
     *   }
     * })
    **/
    count<T extends IdCounterCountArgs>(
      args?: Subset<T, IdCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdCounterAggregateArgs>(args: Subset<T, IdCounterAggregateArgs>): Prisma.PrismaPromise<GetIdCounterAggregateType<T>>

    /**
     * Group by IdCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdCounterGroupByArgs} args - Group by arguments.
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
      T extends IdCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdCounterGroupByArgs['orderBy'] }
        : { orderBy?: IdCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdCounter model
   */
  readonly fields: IdCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IdCounter model
   */
  interface IdCounterFieldRefs {
    readonly id: FieldRef<"IdCounter", 'String'>
    readonly year: FieldRef<"IdCounter", 'Int'>
    readonly count: FieldRef<"IdCounter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IdCounter findUnique
   */
  export type IdCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * Filter, which IdCounter to fetch.
     */
    where: IdCounterWhereUniqueInput
  }

  /**
   * IdCounter findUniqueOrThrow
   */
  export type IdCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * Filter, which IdCounter to fetch.
     */
    where: IdCounterWhereUniqueInput
  }

  /**
   * IdCounter findFirst
   */
  export type IdCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * Filter, which IdCounter to fetch.
     */
    where?: IdCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdCounters to fetch.
     */
    orderBy?: IdCounterOrderByWithRelationInput | IdCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdCounters.
     */
    cursor?: IdCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdCounters.
     */
    distinct?: IdCounterScalarFieldEnum | IdCounterScalarFieldEnum[]
  }

  /**
   * IdCounter findFirstOrThrow
   */
  export type IdCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * Filter, which IdCounter to fetch.
     */
    where?: IdCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdCounters to fetch.
     */
    orderBy?: IdCounterOrderByWithRelationInput | IdCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdCounters.
     */
    cursor?: IdCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdCounters.
     */
    distinct?: IdCounterScalarFieldEnum | IdCounterScalarFieldEnum[]
  }

  /**
   * IdCounter findMany
   */
  export type IdCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * Filter, which IdCounters to fetch.
     */
    where?: IdCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdCounters to fetch.
     */
    orderBy?: IdCounterOrderByWithRelationInput | IdCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdCounters.
     */
    cursor?: IdCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdCounters.
     */
    skip?: number
    distinct?: IdCounterScalarFieldEnum | IdCounterScalarFieldEnum[]
  }

  /**
   * IdCounter create
   */
  export type IdCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * The data needed to create a IdCounter.
     */
    data: XOR<IdCounterCreateInput, IdCounterUncheckedCreateInput>
  }

  /**
   * IdCounter createMany
   */
  export type IdCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdCounters.
     */
    data: IdCounterCreateManyInput | IdCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdCounter createManyAndReturn
   */
  export type IdCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * The data used to create many IdCounters.
     */
    data: IdCounterCreateManyInput | IdCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdCounter update
   */
  export type IdCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * The data needed to update a IdCounter.
     */
    data: XOR<IdCounterUpdateInput, IdCounterUncheckedUpdateInput>
    /**
     * Choose, which IdCounter to update.
     */
    where: IdCounterWhereUniqueInput
  }

  /**
   * IdCounter updateMany
   */
  export type IdCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdCounters.
     */
    data: XOR<IdCounterUpdateManyMutationInput, IdCounterUncheckedUpdateManyInput>
    /**
     * Filter which IdCounters to update
     */
    where?: IdCounterWhereInput
    /**
     * Limit how many IdCounters to update.
     */
    limit?: number
  }

  /**
   * IdCounter updateManyAndReturn
   */
  export type IdCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * The data used to update IdCounters.
     */
    data: XOR<IdCounterUpdateManyMutationInput, IdCounterUncheckedUpdateManyInput>
    /**
     * Filter which IdCounters to update
     */
    where?: IdCounterWhereInput
    /**
     * Limit how many IdCounters to update.
     */
    limit?: number
  }

  /**
   * IdCounter upsert
   */
  export type IdCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * The filter to search for the IdCounter to update in case it exists.
     */
    where: IdCounterWhereUniqueInput
    /**
     * In case the IdCounter found by the `where` argument doesn't exist, create a new IdCounter with this data.
     */
    create: XOR<IdCounterCreateInput, IdCounterUncheckedCreateInput>
    /**
     * In case the IdCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdCounterUpdateInput, IdCounterUncheckedUpdateInput>
  }

  /**
   * IdCounter delete
   */
  export type IdCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
    /**
     * Filter which IdCounter to delete.
     */
    where: IdCounterWhereUniqueInput
  }

  /**
   * IdCounter deleteMany
   */
  export type IdCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdCounters to delete
     */
    where?: IdCounterWhereInput
    /**
     * Limit how many IdCounters to delete.
     */
    limit?: number
  }

  /**
   * IdCounter without action
   */
  export type IdCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdCounter
     */
    select?: IdCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdCounter
     */
    omit?: IdCounterOmit<ExtArgs> | null
  }


  /**
   * Model Copyright
   */

  export type AggregateCopyright = {
    _count: CopyrightCountAggregateOutputType | null
    _min: CopyrightMinAggregateOutputType | null
    _max: CopyrightMaxAggregateOutputType | null
  }

  export type CopyrightMinAggregateOutputType = {
    id: string | null
    copyrightStatus: $Enums.CopyrightStatus | null
    pdfKey: string | null
    pdfUrl: string | null
    paperId: string | null
    signedAt: Date | null
    updatedAt: Date | null
  }

  export type CopyrightMaxAggregateOutputType = {
    id: string | null
    copyrightStatus: $Enums.CopyrightStatus | null
    pdfKey: string | null
    pdfUrl: string | null
    paperId: string | null
    signedAt: Date | null
    updatedAt: Date | null
  }

  export type CopyrightCountAggregateOutputType = {
    id: number
    copyrightStatus: number
    pdfKey: number
    pdfUrl: number
    paperId: number
    signedAt: number
    updatedAt: number
    _all: number
  }


  export type CopyrightMinAggregateInputType = {
    id?: true
    copyrightStatus?: true
    pdfKey?: true
    pdfUrl?: true
    paperId?: true
    signedAt?: true
    updatedAt?: true
  }

  export type CopyrightMaxAggregateInputType = {
    id?: true
    copyrightStatus?: true
    pdfKey?: true
    pdfUrl?: true
    paperId?: true
    signedAt?: true
    updatedAt?: true
  }

  export type CopyrightCountAggregateInputType = {
    id?: true
    copyrightStatus?: true
    pdfKey?: true
    pdfUrl?: true
    paperId?: true
    signedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CopyrightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Copyright to aggregate.
     */
    where?: CopyrightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightOrderByWithRelationInput | CopyrightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CopyrightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Copyrights
    **/
    _count?: true | CopyrightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CopyrightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CopyrightMaxAggregateInputType
  }

  export type GetCopyrightAggregateType<T extends CopyrightAggregateArgs> = {
        [P in keyof T & keyof AggregateCopyright]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCopyright[P]>
      : GetScalarType<T[P], AggregateCopyright[P]>
  }




  export type CopyrightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CopyrightWhereInput
    orderBy?: CopyrightOrderByWithAggregationInput | CopyrightOrderByWithAggregationInput[]
    by: CopyrightScalarFieldEnum[] | CopyrightScalarFieldEnum
    having?: CopyrightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CopyrightCountAggregateInputType | true
    _min?: CopyrightMinAggregateInputType
    _max?: CopyrightMaxAggregateInputType
  }

  export type CopyrightGroupByOutputType = {
    id: string
    copyrightStatus: $Enums.CopyrightStatus
    pdfKey: string
    pdfUrl: string
    paperId: string
    signedAt: Date
    updatedAt: Date
    _count: CopyrightCountAggregateOutputType | null
    _min: CopyrightMinAggregateOutputType | null
    _max: CopyrightMaxAggregateOutputType | null
  }

  type GetCopyrightGroupByPayload<T extends CopyrightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CopyrightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CopyrightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CopyrightGroupByOutputType[P]>
            : GetScalarType<T[P], CopyrightGroupByOutputType[P]>
        }
      >
    >


  export type CopyrightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    copyrightStatus?: boolean
    pdfKey?: boolean
    pdfUrl?: boolean
    paperId?: boolean
    signedAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copyright"]>

  export type CopyrightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    copyrightStatus?: boolean
    pdfKey?: boolean
    pdfUrl?: boolean
    paperId?: boolean
    signedAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copyright"]>

  export type CopyrightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    copyrightStatus?: boolean
    pdfKey?: boolean
    pdfUrl?: boolean
    paperId?: boolean
    signedAt?: boolean
    updatedAt?: boolean
    paper?: boolean | paperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copyright"]>

  export type CopyrightSelectScalar = {
    id?: boolean
    copyrightStatus?: boolean
    pdfKey?: boolean
    pdfUrl?: boolean
    paperId?: boolean
    signedAt?: boolean
    updatedAt?: boolean
  }

  export type CopyrightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "copyrightStatus" | "pdfKey" | "pdfUrl" | "paperId" | "signedAt" | "updatedAt", ExtArgs["result"]["copyright"]>
  export type CopyrightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
  }
  export type CopyrightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
  }
  export type CopyrightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paper?: boolean | paperDefaultArgs<ExtArgs>
  }

  export type $CopyrightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Copyright"
    objects: {
      paper: Prisma.$paperPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      copyrightStatus: $Enums.CopyrightStatus
      pdfKey: string
      pdfUrl: string
      paperId: string
      signedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["copyright"]>
    composites: {}
  }

  type CopyrightGetPayload<S extends boolean | null | undefined | CopyrightDefaultArgs> = $Result.GetResult<Prisma.$CopyrightPayload, S>

  type CopyrightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CopyrightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CopyrightCountAggregateInputType | true
    }

  export interface CopyrightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Copyright'], meta: { name: 'Copyright' } }
    /**
     * Find zero or one Copyright that matches the filter.
     * @param {CopyrightFindUniqueArgs} args - Arguments to find a Copyright
     * @example
     * // Get one Copyright
     * const copyright = await prisma.copyright.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CopyrightFindUniqueArgs>(args: SelectSubset<T, CopyrightFindUniqueArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Copyright that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CopyrightFindUniqueOrThrowArgs} args - Arguments to find a Copyright
     * @example
     * // Get one Copyright
     * const copyright = await prisma.copyright.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CopyrightFindUniqueOrThrowArgs>(args: SelectSubset<T, CopyrightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Copyright that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightFindFirstArgs} args - Arguments to find a Copyright
     * @example
     * // Get one Copyright
     * const copyright = await prisma.copyright.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CopyrightFindFirstArgs>(args?: SelectSubset<T, CopyrightFindFirstArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Copyright that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightFindFirstOrThrowArgs} args - Arguments to find a Copyright
     * @example
     * // Get one Copyright
     * const copyright = await prisma.copyright.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CopyrightFindFirstOrThrowArgs>(args?: SelectSubset<T, CopyrightFindFirstOrThrowArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Copyrights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Copyrights
     * const copyrights = await prisma.copyright.findMany()
     * 
     * // Get first 10 Copyrights
     * const copyrights = await prisma.copyright.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const copyrightWithIdOnly = await prisma.copyright.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CopyrightFindManyArgs>(args?: SelectSubset<T, CopyrightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Copyright.
     * @param {CopyrightCreateArgs} args - Arguments to create a Copyright.
     * @example
     * // Create one Copyright
     * const Copyright = await prisma.copyright.create({
     *   data: {
     *     // ... data to create a Copyright
     *   }
     * })
     * 
     */
    create<T extends CopyrightCreateArgs>(args: SelectSubset<T, CopyrightCreateArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Copyrights.
     * @param {CopyrightCreateManyArgs} args - Arguments to create many Copyrights.
     * @example
     * // Create many Copyrights
     * const copyright = await prisma.copyright.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CopyrightCreateManyArgs>(args?: SelectSubset<T, CopyrightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Copyrights and returns the data saved in the database.
     * @param {CopyrightCreateManyAndReturnArgs} args - Arguments to create many Copyrights.
     * @example
     * // Create many Copyrights
     * const copyright = await prisma.copyright.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Copyrights and only return the `id`
     * const copyrightWithIdOnly = await prisma.copyright.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CopyrightCreateManyAndReturnArgs>(args?: SelectSubset<T, CopyrightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Copyright.
     * @param {CopyrightDeleteArgs} args - Arguments to delete one Copyright.
     * @example
     * // Delete one Copyright
     * const Copyright = await prisma.copyright.delete({
     *   where: {
     *     // ... filter to delete one Copyright
     *   }
     * })
     * 
     */
    delete<T extends CopyrightDeleteArgs>(args: SelectSubset<T, CopyrightDeleteArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Copyright.
     * @param {CopyrightUpdateArgs} args - Arguments to update one Copyright.
     * @example
     * // Update one Copyright
     * const copyright = await prisma.copyright.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CopyrightUpdateArgs>(args: SelectSubset<T, CopyrightUpdateArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Copyrights.
     * @param {CopyrightDeleteManyArgs} args - Arguments to filter Copyrights to delete.
     * @example
     * // Delete a few Copyrights
     * const { count } = await prisma.copyright.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CopyrightDeleteManyArgs>(args?: SelectSubset<T, CopyrightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Copyrights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Copyrights
     * const copyright = await prisma.copyright.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CopyrightUpdateManyArgs>(args: SelectSubset<T, CopyrightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Copyrights and returns the data updated in the database.
     * @param {CopyrightUpdateManyAndReturnArgs} args - Arguments to update many Copyrights.
     * @example
     * // Update many Copyrights
     * const copyright = await prisma.copyright.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Copyrights and only return the `id`
     * const copyrightWithIdOnly = await prisma.copyright.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CopyrightUpdateManyAndReturnArgs>(args: SelectSubset<T, CopyrightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Copyright.
     * @param {CopyrightUpsertArgs} args - Arguments to update or create a Copyright.
     * @example
     * // Update or create a Copyright
     * const copyright = await prisma.copyright.upsert({
     *   create: {
     *     // ... data to create a Copyright
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Copyright we want to update
     *   }
     * })
     */
    upsert<T extends CopyrightUpsertArgs>(args: SelectSubset<T, CopyrightUpsertArgs<ExtArgs>>): Prisma__CopyrightClient<$Result.GetResult<Prisma.$CopyrightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Copyrights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightCountArgs} args - Arguments to filter Copyrights to count.
     * @example
     * // Count the number of Copyrights
     * const count = await prisma.copyright.count({
     *   where: {
     *     // ... the filter for the Copyrights we want to count
     *   }
     * })
    **/
    count<T extends CopyrightCountArgs>(
      args?: Subset<T, CopyrightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CopyrightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Copyright.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CopyrightAggregateArgs>(args: Subset<T, CopyrightAggregateArgs>): Prisma.PrismaPromise<GetCopyrightAggregateType<T>>

    /**
     * Group by Copyright.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightGroupByArgs} args - Group by arguments.
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
      T extends CopyrightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CopyrightGroupByArgs['orderBy'] }
        : { orderBy?: CopyrightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CopyrightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCopyrightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Copyright model
   */
  readonly fields: CopyrightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Copyright.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CopyrightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paper<T extends paperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paperDefaultArgs<ExtArgs>>): Prisma__paperClient<$Result.GetResult<Prisma.$paperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Copyright model
   */
  interface CopyrightFieldRefs {
    readonly id: FieldRef<"Copyright", 'String'>
    readonly copyrightStatus: FieldRef<"Copyright", 'CopyrightStatus'>
    readonly pdfKey: FieldRef<"Copyright", 'String'>
    readonly pdfUrl: FieldRef<"Copyright", 'String'>
    readonly paperId: FieldRef<"Copyright", 'String'>
    readonly signedAt: FieldRef<"Copyright", 'DateTime'>
    readonly updatedAt: FieldRef<"Copyright", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Copyright findUnique
   */
  export type CopyrightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * Filter, which Copyright to fetch.
     */
    where: CopyrightWhereUniqueInput
  }

  /**
   * Copyright findUniqueOrThrow
   */
  export type CopyrightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * Filter, which Copyright to fetch.
     */
    where: CopyrightWhereUniqueInput
  }

  /**
   * Copyright findFirst
   */
  export type CopyrightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * Filter, which Copyright to fetch.
     */
    where?: CopyrightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightOrderByWithRelationInput | CopyrightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Copyrights.
     */
    cursor?: CopyrightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Copyrights.
     */
    distinct?: CopyrightScalarFieldEnum | CopyrightScalarFieldEnum[]
  }

  /**
   * Copyright findFirstOrThrow
   */
  export type CopyrightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * Filter, which Copyright to fetch.
     */
    where?: CopyrightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightOrderByWithRelationInput | CopyrightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Copyrights.
     */
    cursor?: CopyrightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Copyrights.
     */
    distinct?: CopyrightScalarFieldEnum | CopyrightScalarFieldEnum[]
  }

  /**
   * Copyright findMany
   */
  export type CopyrightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * Filter, which Copyrights to fetch.
     */
    where?: CopyrightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightOrderByWithRelationInput | CopyrightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Copyrights.
     */
    cursor?: CopyrightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    distinct?: CopyrightScalarFieldEnum | CopyrightScalarFieldEnum[]
  }

  /**
   * Copyright create
   */
  export type CopyrightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * The data needed to create a Copyright.
     */
    data: XOR<CopyrightCreateInput, CopyrightUncheckedCreateInput>
  }

  /**
   * Copyright createMany
   */
  export type CopyrightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Copyrights.
     */
    data: CopyrightCreateManyInput | CopyrightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Copyright createManyAndReturn
   */
  export type CopyrightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * The data used to create many Copyrights.
     */
    data: CopyrightCreateManyInput | CopyrightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Copyright update
   */
  export type CopyrightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * The data needed to update a Copyright.
     */
    data: XOR<CopyrightUpdateInput, CopyrightUncheckedUpdateInput>
    /**
     * Choose, which Copyright to update.
     */
    where: CopyrightWhereUniqueInput
  }

  /**
   * Copyright updateMany
   */
  export type CopyrightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Copyrights.
     */
    data: XOR<CopyrightUpdateManyMutationInput, CopyrightUncheckedUpdateManyInput>
    /**
     * Filter which Copyrights to update
     */
    where?: CopyrightWhereInput
    /**
     * Limit how many Copyrights to update.
     */
    limit?: number
  }

  /**
   * Copyright updateManyAndReturn
   */
  export type CopyrightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * The data used to update Copyrights.
     */
    data: XOR<CopyrightUpdateManyMutationInput, CopyrightUncheckedUpdateManyInput>
    /**
     * Filter which Copyrights to update
     */
    where?: CopyrightWhereInput
    /**
     * Limit how many Copyrights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Copyright upsert
   */
  export type CopyrightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * The filter to search for the Copyright to update in case it exists.
     */
    where: CopyrightWhereUniqueInput
    /**
     * In case the Copyright found by the `where` argument doesn't exist, create a new Copyright with this data.
     */
    create: XOR<CopyrightCreateInput, CopyrightUncheckedCreateInput>
    /**
     * In case the Copyright was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CopyrightUpdateInput, CopyrightUncheckedUpdateInput>
  }

  /**
   * Copyright delete
   */
  export type CopyrightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
    /**
     * Filter which Copyright to delete.
     */
    where: CopyrightWhereUniqueInput
  }

  /**
   * Copyright deleteMany
   */
  export type CopyrightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Copyrights to delete
     */
    where?: CopyrightWhereInput
    /**
     * Limit how many Copyrights to delete.
     */
    limit?: number
  }

  /**
   * Copyright without action
   */
  export type CopyrightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyright
     */
    select?: CopyrightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyright
     */
    omit?: CopyrightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightInclude<ExtArgs> | null
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


  export const PaperScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    name: 'name',
    keywords: 'keywords',
    manuscriptId: 'manuscriptId',
    manuscriptUrl: 'manuscriptUrl',
    publishId: 'publishId',
    publishUrl: 'publishUrl',
    archiveId: 'archiveId',
    editorId: 'editorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaperScalarFieldEnum = (typeof PaperScalarFieldEnum)[keyof typeof PaperScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    organisation: 'organisation',
    country: 'country',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    status: 'status',
    isApproved: 'isApproved',
    paperId: 'paperId',
    changedById: 'changedById',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    specialization: 'specialization',
    isActive: 'isActive',
    createdById: 'createdById',
    walletBalance: 'walletBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ArchiveScalarFieldEnum: {
    id: 'id',
    volume: 'volume',
    issue: 'issue',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArchiveScalarFieldEnum = (typeof ArchiveScalarFieldEnum)[keyof typeof ArchiveScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    amount: 'amount',
    status: 'status',
    paperId: 'paperId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    paperId: 'paperId',
    actorId: 'actorId',
    authorId: 'authorId',
    activity: 'activity',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const WalletTransactionScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    type: 'type',
    amount: 'amount',
    notes: 'notes',
    relatedPaperId: 'relatedPaperId',
    createdAt: 'createdAt'
  };

  export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum]


  export const IdCounterScalarFieldEnum: {
    id: 'id',
    year: 'year',
    count: 'count'
  };

  export type IdCounterScalarFieldEnum = (typeof IdCounterScalarFieldEnum)[keyof typeof IdCounterScalarFieldEnum]


  export const CopyrightScalarFieldEnum: {
    id: 'id',
    copyrightStatus: 'copyrightStatus',
    pdfKey: 'pdfKey',
    pdfUrl: 'pdfUrl',
    paperId: 'paperId',
    signedAt: 'signedAt',
    updatedAt: 'updatedAt'
  };

  export type CopyrightScalarFieldEnum = (typeof CopyrightScalarFieldEnum)[keyof typeof CopyrightScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PaperStatus'
   */
  export type EnumPaperStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaperStatus'>
    


  /**
   * Reference to a field of type 'PaperStatus[]'
   */
  export type ListEnumPaperStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaperStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EmployeeRole'
   */
  export type EnumEmployeeRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeRole'>
    


  /**
   * Reference to a field of type 'EmployeeRole[]'
   */
  export type ListEnumEmployeeRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'paymentStatus'
   */
  export type EnumpaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentStatus'>
    


  /**
   * Reference to a field of type 'paymentStatus[]'
   */
  export type ListEnumpaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'WalletTransactionType'
   */
  export type EnumWalletTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WalletTransactionType'>
    


  /**
   * Reference to a field of type 'WalletTransactionType[]'
   */
  export type ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WalletTransactionType[]'>
    


  /**
   * Reference to a field of type 'CopyrightStatus'
   */
  export type EnumCopyrightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CopyrightStatus'>
    


  /**
   * Reference to a field of type 'CopyrightStatus[]'
   */
  export type ListEnumCopyrightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CopyrightStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type paperWhereInput = {
    AND?: paperWhereInput | paperWhereInput[]
    OR?: paperWhereInput[]
    NOT?: paperWhereInput | paperWhereInput[]
    id?: StringFilter<"paper"> | string
    submissionId?: StringFilter<"paper"> | string
    name?: StringFilter<"paper"> | string
    keywords?: StringNullableListFilter<"paper">
    manuscriptId?: StringNullableFilter<"paper"> | string | null
    manuscriptUrl?: StringNullableFilter<"paper"> | string | null
    publishId?: StringNullableFilter<"paper"> | string | null
    publishUrl?: StringNullableFilter<"paper"> | string | null
    archiveId?: StringFilter<"paper"> | string
    editorId?: StringNullableFilter<"paper"> | string | null
    createdAt?: DateTimeFilter<"paper"> | Date | string
    updatedAt?: DateTimeFilter<"paper"> | Date | string
    authors?: AuthorListRelationFilter
    paperStatuses?: StatusListRelationFilter
    archive?: XOR<ArchiveScalarRelationFilter, archiveWhereInput>
    transactions?: TransactionListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    walletTransactions?: WalletTransactionListRelationFilter
    editor?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    Copyright?: XOR<CopyrightNullableScalarRelationFilter, CopyrightWhereInput> | null
  }

  export type paperOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    name?: SortOrder
    keywords?: SortOrder
    manuscriptId?: SortOrderInput | SortOrder
    manuscriptUrl?: SortOrderInput | SortOrder
    publishId?: SortOrderInput | SortOrder
    publishUrl?: SortOrderInput | SortOrder
    archiveId?: SortOrder
    editorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authors?: authorOrderByRelationAggregateInput
    paperStatuses?: statusOrderByRelationAggregateInput
    archive?: archiveOrderByWithRelationInput
    transactions?: transactionOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    walletTransactions?: WalletTransactionOrderByRelationAggregateInput
    editor?: employeeOrderByWithRelationInput
    Copyright?: CopyrightOrderByWithRelationInput
  }

  export type paperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionId?: string
    AND?: paperWhereInput | paperWhereInput[]
    OR?: paperWhereInput[]
    NOT?: paperWhereInput | paperWhereInput[]
    name?: StringFilter<"paper"> | string
    keywords?: StringNullableListFilter<"paper">
    manuscriptId?: StringNullableFilter<"paper"> | string | null
    manuscriptUrl?: StringNullableFilter<"paper"> | string | null
    publishId?: StringNullableFilter<"paper"> | string | null
    publishUrl?: StringNullableFilter<"paper"> | string | null
    archiveId?: StringFilter<"paper"> | string
    editorId?: StringNullableFilter<"paper"> | string | null
    createdAt?: DateTimeFilter<"paper"> | Date | string
    updatedAt?: DateTimeFilter<"paper"> | Date | string
    authors?: AuthorListRelationFilter
    paperStatuses?: StatusListRelationFilter
    archive?: XOR<ArchiveScalarRelationFilter, archiveWhereInput>
    transactions?: TransactionListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    walletTransactions?: WalletTransactionListRelationFilter
    editor?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    Copyright?: XOR<CopyrightNullableScalarRelationFilter, CopyrightWhereInput> | null
  }, "id" | "id" | "submissionId">

  export type paperOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    name?: SortOrder
    keywords?: SortOrder
    manuscriptId?: SortOrderInput | SortOrder
    manuscriptUrl?: SortOrderInput | SortOrder
    publishId?: SortOrderInput | SortOrder
    publishUrl?: SortOrderInput | SortOrder
    archiveId?: SortOrder
    editorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: paperCountOrderByAggregateInput
    _max?: paperMaxOrderByAggregateInput
    _min?: paperMinOrderByAggregateInput
  }

  export type paperScalarWhereWithAggregatesInput = {
    AND?: paperScalarWhereWithAggregatesInput | paperScalarWhereWithAggregatesInput[]
    OR?: paperScalarWhereWithAggregatesInput[]
    NOT?: paperScalarWhereWithAggregatesInput | paperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"paper"> | string
    submissionId?: StringWithAggregatesFilter<"paper"> | string
    name?: StringWithAggregatesFilter<"paper"> | string
    keywords?: StringNullableListFilter<"paper">
    manuscriptId?: StringNullableWithAggregatesFilter<"paper"> | string | null
    manuscriptUrl?: StringNullableWithAggregatesFilter<"paper"> | string | null
    publishId?: StringNullableWithAggregatesFilter<"paper"> | string | null
    publishUrl?: StringNullableWithAggregatesFilter<"paper"> | string | null
    archiveId?: StringWithAggregatesFilter<"paper"> | string
    editorId?: StringNullableWithAggregatesFilter<"paper"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"paper"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"paper"> | Date | string
  }

  export type authorWhereInput = {
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    id?: StringFilter<"author"> | string
    firstName?: StringFilter<"author"> | string
    lastName?: StringNullableFilter<"author"> | string | null
    email?: StringFilter<"author"> | string
    password?: StringFilter<"author"> | string
    organisation?: StringFilter<"author"> | string
    country?: StringFilter<"author"> | string
    phone?: StringFilter<"author"> | string
    createdAt?: DateTimeFilter<"author"> | Date | string
    updatedAt?: DateTimeFilter<"author"> | Date | string
    papers?: PaperListRelationFilter
    transactions?: TransactionListRelationFilter
    ActivityLog?: ActivityLogListRelationFilter
  }

  export type authorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    organisation?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    papers?: paperOrderByRelationAggregateInput
    transactions?: transactionOrderByRelationAggregateInput
    ActivityLog?: ActivityLogOrderByRelationAggregateInput
  }

  export type authorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    firstName?: StringFilter<"author"> | string
    lastName?: StringNullableFilter<"author"> | string | null
    password?: StringFilter<"author"> | string
    organisation?: StringFilter<"author"> | string
    country?: StringFilter<"author"> | string
    phone?: StringFilter<"author"> | string
    createdAt?: DateTimeFilter<"author"> | Date | string
    updatedAt?: DateTimeFilter<"author"> | Date | string
    papers?: PaperListRelationFilter
    transactions?: TransactionListRelationFilter
    ActivityLog?: ActivityLogListRelationFilter
  }, "id" | "id" | "email">

  export type authorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    organisation?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: authorCountOrderByAggregateInput
    _max?: authorMaxOrderByAggregateInput
    _min?: authorMinOrderByAggregateInput
  }

  export type authorScalarWhereWithAggregatesInput = {
    AND?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    OR?: authorScalarWhereWithAggregatesInput[]
    NOT?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"author"> | string
    firstName?: StringWithAggregatesFilter<"author"> | string
    lastName?: StringNullableWithAggregatesFilter<"author"> | string | null
    email?: StringWithAggregatesFilter<"author"> | string
    password?: StringWithAggregatesFilter<"author"> | string
    organisation?: StringWithAggregatesFilter<"author"> | string
    country?: StringWithAggregatesFilter<"author"> | string
    phone?: StringWithAggregatesFilter<"author"> | string
    createdAt?: DateTimeWithAggregatesFilter<"author"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"author"> | Date | string
  }

  export type statusWhereInput = {
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    id?: StringFilter<"status"> | string
    status?: EnumPaperStatusFilter<"status"> | $Enums.PaperStatus
    isApproved?: BoolFilter<"status"> | boolean
    paperId?: StringFilter<"status"> | string
    changedById?: StringNullableFilter<"status"> | string | null
    comments?: StringNullableListFilter<"status">
    createdAt?: DateTimeFilter<"status"> | Date | string
    updatedAt?: DateTimeFilter<"status"> | Date | string
    paper?: XOR<PaperScalarRelationFilter, paperWhereInput>
    changedBy?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
  }

  export type statusOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    paperId?: SortOrder
    changedById?: SortOrderInput | SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paper?: paperOrderByWithRelationInput
    changedBy?: employeeOrderByWithRelationInput
  }

  export type statusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    status?: EnumPaperStatusFilter<"status"> | $Enums.PaperStatus
    isApproved?: BoolFilter<"status"> | boolean
    paperId?: StringFilter<"status"> | string
    changedById?: StringNullableFilter<"status"> | string | null
    comments?: StringNullableListFilter<"status">
    createdAt?: DateTimeFilter<"status"> | Date | string
    updatedAt?: DateTimeFilter<"status"> | Date | string
    paper?: XOR<PaperScalarRelationFilter, paperWhereInput>
    changedBy?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
  }, "id" | "id">

  export type statusOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    paperId?: SortOrder
    changedById?: SortOrderInput | SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: statusCountOrderByAggregateInput
    _max?: statusMaxOrderByAggregateInput
    _min?: statusMinOrderByAggregateInput
  }

  export type statusScalarWhereWithAggregatesInput = {
    AND?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    OR?: statusScalarWhereWithAggregatesInput[]
    NOT?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"status"> | string
    status?: EnumPaperStatusWithAggregatesFilter<"status"> | $Enums.PaperStatus
    isApproved?: BoolWithAggregatesFilter<"status"> | boolean
    paperId?: StringWithAggregatesFilter<"status"> | string
    changedById?: StringNullableWithAggregatesFilter<"status"> | string | null
    comments?: StringNullableListFilter<"status">
    createdAt?: DateTimeWithAggregatesFilter<"status"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"status"> | Date | string
  }

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    id?: StringFilter<"employee"> | string
    firstName?: StringFilter<"employee"> | string
    lastName?: StringNullableFilter<"employee"> | string | null
    email?: StringFilter<"employee"> | string
    password?: StringFilter<"employee"> | string
    role?: EnumEmployeeRoleFilter<"employee"> | $Enums.EmployeeRole
    specialization?: StringNullableFilter<"employee"> | string | null
    isActive?: BoolFilter<"employee"> | boolean
    createdById?: StringNullableFilter<"employee"> | string | null
    walletBalance?: FloatFilter<"employee"> | number
    createdAt?: DateTimeFilter<"employee"> | Date | string
    updatedAt?: DateTimeFilter<"employee"> | Date | string
    createdBy?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    createdEmployees?: EmployeeListRelationFilter
    status?: StatusListRelationFilter
    activities?: ActivityLogListRelationFilter
    walletTransactions?: WalletTransactionListRelationFilter
    paper?: PaperListRelationFilter
  }

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    specialization?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: employeeOrderByWithRelationInput
    createdEmployees?: employeeOrderByRelationAggregateInput
    status?: statusOrderByRelationAggregateInput
    activities?: ActivityLogOrderByRelationAggregateInput
    walletTransactions?: WalletTransactionOrderByRelationAggregateInput
    paper?: paperOrderByRelationAggregateInput
  }

  export type employeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    firstName?: StringFilter<"employee"> | string
    lastName?: StringNullableFilter<"employee"> | string | null
    password?: StringFilter<"employee"> | string
    role?: EnumEmployeeRoleFilter<"employee"> | $Enums.EmployeeRole
    specialization?: StringNullableFilter<"employee"> | string | null
    isActive?: BoolFilter<"employee"> | boolean
    createdById?: StringNullableFilter<"employee"> | string | null
    walletBalance?: FloatFilter<"employee"> | number
    createdAt?: DateTimeFilter<"employee"> | Date | string
    updatedAt?: DateTimeFilter<"employee"> | Date | string
    createdBy?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    createdEmployees?: EmployeeListRelationFilter
    status?: StatusListRelationFilter
    activities?: ActivityLogListRelationFilter
    walletTransactions?: WalletTransactionListRelationFilter
    paper?: PaperListRelationFilter
  }, "id" | "id" | "email">

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    specialization?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: employeeCountOrderByAggregateInput
    _avg?: employeeAvgOrderByAggregateInput
    _max?: employeeMaxOrderByAggregateInput
    _min?: employeeMinOrderByAggregateInput
    _sum?: employeeSumOrderByAggregateInput
  }

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    OR?: employeeScalarWhereWithAggregatesInput[]
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"employee"> | string
    firstName?: StringWithAggregatesFilter<"employee"> | string
    lastName?: StringNullableWithAggregatesFilter<"employee"> | string | null
    email?: StringWithAggregatesFilter<"employee"> | string
    password?: StringWithAggregatesFilter<"employee"> | string
    role?: EnumEmployeeRoleWithAggregatesFilter<"employee"> | $Enums.EmployeeRole
    specialization?: StringNullableWithAggregatesFilter<"employee"> | string | null
    isActive?: BoolWithAggregatesFilter<"employee"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"employee"> | string | null
    walletBalance?: FloatWithAggregatesFilter<"employee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"employee"> | Date | string
  }

  export type archiveWhereInput = {
    AND?: archiveWhereInput | archiveWhereInput[]
    OR?: archiveWhereInput[]
    NOT?: archiveWhereInput | archiveWhereInput[]
    id?: StringFilter<"archive"> | string
    volume?: IntFilter<"archive"> | number
    issue?: IntFilter<"archive"> | number
    month?: StringFilter<"archive"> | string
    year?: IntFilter<"archive"> | number
    createdAt?: DateTimeFilter<"archive"> | Date | string
    updatedAt?: DateTimeFilter<"archive"> | Date | string
    papers?: PaperListRelationFilter
  }

  export type archiveOrderByWithRelationInput = {
    id?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    papers?: paperOrderByRelationAggregateInput
  }

  export type archiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: archiveWhereInput | archiveWhereInput[]
    OR?: archiveWhereInput[]
    NOT?: archiveWhereInput | archiveWhereInput[]
    volume?: IntFilter<"archive"> | number
    issue?: IntFilter<"archive"> | number
    month?: StringFilter<"archive"> | string
    year?: IntFilter<"archive"> | number
    createdAt?: DateTimeFilter<"archive"> | Date | string
    updatedAt?: DateTimeFilter<"archive"> | Date | string
    papers?: PaperListRelationFilter
  }, "id" | "id">

  export type archiveOrderByWithAggregationInput = {
    id?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: archiveCountOrderByAggregateInput
    _avg?: archiveAvgOrderByAggregateInput
    _max?: archiveMaxOrderByAggregateInput
    _min?: archiveMinOrderByAggregateInput
    _sum?: archiveSumOrderByAggregateInput
  }

  export type archiveScalarWhereWithAggregatesInput = {
    AND?: archiveScalarWhereWithAggregatesInput | archiveScalarWhereWithAggregatesInput[]
    OR?: archiveScalarWhereWithAggregatesInput[]
    NOT?: archiveScalarWhereWithAggregatesInput | archiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"archive"> | string
    volume?: IntWithAggregatesFilter<"archive"> | number
    issue?: IntWithAggregatesFilter<"archive"> | number
    month?: StringWithAggregatesFilter<"archive"> | string
    year?: IntWithAggregatesFilter<"archive"> | number
    createdAt?: DateTimeWithAggregatesFilter<"archive"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"archive"> | Date | string
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: StringFilter<"transaction"> | string
    razorpayOrderId?: StringFilter<"transaction"> | string
    razorpayPaymentId?: StringNullableFilter<"transaction"> | string | null
    amount?: IntFilter<"transaction"> | number
    status?: EnumpaymentStatusFilter<"transaction"> | $Enums.paymentStatus
    paperId?: StringFilter<"transaction"> | string
    authorId?: StringFilter<"transaction"> | string
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    updatedAt?: DateTimeFilter<"transaction"> | Date | string
    paper?: XOR<PaperScalarRelationFilter, paperWhereInput>
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    paperId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paper?: paperOrderByWithRelationInput
    author?: authorOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    razorpayPaymentId?: StringNullableFilter<"transaction"> | string | null
    amount?: IntFilter<"transaction"> | number
    status?: EnumpaymentStatusFilter<"transaction"> | $Enums.paymentStatus
    paperId?: StringFilter<"transaction"> | string
    authorId?: StringFilter<"transaction"> | string
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    updatedAt?: DateTimeFilter<"transaction"> | Date | string
    paper?: XOR<PaperScalarRelationFilter, paperWhereInput>
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
  }, "id" | "id" | "razorpayOrderId">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    paperId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaction"> | string
    razorpayOrderId?: StringWithAggregatesFilter<"transaction"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    amount?: IntWithAggregatesFilter<"transaction"> | number
    status?: EnumpaymentStatusWithAggregatesFilter<"transaction"> | $Enums.paymentStatus
    paperId?: StringWithAggregatesFilter<"transaction"> | string
    authorId?: StringWithAggregatesFilter<"transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    paperId?: StringNullableFilter<"ActivityLog"> | string | null
    actorId?: StringNullableFilter<"ActivityLog"> | string | null
    authorId?: StringNullableFilter<"ActivityLog"> | string | null
    activity?: EnumActivityTypeFilter<"ActivityLog"> | $Enums.ActivityType
    details?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    paper?: XOR<PaperNullableScalarRelationFilter, paperWhereInput> | null
    actor?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    author?: XOR<AuthorNullableScalarRelationFilter, authorWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    paperId?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    activity?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    paper?: paperOrderByWithRelationInput
    actor?: employeeOrderByWithRelationInput
    author?: authorOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    paperId?: StringNullableFilter<"ActivityLog"> | string | null
    actorId?: StringNullableFilter<"ActivityLog"> | string | null
    authorId?: StringNullableFilter<"ActivityLog"> | string | null
    activity?: EnumActivityTypeFilter<"ActivityLog"> | $Enums.ActivityType
    details?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    paper?: XOR<PaperNullableScalarRelationFilter, paperWhereInput> | null
    actor?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    author?: XOR<AuthorNullableScalarRelationFilter, authorWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    paperId?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    activity?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    paperId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    actorId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    authorId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    activity?: EnumActivityTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityType
    details?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type WalletTransactionWhereInput = {
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    employeeId?: StringFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    amount?: FloatFilter<"WalletTransaction"> | number
    notes?: StringNullableFilter<"WalletTransaction"> | string | null
    relatedPaperId?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
    relatedPaper?: XOR<PaperNullableScalarRelationFilter, paperWhereInput> | null
  }

  export type WalletTransactionOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    relatedPaperId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    employee?: employeeOrderByWithRelationInput
    relatedPaper?: paperOrderByWithRelationInput
  }

  export type WalletTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    employeeId?: StringFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    amount?: FloatFilter<"WalletTransaction"> | number
    notes?: StringNullableFilter<"WalletTransaction"> | string | null
    relatedPaperId?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
    relatedPaper?: XOR<PaperNullableScalarRelationFilter, paperWhereInput> | null
  }, "id">

  export type WalletTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    relatedPaperId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WalletTransactionCountOrderByAggregateInput
    _avg?: WalletTransactionAvgOrderByAggregateInput
    _max?: WalletTransactionMaxOrderByAggregateInput
    _min?: WalletTransactionMinOrderByAggregateInput
    _sum?: WalletTransactionSumOrderByAggregateInput
  }

  export type WalletTransactionScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletTransaction"> | string
    employeeId?: StringWithAggregatesFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeWithAggregatesFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    amount?: FloatWithAggregatesFilter<"WalletTransaction"> | number
    notes?: StringNullableWithAggregatesFilter<"WalletTransaction"> | string | null
    relatedPaperId?: StringNullableWithAggregatesFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
  }

  export type IdCounterWhereInput = {
    AND?: IdCounterWhereInput | IdCounterWhereInput[]
    OR?: IdCounterWhereInput[]
    NOT?: IdCounterWhereInput | IdCounterWhereInput[]
    id?: StringFilter<"IdCounter"> | string
    year?: IntFilter<"IdCounter"> | number
    count?: IntFilter<"IdCounter"> | number
  }

  export type IdCounterOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    count?: SortOrder
  }

  export type IdCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IdCounterWhereInput | IdCounterWhereInput[]
    OR?: IdCounterWhereInput[]
    NOT?: IdCounterWhereInput | IdCounterWhereInput[]
    year?: IntFilter<"IdCounter"> | number
    count?: IntFilter<"IdCounter"> | number
  }, "id" | "id">

  export type IdCounterOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    count?: SortOrder
    _count?: IdCounterCountOrderByAggregateInput
    _avg?: IdCounterAvgOrderByAggregateInput
    _max?: IdCounterMaxOrderByAggregateInput
    _min?: IdCounterMinOrderByAggregateInput
    _sum?: IdCounterSumOrderByAggregateInput
  }

  export type IdCounterScalarWhereWithAggregatesInput = {
    AND?: IdCounterScalarWhereWithAggregatesInput | IdCounterScalarWhereWithAggregatesInput[]
    OR?: IdCounterScalarWhereWithAggregatesInput[]
    NOT?: IdCounterScalarWhereWithAggregatesInput | IdCounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdCounter"> | string
    year?: IntWithAggregatesFilter<"IdCounter"> | number
    count?: IntWithAggregatesFilter<"IdCounter"> | number
  }

  export type CopyrightWhereInput = {
    AND?: CopyrightWhereInput | CopyrightWhereInput[]
    OR?: CopyrightWhereInput[]
    NOT?: CopyrightWhereInput | CopyrightWhereInput[]
    id?: StringFilter<"Copyright"> | string
    copyrightStatus?: EnumCopyrightStatusFilter<"Copyright"> | $Enums.CopyrightStatus
    pdfKey?: StringFilter<"Copyright"> | string
    pdfUrl?: StringFilter<"Copyright"> | string
    paperId?: StringFilter<"Copyright"> | string
    signedAt?: DateTimeFilter<"Copyright"> | Date | string
    updatedAt?: DateTimeFilter<"Copyright"> | Date | string
    paper?: XOR<PaperScalarRelationFilter, paperWhereInput>
  }

  export type CopyrightOrderByWithRelationInput = {
    id?: SortOrder
    copyrightStatus?: SortOrder
    pdfKey?: SortOrder
    pdfUrl?: SortOrder
    paperId?: SortOrder
    signedAt?: SortOrder
    updatedAt?: SortOrder
    paper?: paperOrderByWithRelationInput
  }

  export type CopyrightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paperId?: string
    AND?: CopyrightWhereInput | CopyrightWhereInput[]
    OR?: CopyrightWhereInput[]
    NOT?: CopyrightWhereInput | CopyrightWhereInput[]
    copyrightStatus?: EnumCopyrightStatusFilter<"Copyright"> | $Enums.CopyrightStatus
    pdfKey?: StringFilter<"Copyright"> | string
    pdfUrl?: StringFilter<"Copyright"> | string
    signedAt?: DateTimeFilter<"Copyright"> | Date | string
    updatedAt?: DateTimeFilter<"Copyright"> | Date | string
    paper?: XOR<PaperScalarRelationFilter, paperWhereInput>
  }, "id" | "id" | "paperId">

  export type CopyrightOrderByWithAggregationInput = {
    id?: SortOrder
    copyrightStatus?: SortOrder
    pdfKey?: SortOrder
    pdfUrl?: SortOrder
    paperId?: SortOrder
    signedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CopyrightCountOrderByAggregateInput
    _max?: CopyrightMaxOrderByAggregateInput
    _min?: CopyrightMinOrderByAggregateInput
  }

  export type CopyrightScalarWhereWithAggregatesInput = {
    AND?: CopyrightScalarWhereWithAggregatesInput | CopyrightScalarWhereWithAggregatesInput[]
    OR?: CopyrightScalarWhereWithAggregatesInput[]
    NOT?: CopyrightScalarWhereWithAggregatesInput | CopyrightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Copyright"> | string
    copyrightStatus?: EnumCopyrightStatusWithAggregatesFilter<"Copyright"> | $Enums.CopyrightStatus
    pdfKey?: StringWithAggregatesFilter<"Copyright"> | string
    pdfUrl?: StringWithAggregatesFilter<"Copyright"> | string
    paperId?: StringWithAggregatesFilter<"Copyright"> | string
    signedAt?: DateTimeWithAggregatesFilter<"Copyright"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Copyright"> | Date | string
  }

  export type paperCreateInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type paperCreateManyInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperCreateNestedManyWithoutAuthorsInput
    transactions?: transactionCreateNestedManyWithoutAuthorInput
    ActivityLog?: ActivityLogCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperUncheckedCreateNestedManyWithoutAuthorsInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAuthorInput
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUpdateManyWithoutAuthorsNestedInput
    transactions?: transactionUpdateManyWithoutAuthorNestedInput
    ActivityLog?: ActivityLogUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUncheckedUpdateManyWithoutAuthorsNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAuthorNestedInput
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorCreateManyInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusCreateInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    paper: paperCreateNestedOneWithoutPaperStatusesInput
    changedBy?: employeeCreateNestedOneWithoutStatusInput
  }

  export type statusUncheckedCreateInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    paperId: string
    changedById?: string | null
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneRequiredWithoutPaperStatusesNestedInput
    changedBy?: employeeUpdateOneWithoutStatusNestedInput
  }

  export type statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    paperId?: StringFieldUpdateOperationsInput | string
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusCreateManyInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    paperId: string
    changedById?: string | null
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    paperId?: StringFieldUpdateOperationsInput | string
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeeCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: employeeCreateNestedOneWithoutCreatedEmployeesInput
    createdEmployees?: employeeCreateNestedManyWithoutCreatedByInput
    status?: statusCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutEmployeeInput
    paper?: paperCreateNestedManyWithoutEditorInput
  }

  export type employeeUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeUncheckedCreateNestedManyWithoutCreatedByInput
    status?: statusUncheckedCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput
    paper?: paperUncheckedCreateNestedManyWithoutEditorInput
  }

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: employeeUpdateOneWithoutCreatedEmployeesNestedInput
    createdEmployees?: employeeUpdateManyWithoutCreatedByNestedInput
    status?: statusUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutEmployeeNestedInput
    paper?: paperUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUncheckedUpdateManyWithoutCreatedByNestedInput
    status?: statusUncheckedUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput
    paper?: paperUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type employeeCreateManyInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archiveCreateInput = {
    id?: string
    volume: number
    issue: number
    month: string
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperCreateNestedManyWithoutArchiveInput
  }

  export type archiveUncheckedCreateInput = {
    id?: string
    volume: number
    issue: number
    month: string
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperUncheckedCreateNestedManyWithoutArchiveInput
  }

  export type archiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    issue?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUpdateManyWithoutArchiveNestedInput
  }

  export type archiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    issue?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUncheckedUpdateManyWithoutArchiveNestedInput
  }

  export type archiveCreateManyInput = {
    id?: string
    volume: number
    issue: number
    month: string
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type archiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    issue?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    issue?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    paper: paperCreateNestedOneWithoutTransactionsInput
    author: authorCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    paperId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneRequiredWithoutTransactionsNestedInput
    author?: authorUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    paperId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateManyInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    paperId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    paperId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
    paper?: paperCreateNestedOneWithoutActivityLogsInput
    actor?: employeeCreateNestedOneWithoutActivitiesInput
    author?: authorCreateNestedOneWithoutActivityLogInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    paperId?: string | null
    actorId?: string | null
    authorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneWithoutActivityLogsNestedInput
    actor?: employeeUpdateOneWithoutActivitiesNestedInput
    author?: authorUpdateOneWithoutActivityLogNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    paperId?: string | null
    actorId?: string | null
    authorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateInput = {
    id?: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    createdAt?: Date | string
    employee: employeeCreateNestedOneWithoutWalletTransactionsInput
    relatedPaper?: paperCreateNestedOneWithoutWalletTransactionsInput
  }

  export type WalletTransactionUncheckedCreateInput = {
    id?: string
    employeeId: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    relatedPaperId?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: employeeUpdateOneRequiredWithoutWalletTransactionsNestedInput
    relatedPaper?: paperUpdateOneWithoutWalletTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPaperId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyInput = {
    id?: string
    employeeId: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    relatedPaperId?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPaperId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdCounterCreateInput = {
    id?: string
    year: number
    count?: number
  }

  export type IdCounterUncheckedCreateInput = {
    id?: string
    year: number
    count?: number
  }

  export type IdCounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type IdCounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type IdCounterCreateManyInput = {
    id?: string
    year: number
    count?: number
  }

  export type IdCounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type IdCounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type CopyrightCreateInput = {
    id?: string
    copyrightStatus?: $Enums.CopyrightStatus
    pdfKey: string
    pdfUrl: string
    signedAt?: Date | string
    updatedAt?: Date | string
    paper: paperCreateNestedOneWithoutCopyrightInput
  }

  export type CopyrightUncheckedCreateInput = {
    id?: string
    copyrightStatus?: $Enums.CopyrightStatus
    pdfKey: string
    pdfUrl: string
    paperId: string
    signedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopyrightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyrightStatus?: EnumCopyrightStatusFieldUpdateOperationsInput | $Enums.CopyrightStatus
    pdfKey?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneRequiredWithoutCopyrightNestedInput
  }

  export type CopyrightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyrightStatus?: EnumCopyrightStatusFieldUpdateOperationsInput | $Enums.CopyrightStatus
    pdfKey?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    paperId?: StringFieldUpdateOperationsInput | string
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopyrightCreateManyInput = {
    id?: string
    copyrightStatus?: $Enums.CopyrightStatus
    pdfKey: string
    pdfUrl: string
    paperId: string
    signedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopyrightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyrightStatus?: EnumCopyrightStatusFieldUpdateOperationsInput | $Enums.CopyrightStatus
    pdfKey?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopyrightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyrightStatus?: EnumCopyrightStatusFieldUpdateOperationsInput | $Enums.CopyrightStatus
    pdfKey?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    paperId?: StringFieldUpdateOperationsInput | string
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthorListRelationFilter = {
    every?: authorWhereInput
    some?: authorWhereInput
    none?: authorWhereInput
  }

  export type StatusListRelationFilter = {
    every?: statusWhereInput
    some?: statusWhereInput
    none?: statusWhereInput
  }

  export type ArchiveScalarRelationFilter = {
    is?: archiveWhereInput
    isNot?: archiveWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type WalletTransactionListRelationFilter = {
    every?: WalletTransactionWhereInput
    some?: WalletTransactionWhereInput
    none?: WalletTransactionWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: employeeWhereInput | null
    isNot?: employeeWhereInput | null
  }

  export type CopyrightNullableScalarRelationFilter = {
    is?: CopyrightWhereInput | null
    isNot?: CopyrightWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type authorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type statusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paperCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    name?: SortOrder
    keywords?: SortOrder
    manuscriptId?: SortOrder
    manuscriptUrl?: SortOrder
    publishId?: SortOrder
    publishUrl?: SortOrder
    archiveId?: SortOrder
    editorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paperMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    name?: SortOrder
    manuscriptId?: SortOrder
    manuscriptUrl?: SortOrder
    publishId?: SortOrder
    publishUrl?: SortOrder
    archiveId?: SortOrder
    editorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paperMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    name?: SortOrder
    manuscriptId?: SortOrder
    manuscriptUrl?: SortOrder
    publishId?: SortOrder
    publishUrl?: SortOrder
    archiveId?: SortOrder
    editorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PaperListRelationFilter = {
    every?: paperWhereInput
    some?: paperWhereInput
    none?: paperWhereInput
  }

  export type paperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    organisation?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    organisation?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    organisation?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaperStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaperStatus | EnumPaperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaperStatusFilter<$PrismaModel> | $Enums.PaperStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaperScalarRelationFilter = {
    is?: paperWhereInput
    isNot?: paperWhereInput
  }

  export type statusCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    paperId?: SortOrder
    changedById?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statusMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    paperId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statusMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    paperId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaperStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaperStatus | EnumPaperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaperStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaperStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaperStatusFilter<$PrismaModel>
    _max?: NestedEnumPaperStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEmployeeRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleFilter<$PrismaModel> | $Enums.EmployeeRole
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput
    some?: employeeWhereInput
    none?: employeeWhereInput
  }

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    specialization?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type employeeAvgOrderByAggregateInput = {
    walletBalance?: SortOrder
  }

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    specialization?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    specialization?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type employeeSumOrderByAggregateInput = {
    walletBalance?: SortOrder
  }

  export type EnumEmployeeRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeRoleFilter<$PrismaModel>
    _max?: NestedEnumEmployeeRoleFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type archiveCountOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type archiveAvgOrderByAggregateInput = {
    volume?: SortOrder
    issue?: SortOrder
    year?: SortOrder
  }

  export type archiveMaxOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type archiveMinOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type archiveSumOrderByAggregateInput = {
    volume?: SortOrder
    issue?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumpaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentStatus | EnumpaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentStatusFilter<$PrismaModel> | $Enums.paymentStatus
  }

  export type AuthorScalarRelationFilter = {
    is?: authorWhereInput
    isNot?: authorWhereInput
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paperId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paperId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paperId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumpaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentStatus | EnumpaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.paymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumpaymentStatusFilter<$PrismaModel>
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type PaperNullableScalarRelationFilter = {
    is?: paperWhereInput | null
    isNot?: paperWhereInput | null
  }

  export type AuthorNullableScalarRelationFilter = {
    is?: authorWhereInput | null
    isNot?: authorWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    paperId?: SortOrder
    actorId?: SortOrder
    authorId?: SortOrder
    activity?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    paperId?: SortOrder
    actorId?: SortOrder
    authorId?: SortOrder
    activity?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    paperId?: SortOrder
    actorId?: SortOrder
    authorId?: SortOrder
    activity?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type EnumWalletTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeFilter<$PrismaModel> | $Enums.WalletTransactionType
  }

  export type EmployeeScalarRelationFilter = {
    is?: employeeWhereInput
    isNot?: employeeWhereInput
  }

  export type WalletTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    relatedPaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WalletTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    relatedPaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    relatedPaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.WalletTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
  }

  export type IdCounterCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    count?: SortOrder
  }

  export type IdCounterAvgOrderByAggregateInput = {
    year?: SortOrder
    count?: SortOrder
  }

  export type IdCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    count?: SortOrder
  }

  export type IdCounterMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    count?: SortOrder
  }

  export type IdCounterSumOrderByAggregateInput = {
    year?: SortOrder
    count?: SortOrder
  }

  export type EnumCopyrightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyrightStatus | EnumCopyrightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyrightStatusFilter<$PrismaModel> | $Enums.CopyrightStatus
  }

  export type CopyrightCountOrderByAggregateInput = {
    id?: SortOrder
    copyrightStatus?: SortOrder
    pdfKey?: SortOrder
    pdfUrl?: SortOrder
    paperId?: SortOrder
    signedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CopyrightMaxOrderByAggregateInput = {
    id?: SortOrder
    copyrightStatus?: SortOrder
    pdfKey?: SortOrder
    pdfUrl?: SortOrder
    paperId?: SortOrder
    signedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CopyrightMinOrderByAggregateInput = {
    id?: SortOrder
    copyrightStatus?: SortOrder
    pdfKey?: SortOrder
    pdfUrl?: SortOrder
    paperId?: SortOrder
    signedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCopyrightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyrightStatus | EnumCopyrightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyrightStatusWithAggregatesFilter<$PrismaModel> | $Enums.CopyrightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCopyrightStatusFilter<$PrismaModel>
    _max?: NestedEnumCopyrightStatusFilter<$PrismaModel>
  }

  export type paperCreatekeywordsInput = {
    set: string[]
  }

  export type authorCreateNestedManyWithoutPapersInput = {
    create?: XOR<authorCreateWithoutPapersInput, authorUncheckedCreateWithoutPapersInput> | authorCreateWithoutPapersInput[] | authorUncheckedCreateWithoutPapersInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPapersInput | authorCreateOrConnectWithoutPapersInput[]
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
  }

  export type statusCreateNestedManyWithoutPaperInput = {
    create?: XOR<statusCreateWithoutPaperInput, statusUncheckedCreateWithoutPaperInput> | statusCreateWithoutPaperInput[] | statusUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: statusCreateOrConnectWithoutPaperInput | statusCreateOrConnectWithoutPaperInput[]
    createMany?: statusCreateManyPaperInputEnvelope
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
  }

  export type archiveCreateNestedOneWithoutPapersInput = {
    create?: XOR<archiveCreateWithoutPapersInput, archiveUncheckedCreateWithoutPapersInput>
    connectOrCreate?: archiveCreateOrConnectWithoutPapersInput
    connect?: archiveWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutPaperInput = {
    create?: XOR<transactionCreateWithoutPaperInput, transactionUncheckedCreateWithoutPaperInput> | transactionCreateWithoutPaperInput[] | transactionUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPaperInput | transactionCreateOrConnectWithoutPaperInput[]
    createMany?: transactionCreateManyPaperInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutPaperInput = {
    create?: XOR<ActivityLogCreateWithoutPaperInput, ActivityLogUncheckedCreateWithoutPaperInput> | ActivityLogCreateWithoutPaperInput[] | ActivityLogUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPaperInput | ActivityLogCreateOrConnectWithoutPaperInput[]
    createMany?: ActivityLogCreateManyPaperInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type WalletTransactionCreateNestedManyWithoutRelatedPaperInput = {
    create?: XOR<WalletTransactionCreateWithoutRelatedPaperInput, WalletTransactionUncheckedCreateWithoutRelatedPaperInput> | WalletTransactionCreateWithoutRelatedPaperInput[] | WalletTransactionUncheckedCreateWithoutRelatedPaperInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutRelatedPaperInput | WalletTransactionCreateOrConnectWithoutRelatedPaperInput[]
    createMany?: WalletTransactionCreateManyRelatedPaperInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type employeeCreateNestedOneWithoutPaperInput = {
    create?: XOR<employeeCreateWithoutPaperInput, employeeUncheckedCreateWithoutPaperInput>
    connectOrCreate?: employeeCreateOrConnectWithoutPaperInput
    connect?: employeeWhereUniqueInput
  }

  export type CopyrightCreateNestedOneWithoutPaperInput = {
    create?: XOR<CopyrightCreateWithoutPaperInput, CopyrightUncheckedCreateWithoutPaperInput>
    connectOrCreate?: CopyrightCreateOrConnectWithoutPaperInput
    connect?: CopyrightWhereUniqueInput
  }

  export type authorUncheckedCreateNestedManyWithoutPapersInput = {
    create?: XOR<authorCreateWithoutPapersInput, authorUncheckedCreateWithoutPapersInput> | authorCreateWithoutPapersInput[] | authorUncheckedCreateWithoutPapersInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPapersInput | authorCreateOrConnectWithoutPapersInput[]
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
  }

  export type statusUncheckedCreateNestedManyWithoutPaperInput = {
    create?: XOR<statusCreateWithoutPaperInput, statusUncheckedCreateWithoutPaperInput> | statusCreateWithoutPaperInput[] | statusUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: statusCreateOrConnectWithoutPaperInput | statusCreateOrConnectWithoutPaperInput[]
    createMany?: statusCreateManyPaperInputEnvelope
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutPaperInput = {
    create?: XOR<transactionCreateWithoutPaperInput, transactionUncheckedCreateWithoutPaperInput> | transactionCreateWithoutPaperInput[] | transactionUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPaperInput | transactionCreateOrConnectWithoutPaperInput[]
    createMany?: transactionCreateManyPaperInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutPaperInput = {
    create?: XOR<ActivityLogCreateWithoutPaperInput, ActivityLogUncheckedCreateWithoutPaperInput> | ActivityLogCreateWithoutPaperInput[] | ActivityLogUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPaperInput | ActivityLogCreateOrConnectWithoutPaperInput[]
    createMany?: ActivityLogCreateManyPaperInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput = {
    create?: XOR<WalletTransactionCreateWithoutRelatedPaperInput, WalletTransactionUncheckedCreateWithoutRelatedPaperInput> | WalletTransactionCreateWithoutRelatedPaperInput[] | WalletTransactionUncheckedCreateWithoutRelatedPaperInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutRelatedPaperInput | WalletTransactionCreateOrConnectWithoutRelatedPaperInput[]
    createMany?: WalletTransactionCreateManyRelatedPaperInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type CopyrightUncheckedCreateNestedOneWithoutPaperInput = {
    create?: XOR<CopyrightCreateWithoutPaperInput, CopyrightUncheckedCreateWithoutPaperInput>
    connectOrCreate?: CopyrightCreateOrConnectWithoutPaperInput
    connect?: CopyrightWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type paperUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type authorUpdateManyWithoutPapersNestedInput = {
    create?: XOR<authorCreateWithoutPapersInput, authorUncheckedCreateWithoutPapersInput> | authorCreateWithoutPapersInput[] | authorUncheckedCreateWithoutPapersInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPapersInput | authorCreateOrConnectWithoutPapersInput[]
    upsert?: authorUpsertWithWhereUniqueWithoutPapersInput | authorUpsertWithWhereUniqueWithoutPapersInput[]
    set?: authorWhereUniqueInput | authorWhereUniqueInput[]
    disconnect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    delete?: authorWhereUniqueInput | authorWhereUniqueInput[]
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    update?: authorUpdateWithWhereUniqueWithoutPapersInput | authorUpdateWithWhereUniqueWithoutPapersInput[]
    updateMany?: authorUpdateManyWithWhereWithoutPapersInput | authorUpdateManyWithWhereWithoutPapersInput[]
    deleteMany?: authorScalarWhereInput | authorScalarWhereInput[]
  }

  export type statusUpdateManyWithoutPaperNestedInput = {
    create?: XOR<statusCreateWithoutPaperInput, statusUncheckedCreateWithoutPaperInput> | statusCreateWithoutPaperInput[] | statusUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: statusCreateOrConnectWithoutPaperInput | statusCreateOrConnectWithoutPaperInput[]
    upsert?: statusUpsertWithWhereUniqueWithoutPaperInput | statusUpsertWithWhereUniqueWithoutPaperInput[]
    createMany?: statusCreateManyPaperInputEnvelope
    set?: statusWhereUniqueInput | statusWhereUniqueInput[]
    disconnect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    delete?: statusWhereUniqueInput | statusWhereUniqueInput[]
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    update?: statusUpdateWithWhereUniqueWithoutPaperInput | statusUpdateWithWhereUniqueWithoutPaperInput[]
    updateMany?: statusUpdateManyWithWhereWithoutPaperInput | statusUpdateManyWithWhereWithoutPaperInput[]
    deleteMany?: statusScalarWhereInput | statusScalarWhereInput[]
  }

  export type archiveUpdateOneRequiredWithoutPapersNestedInput = {
    create?: XOR<archiveCreateWithoutPapersInput, archiveUncheckedCreateWithoutPapersInput>
    connectOrCreate?: archiveCreateOrConnectWithoutPapersInput
    upsert?: archiveUpsertWithoutPapersInput
    connect?: archiveWhereUniqueInput
    update?: XOR<XOR<archiveUpdateToOneWithWhereWithoutPapersInput, archiveUpdateWithoutPapersInput>, archiveUncheckedUpdateWithoutPapersInput>
  }

  export type transactionUpdateManyWithoutPaperNestedInput = {
    create?: XOR<transactionCreateWithoutPaperInput, transactionUncheckedCreateWithoutPaperInput> | transactionCreateWithoutPaperInput[] | transactionUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPaperInput | transactionCreateOrConnectWithoutPaperInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutPaperInput | transactionUpsertWithWhereUniqueWithoutPaperInput[]
    createMany?: transactionCreateManyPaperInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutPaperInput | transactionUpdateWithWhereUniqueWithoutPaperInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutPaperInput | transactionUpdateManyWithWhereWithoutPaperInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutPaperNestedInput = {
    create?: XOR<ActivityLogCreateWithoutPaperInput, ActivityLogUncheckedCreateWithoutPaperInput> | ActivityLogCreateWithoutPaperInput[] | ActivityLogUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPaperInput | ActivityLogCreateOrConnectWithoutPaperInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutPaperInput | ActivityLogUpsertWithWhereUniqueWithoutPaperInput[]
    createMany?: ActivityLogCreateManyPaperInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutPaperInput | ActivityLogUpdateWithWhereUniqueWithoutPaperInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutPaperInput | ActivityLogUpdateManyWithWhereWithoutPaperInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type WalletTransactionUpdateManyWithoutRelatedPaperNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutRelatedPaperInput, WalletTransactionUncheckedCreateWithoutRelatedPaperInput> | WalletTransactionCreateWithoutRelatedPaperInput[] | WalletTransactionUncheckedCreateWithoutRelatedPaperInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutRelatedPaperInput | WalletTransactionCreateOrConnectWithoutRelatedPaperInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutRelatedPaperInput | WalletTransactionUpsertWithWhereUniqueWithoutRelatedPaperInput[]
    createMany?: WalletTransactionCreateManyRelatedPaperInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutRelatedPaperInput | WalletTransactionUpdateWithWhereUniqueWithoutRelatedPaperInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutRelatedPaperInput | WalletTransactionUpdateManyWithWhereWithoutRelatedPaperInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type employeeUpdateOneWithoutPaperNestedInput = {
    create?: XOR<employeeCreateWithoutPaperInput, employeeUncheckedCreateWithoutPaperInput>
    connectOrCreate?: employeeCreateOrConnectWithoutPaperInput
    upsert?: employeeUpsertWithoutPaperInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutPaperInput, employeeUpdateWithoutPaperInput>, employeeUncheckedUpdateWithoutPaperInput>
  }

  export type CopyrightUpdateOneWithoutPaperNestedInput = {
    create?: XOR<CopyrightCreateWithoutPaperInput, CopyrightUncheckedCreateWithoutPaperInput>
    connectOrCreate?: CopyrightCreateOrConnectWithoutPaperInput
    upsert?: CopyrightUpsertWithoutPaperInput
    disconnect?: CopyrightWhereInput | boolean
    delete?: CopyrightWhereInput | boolean
    connect?: CopyrightWhereUniqueInput
    update?: XOR<XOR<CopyrightUpdateToOneWithWhereWithoutPaperInput, CopyrightUpdateWithoutPaperInput>, CopyrightUncheckedUpdateWithoutPaperInput>
  }

  export type authorUncheckedUpdateManyWithoutPapersNestedInput = {
    create?: XOR<authorCreateWithoutPapersInput, authorUncheckedCreateWithoutPapersInput> | authorCreateWithoutPapersInput[] | authorUncheckedCreateWithoutPapersInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPapersInput | authorCreateOrConnectWithoutPapersInput[]
    upsert?: authorUpsertWithWhereUniqueWithoutPapersInput | authorUpsertWithWhereUniqueWithoutPapersInput[]
    set?: authorWhereUniqueInput | authorWhereUniqueInput[]
    disconnect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    delete?: authorWhereUniqueInput | authorWhereUniqueInput[]
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    update?: authorUpdateWithWhereUniqueWithoutPapersInput | authorUpdateWithWhereUniqueWithoutPapersInput[]
    updateMany?: authorUpdateManyWithWhereWithoutPapersInput | authorUpdateManyWithWhereWithoutPapersInput[]
    deleteMany?: authorScalarWhereInput | authorScalarWhereInput[]
  }

  export type statusUncheckedUpdateManyWithoutPaperNestedInput = {
    create?: XOR<statusCreateWithoutPaperInput, statusUncheckedCreateWithoutPaperInput> | statusCreateWithoutPaperInput[] | statusUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: statusCreateOrConnectWithoutPaperInput | statusCreateOrConnectWithoutPaperInput[]
    upsert?: statusUpsertWithWhereUniqueWithoutPaperInput | statusUpsertWithWhereUniqueWithoutPaperInput[]
    createMany?: statusCreateManyPaperInputEnvelope
    set?: statusWhereUniqueInput | statusWhereUniqueInput[]
    disconnect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    delete?: statusWhereUniqueInput | statusWhereUniqueInput[]
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    update?: statusUpdateWithWhereUniqueWithoutPaperInput | statusUpdateWithWhereUniqueWithoutPaperInput[]
    updateMany?: statusUpdateManyWithWhereWithoutPaperInput | statusUpdateManyWithWhereWithoutPaperInput[]
    deleteMany?: statusScalarWhereInput | statusScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutPaperNestedInput = {
    create?: XOR<transactionCreateWithoutPaperInput, transactionUncheckedCreateWithoutPaperInput> | transactionCreateWithoutPaperInput[] | transactionUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPaperInput | transactionCreateOrConnectWithoutPaperInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutPaperInput | transactionUpsertWithWhereUniqueWithoutPaperInput[]
    createMany?: transactionCreateManyPaperInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutPaperInput | transactionUpdateWithWhereUniqueWithoutPaperInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutPaperInput | transactionUpdateManyWithWhereWithoutPaperInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutPaperNestedInput = {
    create?: XOR<ActivityLogCreateWithoutPaperInput, ActivityLogUncheckedCreateWithoutPaperInput> | ActivityLogCreateWithoutPaperInput[] | ActivityLogUncheckedCreateWithoutPaperInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPaperInput | ActivityLogCreateOrConnectWithoutPaperInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutPaperInput | ActivityLogUpsertWithWhereUniqueWithoutPaperInput[]
    createMany?: ActivityLogCreateManyPaperInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutPaperInput | ActivityLogUpdateWithWhereUniqueWithoutPaperInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutPaperInput | ActivityLogUpdateManyWithWhereWithoutPaperInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutRelatedPaperInput, WalletTransactionUncheckedCreateWithoutRelatedPaperInput> | WalletTransactionCreateWithoutRelatedPaperInput[] | WalletTransactionUncheckedCreateWithoutRelatedPaperInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutRelatedPaperInput | WalletTransactionCreateOrConnectWithoutRelatedPaperInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutRelatedPaperInput | WalletTransactionUpsertWithWhereUniqueWithoutRelatedPaperInput[]
    createMany?: WalletTransactionCreateManyRelatedPaperInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutRelatedPaperInput | WalletTransactionUpdateWithWhereUniqueWithoutRelatedPaperInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutRelatedPaperInput | WalletTransactionUpdateManyWithWhereWithoutRelatedPaperInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type CopyrightUncheckedUpdateOneWithoutPaperNestedInput = {
    create?: XOR<CopyrightCreateWithoutPaperInput, CopyrightUncheckedCreateWithoutPaperInput>
    connectOrCreate?: CopyrightCreateOrConnectWithoutPaperInput
    upsert?: CopyrightUpsertWithoutPaperInput
    disconnect?: CopyrightWhereInput | boolean
    delete?: CopyrightWhereInput | boolean
    connect?: CopyrightWhereUniqueInput
    update?: XOR<XOR<CopyrightUpdateToOneWithWhereWithoutPaperInput, CopyrightUpdateWithoutPaperInput>, CopyrightUncheckedUpdateWithoutPaperInput>
  }

  export type paperCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<paperCreateWithoutAuthorsInput, paperUncheckedCreateWithoutAuthorsInput> | paperCreateWithoutAuthorsInput[] | paperUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: paperCreateOrConnectWithoutAuthorsInput | paperCreateOrConnectWithoutAuthorsInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<transactionCreateWithoutAuthorInput, transactionUncheckedCreateWithoutAuthorInput> | transactionCreateWithoutAuthorInput[] | transactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAuthorInput | transactionCreateOrConnectWithoutAuthorInput[]
    createMany?: transactionCreateManyAuthorInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ActivityLogCreateWithoutAuthorInput, ActivityLogUncheckedCreateWithoutAuthorInput> | ActivityLogCreateWithoutAuthorInput[] | ActivityLogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAuthorInput | ActivityLogCreateOrConnectWithoutAuthorInput[]
    createMany?: ActivityLogCreateManyAuthorInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type paperUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<paperCreateWithoutAuthorsInput, paperUncheckedCreateWithoutAuthorsInput> | paperCreateWithoutAuthorsInput[] | paperUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: paperCreateOrConnectWithoutAuthorsInput | paperCreateOrConnectWithoutAuthorsInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<transactionCreateWithoutAuthorInput, transactionUncheckedCreateWithoutAuthorInput> | transactionCreateWithoutAuthorInput[] | transactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAuthorInput | transactionCreateOrConnectWithoutAuthorInput[]
    createMany?: transactionCreateManyAuthorInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ActivityLogCreateWithoutAuthorInput, ActivityLogUncheckedCreateWithoutAuthorInput> | ActivityLogCreateWithoutAuthorInput[] | ActivityLogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAuthorInput | ActivityLogCreateOrConnectWithoutAuthorInput[]
    createMany?: ActivityLogCreateManyAuthorInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type paperUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<paperCreateWithoutAuthorsInput, paperUncheckedCreateWithoutAuthorsInput> | paperCreateWithoutAuthorsInput[] | paperUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: paperCreateOrConnectWithoutAuthorsInput | paperCreateOrConnectWithoutAuthorsInput[]
    upsert?: paperUpsertWithWhereUniqueWithoutAuthorsInput | paperUpsertWithWhereUniqueWithoutAuthorsInput[]
    set?: paperWhereUniqueInput | paperWhereUniqueInput[]
    disconnect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    delete?: paperWhereUniqueInput | paperWhereUniqueInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    update?: paperUpdateWithWhereUniqueWithoutAuthorsInput | paperUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: paperUpdateManyWithWhereWithoutAuthorsInput | paperUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: paperScalarWhereInput | paperScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<transactionCreateWithoutAuthorInput, transactionUncheckedCreateWithoutAuthorInput> | transactionCreateWithoutAuthorInput[] | transactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAuthorInput | transactionCreateOrConnectWithoutAuthorInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutAuthorInput | transactionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: transactionCreateManyAuthorInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutAuthorInput | transactionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutAuthorInput | transactionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAuthorInput, ActivityLogUncheckedCreateWithoutAuthorInput> | ActivityLogCreateWithoutAuthorInput[] | ActivityLogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAuthorInput | ActivityLogCreateOrConnectWithoutAuthorInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAuthorInput | ActivityLogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ActivityLogCreateManyAuthorInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAuthorInput | ActivityLogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAuthorInput | ActivityLogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type paperUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<paperCreateWithoutAuthorsInput, paperUncheckedCreateWithoutAuthorsInput> | paperCreateWithoutAuthorsInput[] | paperUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: paperCreateOrConnectWithoutAuthorsInput | paperCreateOrConnectWithoutAuthorsInput[]
    upsert?: paperUpsertWithWhereUniqueWithoutAuthorsInput | paperUpsertWithWhereUniqueWithoutAuthorsInput[]
    set?: paperWhereUniqueInput | paperWhereUniqueInput[]
    disconnect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    delete?: paperWhereUniqueInput | paperWhereUniqueInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    update?: paperUpdateWithWhereUniqueWithoutAuthorsInput | paperUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: paperUpdateManyWithWhereWithoutAuthorsInput | paperUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: paperScalarWhereInput | paperScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<transactionCreateWithoutAuthorInput, transactionUncheckedCreateWithoutAuthorInput> | transactionCreateWithoutAuthorInput[] | transactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAuthorInput | transactionCreateOrConnectWithoutAuthorInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutAuthorInput | transactionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: transactionCreateManyAuthorInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutAuthorInput | transactionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutAuthorInput | transactionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAuthorInput, ActivityLogUncheckedCreateWithoutAuthorInput> | ActivityLogCreateWithoutAuthorInput[] | ActivityLogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAuthorInput | ActivityLogCreateOrConnectWithoutAuthorInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAuthorInput | ActivityLogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ActivityLogCreateManyAuthorInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAuthorInput | ActivityLogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAuthorInput | ActivityLogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type statusCreatecommentsInput = {
    set: string[]
  }

  export type paperCreateNestedOneWithoutPaperStatusesInput = {
    create?: XOR<paperCreateWithoutPaperStatusesInput, paperUncheckedCreateWithoutPaperStatusesInput>
    connectOrCreate?: paperCreateOrConnectWithoutPaperStatusesInput
    connect?: paperWhereUniqueInput
  }

  export type employeeCreateNestedOneWithoutStatusInput = {
    create?: XOR<employeeCreateWithoutStatusInput, employeeUncheckedCreateWithoutStatusInput>
    connectOrCreate?: employeeCreateOrConnectWithoutStatusInput
    connect?: employeeWhereUniqueInput
  }

  export type EnumPaperStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaperStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type statusUpdatecommentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type paperUpdateOneRequiredWithoutPaperStatusesNestedInput = {
    create?: XOR<paperCreateWithoutPaperStatusesInput, paperUncheckedCreateWithoutPaperStatusesInput>
    connectOrCreate?: paperCreateOrConnectWithoutPaperStatusesInput
    upsert?: paperUpsertWithoutPaperStatusesInput
    connect?: paperWhereUniqueInput
    update?: XOR<XOR<paperUpdateToOneWithWhereWithoutPaperStatusesInput, paperUpdateWithoutPaperStatusesInput>, paperUncheckedUpdateWithoutPaperStatusesInput>
  }

  export type employeeUpdateOneWithoutStatusNestedInput = {
    create?: XOR<employeeCreateWithoutStatusInput, employeeUncheckedCreateWithoutStatusInput>
    connectOrCreate?: employeeCreateOrConnectWithoutStatusInput
    upsert?: employeeUpsertWithoutStatusInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutStatusInput, employeeUpdateWithoutStatusInput>, employeeUncheckedUpdateWithoutStatusInput>
  }

  export type employeeCreateNestedOneWithoutCreatedEmployeesInput = {
    create?: XOR<employeeCreateWithoutCreatedEmployeesInput, employeeUncheckedCreateWithoutCreatedEmployeesInput>
    connectOrCreate?: employeeCreateOrConnectWithoutCreatedEmployeesInput
    connect?: employeeWhereUniqueInput
  }

  export type employeeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<employeeCreateWithoutCreatedByInput, employeeUncheckedCreateWithoutCreatedByInput> | employeeCreateWithoutCreatedByInput[] | employeeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCreatedByInput | employeeCreateOrConnectWithoutCreatedByInput[]
    createMany?: employeeCreateManyCreatedByInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type statusCreateNestedManyWithoutChangedByInput = {
    create?: XOR<statusCreateWithoutChangedByInput, statusUncheckedCreateWithoutChangedByInput> | statusCreateWithoutChangedByInput[] | statusUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: statusCreateOrConnectWithoutChangedByInput | statusCreateOrConnectWithoutChangedByInput[]
    createMany?: statusCreateManyChangedByInputEnvelope
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutActorInput = {
    create?: XOR<ActivityLogCreateWithoutActorInput, ActivityLogUncheckedCreateWithoutActorInput> | ActivityLogCreateWithoutActorInput[] | ActivityLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutActorInput | ActivityLogCreateOrConnectWithoutActorInput[]
    createMany?: ActivityLogCreateManyActorInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type WalletTransactionCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WalletTransactionCreateWithoutEmployeeInput, WalletTransactionUncheckedCreateWithoutEmployeeInput> | WalletTransactionCreateWithoutEmployeeInput[] | WalletTransactionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutEmployeeInput | WalletTransactionCreateOrConnectWithoutEmployeeInput[]
    createMany?: WalletTransactionCreateManyEmployeeInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type paperCreateNestedManyWithoutEditorInput = {
    create?: XOR<paperCreateWithoutEditorInput, paperUncheckedCreateWithoutEditorInput> | paperCreateWithoutEditorInput[] | paperUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: paperCreateOrConnectWithoutEditorInput | paperCreateOrConnectWithoutEditorInput[]
    createMany?: paperCreateManyEditorInputEnvelope
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
  }

  export type employeeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<employeeCreateWithoutCreatedByInput, employeeUncheckedCreateWithoutCreatedByInput> | employeeCreateWithoutCreatedByInput[] | employeeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCreatedByInput | employeeCreateOrConnectWithoutCreatedByInput[]
    createMany?: employeeCreateManyCreatedByInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type statusUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<statusCreateWithoutChangedByInput, statusUncheckedCreateWithoutChangedByInput> | statusCreateWithoutChangedByInput[] | statusUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: statusCreateOrConnectWithoutChangedByInput | statusCreateOrConnectWithoutChangedByInput[]
    createMany?: statusCreateManyChangedByInputEnvelope
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<ActivityLogCreateWithoutActorInput, ActivityLogUncheckedCreateWithoutActorInput> | ActivityLogCreateWithoutActorInput[] | ActivityLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutActorInput | ActivityLogCreateOrConnectWithoutActorInput[]
    createMany?: ActivityLogCreateManyActorInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WalletTransactionCreateWithoutEmployeeInput, WalletTransactionUncheckedCreateWithoutEmployeeInput> | WalletTransactionCreateWithoutEmployeeInput[] | WalletTransactionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutEmployeeInput | WalletTransactionCreateOrConnectWithoutEmployeeInput[]
    createMany?: WalletTransactionCreateManyEmployeeInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type paperUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<paperCreateWithoutEditorInput, paperUncheckedCreateWithoutEditorInput> | paperCreateWithoutEditorInput[] | paperUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: paperCreateOrConnectWithoutEditorInput | paperCreateOrConnectWithoutEditorInput[]
    createMany?: paperCreateManyEditorInputEnvelope
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
  }

  export type EnumEmployeeRoleFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeRole
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type employeeUpdateOneWithoutCreatedEmployeesNestedInput = {
    create?: XOR<employeeCreateWithoutCreatedEmployeesInput, employeeUncheckedCreateWithoutCreatedEmployeesInput>
    connectOrCreate?: employeeCreateOrConnectWithoutCreatedEmployeesInput
    upsert?: employeeUpsertWithoutCreatedEmployeesInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutCreatedEmployeesInput, employeeUpdateWithoutCreatedEmployeesInput>, employeeUncheckedUpdateWithoutCreatedEmployeesInput>
  }

  export type employeeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<employeeCreateWithoutCreatedByInput, employeeUncheckedCreateWithoutCreatedByInput> | employeeCreateWithoutCreatedByInput[] | employeeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCreatedByInput | employeeCreateOrConnectWithoutCreatedByInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutCreatedByInput | employeeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: employeeCreateManyCreatedByInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutCreatedByInput | employeeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutCreatedByInput | employeeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type statusUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<statusCreateWithoutChangedByInput, statusUncheckedCreateWithoutChangedByInput> | statusCreateWithoutChangedByInput[] | statusUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: statusCreateOrConnectWithoutChangedByInput | statusCreateOrConnectWithoutChangedByInput[]
    upsert?: statusUpsertWithWhereUniqueWithoutChangedByInput | statusUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: statusCreateManyChangedByInputEnvelope
    set?: statusWhereUniqueInput | statusWhereUniqueInput[]
    disconnect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    delete?: statusWhereUniqueInput | statusWhereUniqueInput[]
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    update?: statusUpdateWithWhereUniqueWithoutChangedByInput | statusUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: statusUpdateManyWithWhereWithoutChangedByInput | statusUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: statusScalarWhereInput | statusScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<ActivityLogCreateWithoutActorInput, ActivityLogUncheckedCreateWithoutActorInput> | ActivityLogCreateWithoutActorInput[] | ActivityLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutActorInput | ActivityLogCreateOrConnectWithoutActorInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutActorInput | ActivityLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ActivityLogCreateManyActorInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutActorInput | ActivityLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutActorInput | ActivityLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type WalletTransactionUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutEmployeeInput, WalletTransactionUncheckedCreateWithoutEmployeeInput> | WalletTransactionCreateWithoutEmployeeInput[] | WalletTransactionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutEmployeeInput | WalletTransactionCreateOrConnectWithoutEmployeeInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutEmployeeInput | WalletTransactionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WalletTransactionCreateManyEmployeeInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutEmployeeInput | WalletTransactionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutEmployeeInput | WalletTransactionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type paperUpdateManyWithoutEditorNestedInput = {
    create?: XOR<paperCreateWithoutEditorInput, paperUncheckedCreateWithoutEditorInput> | paperCreateWithoutEditorInput[] | paperUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: paperCreateOrConnectWithoutEditorInput | paperCreateOrConnectWithoutEditorInput[]
    upsert?: paperUpsertWithWhereUniqueWithoutEditorInput | paperUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: paperCreateManyEditorInputEnvelope
    set?: paperWhereUniqueInput | paperWhereUniqueInput[]
    disconnect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    delete?: paperWhereUniqueInput | paperWhereUniqueInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    update?: paperUpdateWithWhereUniqueWithoutEditorInput | paperUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: paperUpdateManyWithWhereWithoutEditorInput | paperUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: paperScalarWhereInput | paperScalarWhereInput[]
  }

  export type employeeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<employeeCreateWithoutCreatedByInput, employeeUncheckedCreateWithoutCreatedByInput> | employeeCreateWithoutCreatedByInput[] | employeeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCreatedByInput | employeeCreateOrConnectWithoutCreatedByInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutCreatedByInput | employeeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: employeeCreateManyCreatedByInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutCreatedByInput | employeeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutCreatedByInput | employeeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type statusUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<statusCreateWithoutChangedByInput, statusUncheckedCreateWithoutChangedByInput> | statusCreateWithoutChangedByInput[] | statusUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: statusCreateOrConnectWithoutChangedByInput | statusCreateOrConnectWithoutChangedByInput[]
    upsert?: statusUpsertWithWhereUniqueWithoutChangedByInput | statusUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: statusCreateManyChangedByInputEnvelope
    set?: statusWhereUniqueInput | statusWhereUniqueInput[]
    disconnect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    delete?: statusWhereUniqueInput | statusWhereUniqueInput[]
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    update?: statusUpdateWithWhereUniqueWithoutChangedByInput | statusUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: statusUpdateManyWithWhereWithoutChangedByInput | statusUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: statusScalarWhereInput | statusScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<ActivityLogCreateWithoutActorInput, ActivityLogUncheckedCreateWithoutActorInput> | ActivityLogCreateWithoutActorInput[] | ActivityLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutActorInput | ActivityLogCreateOrConnectWithoutActorInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutActorInput | ActivityLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ActivityLogCreateManyActorInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutActorInput | ActivityLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutActorInput | ActivityLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutEmployeeInput, WalletTransactionUncheckedCreateWithoutEmployeeInput> | WalletTransactionCreateWithoutEmployeeInput[] | WalletTransactionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutEmployeeInput | WalletTransactionCreateOrConnectWithoutEmployeeInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutEmployeeInput | WalletTransactionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WalletTransactionCreateManyEmployeeInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutEmployeeInput | WalletTransactionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutEmployeeInput | WalletTransactionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type paperUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<paperCreateWithoutEditorInput, paperUncheckedCreateWithoutEditorInput> | paperCreateWithoutEditorInput[] | paperUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: paperCreateOrConnectWithoutEditorInput | paperCreateOrConnectWithoutEditorInput[]
    upsert?: paperUpsertWithWhereUniqueWithoutEditorInput | paperUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: paperCreateManyEditorInputEnvelope
    set?: paperWhereUniqueInput | paperWhereUniqueInput[]
    disconnect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    delete?: paperWhereUniqueInput | paperWhereUniqueInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    update?: paperUpdateWithWhereUniqueWithoutEditorInput | paperUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: paperUpdateManyWithWhereWithoutEditorInput | paperUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: paperScalarWhereInput | paperScalarWhereInput[]
  }

  export type paperCreateNestedManyWithoutArchiveInput = {
    create?: XOR<paperCreateWithoutArchiveInput, paperUncheckedCreateWithoutArchiveInput> | paperCreateWithoutArchiveInput[] | paperUncheckedCreateWithoutArchiveInput[]
    connectOrCreate?: paperCreateOrConnectWithoutArchiveInput | paperCreateOrConnectWithoutArchiveInput[]
    createMany?: paperCreateManyArchiveInputEnvelope
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
  }

  export type paperUncheckedCreateNestedManyWithoutArchiveInput = {
    create?: XOR<paperCreateWithoutArchiveInput, paperUncheckedCreateWithoutArchiveInput> | paperCreateWithoutArchiveInput[] | paperUncheckedCreateWithoutArchiveInput[]
    connectOrCreate?: paperCreateOrConnectWithoutArchiveInput | paperCreateOrConnectWithoutArchiveInput[]
    createMany?: paperCreateManyArchiveInputEnvelope
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type paperUpdateManyWithoutArchiveNestedInput = {
    create?: XOR<paperCreateWithoutArchiveInput, paperUncheckedCreateWithoutArchiveInput> | paperCreateWithoutArchiveInput[] | paperUncheckedCreateWithoutArchiveInput[]
    connectOrCreate?: paperCreateOrConnectWithoutArchiveInput | paperCreateOrConnectWithoutArchiveInput[]
    upsert?: paperUpsertWithWhereUniqueWithoutArchiveInput | paperUpsertWithWhereUniqueWithoutArchiveInput[]
    createMany?: paperCreateManyArchiveInputEnvelope
    set?: paperWhereUniqueInput | paperWhereUniqueInput[]
    disconnect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    delete?: paperWhereUniqueInput | paperWhereUniqueInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    update?: paperUpdateWithWhereUniqueWithoutArchiveInput | paperUpdateWithWhereUniqueWithoutArchiveInput[]
    updateMany?: paperUpdateManyWithWhereWithoutArchiveInput | paperUpdateManyWithWhereWithoutArchiveInput[]
    deleteMany?: paperScalarWhereInput | paperScalarWhereInput[]
  }

  export type paperUncheckedUpdateManyWithoutArchiveNestedInput = {
    create?: XOR<paperCreateWithoutArchiveInput, paperUncheckedCreateWithoutArchiveInput> | paperCreateWithoutArchiveInput[] | paperUncheckedCreateWithoutArchiveInput[]
    connectOrCreate?: paperCreateOrConnectWithoutArchiveInput | paperCreateOrConnectWithoutArchiveInput[]
    upsert?: paperUpsertWithWhereUniqueWithoutArchiveInput | paperUpsertWithWhereUniqueWithoutArchiveInput[]
    createMany?: paperCreateManyArchiveInputEnvelope
    set?: paperWhereUniqueInput | paperWhereUniqueInput[]
    disconnect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    delete?: paperWhereUniqueInput | paperWhereUniqueInput[]
    connect?: paperWhereUniqueInput | paperWhereUniqueInput[]
    update?: paperUpdateWithWhereUniqueWithoutArchiveInput | paperUpdateWithWhereUniqueWithoutArchiveInput[]
    updateMany?: paperUpdateManyWithWhereWithoutArchiveInput | paperUpdateManyWithWhereWithoutArchiveInput[]
    deleteMany?: paperScalarWhereInput | paperScalarWhereInput[]
  }

  export type paperCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<paperCreateWithoutTransactionsInput, paperUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: paperCreateOrConnectWithoutTransactionsInput
    connect?: paperWhereUniqueInput
  }

  export type authorCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<authorCreateWithoutTransactionsInput, authorUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: authorCreateOrConnectWithoutTransactionsInput
    connect?: authorWhereUniqueInput
  }

  export type EnumpaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.paymentStatus
  }

  export type paperUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<paperCreateWithoutTransactionsInput, paperUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: paperCreateOrConnectWithoutTransactionsInput
    upsert?: paperUpsertWithoutTransactionsInput
    connect?: paperWhereUniqueInput
    update?: XOR<XOR<paperUpdateToOneWithWhereWithoutTransactionsInput, paperUpdateWithoutTransactionsInput>, paperUncheckedUpdateWithoutTransactionsInput>
  }

  export type authorUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<authorCreateWithoutTransactionsInput, authorUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: authorCreateOrConnectWithoutTransactionsInput
    upsert?: authorUpsertWithoutTransactionsInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutTransactionsInput, authorUpdateWithoutTransactionsInput>, authorUncheckedUpdateWithoutTransactionsInput>
  }

  export type paperCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<paperCreateWithoutActivityLogsInput, paperUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: paperCreateOrConnectWithoutActivityLogsInput
    connect?: paperWhereUniqueInput
  }

  export type employeeCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<employeeCreateWithoutActivitiesInput, employeeUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: employeeCreateOrConnectWithoutActivitiesInput
    connect?: employeeWhereUniqueInput
  }

  export type authorCreateNestedOneWithoutActivityLogInput = {
    create?: XOR<authorCreateWithoutActivityLogInput, authorUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: authorCreateOrConnectWithoutActivityLogInput
    connect?: authorWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type paperUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<paperCreateWithoutActivityLogsInput, paperUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: paperCreateOrConnectWithoutActivityLogsInput
    upsert?: paperUpsertWithoutActivityLogsInput
    disconnect?: paperWhereInput | boolean
    delete?: paperWhereInput | boolean
    connect?: paperWhereUniqueInput
    update?: XOR<XOR<paperUpdateToOneWithWhereWithoutActivityLogsInput, paperUpdateWithoutActivityLogsInput>, paperUncheckedUpdateWithoutActivityLogsInput>
  }

  export type employeeUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<employeeCreateWithoutActivitiesInput, employeeUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: employeeCreateOrConnectWithoutActivitiesInput
    upsert?: employeeUpsertWithoutActivitiesInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutActivitiesInput, employeeUpdateWithoutActivitiesInput>, employeeUncheckedUpdateWithoutActivitiesInput>
  }

  export type authorUpdateOneWithoutActivityLogNestedInput = {
    create?: XOR<authorCreateWithoutActivityLogInput, authorUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: authorCreateOrConnectWithoutActivityLogInput
    upsert?: authorUpsertWithoutActivityLogInput
    disconnect?: authorWhereInput | boolean
    delete?: authorWhereInput | boolean
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutActivityLogInput, authorUpdateWithoutActivityLogInput>, authorUncheckedUpdateWithoutActivityLogInput>
  }

  export type employeeCreateNestedOneWithoutWalletTransactionsInput = {
    create?: XOR<employeeCreateWithoutWalletTransactionsInput, employeeUncheckedCreateWithoutWalletTransactionsInput>
    connectOrCreate?: employeeCreateOrConnectWithoutWalletTransactionsInput
    connect?: employeeWhereUniqueInput
  }

  export type paperCreateNestedOneWithoutWalletTransactionsInput = {
    create?: XOR<paperCreateWithoutWalletTransactionsInput, paperUncheckedCreateWithoutWalletTransactionsInput>
    connectOrCreate?: paperCreateOrConnectWithoutWalletTransactionsInput
    connect?: paperWhereUniqueInput
  }

  export type EnumWalletTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.WalletTransactionType
  }

  export type employeeUpdateOneRequiredWithoutWalletTransactionsNestedInput = {
    create?: XOR<employeeCreateWithoutWalletTransactionsInput, employeeUncheckedCreateWithoutWalletTransactionsInput>
    connectOrCreate?: employeeCreateOrConnectWithoutWalletTransactionsInput
    upsert?: employeeUpsertWithoutWalletTransactionsInput
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutWalletTransactionsInput, employeeUpdateWithoutWalletTransactionsInput>, employeeUncheckedUpdateWithoutWalletTransactionsInput>
  }

  export type paperUpdateOneWithoutWalletTransactionsNestedInput = {
    create?: XOR<paperCreateWithoutWalletTransactionsInput, paperUncheckedCreateWithoutWalletTransactionsInput>
    connectOrCreate?: paperCreateOrConnectWithoutWalletTransactionsInput
    upsert?: paperUpsertWithoutWalletTransactionsInput
    disconnect?: paperWhereInput | boolean
    delete?: paperWhereInput | boolean
    connect?: paperWhereUniqueInput
    update?: XOR<XOR<paperUpdateToOneWithWhereWithoutWalletTransactionsInput, paperUpdateWithoutWalletTransactionsInput>, paperUncheckedUpdateWithoutWalletTransactionsInput>
  }

  export type paperCreateNestedOneWithoutCopyrightInput = {
    create?: XOR<paperCreateWithoutCopyrightInput, paperUncheckedCreateWithoutCopyrightInput>
    connectOrCreate?: paperCreateOrConnectWithoutCopyrightInput
    connect?: paperWhereUniqueInput
  }

  export type EnumCopyrightStatusFieldUpdateOperationsInput = {
    set?: $Enums.CopyrightStatus
  }

  export type paperUpdateOneRequiredWithoutCopyrightNestedInput = {
    create?: XOR<paperCreateWithoutCopyrightInput, paperUncheckedCreateWithoutCopyrightInput>
    connectOrCreate?: paperCreateOrConnectWithoutCopyrightInput
    upsert?: paperUpsertWithoutCopyrightInput
    connect?: paperWhereUniqueInput
    update?: XOR<XOR<paperUpdateToOneWithWhereWithoutCopyrightInput, paperUpdateWithoutCopyrightInput>, paperUncheckedUpdateWithoutCopyrightInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPaperStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaperStatus | EnumPaperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaperStatusFilter<$PrismaModel> | $Enums.PaperStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPaperStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaperStatus | EnumPaperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaperStatus[] | ListEnumPaperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaperStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaperStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaperStatusFilter<$PrismaModel>
    _max?: NestedEnumPaperStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleFilter<$PrismaModel> | $Enums.EmployeeRole
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeRoleFilter<$PrismaModel>
    _max?: NestedEnumEmployeeRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumpaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentStatus | EnumpaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentStatusFilter<$PrismaModel> | $Enums.paymentStatus
  }

  export type NestedEnumpaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentStatus | EnumpaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentStatus[] | ListEnumpaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.paymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumpaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type NestedEnumWalletTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeFilter<$PrismaModel> | $Enums.WalletTransactionType
  }

  export type NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.WalletTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumCopyrightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyrightStatus | EnumCopyrightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyrightStatusFilter<$PrismaModel> | $Enums.CopyrightStatus
  }

  export type NestedEnumCopyrightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyrightStatus | EnumCopyrightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyrightStatus[] | ListEnumCopyrightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyrightStatusWithAggregatesFilter<$PrismaModel> | $Enums.CopyrightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCopyrightStatusFilter<$PrismaModel>
    _max?: NestedEnumCopyrightStatusFilter<$PrismaModel>
  }

  export type authorCreateWithoutPapersInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: transactionCreateNestedManyWithoutAuthorInput
    ActivityLog?: ActivityLogCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutPapersInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: transactionUncheckedCreateNestedManyWithoutAuthorInput
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorCreateOrConnectWithoutPapersInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutPapersInput, authorUncheckedCreateWithoutPapersInput>
  }

  export type statusCreateWithoutPaperInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    changedBy?: employeeCreateNestedOneWithoutStatusInput
  }

  export type statusUncheckedCreateWithoutPaperInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    changedById?: string | null
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusCreateOrConnectWithoutPaperInput = {
    where: statusWhereUniqueInput
    create: XOR<statusCreateWithoutPaperInput, statusUncheckedCreateWithoutPaperInput>
  }

  export type statusCreateManyPaperInputEnvelope = {
    data: statusCreateManyPaperInput | statusCreateManyPaperInput[]
    skipDuplicates?: boolean
  }

  export type archiveCreateWithoutPapersInput = {
    id?: string
    volume: number
    issue: number
    month: string
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type archiveUncheckedCreateWithoutPapersInput = {
    id?: string
    volume: number
    issue: number
    month: string
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type archiveCreateOrConnectWithoutPapersInput = {
    where: archiveWhereUniqueInput
    create: XOR<archiveCreateWithoutPapersInput, archiveUncheckedCreateWithoutPapersInput>
  }

  export type transactionCreateWithoutPaperInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author: authorCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateWithoutPaperInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionCreateOrConnectWithoutPaperInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutPaperInput, transactionUncheckedCreateWithoutPaperInput>
  }

  export type transactionCreateManyPaperInputEnvelope = {
    data: transactionCreateManyPaperInput | transactionCreateManyPaperInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutPaperInput = {
    id?: string
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
    actor?: employeeCreateNestedOneWithoutActivitiesInput
    author?: authorCreateNestedOneWithoutActivityLogInput
  }

  export type ActivityLogUncheckedCreateWithoutPaperInput = {
    id?: string
    actorId?: string | null
    authorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutPaperInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutPaperInput, ActivityLogUncheckedCreateWithoutPaperInput>
  }

  export type ActivityLogCreateManyPaperInputEnvelope = {
    data: ActivityLogCreateManyPaperInput | ActivityLogCreateManyPaperInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransactionCreateWithoutRelatedPaperInput = {
    id?: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    createdAt?: Date | string
    employee: employeeCreateNestedOneWithoutWalletTransactionsInput
  }

  export type WalletTransactionUncheckedCreateWithoutRelatedPaperInput = {
    id?: string
    employeeId: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutRelatedPaperInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutRelatedPaperInput, WalletTransactionUncheckedCreateWithoutRelatedPaperInput>
  }

  export type WalletTransactionCreateManyRelatedPaperInputEnvelope = {
    data: WalletTransactionCreateManyRelatedPaperInput | WalletTransactionCreateManyRelatedPaperInput[]
    skipDuplicates?: boolean
  }

  export type employeeCreateWithoutPaperInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: employeeCreateNestedOneWithoutCreatedEmployeesInput
    createdEmployees?: employeeCreateNestedManyWithoutCreatedByInput
    status?: statusCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutPaperInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeUncheckedCreateNestedManyWithoutCreatedByInput
    status?: statusUncheckedCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeeCreateOrConnectWithoutPaperInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutPaperInput, employeeUncheckedCreateWithoutPaperInput>
  }

  export type CopyrightCreateWithoutPaperInput = {
    id?: string
    copyrightStatus?: $Enums.CopyrightStatus
    pdfKey: string
    pdfUrl: string
    signedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopyrightUncheckedCreateWithoutPaperInput = {
    id?: string
    copyrightStatus?: $Enums.CopyrightStatus
    pdfKey: string
    pdfUrl: string
    signedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopyrightCreateOrConnectWithoutPaperInput = {
    where: CopyrightWhereUniqueInput
    create: XOR<CopyrightCreateWithoutPaperInput, CopyrightUncheckedCreateWithoutPaperInput>
  }

  export type authorUpsertWithWhereUniqueWithoutPapersInput = {
    where: authorWhereUniqueInput
    update: XOR<authorUpdateWithoutPapersInput, authorUncheckedUpdateWithoutPapersInput>
    create: XOR<authorCreateWithoutPapersInput, authorUncheckedCreateWithoutPapersInput>
  }

  export type authorUpdateWithWhereUniqueWithoutPapersInput = {
    where: authorWhereUniqueInput
    data: XOR<authorUpdateWithoutPapersInput, authorUncheckedUpdateWithoutPapersInput>
  }

  export type authorUpdateManyWithWhereWithoutPapersInput = {
    where: authorScalarWhereInput
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyWithoutPapersInput>
  }

  export type authorScalarWhereInput = {
    AND?: authorScalarWhereInput | authorScalarWhereInput[]
    OR?: authorScalarWhereInput[]
    NOT?: authorScalarWhereInput | authorScalarWhereInput[]
    id?: StringFilter<"author"> | string
    firstName?: StringFilter<"author"> | string
    lastName?: StringNullableFilter<"author"> | string | null
    email?: StringFilter<"author"> | string
    password?: StringFilter<"author"> | string
    organisation?: StringFilter<"author"> | string
    country?: StringFilter<"author"> | string
    phone?: StringFilter<"author"> | string
    createdAt?: DateTimeFilter<"author"> | Date | string
    updatedAt?: DateTimeFilter<"author"> | Date | string
  }

  export type statusUpsertWithWhereUniqueWithoutPaperInput = {
    where: statusWhereUniqueInput
    update: XOR<statusUpdateWithoutPaperInput, statusUncheckedUpdateWithoutPaperInput>
    create: XOR<statusCreateWithoutPaperInput, statusUncheckedCreateWithoutPaperInput>
  }

  export type statusUpdateWithWhereUniqueWithoutPaperInput = {
    where: statusWhereUniqueInput
    data: XOR<statusUpdateWithoutPaperInput, statusUncheckedUpdateWithoutPaperInput>
  }

  export type statusUpdateManyWithWhereWithoutPaperInput = {
    where: statusScalarWhereInput
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyWithoutPaperInput>
  }

  export type statusScalarWhereInput = {
    AND?: statusScalarWhereInput | statusScalarWhereInput[]
    OR?: statusScalarWhereInput[]
    NOT?: statusScalarWhereInput | statusScalarWhereInput[]
    id?: StringFilter<"status"> | string
    status?: EnumPaperStatusFilter<"status"> | $Enums.PaperStatus
    isApproved?: BoolFilter<"status"> | boolean
    paperId?: StringFilter<"status"> | string
    changedById?: StringNullableFilter<"status"> | string | null
    comments?: StringNullableListFilter<"status">
    createdAt?: DateTimeFilter<"status"> | Date | string
    updatedAt?: DateTimeFilter<"status"> | Date | string
  }

  export type archiveUpsertWithoutPapersInput = {
    update: XOR<archiveUpdateWithoutPapersInput, archiveUncheckedUpdateWithoutPapersInput>
    create: XOR<archiveCreateWithoutPapersInput, archiveUncheckedCreateWithoutPapersInput>
    where?: archiveWhereInput
  }

  export type archiveUpdateToOneWithWhereWithoutPapersInput = {
    where?: archiveWhereInput
    data: XOR<archiveUpdateWithoutPapersInput, archiveUncheckedUpdateWithoutPapersInput>
  }

  export type archiveUpdateWithoutPapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    issue?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archiveUncheckedUpdateWithoutPapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    issue?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUpsertWithWhereUniqueWithoutPaperInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutPaperInput, transactionUncheckedUpdateWithoutPaperInput>
    create: XOR<transactionCreateWithoutPaperInput, transactionUncheckedCreateWithoutPaperInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutPaperInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutPaperInput, transactionUncheckedUpdateWithoutPaperInput>
  }

  export type transactionUpdateManyWithWhereWithoutPaperInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutPaperInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: StringFilter<"transaction"> | string
    razorpayOrderId?: StringFilter<"transaction"> | string
    razorpayPaymentId?: StringNullableFilter<"transaction"> | string | null
    amount?: IntFilter<"transaction"> | number
    status?: EnumpaymentStatusFilter<"transaction"> | $Enums.paymentStatus
    paperId?: StringFilter<"transaction"> | string
    authorId?: StringFilter<"transaction"> | string
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    updatedAt?: DateTimeFilter<"transaction"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutPaperInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutPaperInput, ActivityLogUncheckedUpdateWithoutPaperInput>
    create: XOR<ActivityLogCreateWithoutPaperInput, ActivityLogUncheckedCreateWithoutPaperInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutPaperInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutPaperInput, ActivityLogUncheckedUpdateWithoutPaperInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutPaperInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutPaperInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    paperId?: StringNullableFilter<"ActivityLog"> | string | null
    actorId?: StringNullableFilter<"ActivityLog"> | string | null
    authorId?: StringNullableFilter<"ActivityLog"> | string | null
    activity?: EnumActivityTypeFilter<"ActivityLog"> | $Enums.ActivityType
    details?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutRelatedPaperInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutRelatedPaperInput, WalletTransactionUncheckedUpdateWithoutRelatedPaperInput>
    create: XOR<WalletTransactionCreateWithoutRelatedPaperInput, WalletTransactionUncheckedCreateWithoutRelatedPaperInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutRelatedPaperInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutRelatedPaperInput, WalletTransactionUncheckedUpdateWithoutRelatedPaperInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutRelatedPaperInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutRelatedPaperInput>
  }

  export type WalletTransactionScalarWhereInput = {
    AND?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    OR?: WalletTransactionScalarWhereInput[]
    NOT?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    employeeId?: StringFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    amount?: FloatFilter<"WalletTransaction"> | number
    notes?: StringNullableFilter<"WalletTransaction"> | string | null
    relatedPaperId?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
  }

  export type employeeUpsertWithoutPaperInput = {
    update: XOR<employeeUpdateWithoutPaperInput, employeeUncheckedUpdateWithoutPaperInput>
    create: XOR<employeeCreateWithoutPaperInput, employeeUncheckedCreateWithoutPaperInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutPaperInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutPaperInput, employeeUncheckedUpdateWithoutPaperInput>
  }

  export type employeeUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: employeeUpdateOneWithoutCreatedEmployeesNestedInput
    createdEmployees?: employeeUpdateManyWithoutCreatedByNestedInput
    status?: statusUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUncheckedUpdateManyWithoutCreatedByNestedInput
    status?: statusUncheckedUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type CopyrightUpsertWithoutPaperInput = {
    update: XOR<CopyrightUpdateWithoutPaperInput, CopyrightUncheckedUpdateWithoutPaperInput>
    create: XOR<CopyrightCreateWithoutPaperInput, CopyrightUncheckedCreateWithoutPaperInput>
    where?: CopyrightWhereInput
  }

  export type CopyrightUpdateToOneWithWhereWithoutPaperInput = {
    where?: CopyrightWhereInput
    data: XOR<CopyrightUpdateWithoutPaperInput, CopyrightUncheckedUpdateWithoutPaperInput>
  }

  export type CopyrightUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyrightStatus?: EnumCopyrightStatusFieldUpdateOperationsInput | $Enums.CopyrightStatus
    pdfKey?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopyrightUncheckedUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyrightStatus?: EnumCopyrightStatusFieldUpdateOperationsInput | $Enums.CopyrightStatus
    pdfKey?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperCreateWithoutAuthorsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutAuthorsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutAuthorsInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutAuthorsInput, paperUncheckedCreateWithoutAuthorsInput>
  }

  export type transactionCreateWithoutAuthorInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    paper: paperCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateWithoutAuthorInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    paperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionCreateOrConnectWithoutAuthorInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutAuthorInput, transactionUncheckedCreateWithoutAuthorInput>
  }

  export type transactionCreateManyAuthorInputEnvelope = {
    data: transactionCreateManyAuthorInput | transactionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutAuthorInput = {
    id?: string
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
    paper?: paperCreateNestedOneWithoutActivityLogsInput
    actor?: employeeCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityLogUncheckedCreateWithoutAuthorInput = {
    id?: string
    paperId?: string | null
    actorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutAuthorInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutAuthorInput, ActivityLogUncheckedCreateWithoutAuthorInput>
  }

  export type ActivityLogCreateManyAuthorInputEnvelope = {
    data: ActivityLogCreateManyAuthorInput | ActivityLogCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type paperUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: paperWhereUniqueInput
    update: XOR<paperUpdateWithoutAuthorsInput, paperUncheckedUpdateWithoutAuthorsInput>
    create: XOR<paperCreateWithoutAuthorsInput, paperUncheckedCreateWithoutAuthorsInput>
  }

  export type paperUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: paperWhereUniqueInput
    data: XOR<paperUpdateWithoutAuthorsInput, paperUncheckedUpdateWithoutAuthorsInput>
  }

  export type paperUpdateManyWithWhereWithoutAuthorsInput = {
    where: paperScalarWhereInput
    data: XOR<paperUpdateManyMutationInput, paperUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type paperScalarWhereInput = {
    AND?: paperScalarWhereInput | paperScalarWhereInput[]
    OR?: paperScalarWhereInput[]
    NOT?: paperScalarWhereInput | paperScalarWhereInput[]
    id?: StringFilter<"paper"> | string
    submissionId?: StringFilter<"paper"> | string
    name?: StringFilter<"paper"> | string
    keywords?: StringNullableListFilter<"paper">
    manuscriptId?: StringNullableFilter<"paper"> | string | null
    manuscriptUrl?: StringNullableFilter<"paper"> | string | null
    publishId?: StringNullableFilter<"paper"> | string | null
    publishUrl?: StringNullableFilter<"paper"> | string | null
    archiveId?: StringFilter<"paper"> | string
    editorId?: StringNullableFilter<"paper"> | string | null
    createdAt?: DateTimeFilter<"paper"> | Date | string
    updatedAt?: DateTimeFilter<"paper"> | Date | string
  }

  export type transactionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutAuthorInput, transactionUncheckedUpdateWithoutAuthorInput>
    create: XOR<transactionCreateWithoutAuthorInput, transactionUncheckedCreateWithoutAuthorInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutAuthorInput, transactionUncheckedUpdateWithoutAuthorInput>
  }

  export type transactionUpdateManyWithWhereWithoutAuthorInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutAuthorInput, ActivityLogUncheckedUpdateWithoutAuthorInput>
    create: XOR<ActivityLogCreateWithoutAuthorInput, ActivityLogUncheckedCreateWithoutAuthorInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutAuthorInput, ActivityLogUncheckedUpdateWithoutAuthorInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutAuthorInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutAuthorInput>
  }

  export type paperCreateWithoutPaperStatusesInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutPaperStatusesInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutPaperStatusesInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutPaperStatusesInput, paperUncheckedCreateWithoutPaperStatusesInput>
  }

  export type employeeCreateWithoutStatusInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: employeeCreateNestedOneWithoutCreatedEmployeesInput
    createdEmployees?: employeeCreateNestedManyWithoutCreatedByInput
    activities?: ActivityLogCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutEmployeeInput
    paper?: paperCreateNestedManyWithoutEditorInput
  }

  export type employeeUncheckedCreateWithoutStatusInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput
    paper?: paperUncheckedCreateNestedManyWithoutEditorInput
  }

  export type employeeCreateOrConnectWithoutStatusInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutStatusInput, employeeUncheckedCreateWithoutStatusInput>
  }

  export type paperUpsertWithoutPaperStatusesInput = {
    update: XOR<paperUpdateWithoutPaperStatusesInput, paperUncheckedUpdateWithoutPaperStatusesInput>
    create: XOR<paperCreateWithoutPaperStatusesInput, paperUncheckedCreateWithoutPaperStatusesInput>
    where?: paperWhereInput
  }

  export type paperUpdateToOneWithWhereWithoutPaperStatusesInput = {
    where?: paperWhereInput
    data: XOR<paperUpdateWithoutPaperStatusesInput, paperUncheckedUpdateWithoutPaperStatusesInput>
  }

  export type paperUpdateWithoutPaperStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutPaperStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type employeeUpsertWithoutStatusInput = {
    update: XOR<employeeUpdateWithoutStatusInput, employeeUncheckedUpdateWithoutStatusInput>
    create: XOR<employeeCreateWithoutStatusInput, employeeUncheckedCreateWithoutStatusInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutStatusInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutStatusInput, employeeUncheckedUpdateWithoutStatusInput>
  }

  export type employeeUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: employeeUpdateOneWithoutCreatedEmployeesNestedInput
    createdEmployees?: employeeUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutEmployeeNestedInput
    paper?: paperUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput
    paper?: paperUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type employeeCreateWithoutCreatedEmployeesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: employeeCreateNestedOneWithoutCreatedEmployeesInput
    status?: statusCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutEmployeeInput
    paper?: paperCreateNestedManyWithoutEditorInput
  }

  export type employeeUncheckedCreateWithoutCreatedEmployeesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: statusUncheckedCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput
    paper?: paperUncheckedCreateNestedManyWithoutEditorInput
  }

  export type employeeCreateOrConnectWithoutCreatedEmployeesInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutCreatedEmployeesInput, employeeUncheckedCreateWithoutCreatedEmployeesInput>
  }

  export type employeeCreateWithoutCreatedByInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeCreateNestedManyWithoutCreatedByInput
    status?: statusCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutEmployeeInput
    paper?: paperCreateNestedManyWithoutEditorInput
  }

  export type employeeUncheckedCreateWithoutCreatedByInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeUncheckedCreateNestedManyWithoutCreatedByInput
    status?: statusUncheckedCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutActorInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput
    paper?: paperUncheckedCreateNestedManyWithoutEditorInput
  }

  export type employeeCreateOrConnectWithoutCreatedByInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutCreatedByInput, employeeUncheckedCreateWithoutCreatedByInput>
  }

  export type employeeCreateManyCreatedByInputEnvelope = {
    data: employeeCreateManyCreatedByInput | employeeCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type statusCreateWithoutChangedByInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    paper: paperCreateNestedOneWithoutPaperStatusesInput
  }

  export type statusUncheckedCreateWithoutChangedByInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    paperId: string
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusCreateOrConnectWithoutChangedByInput = {
    where: statusWhereUniqueInput
    create: XOR<statusCreateWithoutChangedByInput, statusUncheckedCreateWithoutChangedByInput>
  }

  export type statusCreateManyChangedByInputEnvelope = {
    data: statusCreateManyChangedByInput | statusCreateManyChangedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutActorInput = {
    id?: string
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
    paper?: paperCreateNestedOneWithoutActivityLogsInput
    author?: authorCreateNestedOneWithoutActivityLogInput
  }

  export type ActivityLogUncheckedCreateWithoutActorInput = {
    id?: string
    paperId?: string | null
    authorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutActorInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutActorInput, ActivityLogUncheckedCreateWithoutActorInput>
  }

  export type ActivityLogCreateManyActorInputEnvelope = {
    data: ActivityLogCreateManyActorInput | ActivityLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransactionCreateWithoutEmployeeInput = {
    id?: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    createdAt?: Date | string
    relatedPaper?: paperCreateNestedOneWithoutWalletTransactionsInput
  }

  export type WalletTransactionUncheckedCreateWithoutEmployeeInput = {
    id?: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    relatedPaperId?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutEmployeeInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutEmployeeInput, WalletTransactionUncheckedCreateWithoutEmployeeInput>
  }

  export type WalletTransactionCreateManyEmployeeInputEnvelope = {
    data: WalletTransactionCreateManyEmployeeInput | WalletTransactionCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type paperCreateWithoutEditorInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutEditorInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutEditorInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutEditorInput, paperUncheckedCreateWithoutEditorInput>
  }

  export type paperCreateManyEditorInputEnvelope = {
    data: paperCreateManyEditorInput | paperCreateManyEditorInput[]
    skipDuplicates?: boolean
  }

  export type employeeUpsertWithoutCreatedEmployeesInput = {
    update: XOR<employeeUpdateWithoutCreatedEmployeesInput, employeeUncheckedUpdateWithoutCreatedEmployeesInput>
    create: XOR<employeeCreateWithoutCreatedEmployeesInput, employeeUncheckedCreateWithoutCreatedEmployeesInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutCreatedEmployeesInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutCreatedEmployeesInput, employeeUncheckedUpdateWithoutCreatedEmployeesInput>
  }

  export type employeeUpdateWithoutCreatedEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: employeeUpdateOneWithoutCreatedEmployeesNestedInput
    status?: statusUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutEmployeeNestedInput
    paper?: paperUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateWithoutCreatedEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: statusUncheckedUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput
    paper?: paperUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type employeeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: employeeWhereUniqueInput
    update: XOR<employeeUpdateWithoutCreatedByInput, employeeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<employeeCreateWithoutCreatedByInput, employeeUncheckedCreateWithoutCreatedByInput>
  }

  export type employeeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: employeeWhereUniqueInput
    data: XOR<employeeUpdateWithoutCreatedByInput, employeeUncheckedUpdateWithoutCreatedByInput>
  }

  export type employeeUpdateManyWithWhereWithoutCreatedByInput = {
    where: employeeScalarWhereInput
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[]
    OR?: employeeScalarWhereInput[]
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[]
    id?: StringFilter<"employee"> | string
    firstName?: StringFilter<"employee"> | string
    lastName?: StringNullableFilter<"employee"> | string | null
    email?: StringFilter<"employee"> | string
    password?: StringFilter<"employee"> | string
    role?: EnumEmployeeRoleFilter<"employee"> | $Enums.EmployeeRole
    specialization?: StringNullableFilter<"employee"> | string | null
    isActive?: BoolFilter<"employee"> | boolean
    createdById?: StringNullableFilter<"employee"> | string | null
    walletBalance?: FloatFilter<"employee"> | number
    createdAt?: DateTimeFilter<"employee"> | Date | string
    updatedAt?: DateTimeFilter<"employee"> | Date | string
  }

  export type statusUpsertWithWhereUniqueWithoutChangedByInput = {
    where: statusWhereUniqueInput
    update: XOR<statusUpdateWithoutChangedByInput, statusUncheckedUpdateWithoutChangedByInput>
    create: XOR<statusCreateWithoutChangedByInput, statusUncheckedCreateWithoutChangedByInput>
  }

  export type statusUpdateWithWhereUniqueWithoutChangedByInput = {
    where: statusWhereUniqueInput
    data: XOR<statusUpdateWithoutChangedByInput, statusUncheckedUpdateWithoutChangedByInput>
  }

  export type statusUpdateManyWithWhereWithoutChangedByInput = {
    where: statusScalarWhereInput
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyWithoutChangedByInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutActorInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutActorInput, ActivityLogUncheckedUpdateWithoutActorInput>
    create: XOR<ActivityLogCreateWithoutActorInput, ActivityLogUncheckedCreateWithoutActorInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutActorInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutActorInput, ActivityLogUncheckedUpdateWithoutActorInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutActorInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutActorInput>
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutEmployeeInput, WalletTransactionUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WalletTransactionCreateWithoutEmployeeInput, WalletTransactionUncheckedCreateWithoutEmployeeInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutEmployeeInput, WalletTransactionUncheckedUpdateWithoutEmployeeInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutEmployeeInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type paperUpsertWithWhereUniqueWithoutEditorInput = {
    where: paperWhereUniqueInput
    update: XOR<paperUpdateWithoutEditorInput, paperUncheckedUpdateWithoutEditorInput>
    create: XOR<paperCreateWithoutEditorInput, paperUncheckedCreateWithoutEditorInput>
  }

  export type paperUpdateWithWhereUniqueWithoutEditorInput = {
    where: paperWhereUniqueInput
    data: XOR<paperUpdateWithoutEditorInput, paperUncheckedUpdateWithoutEditorInput>
  }

  export type paperUpdateManyWithWhereWithoutEditorInput = {
    where: paperScalarWhereInput
    data: XOR<paperUpdateManyMutationInput, paperUncheckedUpdateManyWithoutEditorInput>
  }

  export type paperCreateWithoutArchiveInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutArchiveInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutArchiveInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutArchiveInput, paperUncheckedCreateWithoutArchiveInput>
  }

  export type paperCreateManyArchiveInputEnvelope = {
    data: paperCreateManyArchiveInput | paperCreateManyArchiveInput[]
    skipDuplicates?: boolean
  }

  export type paperUpsertWithWhereUniqueWithoutArchiveInput = {
    where: paperWhereUniqueInput
    update: XOR<paperUpdateWithoutArchiveInput, paperUncheckedUpdateWithoutArchiveInput>
    create: XOR<paperCreateWithoutArchiveInput, paperUncheckedCreateWithoutArchiveInput>
  }

  export type paperUpdateWithWhereUniqueWithoutArchiveInput = {
    where: paperWhereUniqueInput
    data: XOR<paperUpdateWithoutArchiveInput, paperUncheckedUpdateWithoutArchiveInput>
  }

  export type paperUpdateManyWithWhereWithoutArchiveInput = {
    where: paperScalarWhereInput
    data: XOR<paperUpdateManyMutationInput, paperUncheckedUpdateManyWithoutArchiveInput>
  }

  export type paperCreateWithoutTransactionsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutTransactionsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutTransactionsInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutTransactionsInput, paperUncheckedCreateWithoutTransactionsInput>
  }

  export type authorCreateWithoutTransactionsInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperCreateNestedManyWithoutAuthorsInput
    ActivityLog?: ActivityLogCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutTransactionsInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperUncheckedCreateNestedManyWithoutAuthorsInput
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorCreateOrConnectWithoutTransactionsInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutTransactionsInput, authorUncheckedCreateWithoutTransactionsInput>
  }

  export type paperUpsertWithoutTransactionsInput = {
    update: XOR<paperUpdateWithoutTransactionsInput, paperUncheckedUpdateWithoutTransactionsInput>
    create: XOR<paperCreateWithoutTransactionsInput, paperUncheckedCreateWithoutTransactionsInput>
    where?: paperWhereInput
  }

  export type paperUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: paperWhereInput
    data: XOR<paperUpdateWithoutTransactionsInput, paperUncheckedUpdateWithoutTransactionsInput>
  }

  export type paperUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type authorUpsertWithoutTransactionsInput = {
    update: XOR<authorUpdateWithoutTransactionsInput, authorUncheckedUpdateWithoutTransactionsInput>
    create: XOR<authorCreateWithoutTransactionsInput, authorUncheckedCreateWithoutTransactionsInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutTransactionsInput, authorUncheckedUpdateWithoutTransactionsInput>
  }

  export type authorUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUpdateManyWithoutAuthorsNestedInput
    ActivityLog?: ActivityLogUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUncheckedUpdateManyWithoutAuthorsNestedInput
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type paperCreateWithoutActivityLogsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutActivityLogsInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutActivityLogsInput, paperUncheckedCreateWithoutActivityLogsInput>
  }

  export type employeeCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: employeeCreateNestedOneWithoutCreatedEmployeesInput
    createdEmployees?: employeeCreateNestedManyWithoutCreatedByInput
    status?: statusCreateNestedManyWithoutChangedByInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutEmployeeInput
    paper?: paperCreateNestedManyWithoutEditorInput
  }

  export type employeeUncheckedCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeUncheckedCreateNestedManyWithoutCreatedByInput
    status?: statusUncheckedCreateNestedManyWithoutChangedByInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutEmployeeInput
    paper?: paperUncheckedCreateNestedManyWithoutEditorInput
  }

  export type employeeCreateOrConnectWithoutActivitiesInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutActivitiesInput, employeeUncheckedCreateWithoutActivitiesInput>
  }

  export type authorCreateWithoutActivityLogInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperCreateNestedManyWithoutAuthorsInput
    transactions?: transactionCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutActivityLogInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    organisation: string
    country: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    papers?: paperUncheckedCreateNestedManyWithoutAuthorsInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorCreateOrConnectWithoutActivityLogInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutActivityLogInput, authorUncheckedCreateWithoutActivityLogInput>
  }

  export type paperUpsertWithoutActivityLogsInput = {
    update: XOR<paperUpdateWithoutActivityLogsInput, paperUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<paperCreateWithoutActivityLogsInput, paperUncheckedCreateWithoutActivityLogsInput>
    where?: paperWhereInput
  }

  export type paperUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: paperWhereInput
    data: XOR<paperUpdateWithoutActivityLogsInput, paperUncheckedUpdateWithoutActivityLogsInput>
  }

  export type paperUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type employeeUpsertWithoutActivitiesInput = {
    update: XOR<employeeUpdateWithoutActivitiesInput, employeeUncheckedUpdateWithoutActivitiesInput>
    create: XOR<employeeCreateWithoutActivitiesInput, employeeUncheckedCreateWithoutActivitiesInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutActivitiesInput, employeeUncheckedUpdateWithoutActivitiesInput>
  }

  export type employeeUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: employeeUpdateOneWithoutCreatedEmployeesNestedInput
    createdEmployees?: employeeUpdateManyWithoutCreatedByNestedInput
    status?: statusUpdateManyWithoutChangedByNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutEmployeeNestedInput
    paper?: paperUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUncheckedUpdateManyWithoutCreatedByNestedInput
    status?: statusUncheckedUpdateManyWithoutChangedByNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput
    paper?: paperUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type authorUpsertWithoutActivityLogInput = {
    update: XOR<authorUpdateWithoutActivityLogInput, authorUncheckedUpdateWithoutActivityLogInput>
    create: XOR<authorCreateWithoutActivityLogInput, authorUncheckedCreateWithoutActivityLogInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutActivityLogInput, authorUncheckedUpdateWithoutActivityLogInput>
  }

  export type authorUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUpdateManyWithoutAuthorsNestedInput
    transactions?: transactionUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    papers?: paperUncheckedUpdateManyWithoutAuthorsNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type employeeCreateWithoutWalletTransactionsInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: employeeCreateNestedOneWithoutCreatedEmployeesInput
    createdEmployees?: employeeCreateNestedManyWithoutCreatedByInput
    status?: statusCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogCreateNestedManyWithoutActorInput
    paper?: paperCreateNestedManyWithoutEditorInput
  }

  export type employeeUncheckedCreateWithoutWalletTransactionsInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    createdById?: string | null
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEmployees?: employeeUncheckedCreateNestedManyWithoutCreatedByInput
    status?: statusUncheckedCreateNestedManyWithoutChangedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutActorInput
    paper?: paperUncheckedCreateNestedManyWithoutEditorInput
  }

  export type employeeCreateOrConnectWithoutWalletTransactionsInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutWalletTransactionsInput, employeeUncheckedCreateWithoutWalletTransactionsInput>
  }

  export type paperCreateWithoutWalletTransactionsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
    Copyright?: CopyrightCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutWalletTransactionsInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    Copyright?: CopyrightUncheckedCreateNestedOneWithoutPaperInput
  }

  export type paperCreateOrConnectWithoutWalletTransactionsInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutWalletTransactionsInput, paperUncheckedCreateWithoutWalletTransactionsInput>
  }

  export type employeeUpsertWithoutWalletTransactionsInput = {
    update: XOR<employeeUpdateWithoutWalletTransactionsInput, employeeUncheckedUpdateWithoutWalletTransactionsInput>
    create: XOR<employeeCreateWithoutWalletTransactionsInput, employeeUncheckedCreateWithoutWalletTransactionsInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutWalletTransactionsInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutWalletTransactionsInput, employeeUncheckedUpdateWithoutWalletTransactionsInput>
  }

  export type employeeUpdateWithoutWalletTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: employeeUpdateOneWithoutCreatedEmployeesNestedInput
    createdEmployees?: employeeUpdateManyWithoutCreatedByNestedInput
    status?: statusUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUpdateManyWithoutActorNestedInput
    paper?: paperUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateWithoutWalletTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUncheckedUpdateManyWithoutCreatedByNestedInput
    status?: statusUncheckedUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutActorNestedInput
    paper?: paperUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type paperUpsertWithoutWalletTransactionsInput = {
    update: XOR<paperUpdateWithoutWalletTransactionsInput, paperUncheckedUpdateWithoutWalletTransactionsInput>
    create: XOR<paperCreateWithoutWalletTransactionsInput, paperUncheckedCreateWithoutWalletTransactionsInput>
    where?: paperWhereInput
  }

  export type paperUpdateToOneWithWhereWithoutWalletTransactionsInput = {
    where?: paperWhereInput
    data: XOR<paperUpdateWithoutWalletTransactionsInput, paperUncheckedUpdateWithoutWalletTransactionsInput>
  }

  export type paperUpdateWithoutWalletTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutWalletTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type paperCreateWithoutCopyrightInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorCreateNestedManyWithoutPapersInput
    paperStatuses?: statusCreateNestedManyWithoutPaperInput
    archive: archiveCreateNestedOneWithoutPapersInput
    transactions?: transactionCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionCreateNestedManyWithoutRelatedPaperInput
    editor?: employeeCreateNestedOneWithoutPaperInput
  }

  export type paperUncheckedCreateWithoutCopyrightInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: authorUncheckedCreateNestedManyWithoutPapersInput
    paperStatuses?: statusUncheckedCreateNestedManyWithoutPaperInput
    transactions?: transactionUncheckedCreateNestedManyWithoutPaperInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutPaperInput
    walletTransactions?: WalletTransactionUncheckedCreateNestedManyWithoutRelatedPaperInput
  }

  export type paperCreateOrConnectWithoutCopyrightInput = {
    where: paperWhereUniqueInput
    create: XOR<paperCreateWithoutCopyrightInput, paperUncheckedCreateWithoutCopyrightInput>
  }

  export type paperUpsertWithoutCopyrightInput = {
    update: XOR<paperUpdateWithoutCopyrightInput, paperUncheckedUpdateWithoutCopyrightInput>
    create: XOR<paperCreateWithoutCopyrightInput, paperUncheckedCreateWithoutCopyrightInput>
    where?: paperWhereInput
  }

  export type paperUpdateToOneWithWhereWithoutCopyrightInput = {
    where?: paperWhereInput
    data: XOR<paperUpdateWithoutCopyrightInput, paperUncheckedUpdateWithoutCopyrightInput>
  }

  export type paperUpdateWithoutCopyrightInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutCopyrightInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
  }

  export type statusCreateManyPaperInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    changedById?: string | null
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionCreateManyPaperInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyPaperInput = {
    id?: string
    actorId?: string | null
    authorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionCreateManyRelatedPaperInput = {
    id?: string
    employeeId: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type authorUpdateWithoutPapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionUpdateManyWithoutAuthorNestedInput
    ActivityLog?: ActivityLogUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutPapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionUncheckedUpdateManyWithoutAuthorNestedInput
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateManyWithoutPapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: employeeUpdateOneWithoutStatusNestedInput
  }

  export type statusUncheckedUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusUncheckedUpdateManyWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: employeeUpdateOneWithoutActivitiesNestedInput
    author?: authorUpdateOneWithoutActivityLogNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUpdateWithoutRelatedPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: employeeUpdateOneRequiredWithoutWalletTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateWithoutRelatedPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutRelatedPaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateManyAuthorInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    status?: $Enums.paymentStatus
    paperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyAuthorInput = {
    id?: string
    paperId?: string | null
    actorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type paperUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateManyWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    paperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumpaymentStatusFieldUpdateOperationsInput | $Enums.paymentStatus
    paperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneWithoutActivityLogsNestedInput
    actor?: employeeUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeeCreateManyCreatedByInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    password: string
    role?: $Enums.EmployeeRole
    specialization?: string | null
    isActive?: boolean
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statusCreateManyChangedByInput = {
    id?: string
    status?: $Enums.PaperStatus
    isApproved?: boolean
    paperId: string
    comments?: statusCreatecommentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyActorInput = {
    id?: string
    paperId?: string | null
    authorId?: string | null
    activity: $Enums.ActivityType
    details?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionCreateManyEmployeeInput = {
    id?: string
    type: $Enums.WalletTransactionType
    amount: number
    notes?: string | null
    relatedPaperId?: string | null
    createdAt?: Date | string
  }

  export type paperCreateManyEditorInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    archiveId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type employeeUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUpdateManyWithoutCreatedByNestedInput
    status?: statusUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutEmployeeNestedInput
    paper?: paperUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEmployees?: employeeUncheckedUpdateManyWithoutCreatedByNestedInput
    status?: statusUncheckedUpdateManyWithoutChangedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutActorNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutEmployeeNestedInput
    paper?: paperUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type employeeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneRequiredWithoutPaperStatusesNestedInput
  }

  export type statusUncheckedUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    paperId?: StringFieldUpdateOperationsInput | string
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusUncheckedUpdateManyWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaperStatusFieldUpdateOperationsInput | $Enums.PaperStatus
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    paperId?: StringFieldUpdateOperationsInput | string
    comments?: statusUpdatecommentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paper?: paperUpdateOneWithoutActivityLogsNestedInput
    author?: authorUpdateOneWithoutActivityLogNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedPaper?: paperUpdateOneWithoutWalletTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPaperId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPaperId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    archive?: archiveUpdateOneRequiredWithoutPapersNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateManyWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    archiveId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paperCreateManyArchiveInput = {
    id?: string
    submissionId: string
    name: string
    keywords?: paperCreatekeywordsInput | string[]
    manuscriptId?: string | null
    manuscriptUrl?: string | null
    publishId?: string | null
    publishUrl?: string | null
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paperUpdateWithoutArchiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUpdateManyWithoutPaperNestedInput
    transactions?: transactionUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUpdateManyWithoutRelatedPaperNestedInput
    editor?: employeeUpdateOneWithoutPaperNestedInput
    Copyright?: CopyrightUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateWithoutArchiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: authorUncheckedUpdateManyWithoutPapersNestedInput
    paperStatuses?: statusUncheckedUpdateManyWithoutPaperNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutPaperNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutPaperNestedInput
    walletTransactions?: WalletTransactionUncheckedUpdateManyWithoutRelatedPaperNestedInput
    Copyright?: CopyrightUncheckedUpdateOneWithoutPaperNestedInput
  }

  export type paperUncheckedUpdateManyWithoutArchiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keywords?: paperUpdatekeywordsInput | string[]
    manuscriptId?: NullableStringFieldUpdateOperationsInput | string | null
    manuscriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    publishUrl?: NullableStringFieldUpdateOperationsInput | string | null
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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