import { mysql } from '../../../index.test.js';
import { access, sql, sqlPS, values } from '../../baseConnection.test.js';

(async () => {
  const db = mysql.createPool(access).promise();

  {
    /** Overload: execute(sql) */
    const [results, fields] = await db.execute(sql);
    console.log(results, fields);
  }

  {
    /** Overload: execute(sql, values) */
    const [results, fields] = await db.execute(sqlPS, values);
    console.log(results, fields);
  }

  {
    /** Overload: execute(QueryOptions) I */
    const [results, fields] = await db.execute({ sql });
    console.log(results, fields);
  }

  {
    /** Overload: execute(QueryOptions) II */
    const [results, fields] = await db.execute({ sql: sqlPS, values });
    console.log(results, fields);
  }

  {
    /** Overload: execute(QueryOptions, values) */
    const [results, fields] = await db.execute({ sql: sqlPS }, values);
    console.log(results, fields);
  }

  await db.end();
})();

/** getConnection */
(async () => {
  const db = await mysql.createPool(access).promise().getConnection();

  {
    /** Overload: execute(sql) */
    const [results, fields] = await db.execute(sql);
    console.log(results, fields);
  }

  {
    /** Overload: execute(sql, values) */
    const [results, fields] = await db.execute(sqlPS, values);
    console.log(results, fields);
  }

  {
    /** Overload: execute(QueryOptions) I */
    const [results, fields] = await db.execute({ sql });
    console.log(results, fields);
  }

  {
    /** Overload: execute(QueryOptions) II */
    const [results, fields] = await db.execute({ sql: sqlPS, values });
    console.log(results, fields);
  }

  {
    /** Overload: execute(QueryOptions, values) */
    const [results, fields] = await db.execute({ sql: sqlPS }, values);
    console.log(results, fields);
  }

  await db.end();
})();
