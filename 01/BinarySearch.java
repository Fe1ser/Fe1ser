public class BinarySearch {

    public static void main(String[] args) {

        int data[] = { 3, 6, 7, 10, 34, 56, 60 };
        int numberToFind = 10;

        int index = binarySearch(data, numberToFind);

        if (index != -1) {
            System.out.println( +index );
        } else {
            System.out.println("-1");
        }
    }

    public static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (array[mid] == target) {
                return mid; // Знайдено
            } else if (array[mid] < target) {
                left = mid + 1; // Шукаємо у правій половині
            } else {
                right = mid - 1; // Шукаємо у лівій половині
            }
        }

        return -1; // Не знайдено
    }
}
