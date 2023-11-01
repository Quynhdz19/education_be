import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T> {
  constructor(private readonly configService: ConfigService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const metadata = data.metadata;
        delete data.metadata;
        return {
          code: 'ok',
          data: data.data || data,
          metadata,
        };
      }),
    );
  }
}
