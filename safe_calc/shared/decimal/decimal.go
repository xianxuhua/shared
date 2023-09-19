package decimal

import (
	"fmt"
	"strconv"
)

// SaveDecimalBit 保留小数点位数
func SaveDecimalBit(value float64, bit int32) float32 {
	b := fmt.Sprintf("%v", bit)
	value, _ = strconv.ParseFloat(fmt.Sprintf("%."+b+"f", value), 32)
	return float32(value)
}
