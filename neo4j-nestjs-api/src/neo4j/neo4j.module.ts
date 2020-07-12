import { Module } from '@nestjs/common';
import neo4j from "neo4j-driver";
import { Neo4jController } from './neo4j.controller';
import { Neo4jService } from './neo4j.service';

export const neo4jProvider = {
  provide: "Neo4j",
  useFactory: () => neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "graphql-neo4j"))
};

@Module({
  exports: ['Neo4j'],
  imports: [],
  controllers: [Neo4jController],
  providers: [neo4jProvider, Neo4jService]
})
export class Neo4jModule { }
