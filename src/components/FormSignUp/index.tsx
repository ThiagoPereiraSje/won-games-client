import Link from 'next/link'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form>
        <TextField name="name" placeholder="Name" icon={<AccountCircle />} />
        <TextField name="email" placeholder="Email" icon={<Email />} />
        <TextField name="password" placeholder="Password" icon={<Lock />} />
        <TextField
          name="confirmpassword"
          placeholder="Confirm password"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Sign up now
        </Button>
        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
