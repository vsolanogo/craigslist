import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './session.entity';
import { User } from '../user/user.entity';
import { SessionService } from './session.service';

@Module({
  imports: [TypeOrmModule.forFeature([Session, User])],
  providers: [SessionService],
})
export class SessionModule {}
