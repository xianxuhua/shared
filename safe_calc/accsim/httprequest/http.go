package httprequest

import (
	"io"
	"net/http"
)

func Get(url string) ([]byte, error) {
	resp, err := http.Get(url)
	defer resp.Body.Close()
	if err != nil {
		return nil, err
	}

	all, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	return all, nil
}
