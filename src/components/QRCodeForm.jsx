export default function QRCodeForm() {
  const formLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform'

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4">
        Scan to Open Form
      </h2>
      <a
        href={formLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(formLink)}`}
          alt="QR Code"
          className="w-[300px] h-[300px] rounded-xl shadow-lg"
        />
      </a>

      <p className="mt-4 text-gray-600">
        Scan this QR code to open the Google Form
      </p>
    </div>
  )
}