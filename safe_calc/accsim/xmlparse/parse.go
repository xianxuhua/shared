package xmlparse

import (
	"encoding/json"
	xj "github.com/basgys/goxml2json"
	"strconv"
	"strings"
)

func ConvertToFloat(xml string) (float32, error) {
	reader := strings.NewReader(xml)
	res, err := xj.Convert(reader)
	if err != nil {
		return 0, err
	}
	var r FloatRes
	err = json.Unmarshal([]byte(res.String()), &r)
	if err != nil {
		return 0, err
	}

	f, err := strconv.ParseFloat(strings.TrimSpace(r.Float.Content), 32)
	if err != nil {
		return 0, err
	}
	return float32(f), nil
}

type FloatRes struct {
	Float struct {
		Content string `json:"#content"`
	} `json:"float"`
}
