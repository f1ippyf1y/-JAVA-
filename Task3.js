import java.util.Scanner;

public class StickGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();
        scanner.close();

        long tanyaScore = 0;
        boolean tanyaTurn = true; // Первый ход у Тани

        while (n > 0) {
            long take;
            if (n % 2 == 0) {
                // Чётное: можно взять 1 или n/2, берём максимум
                take = Math.max(1, n / 2);
            } else {
                // Нечётное: только 1
                take = 1;
            }

            if (tanyaTurn) {
                tanyaScore += take;
            }

            n -= take;
            tanyaTurn = !tanyaTurn;
        }

        System.out.println(tanyaScore);
    }
}