def is_multiple_of_3_or_5?(i)
  i % 3 == 0 || i % 5 == 0
end

p (0..999).inject { |sum, n| is_multiple_of_3_or_5?(n) ? n + sum : sum }

