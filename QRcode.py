import qrcode
from PIL import Image
data = '1201920921'
qr = qrcode.QRCode(
    version = 2,
    error_correction=qrcode.constants.ERROR_CORRECT_Q,
    box_size=10,
    border=0
)

qr.add_data(data)
qr.make(fit = True)
img = qr.make_image(fill_color = (241,123,245))
#img.show()
img.save('D:/临时出校二维码/img/' + data + '.png')
