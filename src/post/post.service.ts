import { Injectable } from '@nestjs/common';
import { Post } from 'src/post/entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(post: Post, updatePostDto: UpdatePostDto) {
    return `This action updates a #${post.id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
