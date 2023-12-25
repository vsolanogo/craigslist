import { Module } from '@nestjs/common';
import { SessionModule } from './session/session.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './session/session.entity';
import { User } from './user/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.entity';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/post.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          database: config.get<string>('DB_NAME'),
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          entities: [User, Session, Role, PostEntity],
          synchronize: true,
        };
      },
    }),
    SessionModule,
    UserModule,
    LoginModule,
    RegisterModule,
    RoleModule,
    PostModule,
  ],
})
export class AppModule {}
