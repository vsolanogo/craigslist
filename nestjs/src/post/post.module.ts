import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';
import { User } from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginGuard } from '../login/login.guard';
import { SessionService } from '../session/session.service';
import { Session } from '../session/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, User, Session])],
  controllers: [PostController],
  providers: [PostService, LoginGuard, SessionService],
})
export class PostModule {}
