//
// Imports
//

import { z } from "zod";

import { DatabaseConfigurationSchema } from "./DatabaseConfiguration.js";
import { S3ConfigurationSchema } from "./S3Configuration.js";

//
// Type
//

export type Configuration = z.infer<typeof ConfigurationSchema>;

export const ConfigurationSchema = z.object(
	{
		databaseConfiguration: DatabaseConfigurationSchema,

		defaultInclusion: z.enum([ "exclude", "include" ]).default("include"),

		mysqlDumpPath: z.string(),

		outputPath: z.string(),

		s3: S3ConfigurationSchema,

		tables: z.array(z.string()).default([]),
	});