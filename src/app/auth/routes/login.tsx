import {Button} from '~/ui/button';
import {Input} from '~/ui/input';

function LoginRoute() {
  return (
    <div className="space-y-5">
      <section>
        <h3 className="text-title-large">Login</h3>
        <p className="text-body-large">Sign in to your account</p>
      </section>
      <section className="space-y-4">
        <Input type="email" placeholder="Email" className="w-full" />
        <Input type="password" placeholder="Password" className="w-full" />
        <Button variant="primary" className="w-full" size="lg">
          Login
        </Button>
      </section>
    </div>
  );
}

export const Component = LoginRoute;
