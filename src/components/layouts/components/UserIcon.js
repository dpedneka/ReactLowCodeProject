// ** Custom Icon Import
import { Icon } from '@iconify/react'

const IconifyIcon = ({ icon, ...rest }) => {
  return <Icon icon={icon} fontSize='1.5rem' {...rest} />
}

const UserIcon = ({ icon, ...rest }) => {
  return <IconifyIcon icon={icon} {...rest} />
}

export default UserIcon
