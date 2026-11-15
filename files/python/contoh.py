"""Contoh file Python. Ganti dengan file .py hasil belajar Anda."""


def rata_rata(angka):
    """Menghitung rata-rata dari sebuah list angka."""
    return sum(angka) / len(angka)


if __name__ == "__main__":
    nilai = [80, 90, 75, 85]
    print("Rata-rata:", rata_rata(nilai))
