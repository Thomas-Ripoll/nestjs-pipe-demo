import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostEntity } from 'src/post/entities/post.entity';
import { EntityConverterPipe } from 'src/app.entityConverter.pipe';
import { EntityOwnerValidationPipe } from 'src/app.entityOwnerValidation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService
    ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', new EntityConverterPipe(PostEntity.name), EntityOwnerValidationPipe ) post: PostEntity) {
    return post;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id', new EntityConverterPipe(PostEntity.name), EntityOwnerValidationPipe ) post: PostEntity, 
    @Body() updatePostDto: UpdatePostDto
  ) {
    return this.postService.update(post, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
