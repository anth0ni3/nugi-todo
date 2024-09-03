import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {
  ActionFunctionArgs,
  replace,
  useNavigation,
  useSubmit,
} from 'react-router-dom';

import {LoginDTO, loginDTO} from '~/shema/auth';
import {Button} from '~/ui/button';
import {Input} from '~/ui/input';
import {wait} from '~/utils/wait';

export async function action({request}: ActionFunctionArgs) {
  const formData = (await request.json()) as LoginDTO;
  const email = formData.email;
  const password = formData.password;
  await wait(5000);
  localStorage.setItem('sessionId', email + password);
  return replace('/');
}

function LoginRoute() {
  const navigation = useNavigation();
  const submit = useSubmit();

  const {register, handleSubmit, formState} = useForm<LoginDTO>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginDTO),
  });

  return (
    <div className=" space-y-5">
      <section>
        <h3 className="text-title-large">Login</h3>
        <p className="text-body-large">Sign in to your account</p>
      </section>
      <form
        onSubmit={handleSubmit(data => {
          submit(data, {
            method: 'post',
            encType: 'application/json',
          });
        })}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            {...register('email')}
          />
          <p className="text-body-small text-fgColor-danger">
            {formState.errors.email?.message}
          </p>
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            {...register('password')}
          />
          <p className="text-body-small text-fgColor-danger">
            {formState.errors.password?.message}
          </p>
        </div>
        <Button
          variant="primary"
          isLoading={navigation.state !== 'idle'}
          disabled={!formState.isValid}
          className="w-full"
          size="lg"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export const Component = LoginRoute;
