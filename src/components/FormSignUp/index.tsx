import Link from 'next/link'
import { Email, Lock, AccountCircle } from 'styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

const FormSignUp = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField placeholder="Name" icon={<AccountCircle />} />
        <TextField placeholder="Email" icon={<Email />} />
        <TextField placeholder="Password" icon={<Lock />} />
        <TextField placeholder="Confirm password" icon={<Lock />} />
        <Button size="large" fullWidth>
          Sign up now
        </Button>
        <S.FormLink>
          Already have an account?{' '}
          <Link href="#">
            <a>Sign in</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}

export default FormSignUp
