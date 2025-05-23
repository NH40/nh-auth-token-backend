import { isDev } from '@/utils/is-dev.util'
import { MailerOptions } from '@nestjs-modules/mailer'
import { ConfigService } from '@nestjs/config'

export const getMailerConfig = async (
	configService: ConfigService
): Promise<MailerOptions> => ({
	transport: {
		host: configService.get('SMTP_SERVER'),
		port: isDev(configService) ? 25 : 25,
		secure: !isDev(configService),
		auth: {
			user: configService.get('SMTP_LOGIN'),
			pass: configService.get('SMTP_PASSWORD'),
		},
	},
	defaults: {
		from: '"htmllessons" <no-reply@htmllessons.ru>',
	},
})
