import React from "react";
import Map from "./Map";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error en Map:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Error al cargar el mapa</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="text-sm text-green-700 hover:text-green-800"
            >
              Reintentar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function MapWrapper(props) {
  return (
    <ErrorBoundary>
      <Map {...props} />
    </ErrorBoundary>
  );
}

