import { WritableStore } from './WritableStore'
import { v4 as uuidv4 } from 'uuid'

export enum AlertType {
	INFO = 'info',
	SUCCESS = 'success',
	ERROR = 'error',
	WARNING = 'warning',
	INACTIVE = 'inactive',
	BUTTON_PRIMARY_CAPTION = 'button-primary-caption'
}

export type ActionType = {
	text: string
	actionCall: () => void
}

export class Alert {
	public readonly id
	public readonly type: AlertType
	public readonly message: string
	public readonly action: ActionType | null

	constructor(type: AlertType, message: string, action = null) {
		this.id = uuidv4()
		this.type = type
		this.message = message
		this.action = action
	}
}

export class AlertStore extends WritableStore<Alert[]> {
	constructor() {
		super([])
	}

	public push(
		type = AlertType.INFO,
		message: string,
		action: ActionType | null = null,
		timeout: number | null = 3000
	) {
		this.update((currentAlerts) => {
			const newAlert = new Alert(type, message, action)
			currentAlerts.push(newAlert)

			if (timeout) {
				setTimeout(() => {
					this.remove(newAlert.id)
				}, timeout)
			}

			return currentAlerts
		})
	}

	public remove(id) {
		this.update((currentAlerts) => {
			const alertToRemoveIndex = currentAlerts.findIndex((alert) => alert.id == id)
			// in case user has not removed it by hand.
			if (alertToRemoveIndex !== -1) currentAlerts.splice(alertToRemoveIndex, 1)
			return currentAlerts
		})
	}

	public clear() {
		this.set([])
	}
}

export const alerts = new AlertStore()
