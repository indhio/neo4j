import { Controller, Get } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';

@Controller('neo4j')
export class Neo4jController {

  constructor(private readonly retriveNodes: Neo4jService) { }


  @Get()
  async findAll() {
    // return 'Get all Node Labels';
    console.log('retriving nodes as per given query in findAll() method.');
    //return ‘Get all Node Labels’;
    return this.retriveNodes.findAll();
  }

}
