#include <iostream>
#include <fstream>
#include <string>
#include <yaml-cpp/yaml.h> 

void readConfig(const std::string& filePath) {
    try {
        YAML::Node config = YAML::LoadFile(filePath);

        std::cout << "Configuration Settings:\n";
        std::cout << "Name: " << config["name"].as<std::string>() << "\n";
        std::cout << "Version: " << config["version"].as<float>() << "\n";

        auto items = config["items"];
        std::cout << "Items:\n";
        for (const auto& item : items) {
            std::cout << "- " << item.as<std::string>() << "\n";
        }

        auto nested = config["config"]["nested"];
        std::cout << "Nested Config:\n";
        std::cout << "  Inner Key: " << nested["inner_key"].as<std::string>() << "\n";
    } catch (const std::exception& e) {
        std::cerr << "Error reading configuration: " << e.what() << "\n";
    }
}

int main() {
    std::string filePath = "config.yaml";

    std::ifstream file(filePath);
    if (!file) {
        std::cerr << "Configuration file not found: " << filePath << "\n";
        return 1;
    }

    readConfig(filePath);
    return 0;
}
