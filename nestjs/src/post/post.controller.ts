import { Controller, Req, UseGuards, Post, Body } from '@nestjs/common';
import { LoginGuard } from '../login/login.guard';
import { CurrentUser } from '../user/decorators/current-user.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';
import { User } from '../user/user.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseGuards(LoginGuard)
  async post(
    @Body() body: CreatePostDto,
    @CurrentUser() user: User,
  ): Promise<PostEntity> {
    const post = await this.postService.create(body, user);
    return post;
  }
}
