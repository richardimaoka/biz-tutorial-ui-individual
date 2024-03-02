package jsonio

import (
	"encoding/json"
	"fmt"
	"os"
)

func Read(filePath string, v interface{}) error {
	jsonBytes, err := os.ReadFile(filePath)
	if err != nil {
		return fmt.Errorf("failed to read file = '%s', %s", filePath, err)
	}

	err = json.Unmarshal(jsonBytes, v)
	if err != nil {
		return fmt.Errorf("failed to unmarshal file = '%s', %s", filePath, err)
	}

	return nil
}
