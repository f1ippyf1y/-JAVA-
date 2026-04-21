import java.util.Scanner;

public class MemoryCell {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // ћассив дл€ хранени€ до трЄх чисел (null означает пустую €чейку)
        Integer[] cells = new Integer[3];
        int filled = 0; // количество зан€тых €чеек
        
        // „итаем все целые числа из входного потока
        while (scanner.hasNextInt()) {
            int num = scanner.nextInt();
            
            if (filled < 3) {
                // ≈сть пустые €чейки Ц добавл€ем в первую свободную
                cells[filled] = num;
                filled++;
            } else {
                // ¬се €чейки зан€ты Ц ищем индекс минимального числа
                int minIndex = 0;
                for (int i = 1; i < cells.length; i++) {
                    if (cells[i] < cells[minIndex]) {
                        minIndex = i;
                    }
                }
                // «амен€ем наименьшее число новым
                cells[minIndex] = num;
            }
        }
        
        // ¬ывод содержимого €чеек (только заполненные)
        for (int i = 0; i < filled; i++) {
            System.out.print(cells[i]);
            if (i < filled - 1) {
                System.out.print(" ");
            }
        }
        // ≈сли не было введено ни одного числа Ц ничего не выводим
        if (filled > 0) {
            System.out.println();
        }
        
        scanner.close();
    }
}