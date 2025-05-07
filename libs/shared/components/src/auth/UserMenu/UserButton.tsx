import {
  Box,
  Button,
  Hidden,
  Inline,
  UserAvatar,
} from '@island.is/island-ui/core'
import { useLocale } from '@island.is/localization'
import { useUserInfo } from '@island.is/react-spa/bff'
import { userMessages } from '@island.is/shared/translations'
import { checkDelegation } from '@island.is/shared/utils'
import * as styles from './UserMenu.css'

interface UserButtonProps {
  small: boolean
  onClick(): void
  iconOnlyMobile?: boolean
  userMenuOpen?: boolean
}

export const UserButton = ({
  onClick,
  small,
  iconOnlyMobile = false,
  userMenuOpen,
}: UserButtonProps) => {
  const user = useUserInfo()
  const isDelegation = checkDelegation(user)
  const { profile } = user
  const { formatMessage } = useLocale()

  return (
    <>
      <Hidden above="sm">
        {small ? (
          <Box className={styles.smallAvatar}>
            <UserAvatar
              isDelegation={isDelegation}
              username={iconOnlyMobile ? undefined : profile.name}
              onClick={onClick}
              aria-label={formatMessage(userMessages.userButtonAria)}
              dataTestid="user-menu"
            />
          </Box>
        ) : (
          <Button
            variant="utility"
            colorScheme={isDelegation ? 'primary' : 'white'}
            onClick={onClick}
            icon={userMenuOpen ? 'close' : isDelegation ? 'people' : 'person'}
            iconType="outline"
            aria-label={formatMessage(userMessages.userButtonAria)}
            data-testid="user-menu"
          >
            {!iconOnlyMobile && (
              <div className={styles.resetButtonPadding}>
                <Inline space={1} alignY="center">
                  {profile.name.split(' ')[0]}
                </Inline>
              </div>
            )}
          </Button>
        )}
      </Hidden>
      <Hidden below="md">
        <Button
          variant="utility"
          colorScheme={isDelegation ? 'primary' : 'white'}
          onClick={onClick}
          icon="chevronDown"
          aria-label={formatMessage(userMessages.userButtonAria)}
          data-testid="user-menu"
        >
          <div translate="no" className={styles.resetButtonPadding}>
            {isDelegation ? (
              <>
                <div className={styles.delegationName}>{profile.name}</div>
                {profile?.actor?.name && (
                  <div className={styles.actorName}>{profile.actor.name}</div>
                )}
              </>
            ) : (
              'Jökull Þórðarson'
            )}
          </div>
        </Button>
      </Hidden>
    </>
  )
}
