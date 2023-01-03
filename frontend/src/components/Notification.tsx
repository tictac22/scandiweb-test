import "@styles/notification.scss"
export const Notification = ({ productName, show }: { productName: string; show: boolean }) => {
	return (
		<div className={`notification ${show && "notification--show"}`}>
			<p>Product {productName} was added </p>
			<img src="/complete.svg" />
		</div>
	)
}
