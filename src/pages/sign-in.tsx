import Checkbox from 'components/Checkbox'
import CheckboxSvg from 'components/CheckboxSvg'
// import FormSignIn from 'components/FormSignIn'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Sign in">
      {/* <FormSignIn /> */}

      <CheckboxSvg label="Sara Checkbox" labelFor="sara-checkbox" />

      <Checkbox
        label="Willian Checkbox"
        labelFor="willian-checkbox"
        labelColor="black"
      />
    </Auth>
  )
}
