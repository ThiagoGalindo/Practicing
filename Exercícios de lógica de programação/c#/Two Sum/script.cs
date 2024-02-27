public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        int counter1 = 0;
        int counter2 = 0;
        bool conditionMet = false;

        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = 1; j <= (nums.Length - 1); j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    counter1 = i;
                    counter2 = j;
                    conditionMet = true;
                    break;
                }
            }
            if (conditionMet == true)
            {
                break;
            }
        }
        int[] result = [counter1, counter2];
        return result;
    }
}