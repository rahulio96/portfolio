import EmailIcon from '../../assets/icons/socials/EmailIcon'
import GitHubIcon from '../../assets/icons/socials/GitHubIcon'
import HandshakeIcon from '../../assets/icons/socials/HandshakeIcon'
import LinkedInIcon from '../../assets/icons/socials/LinkedInIcon'
import { ExternalLink } from '../Buttons'
import Section from '../Section'
import SocialButton from '../SocialButton'

const LINKEDIN_LINK = 'https://www.linkedin.com/in/rahulgupta96/'
const HANDSHAKE_LINK = 'https://csus.joinhandshake.com/profiles/g6hf7y'
const GITHUB_LINK = 'https://github.com/rahulio96'
const EMAIL_LINK = 'mailto:rahulgithub96@gmail.com'

const textInputStyle = 'text-[var(--white)] text-xl sm:text-2xl bg-[var(--darkgrey)] p-4'

const Contact = () => {
  return (
    <Section id={'Contact'} title={'Contact'}>
      <p className='text-[var(--white)] text-xl sm:text-3xl'>
        Got a question or want to collaborate? Drop your details, and I'll be in touch soon!
      </p>
      <div className='flex flex-col min-[69.375rem]:flex-row min-[69.375rem]:justify-between min-[69.375rem]:items-start
        justify-center items-center w-full mt-10'>
        <div className='flex flex-col space-y-5 w-full min-[69.375rem]:w-[50%]'>
          <input className={textInputStyle} placeholder='Name'/>
          <input className={textInputStyle} placeholder='Email'/>
          <textarea className={`${textInputStyle} h-[15rem]`} placeholder='Subject'/>
          <ExternalLink text='Send' link='mailto:' color={'white'} width={'w-[10rem]'} />
        </div>

        <div className='grid grid-cols-2 grid-rows-2 mt-15 gap-[1rem] min-[29.063rem]:mt-10 min-[69.375rem]:mt-0
          min-[29.063rem]:gap-[5rem] min-[69.375rem]:gap-[2rem] min-[79.688rem]:gap-[4rem]'>
          <SocialButton link={LINKEDIN_LINK}>
            <LinkedInIcon />
          </SocialButton>

          <SocialButton link={HANDSHAKE_LINK}>
            <HandshakeIcon />
          </SocialButton>

          <SocialButton link={GITHUB_LINK}>
            <GitHubIcon />
          </SocialButton>

          <SocialButton link={EMAIL_LINK}>
            <EmailIcon />
          </SocialButton>
        </div>

      </div>
    </Section>
  )
}

export default Contact