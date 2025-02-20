import { useEffect, useState } from 'react'
import EmailIcon from '../../assets/icons/socials/EmailIcon'
import GitHubIcon from '../../assets/icons/socials/GitHubIcon'
import HandshakeIcon from '../../assets/icons/socials/HandshakeIcon'
import LinkedInIcon from '../../assets/icons/socials/LinkedInIcon'
import Section from '../Section'
import SocialButton from '../SocialButton'
import { send, init } from '@emailjs/browser'
import { toast } from 'react-toastify'

const LINKEDIN_LINK = 'https://www.linkedin.com/in/rahulgupta96/'
const HANDSHAKE_LINK = 'https://csus.joinhandshake.com/profiles/g6hf7y'
const GITHUB_LINK = 'https://github.com/rahulio96'
const EMAIL_LINK = 'mailto:rahulgithub96@gmail.com'

const textInputStyle = 'text-[var(--white)] text-xl sm:text-2xl bg-[var(--darkgrey)] p-4'

const emailToast = { isLoading: false, closeButton: true, autoClose: 4000 }

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [subject, setSubject] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  // Initialize emailjs
  useEffect(() => {
    init({
      publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
      blockHeadless: true,
    })
  }, [])

  // Regex for emails
  useEffect(() => {
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      .test(email) ? setIsValidEmail(true) : setIsValidEmail(false);
  }, [email])

  const sendEmail = async (e: any) => {
    setIsClicked(true)
    e.preventDefault() // Prevent refresh
    if (!name || !email || !subject) {
      toast('Please fill in all fields', { type: 'error', ...emailToast })
      return
    } else if (!isValidEmail) {
      toast('Please add a valid email', { type: 'error', ...emailToast })
      return
    }
    const id = toast.loading("Sending message...")
    try {
      const response = await send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        { from_name: name, from_email: email, message: subject },
      )
      console.log('Email sent successfully:', response)
      toast.update(id, { render: "Message sent", type: "success", ...emailToast });
    } catch (error) {
      console.error('Failed to send email:', error)
      toast.update(id, { render: "An error occurred", type: "error", ...emailToast });
    }
    setName('')
    setEmail('')
    setSubject('')
  }

  return (
    <Section id={'Contact'} title={'Contact'}>
      <p className='text-[var(--white)] text-xl sm:text-3xl'>
        Got a question or want to collaborate? Drop your details, and I'll be in touch soon!
      </p>
      <div className='flex flex-col min-[69.375rem]:flex-row min-[69.375rem]:justify-between min-[69.375rem]:items-start
        justify-center items-center w-full mt-10'>
        <form className='flex flex-col space-y-5 w-full min-[69.375rem]:w-[50%]'>
          <input
            type="text"
            className={`${textInputStyle} ${(isClicked && !name) && 'border-2 border-[var(--white)]'}`}
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className={`${textInputStyle} ${(isClicked && !email) && 'border-2 border-[var(--white)]'}`}
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={`${textInputStyle} ${(isClicked && !subject) && 'border-2 border-[var(--white)]'} h-[15rem]`}
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <button
            className='px-10 py-2 sm:px-15 sm:py-3 border-2 sm:border-3 w-fit
             border-[var(--white)] text-[var(--white)] font-medium text-xl sm:text-3xl 
             cursor-pointer hover:bg-[var(--white)] hover:text-[var(--black)] transition duration-400 ease-in-out'
            onClick={sendEmail}
          >
            Send
          </button>
        </form>

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