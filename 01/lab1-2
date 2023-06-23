public class MatrixPrint {
    public static void main(String[] args) {
        int[][] matrix = {
                {0, 2, 3, 4, 0},
                {6, 0, 8, 0, 10},
                {11, 12, 0, 14, 15},
                {16, 0, 18, 0, 20},
                {0, 22, 23, 24, 0}
        };

        // Виведення матриці на екран
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    System.out.printf("%-3s", " *");
                } else {
                    String element = (matrix[i][j] < 10) ? " " + matrix[i][j] : String.valueOf(matrix[i][j]);
                    System.out.printf("%-3s", element);
                }
            }
            System.out.println(); // Перехід на новий рядок
        }
    }
}
