import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'
import * as S from './styles'

const FormProfile = () => {
  return (
    <>
      <Heading lineBottom color="black" size="small">
        My Profile
      </Heading>
      <S.Form>
        <TextField
          name="name"
          label="Name"
          placeholder="Name"
          initialValue="John Doe"
        />
        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="E-mail"
          initialValue="johndoe@gmail.com"
          disabled
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Type your password"
        />
        <TextField
          type="password"
          name="new_passord"
          label="New Password"
          placeholder="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </>
  )
}

export default FormProfile
