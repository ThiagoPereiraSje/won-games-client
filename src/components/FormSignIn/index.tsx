import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'
import TextField from 'components/TextField'
import Button from 'components/Button'
import * as S from './styles'

const FormSignIn = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField
          aria-label="email textfield"
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />

        <TextField
          aria-label="password textfield"
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button size="large" fullWidth>
          Sign in now
        </Button>

        <S.FormLink>
          Don’t have an account?{' '}
          <Link href="#">
            <a>Sign up</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}

export default FormSignIn
