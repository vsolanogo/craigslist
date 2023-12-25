import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../user/user.entity';
import { validate } from 'class-validator';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async create(
    createPostDto: CreatePostDto,
    currentUser: User,
  ): Promise<PostEntity> {
    const newPost = new PostEntity();
    newPost.author = currentUser;
    newPost.price = createPostDto.price;
    newPost.title = createPostDto.title;
    newPost.description = createPostDto.description;
    newPost.latitude = createPostDto.latitude;
    newPost.longitude = createPostDto.longitude;

    const errors = await validate(newPost);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    } else {
      return this.postRepository.save(newPost);
    }
  }
}
