import {
  randEmail,
  randPhoneNumber,
  randFirstName,
  randLastName,
  randUserName,
  randPassword,
} from '@ngneat/falso';
import { RegisterDto } from './dto/user-register.dto';

export const generateRandomRegisterDto = (): RegisterDto => ({
  email: randEmail(),
  password: randPassword(),
  nickName: randUserName(),
  firstName: randFirstName(),
  lastName: randLastName(),
  phoneNumber: randPhoneNumber(),
});
