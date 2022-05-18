import Link from 'next/link'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder="Name" icon={<AccountCircle />} />
        <TextField placeholder="Email" icon={<Email />} />
        <TextField placeholder="Password" icon={<Lock />} />
        <TextField placeholder="Confirm password" icon={<Lock />} />
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
